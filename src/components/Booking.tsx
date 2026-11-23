import { useMemo, useState, type FormEvent } from "react";
import { CLINIC, SERVICES, telLink, whatsappLink } from "@/config/site";
import { bookingMessage, submitBooking, type BookingFormData } from "@/lib/submit";
import {
  AlertIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  PhoneIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Status = "idle" | "submitting" | "submitted" | "handed_off" | "error";

type Errors = Partial<Record<keyof BookingFormData, string>>;

const EMPTY: BookingFormData = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  service: "",
  message: "",
};

const PHONE_PATTERN = /^(?:\+?254|0)[0-9]{8,9}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

const buildTimeSlots = () => {
  const slots: string[] = [];
  for (let minutes = 8 * 60; minutes <= 19 * 60 + 30; minutes += 30) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    const suffix = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    slots.push(`${hour12}:${String(m).padStart(2, "0")} ${suffix}`);
  }
  return slots;
};

const todayISO = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60 * 1000).toISOString().slice(0, 10);
};

export default function Booking() {
  const [form, setForm] = useState<BookingFormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const timeSlots = useMemo(buildTimeSlots, []);

  const update = (key: keyof BookingFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const validate = (): Errors => {
    const next: Errors = {};

    if (!form.name.trim()) next.name = "Please enter your full name.";
    else if (form.name.trim().length < 2) next.name = "Please enter at least two characters.";

    const phone = form.phone.replace(/[\s()-]/g, "");
    if (!phone) next.phone = "Please enter your phone number.";
    else if (!PHONE_PATTERN.test(phone))
      next.phone = "Enter a valid Kenyan number, e.g. 0732 430830 or +254732430830.";

    if (form.email.trim() && !EMAIL_PATTERN.test(form.email.trim()))
      next.email = "Please enter a valid email address or leave the field blank.";

    if (!form.date) next.date = "Please choose a preferred date.";
    else if (form.date < todayISO()) next.date = "Please choose a date that is not in the past.";

    if (!form.time) next.time = "Please choose a preferred time.";
    if (!form.service) next.service = "Please select the service you need.";

    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setStatus("error");
      setErrorMessage("Please correct the highlighted fields before sending your request.");
      const firstKey = Object.keys(validation)[0];
      document.getElementById(`booking-${firstKey}`)?.focus();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const outcome = await submitBooking(form);

    if (outcome.status === "submitted") {
      setStatus("submitted");
      return;
    }
    if (outcome.status === "handed_off") {
      setStatus("handed_off");
      return;
    }
    setStatus("error");
    setErrorMessage(outcome.message);
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setErrorMessage("");
    setStatus("idle");
  };

  return (
    <section id="booking" className="bg-pink py-16 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left column */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Appointments"
            title="Book Your Dental Appointment"
            description="Tell us when you would like to come in and what you need help with. Our team will call you to confirm your slot."
          />

          <Reveal delay={120}>
            <ul className="mt-9 space-y-4">
              {[
                {
                  icon: <CalendarIcon className="h-5 w-5" />,
                  title: "Choose your date and time",
                  text: "Pick from the times we are open — every day of the week.",
                },
                {
                  icon: <PhoneIcon className="h-5 w-5" />,
                  title: "We confirm by phone",
                  text: "A quick call to confirm your appointment and answer any questions.",
                },
                {
                  icon: <ShieldIcon className="h-5 w-5" />,
                  title: "Your details stay private",
                  text: "Your information is only used to arrange and manage your care.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-tint text-accent">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-display text-[0.98rem] font-semibold text-brand">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={170}>
            <div className="mt-9 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row">
              <a
                href={whatsappLink(
                  `Hello ${CLINIC.name}, I would like to book a dental appointment. Please let me know the next available slot.`,
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-accent"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <a href={telLink} className="btn btn-outline">
                <PhoneIcon className="h-4 w-4" />
                {CLINIC.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal delay={80}>
          <div className="rounded-[26px] bg-white p-6 shadow-lift sm:p-8 lg:p-10">
            {status === "submitted" ? (
              <div className="py-6 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-tint text-accent">
                  <CheckCircleIcon className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-[1.45rem] font-bold text-brand">
                  Appointment request sent
                </h3>
                <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">
                  Thank you, {form.name.split(" ")[0]}. Your request for{" "}
                  <span className="font-semibold text-brand">{form.service}</span> on{" "}
                  <span className="font-semibold text-brand">{form.date}</span> at{" "}
                  <span className="font-semibold text-brand">{form.time}</span> has been received.
                  Our team will call you on {form.phone} to confirm the exact time.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href={telLink} className="btn btn-primary">
                    <PhoneIcon className="h-4 w-4" />
                    Call the clinic
                  </a>
                  <button type="button" onClick={reset} className="btn btn-outline">
                    Book another appointment
                  </button>
                </div>
              </div>
            ) : status === "handed_off" ? (
              <div className="py-6 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-highlight-tint text-highlight-deep">
                  <WhatsAppIcon className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-[1.45rem] font-bold text-brand">
                  One last step on WhatsApp
                </h3>
                <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">
                  Your booking details have been written into a WhatsApp message. Open WhatsApp
                  and press <span className="font-semibold text-brand">Send</span> so our team
                  receives the request and can confirm your appointment.
                </p>
                <div className="mt-6 rounded-2xl border border-line bg-blush p-5 text-left">
                  <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand">
                    Message preview
                  </p>
                  <pre className="mt-2.5 whitespace-pre-wrap font-sans text-[0.86rem] leading-relaxed text-muted">
                    {bookingMessage(form)}
                  </pre>
                </div>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={whatsappLink(bookingMessage(form))}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-accent"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Reopen WhatsApp
                  </a>
                  <a href={telLink} className="btn btn-outline">
                    <PhoneIcon className="h-4 w-4" />
                    Call instead
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[1.3rem] font-bold text-brand">
                      Appointment request
                    </h3>
                    <p className="mt-1 text-[0.88rem] text-muted">
                      Fields marked with * are required.
                    </p>
                  </div>
                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-accent-tint px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent sm:inline-flex">
                    <ClockIcon className="h-3.5 w-3.5" />
                    Open today
                  </span>
                </div>

                {status === "error" && errorMessage ? (
                  <div
                    role="alert"
                    className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5"
                  >
                    <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <p className="text-[0.88rem] leading-relaxed text-red-700">{errorMessage}</p>
                  </div>
                ) : null}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="booking-name">
                      Patient full name *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      className="field-control"
                      placeholder="e.g. Amina Wanjiru"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "booking-name-error" : undefined}
                      autoComplete="name"
                    />
                    {errors.name ? (
                      <p id="booking-name-error" className="mt-1.5 text-[0.8rem] text-red-600">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="field-label" htmlFor="booking-phone">
                      Phone number *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      inputMode="tel"
                      className="field-control"
                      placeholder="07XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "booking-phone-error" : undefined}
                      autoComplete="tel"
                    />
                    {errors.phone ? (
                      <p id="booking-phone-error" className="mt-1.5 text-[0.8rem] text-red-600">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="field-label" htmlFor="booking-email">
                      Email address <span className="font-normal normal-case">(optional)</span>
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      className="field-control"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "booking-email-error" : undefined}
                      autoComplete="email"
                    />
                    {errors.email ? (
                      <p id="booking-email-error" className="mt-1.5 text-[0.8rem] text-red-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="field-label" htmlFor="booking-date">
                      Preferred date *
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      min={todayISO()}
                      className="field-control"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={errors.date ? "booking-date-error" : undefined}
                    />
                    {errors.date ? (
                      <p id="booking-date-error" className="mt-1.5 text-[0.8rem] text-red-600">
                        {errors.date}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="field-label" htmlFor="booking-time">
                      Preferred time *
                    </label>
                    <select
                      id="booking-time"
                      className="field-control"
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                      aria-invalid={Boolean(errors.time)}
                      aria-describedby={errors.time ? "booking-time-error" : undefined}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time ? (
                      <p id="booking-time-error" className="mt-1.5 text-[0.8rem] text-red-600">
                        {errors.time}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="booking-service">
                      Dental service required *
                    </label>
                    <select
                      id="booking-service"
                      className="field-control"
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? "booking-service-error" : undefined}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="General consultation">General consultation</option>
                      <option value="Not sure — please advise">Not sure — please advise</option>
                    </select>
                    {errors.service ? (
                      <p id="booking-service-error" className="mt-1.5 text-[0.8rem] text-red-600">
                        {errors.service}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="booking-message">
                      Additional message
                    </label>
                    <textarea
                      id="booking-message"
                      rows={4}
                      className="field-control resize-y"
                      placeholder="Tell us about your symptoms, concerns or any accessibility needs."
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending request…" : "Book Appointment"}
                </button>

                <p className="mt-4 text-center text-[0.8rem] leading-relaxed text-muted">
                  Prefer to chat?{" "}
                  <a
                    href={whatsappLink(
                      `Hello ${CLINIC.name}, I would like to book a dental appointment.`,
                    )}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-accent underline underline-offset-4"
                  >
                    Book instantly on WhatsApp
                  </a>{" "}
                  or call {CLINIC.phoneDisplay}.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
