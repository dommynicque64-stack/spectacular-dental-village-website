import { PHOTOS, photo, photoSrcSet } from "@/config/site";
import { AwardIcon, HeartIcon, SparkleIcon, TargetIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const VALUES = ["Compassion", "Integrity", "Professionalism", "Excellence", "Affordability", "Patient Satisfaction"];

export default function About() {
  return (
    <section id="about" className="bg-pink py-16 lg:py-24">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Imagery */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-[2rem] bg-accent-tint lg:block"
              />
              <figure className="relative overflow-hidden rounded-[26px] border border-line shadow-soft">
                <img
                  src={photo(PHOTOS.aboutMain, 900)}
                  srcSet={photoSrcSet(PHOTOS.aboutMain)}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  width={900}
                  height={640}
                  alt="Dental professional in scrubs examining a patient during a routine visit"
                  className="h-[320px] w-full object-cover sm:h-[400px]"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <figure className="absolute -bottom-8 -right-2 w-[46%] overflow-hidden rounded-[22px] border-4 border-white shadow-lift sm:-right-6">
                <img
                  src={photo(PHOTOS.aboutDetail, 500)}
                  srcSet={photoSrcSet(PHOTOS.aboutDetail)}
                  sizes="240px"
                  width={500}
                  height={380}
                  alt="Dental professional explaining oral care to a patient using a tooth model"
                  className="h-[150px] w-full object-cover sm:h-[190px]"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className="absolute -left-3 top-6 hidden rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:-left-7 sm:block">
                <p className="font-display text-[0.8rem] font-semibold text-brand">
                  Kayole, Spine Road
                </p>
                <p className="text-[0.78rem] text-muted">Nairobi, Kenya</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About our clinic"
              title="Welcome to Spectacular Dental Village"
            />

            <Reveal delay={90}>
              <div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-muted">
                <p>
                  At Spectacular Dental Village, we are committed to providing exceptional,
                  affordable and patient-centered dental care in a friendly and comfortable
                  environment. Our goal is to help every patient achieve and maintain a healthy,
                  confident and beautiful smile.
                </p>
                <p>
                  We believe that everyone deserves access to quality oral healthcare. Our
                  dedicated team is passionate about delivering professional dental services while
                  ensuring every patient feels comfortable, respected and well cared for.
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <Reveal delay={140}>
                <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <TargetIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[1.02rem] font-semibold text-brand">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                    To provide accessible, affordable and quality dental healthcare through
                    compassionate and professional patient care.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={190}>
                <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-tint text-accent">
                    <AwardIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[1.02rem] font-semibold text-brand">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                    To become a trusted dental healthcare destination, promoting healthy smiles
                    and better oral health in our community.
                  </p>
                </article>
              </Reveal>
            </div>

            <Reveal delay={230}>
              <div className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-soft">
                <h3 className="flex items-center gap-2.5 font-display text-[1.02rem] font-semibold text-brand">
                  <HeartIcon className="h-5 w-5 text-highlight-deep" />
                  Our Core Values
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {VALUES.map((value) => (
                    <li
                      key={value}
                      className="rounded-full border border-line bg-blush px-4 py-2 text-[0.85rem] font-medium text-brand"
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-7 flex items-center gap-2.5 text-[0.88rem] text-muted">
                <SparkleIcon className="h-4 w-4 shrink-0 text-accent" />
                Every visit begins with a conversation — no treatment is carried out until you
                understand and agree to it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
