/**
 * ---------------------------------------------------------------------------
 * SPECTACULAR DENTAL VILLAGE — central business configuration
 * ---------------------------------------------------------------------------
 * Every piece of clinic information used across the website lives here so it
 * can be updated in one place. Only verified details are included — please do
 * not add staff names, credentials, prices, insurance partnerships or patient
 * reviews until they have been confirmed by the clinic.
 *
 * SITE_URL is a placeholder: replace it with the clinic's live domain once it
 * is registered (it is used for canonical URLs, Open Graph and the sitemap).
 */

export const SITE_URL = "https://www.spectaculardentalvillage.co.ke/";

export const CLINIC = {
  name: "Spectacular Dental Village",
  shortName: "Spectacular Dental Village",
  tagline: "Your Trusted Partner in Oral Health",
  locationLine: "Spectacular Dental Village, Kayole, Spine Road, Nairobi, Kenya",
  address: {
    street: "Spine Road",
    locality: "Kayole",
    city: "Nairobi",
    country: "Kenya",
    full: "Spectacular Dental Village, Kayole, Spine Road, Nairobi, Kenya.",
  },
  /** Digits only — used for wa.me deep links and tel: links. */
  phoneRaw: "+254732430830",
  phoneDisplay: "+254 732 430830",
  whatsappNumber: "254732430830",
  facebook: "https://www.facebook.com/spectaculardv/",
  mapsQuery: "Spectacular Dental Village, Kayole, Spine Road, Nairobi, Kenya, -1.2896327, 36.9052616",
  /** Verified Google Maps share link for the clinic — used for all location,
   *  directions and "open in Google Maps" links across the site. */
  mapsShareLink: "https://maps.app.goo.gl/CS5TbtpZzrBL3php8",
  mapsEmbed:
    "https://www.google.com/maps?q=-1.2896327,36.9052616&hl=en&z=17&output=embed",
  mapsDirections: "https://maps.app.goo.gl/CS5TbtpZzrBL3php8",
} as const;

/** Opening hours — 0 = Sunday … 6 = Saturday. */
export const OPENING_HOURS = [
  { id: "mon", day: "Monday", short: "Mon", open: "8:00 AM", close: "8:00 PM" },
  { id: "tue", day: "Tuesday", short: "Tue", open: "8:00 AM", close: "8:00 PM" },
  { id: "wed", day: "Wednesday", short: "Wed", open: "8:00 AM", close: "8:00 PM" },
  { id: "thu", day: "Thursday", short: "Thu", open: "8:00 AM", close: "8:00 PM" },
  { id: "fri", day: "Friday", short: "Fri", open: "8:00 AM", close: "8:00 PM" },
  { id: "sat", day: "Saturday", short: "Sat", open: "9:30 AM", close: "8:00 PM" },
  { id: "sun", day: "Sunday", short: "Sun", open: "8:00 AM", close: "8:00 PM" },
] as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Location", href: "#location" },
  { label: "Contact Us", href: "#contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Location", href: "#location" },
  { label: "Book an Appointment", href: "#booking" },
  { label: "Opening Hours", href: "#hours" },
  { label: "Contact Us", href: "#contact" },
];

/* ---------------------------------------------------------------------------
 * Imagery
 * Real photographic assets hosted on the Pexels CDN and delivered with
 * automatic compression + responsive widths.
 * ------------------------------------------------------------------------- */

const pexels = (id: string, width: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const photo = (id: string, width = 900) => pexels(id, width);

export const photoSrcSet = (id: string) =>
  [480, 768, 1024, 1400].map((w) => `${pexels(id, w)} ${w}w`).join(", ");

export const PHOTOS = {
  heroMain: "3845686",
  heroSecondary: "16903641",
  heroDetail: "3845759",
  aboutMain: "16903232",
  aboutSecondary: "5622270",
  aboutDetail: "4971507",
  whyChoose: "16903641",
  family: "13437141",
  teamOne: "6129496",
  teamTwo: "6129506",
  teamThree: "5430213",
  teamFour: "18252408",
  clinicInterior: "6812461",
  hoursImage: "4269265",
} as const;

/* ---------------------------------------------------------------------------
 * Services
 * ------------------------------------------------------------------------- */

export type Service = {
  id: string;
  title: string;
  summary: string;
  image: string;
  details: string;
  includes: string[];
  icon:
    | "checkup"
    | "sparkle"
    | "filling"
    | "extraction"
    | "rootcanal"
    | "whitening"
    | "denture"
    | "cosmetic"
    | "preventive"
    | "emergency"
    | "paediatric";
};

export const SERVICES: Service[] = [
  {
    id: "checkups",
    title: "Routine Dental Checkups",
    summary:
      "Regular examinations to monitor oral health, identify dental concerns and prevent future complications.",
    image: "5622270",
    details:
      "Routine checkups are the foundation of healthy smiles. At every visit we examine your teeth, gums, bite and soft tissues, and use digital X-rays where needed to catch decay, gum disease or other concerns early — while treatment is still simple and comfortable.",
    includes: [
      "Full oral examination of teeth and gums",
      "Digital X-rays when clinically necessary",
      "Oral cancer and soft tissue screening",
      "Bite and alignment assessment",
      "Personalised oral hygiene advice",
    ],
    icon: "checkup",
  },
  {
    id: "cleaning",
    title: "Professional Cleaning and Polishing",
    summary:
      "Professional removal of plaque and stains to maintain healthy teeth and gums.",
    image: "3945600",
    details:
      "Even with careful home brushing, hardened plaque (calculus) builds up along the gum line and in hard-to-reach areas. Our professional cleaning removes this build-up, polishes away surface stains and leaves your mouth feeling noticeably fresher.",
    includes: [
      "Ultrasonic and hand scaling to remove plaque",
      "Polishing to lift surface stains",
      "Gum health assessment and charting",
      "Home care and brushing technique coaching",
      "Tailored interval recommendations",
    ],
    icon: "sparkle",
  },
  {
    id: "fillings",
    title: "Tooth Fillings",
    summary:
      "Restorative treatments designed to repair cavities and preserve natural teeth.",
    image: "3845709",
    details:
      "When decay is caught early it can usually be removed and the tooth rebuilt with a tooth-coloured filling. We aim to preserve as much of your natural tooth structure as possible, keeping the procedure quick, quiet and comfortable.",
    includes: [
      "Decay removal and tooth preparation",
      "Tooth-coloured, natural-looking materials",
      "Minimal-prep techniques where suitable",
      "Bite adjustment for comfort",
      "Guidance on caring for the new filling",
    ],
    icon: "filling",
  },
  {
    id: "extractions",
    title: "Tooth Extractions",
    summary:
      "Professional removal of damaged or problematic teeth when clinically necessary.",
    image: "11756810",
    details:
      "Sometimes a tooth cannot be saved — through extensive decay, trauma or advanced gum disease. We carry out extractions with careful technique, clear aftercare instructions and options to discuss replacing the tooth so your bite and smile stay balanced.",
    includes: [
      "Assessment and explanation of options",
      "Gentle, aseptic removal procedure",
      "Local anaesthetic for comfort",
      "Written aftercare and healing guidance",
      "Discussion of replacement options",
    ],
    icon: "extraction",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    summary:
      "Treatment aimed at saving infected or damaged teeth and relieving discomfort.",
    image: "11756843",
    details:
      "When the nerve inside a tooth becomes infected, removing the infection can stop the pain and let you keep your own tooth. Root canal treatment cleans and seals the inner canals, helping you avoid a bigger loss later.",
    includes: [
      "Diagnosis of pulp infection and pain",
      "Careful cleaning and shaping of the canals",
      "Sealing of the treated tooth",
      "Restoration with a filling or crown",
      "Follow-up to confirm comfort and healing",
    ],
    icon: "rootcanal",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    summary:
      "Professional cosmetic treatments to improve the appearance of stained or discoloured teeth.",
    image: "5355891",
    details:
      "Tea, coffee, tobacco and even some medicines can dull the brightness of a smile. We assess your natural tooth shade first and then recommend a professional whitening approach suited to your teeth and your goals.",
    includes: [
      "Shade assessment before treatment",
      "Gum and soft tissue protection",
      "Professional, controlled application",
      "Guidance on maintaining results",
      "Review of sensitivity after treatment",
    ],
    icon: "whitening",
  },
  {
    id: "dentures",
    title: "Dentures",
    summary:
      "Customised tooth replacement solutions that help restore functionality and confidence.",
    image: "6627589",
    details:
      "Missing teeth affect how you eat, speak and smile. We provide carefully made denture solutions — fitted and adjusted for your mouth — that restore function and bring back a natural-looking smile.",
    includes: [
      "Mouth and gum assessment",
      "Custom-made, precisely fitted dentures",
      "Comfort adjustments and relining",
      "Oral hygiene and maintenance coaching",
      "Scheduled review appointments",
    ],
    icon: "denture",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    summary:
      "Dental treatments designed to enhance the appearance of your smile.",
    image: "3845678",
    details:
      "Cosmetic dentistry combines science and artistry. We plan your treatment around your facial features, your natural tooth shade and your lifestyle — so the result looks like your smile, only healthier and brighter.",
    includes: [
      "Smile assessment and digital planning",
      "Shade matching for seamless results",
      "Whitening, reshaping and repair options",
      "Crowns and veneers where clinically indicated",
      "Maintenance guidance for long-term results",
    ],
    icon: "cosmetic",
  },
  {
    id: "preventive",
    title: "Preventive Dental Care",
    summary:
      "Guidance and treatments that help maintain long-term oral health.",
    image: "5355715",
    details:
      "Most dental problems are easier to prevent than to fix. Preventive care combines regular professional cleaning, fluoride and sealants where appropriate, and practical advice on brushing, diet and habits that protects your teeth for life.",
    includes: [
      "Individual risk assessment",
      "Brushing and flossing technique coaching",
      "Diet and habit guidance",
      "Fluoride, sealants and protective treatments",
      "Recall schedule suited to your needs",
    ],
    icon: "preventive",
  },
  {
    id: "emergency",
    title: "Emergency Dental Services",
    summary:
      "Responsive dental attention for urgent dental concerns.",
    image: "16903478",
    details:
      "Dental pain rarely waits for a convenient time. If you are in pain, have swelling, a broken tooth or a knocked-out tooth, contact the clinic and we will advise you on the quickest way to be seen and made comfortable.",
    includes: [
      "Same-day attention for urgent concerns",
      "Pain relief as the first priority",
      "Diagnosis and treatment planning",
      "Antibiotics or referral when clinically needed",
      "Clear aftercare and follow-up plan",
    ],
    icon: "emergency",
  },
  {
    id: "paediatric",
    title: "Paediatric Dentistry",
    summary:
      "Gentle, child-friendly dental care designed to support children's oral health.",
    image: "6501922",
    details:
      "Children who enjoy their dental visits become adults who keep visiting. Our approach with young patients is calm, playful and reassuring — using child-friendly language, careful pacing and lots of encouragement.",
    includes: [
      "Gentle first and nervous-child visits",
      "Early checkups to prevent problems",
      "Fissure sealants and fluoride treatments",
      "Child-friendly education for parents",
      "Digital X-rays sized for children",
    ],
    icon: "paediatric",
  },
];

/* ---------------------------------------------------------------------------
 * Team
 * Placeholder profiles. Replace `name`, `title`, `speciality` and `bio` with
 * verified information before publishing. `photoId` may be left null, in which
 * case a designed placeholder is rendered.
 * ------------------------------------------------------------------------- */

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  speciality: string;
  bio: string;
  photoId: string | null;
  verified: boolean;
};

export const TEAM: TeamMember[] = [
  {
    id: "dentist-1",
    name: "Full Name to be confirmed",
    title: "Lead Dentist",
    speciality: "General & Restorative Dentistry",
    bio: "Biography placeholder — add the verified professional background, focus areas and approach for this team member once confirmed by the clinic.",
    photoId: PHOTOS.teamOne,
    verified: false,
  },
  {
    id: "dentist-2",
    name: "Full Name to be confirmed",
    title: "Dentist",
    speciality: "Cosmetic & Preventive Dentistry",
    bio: "Biography placeholder — add the verified professional background, focus areas and approach for this team member once confirmed by the clinic.",
    photoId: PHOTOS.teamTwo,
    verified: false,
  },
  {
    id: "dentist-3",
    name: "Full Name to be confirmed",
    title: "Dentist",
    speciality: "Paediatric & Family Dentistry",
    bio: "Biography placeholder — add the verified professional background, focus areas and approach for this team member once confirmed by the clinic.",
    photoId: PHOTOS.teamThree,
    verified: false,
  },
  {
    id: "staff-1",
    name: "Full Name to be confirmed",
    title: "Dental Support Staff",
    speciality: "Patient Care & Hygiene Support",
    bio: "Biography placeholder — add the verified professional background, focus areas and approach for this team member once confirmed by the clinic.",
    photoId: PHOTOS.teamFour,
    verified: false,
  },
];

/* ---------------------------------------------------------------------------
 * Testimonials
 * Only publish reviews that have been collected from and confirmed with the
 * patient. The array below is intentionally empty until verified reviews are
 * supplied; the website renders an honest invitation panel instead of
 * inventing quotes, names or ratings.
 * ------------------------------------------------------------------------- */

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [];

/* ---------------------------------------------------------------------------
 * Utilities
 * ------------------------------------------------------------------------- */

export const whatsappLink = (message: string) =>
  `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${CLINIC.phoneRaw}`;

export const navTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
};
