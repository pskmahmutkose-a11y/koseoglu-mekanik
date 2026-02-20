"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";

const categories = [
  { id: "all", label: "Tümü" },
  { id: "evsel-tamirat", label: "Evsel Tesisat" },
  { id: "kazan-yangin", label: "Kazan Dairesi & Yangın" },
  { id: "dogalgaz-kalorifer", label: "Doğalgaz & Kalorifer" },
  { id: "pompa-altyapi", label: "Pompa & Altyapı" },
];

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  src: string;
}

// Gerçek fotoğraflar — Evsel Tesisat önce gelecek şekilde sıralı
const galleryItems: GalleryItem[] = [
  // === EVSEL TAMİRAT (23 adet) ===
  ...Array.from({ length: 23 }, (_, i) => ({
    id: 69 + i,
    category: "evsel-tamirat",
    title: `Evsel Tesisat & Tamirat #${i + 1}`,
    description: "Konut ve iş yeri tesisat bakım ve onarım hizmeti",
    src: `/images/evsel-tamirat-${String(i + 1).padStart(2, "0")}.jpeg`,
  })),
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
    <section id="galeri" className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
      {/* Arka plan desen */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-600/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bölüm başlığı */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
            TAMAMLANAN PROJELERİMİZ
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            30 Yılda <span className="text-orange-500">1000+</span> Başarılı Proje
          </h2>
          <p className="text-steel-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Her projede kalite ve güvenliği ön planda tutarak İstanbul&apos;un dört bir yanında gerçekleştirdiğimiz çalışmalardan örnekler.
          </p>

          {/* İstatistik şeridi */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { count: "23", label: "Evsel Tesisat" },
              { count: "23", label: "Kazan & Yangın" },
              { count: "22", label: "Doğalgaz & Kalorifer" },
              { count: "23", label: "Pompa & Altyapı" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                <span className="text-orange-400 font-bold text-lg">{stat.count}</span>
                <span className="text-steel-300 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filtreler */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeFilter === cat.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-white/10 text-steel-300 hover:bg-white/20 hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
              {activeFilter === cat.id && (
                <span className="ml-2 bg-white/20 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {filtered.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Galeri grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {visible.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-navy-800 border border-white/5 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/75 transition-all duration-300 flex items-end p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-steel-300 text-xs mt-1">{item.description}</p>
                </div>
              </div>

              {/* Zoom ikonu */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
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
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/30"
            >
              Daha Fazla Göster
              <span className="bg-white/20 text-white text-sm px-2 py-0.5 rounded-full">
                +{filtered.length - visibleCount}
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
