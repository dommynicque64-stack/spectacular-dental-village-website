import { PHOTOS, photo, photoSrcSet } from "@/config/site";
import { CheckCircleIcon, PinIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const REASONS = [
  {
    title: "Affordable and accessible dental care",
    text: "Transparent, respectful pricing that makes quality treatment realistic for Kenyan families.",
  },
  {
    title: "Friendly and welcoming environment",
    text: "A calm, clean and modern space designed to put anxious and first-time patients at ease.",
  },
  {
    title: "Patient-focused treatment approach",
    text: "You are involved in every decision — nothing happens until you understand and agree to it.",
  },
  {
    title: "Comprehensive dental services",
    text: "Checkups, cleaning, fillings, extractions, root canals, whitening, dentures, cosmetic and paediatric care under one roof.",
  },
  {
    title: "Professional and compassionate care",
    text: "Careful clinical work delivered with genuine warmth, respect and attention to detail.",
  },
  {
    title: "Conveniently located in Kayole, Spine Road",
    text: "Visit us on Spine Road in Kayole, Nairobi — use Google Maps for direct directions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-pink py-16 lg:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Image */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <figure className="relative overflow-hidden rounded-[26px] border border-line shadow-soft">
              <img
                src={photo(PHOTOS.whyChoose, 900)}
                srcSet={photoSrcSet(PHOTOS.whyChoose)}
                sizes="(max-width: 1024px) 100vw, 42vw"
                width={900}
                height={680}
                alt="A patient relaxing in the dental chair while a dental professional treats a tooth"
                className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[500px]"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="absolute -bottom-7 left-4 right-4 flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-lift sm:left-8 sm:right-auto">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent">
                <PinIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-[0.85rem] font-semibold text-brand">
                  Kayole, Spine Road
                </p>
                <p className="text-[0.8rem] text-muted">Nairobi, Kenya — easy to reach</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="The difference"
            title="Why Choose Spectacular Dental Village?"
            description="We built our clinic around a simple idea: excellent dental care should feel affordable, unhurried and genuinely human."
          />

          <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {REASONS.map((reason, index) => (
              <Reveal as="li" key={reason.title} delay={index * 70}>
                <div className="flex gap-3.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <CheckCircleIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-[0.98rem] font-semibold leading-snug text-brand">
                      {reason.title}
                    </h3>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">{reason.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <a href="#booking" className="btn btn-primary mt-10">
              Book an Appointment
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
