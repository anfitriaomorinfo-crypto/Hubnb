// Cores oficiais das plataformas de hospedagem
export const PLATFORM_COLORS = {
  "Airbnb": {
    bg: "bg-[#FF385C]",
    text: "text-[#FF385C]",
    border: "border-[#FF385C]",
    bgLight: "bg-[#FF385C]/10",
    hex: "#FF385C"
  },
  "Booking.com": {
    bg: "bg-[#003B95]",
    text: "text-[#003B95]",
    border: "border-[#003B95]",
    bgLight: "bg-[#003B95]/10",
    hex: "#003B95"
  },
  "VRBO": {
    bg: "bg-[#0D3B66]",
    text: "text-[#0D3B66]",
    border: "border-[#0D3B66]",
    bgLight: "bg-[#0D3B66]/10",
    hex: "#0D3B66"
  },
  "Decolar": {
    bg: "bg-[#FF6600]",
    text: "text-[#FF6600]",
    border: "border-[#FF6600]",
    bgLight: "bg-[#FF6600]/10",
    hex: "#FF6600"
  },
  "KAYAK": {
    bg: "bg-[#FF690F]",
    text: "text-[#FF690F]",
    border: "border-[#FF690F]",
    bgLight: "bg-[#FF690F]/10",
    hex: "#FF690F"
  }
} as const;

export type PlatformName = keyof typeof PLATFORM_COLORS;

export function getPlatformColor(platform: string) {
  return PLATFORM_COLORS[platform as PlatformName] || {
    bg: "bg-gray-600",
    text: "text-gray-600",
    border: "border-gray-600",
    bgLight: "bg-gray-100",
    hex: "#6B7280"
  };
}
