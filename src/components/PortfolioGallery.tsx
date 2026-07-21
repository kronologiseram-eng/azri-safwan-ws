import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "../config";

export function PortfolioGallery() {
  return (
    <section className="mt-12 flex animate-fade-up flex-col" style={{ animationDelay: "0.48s" }}>
      <div className="mb-4 flex items-center justify-between px-1">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Featured Works
        </h2>
        <span className="text-[10px] font-medium uppercase tracking-wider text-purple-300/60">
          {galleryImages.length} pieces
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {galleryImages.map((item) => (
          <a
            key={item.title}
            href="#"
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-purple-400/50"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            {/* gradient + border overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/30 to-transparent opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-95" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition-all duration-300 ease-in-out group-hover:ring-purple-400/30" />

            {/* caption */}
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-purple-300/80">
                {item.category}
              </p>
              <div className="mt-0.5 flex items-center justify-between gap-2">
                <p className="truncate text-xs font-semibold text-white">
                  {item.title}
                </p>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/40 transition-all duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-300" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
