"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Yıl Deneyim", description: "Sektörde kesintisiz hizmet" },
  { value: 1000, suffix: "+", label: "Başarılı Proje", description: "Tamamlanan endüstriyel proje" },
  { value: 39, suffix: "", label: "İlçede Hizmet", description: "İstanbul genelinde kapsama" },
  { value: 7, suffix: "/24", label: "Destek", description: "Kesintisiz teknik destek hattı" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration, start]);

  return count;
}

function StatCard({ value, suffix, label, description, start }: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);

  return (
    <div className="text-center p-6 md:p-8">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2">
        {count}
        <span className="text-orange-400">{suffix}</span>
      </div>
      <div className="text-lg md:text-xl font-semibold text-white mb-1">{label}</div>
      <div className="text-steel-400 text-sm">{description}</div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tecrube" ref={sectionRef} className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            TECRÜBE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Rakamlarla <span className="text-orange-500">Köseoğlu Mekanik</span>
          </h2>
          <p className="text-steel-400 text-lg max-w-2xl mx-auto">
            Ramazan Köse liderliğinde İstanbul genelinde
            güvenilir mekanik tesisat hizmetleri.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-navy-800/50 backdrop-blur-sm rounded-2xl border border-navy-700">
              <StatCard {...stat} start={visible} />
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-navy-800/80 border border-navy-600 rounded-2xl px-8 py-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-lg shrink-0">
              RK
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Ramazan Köse</div>
              <div className="text-steel-400 text-sm">
                Kurucu &bull; Uzman Mekanik Tesisatçı
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
