import { useEffect, useRef, useState } from "react";
import { SERVICES, photo, photoSrcSet, type Service } from "@/config/site";
import { ArrowRightIcon, CheckIcon, CloseIcon, ServiceIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-brand-deep/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[26px] bg-white shadow-lift sm:rounded-[26px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 w-full overflow-hidden sm:h-56">
          <img
            src={photo(service.image, 1000)}
            srcSet={photoSrcSet(service.image)}
            sizes="(max-width: 768px) 100vw, 768px"
            width={1000}
            height={420}
            alt={`${service.title} at Spectacular Dental Village`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-soft transition-colors hover:bg-brand hover:text-white"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-tint text-accent">
            <ServiceIcon name={service.icon} className="h-6 w-6" />
          </span>
          <h3
            id="service-modal-title"
            className="mt-4 font-display text-[1.45rem] font-bold text-brand sm:text-[1.7rem]"
          >
            {service.title}
          </h3>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{service.details}</p>

          <h4 className="mt-7 font-display text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand">
            What to expect
          </h4>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.92rem] text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
            <a href="#booking" onClick={onClose} className="btn btn-primary flex-1">
              Book this treatment
            </a>
            <a href="#contact" onClick={onClose} className="btn btn-outline flex-1">
              Ask a question
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our dental services"
          title="Comprehensive Dental Care for Every Smile"
          description="From routine checkups to same-day emergency care, we provide comprehensive dental services for children, adults and families in Kayole, Spine Road, and across Nairobi."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 80}>
              <article className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={photo(service.image, 700)}
                    srcSet={photoSrcSet(service.image)}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={700}
                    height={440}
                    alt={`${service.title} — dental care at Spectacular Dental Village in Kayole, Spine Road`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-0 left-0 flex h-14 w-14 items-center justify-center rounded-tl-2xl bg-white text-accent shadow-soft">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.06rem] font-semibold leading-snug text-brand">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelected(service)}
                    className="mt-5 inline-flex w-fit items-center gap-2 whitespace-nowrap font-display text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-brand"
                  >
                    Learn More
                    <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-line bg-blush px-7 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-[1.15rem] font-semibold text-brand">
                Not sure which treatment you need?
              </h3>
              <p className="mt-1.5 text-[0.92rem] text-muted">
                Book a consultation and we will assess your oral health and guide you.
              </p>
            </div>
            <a href="#booking" className="btn btn-accent shrink-0">
              Book a Consultation
            </a>
          </div>
        </Reveal>
      </div>

      {selected ? <ServiceModal service={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}
