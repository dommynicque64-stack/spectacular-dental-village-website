import { useState } from "react";
import { CLINIC, OPENING_HOURS, PHOTOS, photo, photoSrcSet, telLink, whatsappLink } from "@/config/site";
import {
  AlertIcon,
  CheckCircleIcon,
  ClockIcon,
  DirectionsIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type GeoState = "idle" | "locating" | "ready" | "error";

/** Builds a Google Maps directions URL. With an origin it navigates from that point. */
const directionsUrl = (origin?: string) => {
  const destination = encodeURIComponent(CLINIC.mapsQuery);
  const base = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  return origin ? `${base}&origin=${encodeURIComponent(origin)}` : base;
};

export default function Location() {
  const [geoState, setGeoState] = useState<GeoState>("idle");
  const [geoNote, setGeoNote] = useState("");

  const useMyLocation = () => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      setGeoState("error");
      setGeoNote(
        "Your browser does not support location sharing. Please use Get Directions and enter your starting point in Google Maps.",
      );
      return;
    }

    setGeoState("locating");
    setGeoNote("Finding your location — please allow location access when prompted.");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const origin = `${latitude.toFixed(6)},${longitude.toFixed(6)}`;
        setGeoState("ready");
        setGeoNote("Location found — opening directions to Spectacular Dental Village, Kayole, Spine Road.");
        window.open(directionsUrl(origin), "_blank", "noopener,noreferrer");
      },
      () => {
        setGeoState("error");
        setGeoNote(
          "We could not access your location. Please allow location access in your browser, or use Get Directions instead.",
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  };

  return (
    <section id="location" className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our location"
          title="Find Spectacular Dental Village in Kayole, Spine Road"
          description="Visit Spectacular Dental Village on Spine Road in Kayole, Nairobi, Kenya. Open the map or get directions directly to our dental clinic."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          {/* Interactive map */}
          <Reveal>
            <div className="card-surface h-full overflow-hidden p-2">
              <iframe
                title="Map showing Spectacular Dental Village in Kayole, Spine Road, Nairobi"
                src={CLINIC.mapsEmbed}
                className="h-[320px] w-full rounded-[20px] sm:h-[420px] lg:h-full lg:min-h-[560px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Location details */}
          <div className="flex flex-col gap-5">
            <Reveal delay={70}>
              <div className="card-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <PinIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-[1.05rem] font-semibold text-brand">
                  Spectacular Dental Village
                </h3>
                <address className="mt-2 not-italic text-[0.94rem] leading-relaxed text-muted">
                  Kayole, Spine Road,
                  <br />
                  Nairobi,
                  <br />
                  Kenya.
                </address>
                <p className="mt-4 text-[0.86rem] leading-relaxed text-muted">
                  Your trusted partner in oral health in Kayole, Spine Road.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-tint text-accent">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-[1.05rem] font-semibold text-brand">
                  Opening hours
                </h3>
                <ul className="mt-3 space-y-1.5 text-[0.88rem] text-ink">
                  {OPENING_HOURS.map((slot) => (
                    <li key={slot.id} className="flex justify-between gap-4">
                      <span className="text-muted">{slot.day}</span>
                      <span className="font-medium">
                        {slot.open} – {slot.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={170}>
              <figure className="card-surface overflow-hidden">
                <img
                  src={photo(PHOTOS.clinicInterior, 700)}
                  srcSet={photoSrcSet(PHOTOS.clinicInterior)}
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  width={700}
                  height={460}
                  alt="Clean, modern dental treatment room with a dental chair at Spectacular Dental Village"
                  className="h-40 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-5 py-4 text-[0.85rem] leading-relaxed text-muted">
                  A clean, modern and welcoming clinic — prepared for your visit.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Directions */}
        <Reveal delay={90}>
          <div className="mt-10 rounded-[26px] border border-line bg-blush p-7 sm:p-9">
            <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-display text-[1.2rem] font-bold text-brand sm:text-[1.35rem]">
                  Get Directions to Our Clinic
                </h3>
                <p className="mt-2 max-w-xl text-[0.94rem] leading-relaxed text-muted">
                  Open Google Maps to navigate directly to Spectacular Dental Village. Choose your starting point below.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={directionsUrl()}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    <DirectionsIcon className="h-4 w-4" />
                    Get Directions
                  </a>
                  <button type="button" onClick={useMyLocation} className="btn btn-outline">
                    <PinIcon className="h-4 w-4" />
                    {geoState === "locating" ? "Locating you…" : "Use My Location"}
                  </button>
                  <a
                    href={whatsappLink(
                      `Hello ${CLINIC.name}, please help me with directions to your clinic in Kayole, Spine Road.`,
                    )}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-outline"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-accent" />
                    Ask for Directions
                  </a>
                  <a href={telLink} className="btn btn-outline">
                    <PhoneIcon className="h-4 w-4" />
                    {CLINIC.phoneDisplay}
                  </a>
                </div>

                <div aria-live="polite" role="status" className="mt-5 min-h-[1.5rem]">
                  {geoState === "locating" ? (
                    <p className="flex items-center gap-2 text-[0.86rem] text-muted">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                      {geoNote}
                    </p>
                  ) : geoState === "ready" ? (
                    <p className="flex items-start gap-2 text-[0.86rem] text-accent">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                      {geoNote}
                    </p>
                  ) : geoState === "error" ? (
                    <p className="flex items-start gap-2 text-[0.86rem] text-highlight-deep">
                      <AlertIcon className="mt-0.5 h-4 w-4 shrink-0" />
                      {geoNote}
                    </p>
                  ) : null}
                </div>
              </div>

              <a
                href={CLINIC.mapsDirections}
                target="_blank"
                rel="noreferrer noopener"
                className="card-surface group flex w-full items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift lg:w-64"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition-colors group-hover:bg-accent">
                  <DirectionsIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-[0.92rem] font-semibold text-brand">
                    Open in Google Maps
                  </span>
                  <span className="mt-0.5 block text-[0.8rem] text-muted">
                    View the full-size map
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
