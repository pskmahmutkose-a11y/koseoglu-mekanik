export default function Contact() {
  return (
    <section id="iletisim" className="py-20 md:py-28 bg-steel-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            İLETİŞİM
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Bize <span className="text-orange-500">Ulaşın</span>
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            30 yıllık tecrübemiz ile İstanbul&apos;un her noktasına mobil servis
            hizmeti sunuyoruz. Hemen bizi arayın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {/* Owner card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-steel-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  RK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">Ramazan Köse</h3>
                  <p className="text-steel-500">
                    Kurucu &bull; 30 Yıllık Mekanik Tecrübesi
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+905309711450"
                className="flex items-center gap-4 p-4 bg-orange-500/5 hover:bg-orange-500/10 rounded-xl transition-colors group mb-4"
              >
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-steel-500">Telefon</div>
                  <div className="text-lg font-bold text-navy-900">0530 971 14 50</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/905309711450?text=Merhaba%2C%20K%C3%B6seo%C4%9Flu%20Mekanik%27ten%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366]/5 hover:bg-[#25D366]/10 rounded-xl transition-colors group mb-4"
              >
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-steel-500">WhatsApp</div>
                  <div className="text-lg font-bold text-navy-900">WhatsApp Destek Hattı</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-navy-900/5 rounded-xl">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-steel-500">Hizmet Bölgesi</div>
                  <div className="text-lg font-bold text-navy-900">İstanbul Geneli</div>
                  <div className="text-sm text-steel-400">Tüm ilçelere mobil servis</div>
                </div>
              </div>
            </div>

            {/* Work hours */}
            <div className="bg-navy-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">Çalışma Saatleri</h4>
              <div className="space-y-2 text-steel-300">
                <div className="flex justify-between">
                  <span>Pazartesi - Cumartesi</span>
                  <span className="text-white font-semibold">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span className="text-white font-semibold">Randevulu</span>
                </div>
                <div className="mt-3 pt-3 border-t border-navy-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold text-sm">
                    Acil durumlar için 7/24 ulaşılabilir
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map area */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-steel-200 h-[400px] lg:h-full min-h-[400px] relative">
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 bg-steel-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-navy-900/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-navy-900/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                  </div>
                  <p className="text-navy-900/40 font-medium">Google Haritalar Alanı</p>
                  <p className="text-navy-900/30 text-sm mt-1">
                    Google Maps API anahtarı ile entegre edilecek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
