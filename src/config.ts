import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Palette,
  FileCode2,
  Database,
  Sparkles,
  Home,
  Heart,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface TechBadge {
  name: string;
  icon: LucideIcon;
}

export interface DemoLink {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
}

export interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
}

/* ------------------------------------------------------------------ */
/*  Profile                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Azri Safwan WS",
  avatar: "azri-image.jpg",
  headline:
    "Suka berkongsi hasil reka bentuk web & kod Next.js di masa lapang.",
  whatsappUrl:
    "https://wa.me/601121281024?text=Hai%20Azri!%20Saya%20nak%20bincang%20tentang%20projek%20website.",
  whatsappLabel: "Bincang Projek / Sembang Website (WhatsApp) ☕",
} as const;

/* ------------------------------------------------------------------ */
/*  Tech badges                                                        */
/* ------------------------------------------------------------------ */

export const techBadges: TechBadge[] = [
  { name: "Next.js 14", icon: Code2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Supabase", icon: Database },
];

/* ------------------------------------------------------------------ */
/*  Demo links                                                         */
/* ------------------------------------------------------------------ */

export const demoLinks: DemoLink[] = [
  {
    title: "Aether AI",
    description: "Platform AI chatbot dengan reka bentuk glassmorphism.",
    url: "https://example.com/aether-ai",
    icon: Sparkles,
  },
  {
    title: "Ejen Hartanah Card",
    description: "Kad digital ejen hartanah yang interaktif & elegan.",
    url: "https://example.com/ejen-hartanah",
    icon: Home,
  },
  {
    title: "MUA Sarah Card",
    description: "Kad digital makeup artist lengkap dengan galeri cantik.",
    url: "https://example.com/mua-sarah",
    icon: Heart,
  },
];

/* ------------------------------------------------------------------ */
/*  Portfolio gallery                                                  */
/* ------------------------------------------------------------------ */

export const galleryImages: GalleryImage[] = [
  {
    src: "agent-mockup.jpg",
    title: "Agent Hartanah Card",
    category: "Link In Bio",
  },
  {
    src: "mua-mockup.jpg",
    title: "Make Up Artist Card",
    category: "Digital Card",
  },
];

/* ------------------------------------------------------------------ */
/*  Social links                                                       */
/* ------------------------------------------------------------------ */

export const socialLinks: SocialLink[] = [
  {
    name: "TikTok",
    url: "tiktok.com/@azrisafwan_ws",
    username: "@azrisafwanws",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/azrisafwan_ws?igsh=MWRxbzF2ZnlyaWwzYw==",
    username: "@azrisafwanws",
  },
];
