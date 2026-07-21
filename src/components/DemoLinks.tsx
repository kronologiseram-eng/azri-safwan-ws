import { ArrowUpRight } from "lucide-react";
import { demoLinks } from "../config";

export function DemoLinks() {
  return (
    <section className="mt-10 flex animate-fade-up flex-col gap-3" style={{ animationDelay: "0.4s" }}>
      <h2 className="px-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
        Demo Links
      </h2>

      {demoLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group relative flex items-center gap-4 overflow-hidden rounded-2xl p-4 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-white/[0.07]"
          >
            {/* hover glow */}
            <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/20 opacity-0 blur-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-100" />

            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 text-purple-300 ring-1 ring-inset ring-white/10">
              <Icon className="h-5 w-5" />
            </span>

            <span className="relative flex min-w-0 flex-1 flex-col">
              <span className="text-sm font-semibold text-white">{link.title}</span>
              <span className="truncate text-xs text-white/50">{link.description}</span>
            </span>

            <ArrowUpRight className="relative h-4 w-4 shrink-0 text-white/30 transition-all duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-300" />
          </a>
        );
      })}
    </section>
  );
}
