import Image from "next/image";
import { profile, techBadges } from "../config";

export function Header() {
  return (
    <header className="flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="relative animate-fade-up">
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-400 opacity-70 blur-md" />
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-400" />
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[#030303] sm:h-32 sm:w-32">
          <Image
            src={profile.avatar}
            alt={`${profile.name} avatar`}
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
        <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-[#030303] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
      </div>

      {/* Name */}
      <h1
        className="mt-6 animate-fade-up text-3xl font-bold tracking-tight text-white sm:text-4xl"
        style={{ animationDelay: "0.08s" }}
      >
        {profile.name}
      </h1>

      {/* Bio */}
      <p
        className="mt-3 max-w-xs animate-fade-up text-sm leading-relaxed text-white/60 sm:text-base"
        style={{ animationDelay: "0.16s" }}
      >
        {profile.headline}
      </p>

      {/* Tech badges */}
      <div
        className="mt-6 flex animate-fade-up flex-wrap items-center justify-center gap-2"
        style={{ animationDelay: "0.24s" }}
      >
        {techBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <span
              key={badge.name}
              className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white/70 transition-all duration-300 ease-in-out hover:border-purple-400/40 hover:text-white"
            >
              <Icon className="h-3.5 w-3.5 text-purple-300" />
              {badge.name}
            </span>
          );
        })}
      </div>
    </header>
  );
}
