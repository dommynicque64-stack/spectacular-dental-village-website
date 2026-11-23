import { TEAM, photo, photoSrcSet } from "@/config/site";
import { InfoIcon, ToothMark } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Team() {
  return (
    <section id="team" className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our people"
          title="Meet Our Dental Care Team"
          description="Our dentists and dental support staff work together as one team, so every patient is looked after from the first conversation to the final follow-up."
        />

        <Reveal delay={90}>
          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-highlight/50 bg-highlight-tint px-5 py-4 text-left">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-highlight text-brand">
              <InfoIcon className="h-4 w-4" />
            </span>
            <p className="text-[0.88rem] leading-relaxed text-highlight-deep">
              <span className="font-semibold">Profile placeholders.</span> Team names, titles and
              biographies are published once they have been verified by the clinic. The photographs
              shown are representative of our clinical environment — please ask our team for
              up-to-date provider information.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <Reveal key={member.id} delay={index * 80}>
              <article className="card-surface group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-64 w-full overflow-hidden bg-blush">
                  {member.photoId ? (
                    <img
                      src={photo(member.photoId, 600)}
                      srcSet={photoSrcSet(member.photoId)}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      width={600}
                      height={700}
                      alt="Representative photograph of a dental professional at Spectacular Dental Village"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-brand/35">
                      <ToothMark className="h-16 w-16" />
                      <span className="font-display text-[0.72rem] uppercase tracking-[0.16em]">
                        Photograph pending
                      </span>
                    </div>
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 font-display text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-highlight-deep shadow-soft">
                    Photo placeholder
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-[1.02rem] font-semibold text-brand">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-display text-[0.85rem] font-medium text-accent">
                    {member.title}
                  </p>

                  <p className="mt-3 inline-block rounded-full bg-blush px-3 py-1.5 text-[0.74rem] font-medium text-brand">
                    {member.speciality}
                  </p>

                  <p className="mt-4 text-[0.87rem] leading-relaxed text-muted">{member.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={110}>
          <div className="mt-12 rounded-2xl border border-line bg-blush px-7 py-7 text-center">
            <h3 className="font-display text-[1.12rem] font-semibold text-brand">
              Want to meet the team before your visit?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-[0.92rem] text-muted">
              Call the clinic and we will introduce you to the dental professional best suited to
              your treatment.
            </p>
            <a href="#contact" className="btn btn-outline mt-6">
              Contact the Clinic
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
