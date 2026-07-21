"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { galleryImages } from "../config";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES_PER_PAGE = 4; // Abang boleh set nak berapa gambar keluar setiap page

export function PortfolioGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1); // 1 = normal, 1.5 = zoom

  // ─── LOGIK PAGINATION ───
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // ─── LOGIK ZOOM MODAL ───
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setZoomScale(1); // Reset zoom bila buka gambar baru
  };

  const toggleZoom = () => {
    setZoomScale((prev) => (prev === 1 ? 1.5 : 1));
  };

  return (
    <section className="mt-12 flex flex-col">
      {/* Header Galeri */}
      <div className="mb-4 flex items-center justify-between px-1">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Featured Works
        </h2>
        <span className="text-[10px] font-medium uppercase tracking-wider text-purple-300/60">
          Page {currentPage} of {totalPages} ({galleryImages.length} items)
        </span>
      </div>

      {/* Grid Gambar (Maksimum 4 Gambar) */}
      <div className="grid grid-cols-2 gap-3">
        {currentImages.map((item) => (
          <button
            key={item.title}
            onClick={() => handleImageClick(item.src)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 text-left transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-purple-400/50"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            {/* Overlay gelap */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/30 to-transparent opacity-80" />
            
            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-purple-300/80">
                {item.category}
              </p>
              <div className="mt-0.5 flex items-center justify-between gap-2">
                <p className="truncate text-xs font-semibold text-white">
                  {item.title}
                </p>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover:text-purple-300 transition-colors" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* BUTANG NAVIGASI PAGES (Hanya keluar jika total item lebih dari had) */}
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

      {/* ─── POP-UP ZOOM MODAL (LIGHTBOX) ─── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            {/* Butang Tutup (X) */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Butang Zoom */}
            <button
              onClick={toggleZoom}
              className="absolute left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all"
            >
              {zoomScale === 1 ? <ZoomIn className="h-5 w-5" /> : <ZoomOut className="h-5 w-5" />}
            </button>

            {/* Gambar Besar */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: zoomScale }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={toggleZoom} // Klik pada gambar pun boleh zoom in/out!
              className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 cursor-zoom-in"
            >
              <Image
                src={selectedImage}
                alt="Zoomed Portfolio"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
