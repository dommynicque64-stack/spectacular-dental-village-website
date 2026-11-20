import { CLINIC, FOOTER_LINKS, SERVICES, telLink, whatsappLink } from "@/config/site";
import {
  ArrowRightIcon,
  ClockIcon,
  FacebookIcon,
  Logo,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icons";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-brand-deep pt-16 text-white/80">
      <div className="container-page grid gap-12 pb-14 lg:grid-cols-[1.25fr_0.75fr_1fr_1fr] lg:gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <span className="leading-none">
              <span className="block font-display text-[1.05rem] font-bold tracking-tight text-white">
                SPECTACULAR
              </span>
              <span className="mt-1 block font-display text-[0.62rem] font-semibold tracking-[0.28em] text-rose">
                DENTAL VILLAGE
              </span>
            </span>
          </div>

          <p className="mt-6 max-w-sm text-[0.92rem] leading-relaxed">
            Spectacular Dental Village is a modern dental clinic in Kayole, Spine Road,
            Nairobi — delivering affordable, patient-centred dental care for individuals and
            families across the city.
          </p>

          <div className="mt-7 flex gap-3">
            <a
              href={CLINIC.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-brand"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink(`Hello ${CLINIC.name}, I have a question about your services.`)}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:bg-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={telLink}
              aria-label="Call the clinic"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-brand"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-rose">
            Quick Links
          </h3>
          <ul className="mt-6 space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 text-[0.9rem] transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-rose" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Dental services">
          <h3 className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-rose">
            Dental Services
          </h3>
          <ul className="mt-6 space-y-3">
            {SERVICES.slice(0, 7).map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-[0.9rem] transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-rose">
            Get in Touch
          </h3>

          <ul className="mt-6 space-y-4 text-[0.9rem]">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                href={CLINIC.mapsDirections}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-white"
              >
                {CLINIC.address.full}
              </a>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={telLink} className="transition-colors hover:text-white">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                href={whatsappLink(`Hello ${CLINIC.name}, I have an enquiry.`)}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-white"
              >
                {CLINIC.phoneDisplay}
              </a>
            </li>
          </ul>

          <h4 className="mt-8 flex items-center gap-2 font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-rose">
            <ClockIcon className="h-4 w-4" />
            Opening Hours
          </h4>
          <ul className="mt-4 space-y-1.5 text-[0.86rem]">
            <li>Monday – Friday: 8:00 AM – 8:00 PM</li>
            <li>Saturday: 9:30 AM – 8:00 PM</li>
            <li>Sunday: 8:00 AM – 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-[0.82rem] text-white/60 sm:flex-row">
          <p>© {year} Spectacular Dental Village. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#home" className="transition-colors hover:text-white">
              Back to top
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-highlight transition-colors hover:text-white"
            >
              Book now
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
