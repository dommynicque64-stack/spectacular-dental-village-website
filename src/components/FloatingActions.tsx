import { CLINIC, telLink, whatsappLink } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={telLink}
        aria-label={`Call ${CLINIC.name} on ${CLINIC.phoneDisplay}`}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-brand p-3.5 text-white shadow-lift transition-transform duration-300 hover:scale-105"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink(`Hello ${CLINIC.name}, I would like to make an enquiry.`)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        className="float-slow flex h-13 w-13 items-center justify-center rounded-full bg-accent p-3.5 text-white shadow-lift transition-transform duration-300 hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
