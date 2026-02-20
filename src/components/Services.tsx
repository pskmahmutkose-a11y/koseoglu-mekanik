const services = [
  {
    title: "Evsel Su Tesisatı",
    description:
      "Konut ve iş yerleri için temiz su, sıcak su ve pis su tesisatı döşeme, bakım ve tamir hizmetleri. Banyo, mutfak ve genel tesisat yenileme.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    keywords: ["su tesisatı", "pis su", "banyo tesisatı", "mutfak tesisatı", "tesisat tamir"],
  },
  {
    title: "Evsel Doğalgaz Tesisatı",
    description:
      "Konutlar için İGDAŞ onaylı doğalgaz iç tesisatı, kombi bağlantısı, gaz kaçak tespiti ve periyodik bakım hizmetleri.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    keywords: ["evsel doğalgaz", "kombi bağlantısı", "gaz kaçak tespiti", "İGDAŞ onaylı"],
  },
  {
    title: "Endüstriyel Mekanik",
    description:
      "Kazan dairesi montajı, yangın tesisatı, kalorifer sistemleri, havalandırma ve hidrofor daireleri kurulum ve bakım hizmetleri.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    keywords: ["kazan dairesi", "yangın tesisatı", "kalorifer", "havalandırma", "hidrofor"],
  },
  {
    title: "Doğalgaz & Proje",
    description:
      "İGDAŞ standartlarında doğalgaz tesisatı çekimi, projelendirme ve onay süreçleri. Güvenli ve standartlara uygun kurulum.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    keywords: ["doğalgaz tesisatı", "İGDAŞ", "doğalgaz projesi"],
  },
  {
    title: "Pompa & Motor",
    description:
      "Pompa motor montajı, bakım, onarım ve özel imalat çözümleri. Endüstriyel ve sivil kullanım için pompa motor imalatı.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    keywords: ["pompa motor montajı", "pompa motor imalatı", "pompa bakım"],
  },
  {
    title: "Altyapı & Özel İşler",
    description:
      "Poseftik (foseptik) işleri, yağmur suyu giderleri, atık su ve temiz su sistemleri kurulum, bakım ve onarım.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    keywords: ["poseftik", "foseptik", "yağmur suyu", "atık su", "temiz su"],
  },
  {
    title: "Uzman Kaynak İşçiliği",
    description:
      "Her türlü metal ve boru kaynak işleri. Endüstriyel tesis, konut ve altyapı projeleri için profesyonel kaynak hizmeti.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    keywords: ["kaynak işleri", "boru kaynak", "metal kaynak"],
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-steel-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            HİZMETLERİMİZ
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Kapsamlı{" "}
            <span className="text-orange-500">Mekanik Tesisat Hizmetleri</span>
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            Endüstriyel tesisattan altyapıya kadar tüm mekanik ihtiyaçlarınız
            için Köseoğlu Mekanik yanınızda.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-steel-200 hover:border-orange-500/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-navy-900 text-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-steel-500 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs bg-steel-100 text-steel-600 px-2.5 py-1 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {/* CTA Card */}
          <article className="bg-navy-900 rounded-2xl p-8 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-xl font-bold mb-3">
                Özel Projeniz mi Var?
              </h3>
              <p className="text-steel-300 leading-relaxed mb-6">
                Her türlü mekanik projede size özel çözümler üretiyoruz.
                Hemen bizi arayın.
              </p>
            </div>
            <a
              href="tel:+905309711450"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
