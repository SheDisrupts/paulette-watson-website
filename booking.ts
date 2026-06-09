export const BOOK_URL = "https://paulettewatson.setmore.com/services/03fded09-6157-4c03-b28e-4f04c2e51290";

export function trackBookingClick(label?: string) {
  try {
    const detail = { label: label || "Book a Discovery Call", url: BOOK_URL, timestamp: Date.now() };
    if (typeof window !== "undefined" && "dataLayer" in window) {
      (window as any).dataLayer.push({
        event: "booking_click",
        booking_label: detail.label,
        booking_url: detail.url,
      });
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("booking-click", { detail }));
    }
  } catch (_) {
    // silently fail
  }
}
