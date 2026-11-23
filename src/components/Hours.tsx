import { CLINIC, OPENING_HOURS, telLink, whatsappLink } from "@/config/site";
import { ClockIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const todayIndex = new Date().getDay(); // 0 = Sunday
const todayId = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][todayIndex];

export default function Hours() {
  return (
    <section id="hours" className="bg-pink py-16 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Opening hours"
            title="Open Seven Days a Week"
            description="Long opening hours mean you can find a time that works around work, school and family commitments."
          />

          <Reveal delay={110}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-blush px-5 py-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent">
                <ClockIcon className="h-4 w-4" />
              </span>
              <p className="text-[0.9rem] leading-relaxed text-muted">
                For urgent dental concerns, call us as early as possible so we can advise you and
                find you the earliest suitable slot.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#location" className="btn btn-primary">
                Visit Us Today
              </a>
              <a href={telLink} className="btn btn-outline">
                <PhoneIcon className="h-4 w-4" />
                Call {CLINIC.phoneDisplay}
              </a>
              <a
                href={whatsappLink(
                  `Hello ${CLINIC.name}, I would like to confirm today's opening hours.`,
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-outline"
              >
                <WhatsAppIcon className="h-4 w-4 text-accent" />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* Schedule */}
        <Reveal delay={80}>
          <div className="overflow-hidden rounded-[26px] border border-line bg-white shadow-soft">
            <div className="flex items-center justify-between bg-brand px-6 py-4">
              <h3 className="font-display text-[1rem] font-semibold text-white">Clinic Schedule</h3>
              <span className="rounded-full bg-white/15 px-3 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white">
                Kayole, Spine Road
              </span>
            </div>

            <ul className="divide-y divide-line">
              {OPENING_HOURS.map((slot) => {
                const isToday = slot.id === todayId;
                return (
                  <li
                    key={slot.id}
                    className={`flex items-center justify-between gap-4 px-6 py-4 transition-colors ${
                      isToday ? "bg-accent-tint" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-display text-[0.95rem] font-semibold ${
                          isToday ? "text-accent" : "text-brand"
                        }`}
                      >
                        {slot.day}
                      </span>
                      {isToday ? (
                        <span className="rounded-full bg-accent px-2.5 py-1 font-display text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white">
                          Today
                        </span>
                      ) : null}
                    </div>
                    <span className="font-display text-[0.92rem] font-medium text-ink">
                      {slot.open} <span className="text-muted">–</span> {slot.close}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-line bg-blush px-6 py-4 text-[0.84rem] text-muted">
              Walk-ins are welcome where the schedule allows — calling ahead guarantees a time.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
