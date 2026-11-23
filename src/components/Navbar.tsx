import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { CLINIC, NAV_LINKS, telLink, whatsappLink } from "@/config/site";
import {
  ClockIcon,
  CloseIcon,
  FacebookIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icons";

const SECTION_IDS = ["home", "about", "services", "team", "booking", "location", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    window.setTimeout(() => {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight + 8;
      window.scrollTo({
        top,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }, 60);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-brand-deep text-white lg:block">
        <div className="container-page flex h-10 items-center justify-between text-[0.78rem]">
          <a
            href={CLINIC.mapsDirections}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-white/75 transition-colors hover:text-white"
          >
            <PinIcon className="h-4 w-4 text-highlight" />
            <span>{CLINIC.locationLine}</span>
          </a>
          <div className="flex items-center gap-6">
            <a
              href={telLink}
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <PhoneIcon className="h-4 w-4 text-highlight" />
              {CLINIC.phoneDisplay}
            </a>
            <span className="flex items-center gap-2 text-white/80">
              <ClockIcon className="h-4 w-4 text-highlight" />
              Mon–Fri 8:00 AM – 8:00 PM
            </span>
            <a
              href={CLINIC.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Spectacular Dental Village on Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors hover:scale-105"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink("Hello Spectacular Dental Village, I would like to make an enquiry.")}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chat with Spectacular Dental Village on WhatsApp"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors hover:scale-105"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-line bg-white transition-shadow duration-300",
          scrolled && "shadow-soft",
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between gap-4 lg:h-[84px]">
          <button
            type="button"
            onClick={() => go("#home")}
            className="flex items-center gap-3 text-left"
            aria-label="Spectacular Dental Village — back to top"
          >
            <img
              src="/spectacular-dental-village-logo.png"
              alt="Spectacular Dental Village"
              className="h-14 w-14 shrink-0 object-contain lg:h-16 lg:w-16"
              width={64}
              height={64}
            />
            <span className="max-w-[135px] font-display text-[0.86rem] font-bold leading-tight tracking-tight text-brand sm:max-w-none sm:text-base lg:text-lg">
              Spectacular Dental Village
            </span>
          </button>

          <nav className="hidden items-center gap-0 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => go(link.href)}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-3 py-2 font-display text-[0.85rem] font-medium transition-colors xl:px-4 xl:text-[0.86rem]",
                    isActive ? "text-brand" : "text-muted hover:text-brand",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-accent transition-opacity duration-300 xl:inset-x-4",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={telLink}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-line text-brand transition-colors hover:border-brand hover:bg-brand-tint xl:flex"
              aria-label={`Call ${CLINIC.name}`}
            >
              <PhoneIcon />
            </a>
            <button
              type="button"
              onClick={() => go("#booking")}
              className="btn btn-primary btn-sm hidden md:inline-flex"
            >
              Book an Appointment
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-white transition-opacity duration-300 lg:hidden",
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="container-page flex flex-col gap-1 py-6" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => go(link.href)}
              className="rounded-xl px-4 py-3.5 text-left font-display text-lg font-medium text-brand transition-colors hover:bg-blush"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go("#booking")}
            className="mt-3 rounded-xl px-4 py-3.5 text-left font-display text-lg font-medium text-brand transition-colors hover:bg-blush"
          >
            Book an Appointment
          </button>

          <div className="mt-6 grid gap-3 border-t border-line pt-6">
            <a href={telLink} className="btn btn-primary w-full">
              <PhoneIcon className="h-4 w-4" />
              Call {CLINIC.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hello Spectacular Dental Village, I would like to make an enquiry.")}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline w-full"
            >
              <WhatsAppIcon className="h-4 w-4 text-accent" />
              Chat on WhatsApp
            </a>
            <a
              href={CLINIC.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline w-full"
            >
              <FacebookIcon className="h-4 w-4 text-brand" />
              Facebook Page
            </a>
            <p className="pt-2 text-sm text-muted">
              {CLINIC.locationLine}
              <br />
              Mon–Fri 8:00 AM – 8:00 PM · Sat 9:30 AM – 8:00 PM · Sun 8:00 AM – 8:00 PM
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
