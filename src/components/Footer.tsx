import type { FC } from "react";
import { socialLinks } from "../config";

type IconProps = { className?: string };

const TikTokIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.69a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.12z" />
  </svg>
);

const InstagramIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-.91.04-1.4.2-1.73.32-.44.17-.75.37-1.08.7-.33.33-.53.64-.7 1.08-.12.33-.28.82-.32 1.73-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.91.2 1.4.32 1.73.17.44.37.75.7 1.08.33.33.64.53 1.08.7.33.12.82.28 1.73.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.91-.04 1.4-.2 1.73-.32.44-.17.75-.37 1.08-.7.33-.33.53-.64.7-1.08.12-.33.28-.82.32-1.73.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.91-.2-1.4-.32-1.73a2.85 2.85 0 00-.7-1.08 2.85 2.85 0 00-1.08-.7c-.33-.12-.82-.28-1.73-.32-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 110 10.6 5.3 5.3 0 010-10.6zm0 1.62a3.68 3.68 0 100 7.36 3.68 3.68 0 000-7.36zm5.5-1.9a1.24 1.24 0 11-2.48 0 1.24 1.24 0 012.48 0z" />
  </svg>
);

const iconMap: Record<string, FC<IconProps>> = {
  TikTok: TikTokIcon,
  Instagram: InstagramIcon,
};

export function Footer() {
  const handle = socialLinks[0]?.username.replace("@", "") ?? "Azri Safwan WS";

  return (
    <footer
      className="mt-12 flex animate-fade-up flex-col items-center gap-5 pb-8"
      style={{ animationDelay: "0.56s" }}
    >
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => {
          const Icon = iconMap[social.name];
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-300"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>

      <p className="text-center text-[11px] text-white/30">
        © {new Date().getFullYear()} {handle} · Crafted with Next.js &amp; Tailwind
      </p>
    </footer>
  );
}
