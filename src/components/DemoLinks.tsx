"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { demoLinks } from "../config";

const LINKS_PER_PAGE = 3; // Had jualan link setiap halaman

export function DemoLinks() {
  const [currentPage, setCurrentPage] = useState(1);

  // ─── LOGIK PAGINATION ───
  const totalPages = Math.ceil(demoLinks.length / LINKS_PER_PAGE);
  const startIndex = (currentPage - 1) * LINKS_PER_PAGE;
  const endIndex = startIndex + LINKS_PER_PAGE;
  const currentLinks = demoLinks.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="mt-10 flex flex-col">
      {/* Header Link */}
      <div className="mb-4 flex items-center justify-between px-1">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Demo Links
        </h2>
        {totalPages > 1 && (
          <span className="text-[10px] font-medium uppercase tracking-wider text-purple-300/60">
            Page {currentPage} of {totalPages}
          </span>
        )}
      </div>

      {/* Senarai Link */}
      <div className="flex flex-col gap-3">
        {currentLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group relative flex items-center gap-4 overflow-hidden rounded-2xl p-4 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-white/[0.07]"
            >
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 text-purple-300 ring-1 ring-inset ring-white/10">
                <Icon className="h-5 w-5" />
              </span>

              <span className="relative flex min-w-0 flex-1 flex-col">
                <span className="text-sm font-semibold text-white">{link.title}</span>
                <span className="truncate text-xs text-white/50">{link.description}</span>
              </span>

              <ArrowUpRight className="relative h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-300" />
            </a>
          );
        })}
      </div>

      {/* Butang Navigasi Link */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="glass flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-all disabled:opacity-20 disabled:pointer-events-none hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-[11px] text-white/40 font-medium">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="glass flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-all disabled:opacity-20 disabled:pointer-events-none hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}
