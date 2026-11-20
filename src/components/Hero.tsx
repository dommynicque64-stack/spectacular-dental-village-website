import heroImage from "@/assets/hero.jpg";

/**
 * Landing hero — the clinic photograph is the sole visual focus.
 * The image is pinned (sticky) while the first part of the page scrolls,
 * then the following sections scroll over it. Fully responsive: the image
 * scales with `object-cover` and a tuned focal point so both faces stay
 * visible on desktop, tablet and mobile without distortion.
 */
export default function Hero() {
  return (
    <section id="home" className="relative h-[150svh]">
      <div className="sticky top-0 h-[100svh] min-h-[520px] overflow-hidden">
        <img
          src={heroImage}
          alt="A smiling African dentist in a white coat with a young child patient raising his hand in a bright dental clinic"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-[57%_40%] lg:object-[55%_40%]"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-page">
            <div className="hero-copy max-w-xl rounded-3xl border border-white/20 bg-brand-deep/80 p-6 text-white shadow-lift backdrop-blur-sm sm:p-9 lg:p-11">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-rose sm:text-sm">
                Your trusted partner in oral health
              </p>
              <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Spectacular Dental Village
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                Compassionate dental care for every smile in Kayole, Spine Road.
              </p>
              <a href="#booking" className="btn btn-white mt-7">
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
