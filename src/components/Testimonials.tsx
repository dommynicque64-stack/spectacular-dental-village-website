import { TESTIMONIALS, CLINIC, PHOTOS, photo, photoSrcSet, whatsappLink } from "@/config/site";
import { FacebookIcon, QuoteIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const CHIPS = ["Verified reviews only", "Patient-confirmed", "Published with permission"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-pink py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient voices"
          title="What Our Patients Say"
          description="Your experience matters to us. Below you will find feedback from patients who have confirmed their visit with our team."
        />

        {TESTIMONIALS.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((review, index) => (
              <Reveal key={review.id} delay={index * 80}>
                <figure className="card-surface h-full p-7">
                  <QuoteIcon className="text-highlight" />
                  <div className="mt-4 flex gap-1 text-highlight">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <p className="font-display text-[0.92rem] font-semibold text-brand">
                      {review.name}
                    </p>
                    <p className="text-[0.82rem] text-muted">{review.location}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <Reveal>
              <div className="relative">
                <figure className="overflow-hidden rounded-[26px] border border-line shadow-soft">
                  <img
                    src={photo(PHOTOS.family, 900)}
                    srcSet={photoSrcSet(PHOTOS.family)}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    width={900}
                    height={640}
                    alt="Smiling siblings from an East African family showing healthy, confident smiles"
                    className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-line bg-white px-5 py-4 shadow-lift sm:left-8 sm:right-auto">
                  <p className="font-display text-[0.88rem] font-semibold text-brand">
                    Families are at the heart of our clinic
                  </p>
                  <p className="mt-0.5 text-[0.82rem] text-muted">
                    Children, parents and grandparents are all welcome at Spectacular Dental Village.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="rounded-[26px] border border-line bg-white p-8 shadow-soft sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-highlight-tint text-highlight-deep">
                  <QuoteIcon className="h-7 w-7" />
                </span>

                <h3 className="mt-6 font-display text-[1.35rem] font-bold text-brand sm:text-[1.55rem]">
                  Verified patient feedback
                </h3>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-muted">
                  We publish only feedback that our patients have personally confirmed with the
                  clinic. We never publish invented names, quotations or ratings — so this space is
                  reserved for genuine stories from the people we have treated.
                </p>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {CHIPS.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-line bg-blush px-4 py-2 text-[0.82rem] font-medium text-brand"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CLINIC.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-accent"
                  >
                    <FacebookIcon className="h-4 w-4" />
                    Share your experience
                  </a>
                  <a
                    href={whatsappLink(
                      `Hello ${CLINIC.name}, I would like to share feedback about my visit.`,
                    )}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-outline"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-accent" />
                    Send feedback
                  </a>
                </div>

                <p className="mt-6 text-[0.82rem] text-muted">
                  Visited us recently? A short message is all it takes — it helps other families
                  choose with confidence.
                </p>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
