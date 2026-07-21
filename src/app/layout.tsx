import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azri Safwan WS — Link in Bio",
  description:
    "Suka berkongsi hasil reka bentuk web & kod Next.js di masa lapang. Bincang projek atau sembang website melalui WhatsApp.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ms">
      <body className="bg-[#030303] text-white antialiased">{children}</body>
    </html>
  );
}
