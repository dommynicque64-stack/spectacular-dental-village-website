/**
 * ---------------------------------------------------------------------------
 * Form submission service
 * ---------------------------------------------------------------------------
 * Booking and contact requests are sent to a configurable booking endpoint.
 *
 *   VITE_BOOKING_ENDPOINT  — POST endpoint that accepts JSON (e.g. a custom
 *                            API, Formspree, Getform, Google Apps Script web app)
 *   VITE_BOOKING_API_KEY   — optional bearer token sent with the request
 *
 * When no endpoint is configured the site does NOT pretend a booking succeeded.
 * Instead it hands the request to WhatsApp (the clinic's verified booking
 * channel) and reports a "handed off" state so the patient can confirm by
 * sending the message.
 */

import { CLINIC, whatsappLink } from "@/config/site";

export type FormKind = "booking" | "contact";

export type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  message: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type SubmitOutcome =
  | { status: "submitted" }
  | { status: "handed_off"; whatsappUrl: string }
  | { status: "error"; message: string };

const ENDPOINT = (import.meta.env?.VITE_BOOKING_ENDPOINT as string | undefined)?.trim();
const API_KEY = (import.meta.env?.VITE_BOOKING_API_KEY as string | undefined)?.trim();

const escape = (value: string) => (value || "").trim();

export const bookingMessage = (data: BookingFormData) =>
  [
    `Hello ${CLINIC.name}, I would like to book a dental appointment.`,
    "",
    `Full name: ${escape(data.name)}`,
    `Phone number: ${escape(data.phone)}`,
    data.email ? `Email: ${escape(data.email)}` : "",
    data.date ? `Preferred date: ${escape(data.date)}` : "",
    data.time ? `Preferred time: ${escape(data.time)}` : "",
    data.service ? `Service required: ${escape(data.service)}` : "",
    data.message ? `Additional message: ${escape(data.message)}` : "",
  ]
    .filter(Boolean)
    .join("\n");

export const contactMessage = (data: ContactFormData) =>
  [
    `Hello ${CLINIC.name}, I have an enquiry.`,
    "",
    `Full name: ${escape(data.name)}`,
    `Email: ${escape(data.email)}`,
    `Phone number: ${escape(data.phone)}`,
    `Message: ${escape(data.message)}`,
  ]
    .filter(Boolean)
    .join("\n");

const postToEndpoint = async (
  payload: Record<string, unknown>,
  signal?: AbortSignal,
): Promise<SubmitOutcome> => {
  try {
    const response = await fetch(ENDPOINT as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
      },
      body: JSON.stringify(payload),
      signal,
    });

    if (!response.ok) {
      return {
        status: "error",
        message:
          "We could not reach the booking service (error " +
          response.status +
          "). Please try again, or contact us directly on " +
          CLINIC.phoneDisplay +
          ".",
      };
    }
    return { status: "submitted" };
  } catch (error) {
    if ((error as Error)?.name === "AbortError") {
      return { status: "error", message: "The request was cancelled." };
    }
    return {
      status: "error",
      message:
        "We could not send your request because of a network problem. Please check your connection and try again, or message us on WhatsApp.",
    };
  }
};

export const submitBooking = (
  data: BookingFormData,
  signal?: AbortSignal,
): Promise<SubmitOutcome> => {
  const payload = {
    type: "appointment_request",
    clinic: CLINIC.name,
    submittedAt: new Date().toISOString(),
    ...data,
  };

  if (ENDPOINT) return postToEndpoint(payload, signal);

  const url = whatsappLink(bookingMessage(data));
  window.open(url, "_blank", "noopener,noreferrer");
  return Promise.resolve({ status: "handed_off", whatsappUrl: url });
};

export const submitContact = (
  data: ContactFormData,
  signal?: AbortSignal,
): Promise<SubmitOutcome> => {
  const payload = {
    type: "contact_enquiry",
    clinic: CLINIC.name,
    submittedAt: new Date().toISOString(),
    ...data,
  };

  if (ENDPOINT) return postToEndpoint(payload, signal);

  const url = whatsappLink(contactMessage(data));
  window.open(url, "_blank", "noopener,noreferrer");
  return Promise.resolve({ status: "handed_off", whatsappUrl: url });
};

/** True when a real backend endpoint has been configured. */
export const hasBackendEndpoint = Boolean(ENDPOINT);
