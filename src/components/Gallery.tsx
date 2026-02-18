"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";

const categories = [
  { id: "all", label: "Tümü" },
  { id: "kazan-yangin", label: "Kazan Dairesi & Yangın" },
  { id: "dogalgaz-kalorifer", label: "Doğalgaz & Kalorifer" },
  { id: "pompa-altyapi", label: "Pompa & Altyapı" },
  { id: "evsel-tamirat", label: "Evsel Tamirat" },
];

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  src: string;
}

// Gerçek fotoğraflar — kategorilere göre sıralı
const galleryItems: GalleryItem[] = [
  // === KAZAN DAİRESİ & YANGIN (23 adet) ===
  ...Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    category: "kazan-yangin",
    title: `Kazan Dairesi & Yangın Tesisatı #${i + 1}`,
    description: "Endüstriyel kazan dairesi ve yangın tesisatı projesi",
    src: `/images/kazan-yangin-${String(i + 1).padStart(2, "0")}.jpeg`,
  })),
  // === DOĞALGAZ & KALORİFER (22 adet) ===
  ...Array.from({ length: 22 }, (_, i) => ({
    id: 24 + i,
    category: "dogalgaz-kalorifer",
    title: `Doğalgaz & Kalorifer Sistemi #${i + 1}`,
    description: "İGDAŞ standartlarında doğalgaz ve kalorifer sistemi kurulumu",
    src: `/images/dogalgaz-kalorifer-${String(i + 1).padStart(2, "0")}.jpeg`,
  })),
  // === POMPA & ALTYAPI (23 adet) ===
  ...Array.from({ length: 23 }, (_, i) => ({
    id: 46 + i,
    category: "pompa-altyapi",
    title: `Pompa & Altyapı Çalışması #${i + 1}`,
    description: "Pompa motor imalatı ve altyapı çalışması",
    src: `/images/pompa-altyapi-${String(i + 1).padStart(2, "0")}.jpeg`,
  })),
  // === EVSEL TAMİRAT (23 adet) ===
  ...Array.from({ length: 23 }, (_, i) => ({
    id: 69 + i,
    category: "evsel-tamirat",
    title: `Evsel Tesisat & Tamirat #${i + 1}`,
    description: "Konut ve iş yeri tesisat bakım ve onarım hizmeti",
    src: `/images/evsel-tamirat-${String(i + 1).padStart(2, "0")}.jpeg`,
  })),
];

const ITEMS_PER_PAGE = 12;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (lightboxIndex === null) return;
      if (direction === "prev") {
        setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : visible.length - 1);
      } else {
        setLightboxIndex(lightboxIndex < visible.length - 1 ? lightboxIndex + 1 : 0);
      }
    },
    [lightboxIndex, visible.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, navigateLightbox]);

  // Lightbox açıkken scroll'u kitle
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <section id="galeri" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bölüm başlığı */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            GALERİ
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Tamamlanan <span className="text-orange-500">Projelerimiz</span>
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            Başarıyla tamamladığımız projelerimizden örnekler.
          </p>
        </div>

        {/* Filtreler */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-navy-900 text-white shadow-lg"
                  : "bg-steel-100 text-steel-600 hover:bg-steel-200"
              }`}
            >
              {cat.label}
              {activeFilter === cat.id && (
                <span className="ml-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {filtered.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Galeri grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-steel-200"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/70 transition-all duration-300 flex items-end p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-steel-300 text-xs mt-1">{item.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Daha fazla göster */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Daha Fazla Göster
              <span className="text-orange-400 text-sm">
                ({filtered.length - visibleCount} kalan)
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {lightboxIndex !== null && visible[lightboxIndex] && (
        <div
          className="lightbox-overlay fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Kapat */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            onClick={closeLightbox}
            aria-label="Kapat"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Önceki */}
          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10 bg-black/30 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
            aria-label="Önceki"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Sonraki */}
          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10 bg-black/30 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
            aria-label="Sonraki"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Görsel */}
          <div
            className="max-w-5xl w-full max-h-[85vh] relative rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: "75%" }}>
              <Image
                src={visible[lightboxIndex].src}
                alt={visible[lightboxIndex].title}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Bilgi çubuğu */}
            <div className="bg-navy-900/90 backdrop-blur-sm p-4">
              <h4 className="text-white font-semibold">{visible[lightboxIndex].title}</h4>
              <p className="text-steel-400 text-sm mt-1">{visible[lightboxIndex].description}</p>
              <div className="text-steel-500 text-xs mt-2">
                {lightboxIndex + 1} / {visible.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
