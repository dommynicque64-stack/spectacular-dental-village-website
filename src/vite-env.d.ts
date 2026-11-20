/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOKING_ENDPOINT?: string;
  readonly VITE_BOOKING_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
