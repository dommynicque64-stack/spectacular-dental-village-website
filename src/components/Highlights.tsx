import { HeartIcon, ShieldIcon, UsersIcon, WalletIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const HIGHLIGHTS = [
  {
    icon: HeartIcon,
    title: "Patient-Centred Care",
    text: "Every appointment begins with listening. We explain each option clearly and only proceed when you feel comfortable and informed.",
    tint: "bg-accent-tint",
    color: "text-accent",
  },
  {
    icon: WalletIcon,
    title: "Affordable Dental Services",
    text: "Quality oral healthcare should be within reach. We discuss treatment options and costs with you before anything begins.",
    tint: "bg-highlight-tint",
    color: "text-highlight-deep",
  },
  {
    icon: ShieldIcon,
    title: "Experienced Dental Professionals",
    text: "Our clinical team brings together professional training, modern technology and genuine care for every patient who walks in.",
    tint: "bg-brand-tint",
    color: "text-brand",
  },
  {
    icon: UsersIcon,
    title: "Family-Friendly Environment",
    text: "From a child's first visit to a parent's denture fitting, everyone in your family is treated with patience and respect.",
    tint: "bg-accent-tint",
    color: "text-accent",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why patients choose us"
          title={
            <>
              Care that treats you like <span className="text-accent">family</span>
            </>
          }
          description="Four things our patients tell us matter most when they visit our clinic in Kayole, Spine Road, Nairobi."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 80}>
                <article className="card-surface group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.tint} ${item.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.08rem] font-semibold text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{item.text}</p>
                  <span className="mt-6 block h-[3px] w-10 rounded-full bg-highlight transition-all duration-300 group-hover:w-16" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
