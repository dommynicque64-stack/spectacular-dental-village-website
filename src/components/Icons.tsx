import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* --- Brand mark -------------------------------------------------------- */

export function ToothMark({ className = "h-9 w-9", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true" {...props}>
      <path
        d="M24 7c-4.6 0-8.2 2-11 6.8C10.2 18.6 10.9 24.3 12.2 30.4c1.1 5.3 2.9 12.3 6.1 13.4 2.9 1 3.4-6.3 5.1-6.3s2.2 7.3 5.1 6.3c3.2-1.1 5-8.1 6.1-13.4 1.3-6.1 2-11.8-.8-16.6C32.2 9 28.6 7 24 7Z"
        fill="currentColor"
      />
      <path
        d="M37.5 10.5l1.35 3.35L42.2 15.2l-3.35 1.35L37.5 19.9l-1.35-3.35L32.8 15.2l3.35-1.35 1.35-3.35Z"
        fill="#C2596B"
      />
    </svg>
  );
}

/* --- Interface icons --------------------------------------------------- */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.2 5.6a1.4 1.4 0 0 0 1.6 0L21 7" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <path d="M20 10.5c0 5.2-8 12-8 12s-8-6.8-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10.3" r="2.9" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.3 2.6 2.6 5-5.4" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4", filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17.1l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9L12 3.6Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <path d="M12 2.8 4.5 5.9v5.6c0 4.6 3.1 8.4 7.5 9.7 4.4-1.3 7.5-5.1 7.5-9.7V5.9L12 2.8Z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <path d="M12 20.3s-7.8-4.6-7.8-10A4.6 4.6 0 0 1 12 7.4a4.6 4.6 0 0 1 7.8 2.9c0 5.4-7.8 10-7.8 10Z" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 19.2a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16.2 5.4a3.2 3.2 0 0 1 0 5.2M17.6 13.6a6.2 6.2 0 0 1 3.6 5.6" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="9" r="5.2" />
      <path d="m8.6 13.4-1.3 7.4L12 18.4l4.7 2.4-1.3-7.4" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.6 16.4 19.4 18.6 21.6 19.4 19.4 20.2 18.6 22.4 17.8 20.2 15.6 19.4 17.8 18.6 18.6 16.4Z" />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <rect x="2.8" y="6" width="18.4" height="13" rx="2.6" />
      <path d="M16 12.5h2.6" />
      <path d="M2.8 10.2h18.4" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.45-.13-2.43 0-4.1 1.49-4.1 4.21V9.9H7.5V13h2.65v8h3.35Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.52 3.68 1.44 5.2L2 22l5.1-1.6a9.8 9.8 0 0 0 4.94 1.32h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm5.75 14.06c-.24.68-1.4 1.3-1.94 1.34-.5.05-1.12.09-1.8-.11-.42-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.2-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.26-.29.57-.36.76-.36h.55c.18 0 .41-.07.64.49.24.57.8 1.97.87 2.11.07.14.12.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.29.72 1.18 1.54 1.91 1.06.94 1.95 1.24 2.23 1.37.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.29.37-.24.63-.14.25.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.69-.17 1.37Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M9.4 5.2C6.3 6.7 4.4 9.4 4.4 13v5.8h6.2v-6.4H7.4c0-2.1.9-3.6 2.9-4.6l-.9-2.6Zm10 0c-3.1 1.5-5 4.2-5 7.8v5.8h6.2v-6.4h-3.2c0-2.1.9-3.6 2.9-4.6l-.9-2.6Z" />
    </svg>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.8v5M12 16.2h.01" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.2M12 7.8h.01" />
    </svg>
  );
}

export function DirectionsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <path d="M20.5 3.5 3.9 9.2c-.9.3-.9 1.6.1 1.8l6.6 1.9 1.9 6.6c.2 1 1.5 1 1.8.1l5.7-16.6c.3-.9-.7-1.6-1.5-1.1Z" />
      <path d="m10.6 12.8 3.3-3.3" />
    </svg>
  );
}

export function ClinicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...base} {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V6.5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 15 6.5V21" />
      <path d="M15 10h3.2A1.8 1.8 0 0 1 20 11.8V21" />
      <path d="M8 8.5h4M8 12h4M8 15.5h4" />
    </svg>
  );
}

export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <rect width="48" height="48" rx="13" fill="#630625" />
      <path
        d="M24 8c-4.3 0-7.7 1.9-10.3 6.4-2.6 4.4-2 9.8-0.8 15.5 1 5 2.7 11.5 5.8 12.6 2.7.9 3.2-5.9 4.8-5.9s2.1 6.8 4.8 5.9c3.1-1.1 4.8-7.6 5.8-12.6 1.2-5.7 1.8-11.1-.8-15.5C31.7 9.9 28.3 8 24 8Z"
        fill="#FFFFFF"
      />
      <path
        d="M37.2 11.2l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z"
        fill="#C2596B"
      />
    </svg>
  );
}

/* --- Service icons ----------------------------------------------------- */

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const props: IconProps = { className, "aria-hidden": true };
  switch (name) {
    case "checkup":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M4 19V9.5L12 5l8 4.5V19" />
          <path d="M9.5 19v-5h5v5" />
          <path d="M12 9.6h.01" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
        </svg>
      );
    case "filling":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M12 3.5c-2 0-3.6.8-4.7 2.7-1.1 1.8-1 4-.5 6.3.4 1.9 1.2 4.4 2.6 4.8 1.2.4 1.5-2.4 2.2-2.4s1 2.8 2.2 2.4c1.4-.4 2.2-2.9 2.6-4.8.5-2.3.6-4.5-.5-6.3C15.6 4.3 14 3.5 12 3.5Z" />
          <path d="M16.5 15.5h5" />
        </svg>
      );
    case "extraction":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M8 3.5h8" />
          <path d="m10 3.5 1.4 4.2L12 3.5l.6 4.2L14 3.5" />
          <path d="M9.6 7.7 10.4 17l1.2 3.5 1.6-3.5 1.2-9.3" />
        </svg>
      );
    case "rootcanal":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M12 3c-2.1 0-3.8.9-4.9 2.8-1.2 2-1 4.4-.5 7 .4 2.1 1.3 4.8 2.7 5.3 1.3.4 1.6-2.6 2.3-2.6s1 3 2.3 2.6c1.4-.5 2.3-3.2 2.7-5.3.5-2.6.7-5-.5-7C15.8 3.9 14.1 3 12 3Z" />
          <path d="M12 8.6v4.8M12 13.4l-1.7 2.2M12 13.4l1.7 2.2" />
        </svg>
      );
    case "whitening":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M9.5 4h5v4.5a2.5 2.5 0 0 1-5 0V4Z" />
          <path d="M7.5 10.5h9l-.6 8.2a1 1 0 0 1-1 .9h-5.8a1 1 0 0 1-1-.9L7.5 10.5Z" />
          <path d="m18 5 .8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8.8-1.8Z" />
        </svg>
      );
    case "denture":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M4 9.5C4 7 6.2 5 8.5 5c1.5 0 2.6.7 3.5.7S14.5 5 16 5c2.3 0 4 2 4 4.5 0 3-1.6 4-1.6 6.5 0 1.7-1 3-2.3 3-1.2 0-2-.8-2.1-2" />
          <path d="M7.4 12.5c.8 1 1.7 1.4 2.9 1.4M16.6 12.5c-.8 1-1.7 1.4-2.9 1.4" />
        </svg>
      );
    case "cosmetic":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M12 3c-2.1 0-3.8.9-4.9 2.8-1.2 2-1 4.4-.5 7 .4 2.1 1.3 4.8 2.7 5.3 1.3.4 1.6-2.6 2.3-2.6s1 3 2.3 2.6c1.4-.5 2.3-3.2 2.7-5.3.5-2.6.7-5-.5-7C15.8 3.9 14.1 3 12 3Z" />
          <path d="M3.5 9.5 6 8M20.5 9.5 18 8" />
        </svg>
      );
    case "preventive":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.6V12l3 2" />
          <path d="m17.6 5.4.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6.6-1.5Z" />
        </svg>
      );
    case "emergency":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <path d="M10.3 3.9 2.6 17.2a1.8 1.8 0 0 0 1.5 2.8h15.8a1.8 1.8 0 0 0 1.5-2.8L13.7 3.9a1.8 1.8 0 0 0-3.4 0Z" />
          <path d="M12 9.5v4.2M12 17h.01" />
        </svg>
      );
    case "paediatric":
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <circle cx="12" cy="9" r="5" />
          <path d="M9.5 8.8h.01M14.5 8.8h.01" />
          <path d="M9.8 11.2c.7.7 1.4 1 2.2 1s1.5-.3 2.2-1" />
          <path d="M5.5 20.5a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v4.5M12 16h.01" />
        </svg>
      );
  }
}
