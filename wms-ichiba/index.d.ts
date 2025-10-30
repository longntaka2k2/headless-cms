export {};

declare global {
  interface Window {
    region: string | null;
    currency: string | null;
    language: string | null;
    dateFormat: string;
    timeZone: string;
  }
}
