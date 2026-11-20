import { useState, type FormEvent } from "react";
import { CLINIC, telLink, whatsappLink } from "@/config/site";
import { contactMessage, submitContact, type ContactFormData } from "@/lib/submit";
import {
  AlertIcon,
  CheckCircleIcon,
  ClockIcon,
  DirectionsIcon,
  ClinicIcon,
  FacebookIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Status = "idle" | "submitting" | "submitted" | "handed_off" | "error";
type Errors = Partial<Record<keyof ContactFormData, string>>;

const EMPTY: ContactFormData = { name: "", email: "", phone: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const PHONE_PATTERN = /^(?:\+?254|0)[0-9]{8,9}$/;

const CONTACT_CARDS = [
  {
    icon: PinIcon,
    label: "Clinic address",
    value: CLINIC.address.full,
    note: "Kayole, Spine Road, Nairobi",
    href: CLINIC.mapsDirections,
    external: true,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: CLINIC.phoneDisplay,
    note: "Click to call the clinic",
    href: telLink,
    external: false,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: CLINIC.phoneDisplay,
    note: "Send a message directly",
    href: whatsappLink(`Hello ${CLINIC.name}, I have a question about your dental services.`),
    external: true,
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "spectaculardv",
    note: "Updates, offers and news",
    href: CLINIC.facebook,
    external: true,
  },
];

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (key: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(form.email.trim()))
      next.email = "Please enter a valid email address.";

    const phone = form.phone.replace(/[\s()-]/g, "");
    if (!phone) next.phone = "Please enter your phone number.";
    else if (!PHONE_PATTERN.test(phone))
      next.phone = "Enter a valid Kenyan number, e.g. 0732 430830.";

    if (!form.message.trim()) next.message = "Please tell us how we can help.";
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      setStatus("error");
      setErrorMessage("Please correct the highlighted fields before sending your message.");
      const firstKey = Object.keys(validation)[0];
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    const outcome = await submitContact(form);

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
    <section id="contact" className="bg-pink py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get in touch"
          title="We Are Here for Your Smile"
          description="Call, message or visit Spectacular Dental Village in Kayole, Spine Road, Nairobi. Our team is open seven days a week."
        />

        {/* Quick action buttons */}
        <Reveal delay={80}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href={telLink} className="btn btn-primary">
              <PhoneIcon className="h-4 w-4" />
              Call {CLINIC.phoneDisplay}
            </a>
            <a
              href={whatsappLink(`Hello ${CLINIC.name}, I would like to make an enquiry.`)}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              href={CLINIC.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook Page
            </a>
            <a
              href={CLINIC.mapsDirections}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline"
            >
              <DirectionsIcon className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Info cards */}
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {CONTACT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    {...(card.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="card-surface group flex items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:bg-accent-tint group-hover:text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                        {card.label}
                      </span>
                      <span className="mt-1 block font-display text-[0.98rem] font-semibold leading-snug text-brand">
                        {card.value}
                      </span>
                      <span className="mt-0.5 block text-[0.82rem] text-muted">{card.note}</span>
                    </span>
                  </a>
                );
              })}

              <div className="card-surface flex items-start gap-4 p-6 sm:col-span-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-highlight-tint text-highlight-deep">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    Opening hours
                  </span>
                  <span className="mt-1 block text-[0.92rem] leading-relaxed text-ink">
                    Monday – Friday: 8:00 AM – 8:00 PM
                    <br />
                    Saturday: 9:30 AM – 8:00 PM
                    <br />
                    Sunday: 8:00 AM – 8:00 PM
                  </span>
                </span>
              </div>

              <div className="card-surface flex items-start gap-4 p-6 sm:col-span-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-tint text-accent">
                  <ClinicIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    Clinic
                  </span>
                  <span className="mt-1 block font-display text-[0.98rem] font-semibold text-brand">
                    Spectacular Dental Village
                  </span>
                  <span className="mt-0.5 block text-[0.85rem] leading-relaxed text-muted">
                    Your trusted partner in oral health in Kayole, Spine Road.
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={90}>
            <div className="card-surface p-6 sm:p-8">
              {status === "submitted" ? (
                <div className="py-8 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-tint text-accent">
                    <CheckCircleIcon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.35rem] font-bold text-brand">
                    Message sent
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted">
                    Thank you, {form.name.split(" ")[0]}. We have received your enquiry and will
                    respond as soon as possible. For anything urgent, please call{" "}
                    {CLINIC.phoneDisplay}.
                  </p>
                  <button type="button" onClick={reset} className="btn btn-outline mt-7">
                    Send another message
                  </button>
                </div>
              ) : status === "handed_off" ? (
                <div className="py-6 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-highlight-tint text-highlight-deep">
                    <WhatsAppIcon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.35rem] font-bold text-brand">
                    Finish in WhatsApp
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted">
                    Your message has been prepared in WhatsApp. Open it and press{" "}
                    <span className="font-semibold text-brand">Send</span> so it reaches our team.
                  </p>
                  <pre className="mt-6 whitespace-pre-wrap rounded-2xl border border-line bg-blush p-4 text-left font-sans text-[0.85rem] leading-relaxed text-muted">
                    {contactMessage(form)}
                  </pre>
                  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href={whatsappLink(contactMessage(form))}
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
                  <h3 className="font-display text-[1.25rem] font-bold text-brand">
                    Send us a message
                  </h3>
                  <p className="mt-1.5 text-[0.88rem] text-muted">
                    We will get back to you as soon as we can.
                  </p>

                  {status === "error" && errorMessage ? (
                    <div
                      role="alert"
                      className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5"
                    >
                      <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <p className="text-[0.88rem] leading-relaxed text-red-700">{errorMessage}</p>
                    </div>
                  ) : null}

                  <div className="mt-6 space-y-5">
                    <div>
                      <label className="field-label" htmlFor="contact-name">
                        Full name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="field-control"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        autoComplete="name"
                      />
                      {errors.name ? (
                        <p id="contact-name-error" className="mt-1.5 text-[0.8rem] text-red-600">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="field-label" htmlFor="contact-email">
                          Email address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          className="field-control"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          autoComplete="email"
                        />
                        {errors.email ? (
                          <p id="contact-email-error" className="mt-1.5 text-[0.8rem] text-red-600">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label className="field-label" htmlFor="contact-phone">
                          Phone number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          inputMode="tel"
                          className="field-control"
                          placeholder="07XX XXX XXX"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                          autoComplete="tel"
                        />
                        {errors.phone ? (
                          <p id="contact-phone-error" className="mt-1.5 text-[0.8rem] text-red-600">
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label className="field-label" htmlFor="contact-message">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        className="field-control resize-y"
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                      />
                      {errors.message ? (
                        <p id="contact-message-error" className="mt-1.5 text-[0.8rem] text-red-600">
                          {errors.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Location summary — the interactive map lives in the Location section */}
        <Reveal delay={60}>
          <div className="mt-12 overflow-hidden rounded-[26px] border border-line bg-white shadow-soft">
            <div className="grid items-center gap-6 p-7 sm:p-9 lg:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-display text-[1.15rem] font-bold text-brand sm:text-[1.3rem]">
                  Where to find us
                </h3>
                <p className="mt-2 max-w-xl text-[0.94rem] leading-relaxed text-muted">
                  Spectacular Dental Village · Kayole, Spine Road, Nairobi, Kenya. Open
                  seven days a week.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#location" className="btn btn-accent">
                    <PinIcon className="h-4 w-4" />
                    View Interactive Map
                  </a>
                  <a
                    href={CLINIC.mapsDirections}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-outline"
                  >
                    <DirectionsIcon className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>
              <a
                href="#location"
                className="flex w-full items-center gap-4 rounded-2xl border border-line bg-blush p-5 transition-colors hover:border-brand lg:w-64"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <PinIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-[0.92rem] font-semibold text-brand">
                    Kayole, Spine Road
                  </span>
                  <span className="mt-0.5 block text-[0.8rem] text-muted">
                    Nairobi, Kenya
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
