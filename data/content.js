/* ============================================================
   content.js  —  THE ONLY FILE YOU NEED TO EDIT
   Everything on the site is generated from this object.

   BILINGUAL: any text can be either
       "plain string"            → shown in both languages
       { en: "...", ar: "..." }  → shown per language

   All prose below is taken VERBATIM from the two CVs:
       en → Gehad_Alshabi_CV_EN.pdf
       ar → Gehad_Alshabi_CV_AR.pdf
   ============================================================ */

window.CONTENT = {

  /* ---------- 1. IDENTITY ---------- */
  identity: {
    name:   { en: "Gehad Fatehi Alshabi", ar: "جهاد فتحي الشعبي" },
    handle: "jeemdev",
    // The CV headline, split into the rotating titles
    roles: [
      { en: "CAD/CAM & Mechatronics Engineer", ar: "مهندس ميكاترونكس CAD/CAM" },
      { en: "Full-Stack Developer",            ar: "مطوّر Full-Stack" },
      { en: "DevOps & AI Automation",          ar: "DevOps وأتمتة بالذكاء الاصطناعي" },
    ],
    // First sentence of the CV professional summary
    tagline: {
      en: "CAD/CAM and Mechatronics Engineer with hands-on experience in sheet metal design and CNC fiber laser cutting of stainless steel using SolidWorks, AutoCAD and CypCut/CypNest.",
      ar: "مهندس ميكاترونكس CAD/CAM امتلك خبرة عملية في تصميم منتجات الصاج المعدني وقص الفولاذ المقاوم للصدأ (الستانلس ستيل) على ماكينات CNC للقص بالفايبر ليزر باستخدام برامج SolidWorks وAutoCAD وCypCut/CypNest.",
    },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    avatar:   "assets/img/avatar.jpg",
    available: true,
  },

  /* ---------- 2. CONTACT ---------- */
  contact: {
    email: "gehadalshabi@jeemdev.net",
    phone: "+966 53 859 0948",            // set to "" to hide it from the site
    links: [
      { label: { en: "LinkedIn", ar: "لينكد إن" },     icon: "linkedin", url: "https://linkedin.com/in/gehad-al-shabi" },
      { label: { en: "Google Play", ar: "جوجل بلاي" }, icon: "globe",    url: "https://play.google.com/store/apps/details?id=com.golazo.wc2026" },
      { label: { en: "Email", ar: "البريد" },          icon: "mail",     url: "mailto:gehadalshabi@jeemdev.net" },
    ],
    // Formspree / Getform endpoint. Empty = the form opens the visitor's mail client.
    formEndpoint: "",
  },

  /* ---------- 3. STATS (hero counters) ---------- */
  stats: [
    { value: 6, suffix: "+", label: { en: "Years hands-on",      ar: "سنوات خبرة" } },
    { value: 2, suffix: "",  label: { en: "Apps shipped",        ar: "تطبيقات منشورة" } },
    { value: 7, suffix: "",  label: { en: "Play Store releases", ar: "إصدارات على المتجر" } },
    { value: 5, suffix: "",  label: { en: "Certifications",      ar: "شهادات ودورات" } },
  ],

  /* ---------- 4. ABOUT ----------
     The rest of the CV professional summary, word for word.
  ------------------------------- */
  about: {
    body: [
      {
        en: "Skilled in converting engineering drawings into production-ready cutting files, optimizing nesting to reduce material waste, and setting laser cutting parameters.",
        ar: "متمكن من تحويل الرسومات الهندسية إلى ملفات قص جاهزة للإنتاج، وتحسين توزيع القطع (Nesting) لتقليل هدر الخامات، وضبط معاملات القص بالليزر.",
      },
      {
        en: "Strong background in industrial automation, electrical control panels and solar power systems, with HSE training and a focus on quality and safe production.",
        ar: "عندي خبرة في الأتمتة الصناعية ولوحات التحكم الكهربائية وأنظمة الطاقة الشمسية، مع تدريب في الصحة والسلامة والبيئة (HSE) وتركيز على الجودة والإنتاج الآمن.",
      },
      {
        en: "Also builds and operates full-stack software: a WhatsApp customer service chatbot for the company and two React Native mobile products backed by TypeScript APIs, Redis and Docker containers on a self-managed Linux server, including LLM-based automation.",
        ar: "كما لدي الخبرة لعمل حلول برمجية متكاملة، منها روبوت محادثة واتساب لخدمة عملاء الشركة، وتطبيقات الهاتف باستخدام React Native مدعومان بواجهات برمجية بلغة TypeScript وقواعد Redis وحاويات Docker على خادم Linux اديره بنفسي، مع أتمتة تعتمد على نماذج الذكاء الاصطناعي.",
      },
    ],
    facts: [
      { k: { en: "Based in",  ar: "المقر" },  v: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" } },
      { k: { en: "Education", ar: "التعليم" }, v: { en: "B.Sc. Mechatronics Engineering, Jun 2024", ar: "بكالوريوس هندسة الميكاترونكس، يونيو 2024" } },
      { k: { en: "Arabic",    ar: "العربية" }, v: { en: "Native", ar: "اللغة الأم" } },
      { k: { en: "English",   ar: "الإنجليزية" }, v: { en: "Professional working proficiency (C1)", ar: "مستوى مهني متقدم (C1)" } },
    ],
  },

  /* ---------- 5. SKILLS ----------
     The CV skills list, split by its own headings. No ratings.
  --------------------------------- */
  skills: [
    {
      group: { en: "CAD/CAM", ar: "التصميم والتصنيع CAD/CAM" },
      items: [
        "SolidWorks",
        { en: "3D modeling",  ar: "نمذجة ثلاثية الأبعاد" },
        { en: "Sheet metal",  ar: "الصاج المعدني" },
        { en: "Flat patterns", ar: "الفرد Flat Pattern" },
        "AutoCAD",
        { en: "2D drafting",  ar: "رسم ثنائي الأبعاد" },
        "DXF / DWG",
        "CypCut",
        "CypNest",
      ],
    },
    {
      group: { en: "Manufacturing", ar: "التصنيع" },
      items: [
        { en: "CNC fiber laser cutting", ar: "القص بالفايبر ليزر CNC" },
        { en: "Nesting optimization",    ar: "تحسين توزيع القطع (Nesting)" },
        { en: "Laser cutting parameters (power, speed, focus, assist gas)",
          ar: "ضبط معاملات القص (القدرة، السرعة، البؤرة، غاز المساعدة)" },
        { en: "Stainless steel fabrication", ar: "تصنيع الستانلس ستيل" },
        { en: "Sheet metal design for bending", ar: "تصميم الصاج للثني" },
        { en: "Shop drawings", ar: "الرسومات التنفيذية" },
      ],
    },
    {
      group: { en: "Automation & Control", ar: "الأتمتة والتحكم" },
      items: [
        { en: "Industrial control panel design and installation", ar: "تصميم وتركيب لوحات التحكم الصناعية" },
        { en: "Classic control circuits", ar: "دوائر التحكم الكلاسيكي" },
        "Modbus", "Profibus", "EtherNet/IP",
        { en: "PLC — Siemens", ar: "PLC — Siemens" },
        { en: "PLC — Allen-Bradley", ar: "PLC — Allen-Bradley" },
        { en: "PLC — Schneider Electric", ar: "PLC — Schneider Electric" },
      ],
    },
    {
      group: { en: "Electrical & Energy", ar: "الكهرباء والطاقة" },
      items: [
        { en: "Solar PV system design and installation", ar: "تصميم وتركيب أنظمة الطاقة الشمسية" },
        { en: "Power distribution layouts", ar: "مخططات توزيع الطاقة" },
        { en: "Electrical troubleshooting and maintenance", ar: "صيانة الأنظمة الكهربائية وتشخيص الأعطال" },
      ],
    },
    {
      group: { en: "Software Development", ar: "تطوير البرمجيات" },
      items: [
        "React Native", "Expo", "TypeScript", "Node.js", "Express", "Redis", "Zod",
        { en: "REST APIs", ar: "واجهات REST APIs" },
        "WhatsApp Cloud API (Meta)",
        "Firebase Cloud Messaging",
        "Sentry",
        { en: "i18n with right-to-left support", ar: "تعدد اللغات ودعم الاتجاه من اليمين لليسار" },
      ],
    },
    {
      group: { en: "DevOps & Infrastructure", ar: "البنية التحتية وDevOps" },
      items: [
        { en: "Ubuntu Linux server administration", ar: "إدارة خوادم Ubuntu Linux" },
        "Docker", "Docker Compose",
        { en: "Caddy reverse proxy with automatic HTTPS (Let's Encrypt)",
          ar: "خادم وكيل Caddy مع شهادات HTTPS تلقائية (Let's Encrypt)" },
        { en: "UFW / iptables firewalls", ar: "جدران الحماية UFW وiptables" },
        { en: "SSH hardening", ar: "تأمين SSH" },
        "Cloudflare DNS",
        { en: "cron scheduling", ar: "جدولة المهام (cron)" },
        { en: "Backups and monitoring", ar: "النسخ الاحتياطي والمراقبة" },
        "Contabo VPS",
      ],
    },
    {
      group: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
      items: [
        { en: "LLM integration in production (DeepSeek, OpenAI-compatible APIs)",
          ar: "دمج نماذج اللغة الكبيرة (DeepSeek وواجهات متوافقة مع OpenAI) في بيئة الإنتاج" },
        { en: "Agentic AI coding tools (Claude Code, MCP servers, custom skills)",
          ar: "أدوات البرمجة بالوكلاء الأذكياء (Claude Code، خوادم MCP، مهارات مخصصة)" },
        { en: "Prompt design", ar: "هندسة الأوامر (Prompt Design)" },
        { en: "Automated content pipelines", ar: "خطوط أتمتة المحتوى" },
        { en: "Programmatic SVG image generation", ar: "توليد الصور برمجياً (SVG)" },
      ],
    },
    {
      group: { en: "Programming", ar: "البرمجة" },
      items: ["JavaScript", "TypeScript", "Python", "C", "C++", "Flutter"],
    },
    {
      group: { en: "Software", ar: "البرامج" },
      items: ["MATLAB", "Proteus", "Multisim", "Cisco Packet Tracer", "VS Code",
              { en: "Microsoft Office (Word, Excel, PowerPoint)", ar: "Microsoft Office" }],
    },
    {
      group: { en: "Soft Skills", ar: "المهارات الشخصية" },
      items: [
        { en: "Problem solving", ar: "حل المشكلات" },
        { en: "Communication and teamwork", ar: "التواصل والعمل الجماعي" },
        { en: "Time management", ar: "إدارة الوقت" },
        { en: "Adaptability", ar: "القدرة على التكيف" },
      ],
    },
  ],

  /* ---------- 6. EXPERIENCE TIMELINE ---------- */
  experience: [
    {
      role:     { en: "CAD/CAM Engineer", ar: "مهندس CAD/CAM" },
      company:  { en: "Masdar Al Maaden", ar: "شركة مصدر المعادن" },
      period:   { en: "Dec 2025 – Present", ar: "ديسمبر 2025 – حتى الآن" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
      points: [
        { en: "Design stainless steel parts and products in SolidWorks and AutoCAD, including 3D models, sheet metal flat patterns for bending, and shop drawings.",
          ar: "تصميم قطع ومنتجات الستانلس ستيل باستخدام SolidWorks وAutoCAD، بما في ذلك النماذج ثلاثية الأبعاد وفرد الصاج (Flat Pattern) للثني والرسومات التنفيذية." },
        { en: "Convert customer and engineering drawings into production-ready 2D DXF/DWG cutting files for CNC fiber laser cutting machines.",
          ar: "تحويل رسومات العملاء والرسومات الهندسية إلى ملفات قص ثنائية الأبعاد (DXF/DWG) جاهزة للإنتاج على ماكينات القص بالليزر الفايبر CNC." },
        { en: "Nest parts on stainless steel sheets using CypNest to maximize material utilization and reduce scrap.",
          ar: "توزيع القطع على ألواح الستانلس ستيل (Nesting) باستخدام CypNest لرفع كفاءة استغلال الخامات وتقليل الهدر." },
        { en: "Program and run cutting jobs in CypCut, setting laser power, cutting speed, focus position and assist gas for each sheet thickness.",
          ar: "برمجة وتشغيل أوامر القص عبر CypCut، وضبط قدرة الليزر وسرعة القص وموضع البؤرة وغاز المساعدة حسب سماكة اللوح." },
        { en: "Coordinate with machine operators and the production team to deliver orders accurately and on schedule.",
          ar: "التنسيق مع مشغلي الماكينات وفريق الإنتاج لتنفيذ الطلبات بدقة وفي الوقت المحدد." },
        { en: "Developed and deployed the company's WhatsApp customer service chatbot using Node.js and the WhatsApp Cloud API (Meta).",
          ar: "تطوير وإطلاق روبوت محادثة واتساب (WhatsApp Chatbot) لخدمة عملاء الشركة باستخدام Node.js وWhatsApp Cloud API من Meta." },
        { en: "Automated order and complaint handling by routing orders to sales management and complaints to management, and gave customers instant access to branch and workshop locations nationwide, branch ratings and company contacts.",
          ar: "أتمتة استقبال الطلبات والشكاوى بتوجيه الطلبات إلى إدارة المبيعات والشكاوى إلى الإدارة، وتزويد العملاء فوراً بمواقع الفروع والورش في مختلف أنحاء المملكة وتقييم كل فرع وبيانات التواصل مع الشركة." },
      ],
      tags: ["SolidWorks", "AutoCAD", "CypCut", "CypNest", "CNC Laser", "Node.js", "WhatsApp API"],
    },
    {
      role:     { en: "Mechatronics Engineer", ar: "مهندس ميكاترونكس" },
      company:  { en: "Mashaal Electrical Engineering", ar: "مكتب مشعل للهندسة الكهربائية" },
      period:   { en: "Jan 2025 – Aug 2025", ar: "يناير 2025 – أغسطس 2025" },
      location: { en: "Sana'a, Yemen", ar: "صنعاء، اليمن" },
      points: [
        { en: "Designed power distribution layouts for residential and commercial solar PV systems.",
          ar: "تصميم مخططات توزيع الطاقة لأنظمة الطاقة الشمسية السكنية والتجارية." },
        { en: "Designed and installed classic control systems and control panels for industrial machines.",
          ar: "تصميم وتركيب أنظمة ولوحات التحكم الكلاسيكي للآلات الصناعية." },
        { en: "Coordinated with technicians on site during mounting, wiring, installation and maintenance.",
          ar: "التنسيق مع الفنيين في الموقع أثناء التثبيت والتوصيل والتركيب والصيانة." },
        { en: "Performed safety inspections and installation quality assessments to ensure compliance and reliable system performance.",
          ar: "إجراء فحوصات السلامة وتقييم جودة التركيبات لضمان المطابقة وكفاءة أداء الأنظمة." },
      ],
      tags: ["Solar PV", "Control Panels", "Industrial Automation", "HSE"],
    },
    {
      role:     { en: "Mechanical Engineering Trainee", ar: "متدرب هندسة ميكانيكية" },
      company:  { en: "United Engineering & Automobile Co. Ltd.", ar: "الشركة المتحدة للهندسة والسيارات المحدودة" },
      period:   { en: "Sep 2024 – Dec 2024", ar: "سبتمبر 2024 – ديسمبر 2024" },
      location: { en: "Sana'a, Yemen", ar: "صنعاء، اليمن" },
      points: [
        { en: "Applied mechanical engineering principles to vehicle maintenance and repair.",
          ar: "تطبيق مبادئ الهندسة الميكانيكية في صيانة وإصلاح المركبات." },
        { en: "Performed technical troubleshooting and diagnosis of mechanical faults.",
          ar: "تنفيذ أعمال الصيانة التشخيصية وحل الأعطال الميكانيكية." },
      ],
      tags: ["Mechanical", "Diagnostics"],
    },
    {
      role:     { en: "Electrical Technician", ar: "فني كهربائي" },
      company:  { en: "Solar Care for Solar Energy", ar: "شركة سولار كير للطاقة الشمسية" },
      period:   { en: "May 2019 – Dec 2021", ar: "مايو 2019 – ديسمبر 2021" },
      location: { en: "Sana'a, Yemen", ar: "صنعاء، اليمن" },
      points: [
        { en: "Installed and commissioned solar power systems for customers.",
          ar: "تركيب وتشغيل أنظمة الطاقة الشمسية للعملاء." },
        { en: "Installed and maintained electrical systems and control panels.",
          ar: "تركيب وصيانة الأنظمة الكهربائية ولوحات التحكم." },
        { en: "Performed maintenance and troubleshooting of electrical equipment.",
          ar: "صيانة الأجهزة الكهربائية وتشخيص أعطالها." },
      ],
      tags: ["Solar Energy", "Electrical", "Maintenance"],
    },
  ],

  /* ---------- 7. EDUCATION & CERTIFICATIONS ---------- */
  education: [
    {
      degree:      { en: "Bachelor of Science in Mechatronics Engineering", ar: "بكالوريوس هندسة الميكاترونكس" },
      institution: { en: "Sana'a University, Sana'a, Yemen", ar: "جامعة صنعاء، صنعاء، اليمن" },
      period:      { en: "Jun 2024", ar: "يونيو 2024" },
      note:        "",
    },
    {
      degree:      { en: "HSE Engineering Specialization", ar: "تخصص هندسة الصحة والسلامة والبيئة (HSE)" },
      institution: "",
      period:      "2025",
      note:        "",
    },
    {
      degree:      { en: "Workplace Safety and Health Diploma", ar: "دبلوم الصحة والسلامة المهنية" },
      institution: "",
      period:      "2025",
      note:        "",
    },
    {
      degree:      { en: "Project Management Course", ar: "دورة إدارة المشاريع" },
      institution: "PBT",
      period:      "2025",
      note:        "",
    },
    {
      degree:      { en: "English Language Diploma", ar: "دبلوم اللغة الإنجليزية" },
      institution: "PBT",
      period:      "2025",
      note:        "",
    },
    {
      degree:      { en: "International Computer Driving Licence (ICDL)", ar: "الرخصة الدولية لقيادة الحاسب الآلي (ICDL)" },
      institution: { en: "Sana'a University", ar: "جامعة صنعاء" },
      period:      "2024",
      note:        "",
    },
  ],

  /* ---------- 8. PROJECTS ----------
     'subtitle' is the CV's line under the project name.
     'points'   are the CV bullets, word for word.
     'image'    → drop a screenshot in assets/img/ and put its path here.
  ---------------------------------- */
  projects: [
    {
      title:    { en: "Golazo! – Live Football Scores App", ar: "تطبيق Golazo! – نتائج مباريات كرة القدم المباشرة" },
      subtitle: { en: "Freelance project – live on Google Play", ar: "مشروع عمل حر – منشور على Google Play" },
      points: [
        { en: "Built and published an Android app for live football scores, match data and league standings, and maintained it across seven releases, owning app signing, versioning, store listing, privacy policy and data-safety compliance.",
          ar: "تطوير ونشر تطبيق أندرويد لعرض نتائج المباريات المباشرة وبيانات المباريات وجداول ترتيب الدوريات، وإصدار سبع تحديثات له مع إدارة التوقيع الرقمي والإصدارات وصفحة المتجر وسياسة الخصوصية ومتطلبات أمان البيانات." },
        { en: "Developed the product as three services: a TypeScript/Express data API with a live match scanner, a content orchestrator that renders and publishes cards, and the React Native (Expo) app.",
          ar: "بناء المنتج على ثلاث خدمات: واجهة برمجية للبيانات بلغة TypeScript وExpress مع ماسح للمباريات المباشرة، ومنسّق محتوى ينتج البطاقات وينشرها، وتطبيق الهاتف بـ React Native (Expo)." },
        { en: "Migrated the live product from a usage-priced platform to a flat-cost self-managed VPS with no downtime, running both systems in parallel with a tested DNS rollback plan.",
          ar: "نقل المنتج من منصة استضافة تُحاسب على الاستخدام إلى خادم VPS ثابت التكلفة يديره بنفسه دون أي انقطاع، مع تشغيل النظامين بالتوازي وخطة تراجع مجرّبة عبر DNS." },
      ],
      tags:  ["React Native", "Expo", "TypeScript", "Express", "Redis", "DevOps"],
      image: "",
      links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.golazo.wc2026" }],
      featured: true,
    },
    {
      title:    { en: "Trading Index – Economic Calendar & Market Analysis App", ar: "تطبيق Trading Index – التقويم الاقتصادي وتحليل الأسواق" },
      subtitle: { en: "Freelance project – release-ready", ar: "مشروع عمل حر – جاهز للنشر" },
      points: [
        { en: "Built a crypto-first economic calendar and market-impact app with push notifications (Firebase Cloud Messaging and Expo), crash reporting (Sentry) and a trilingual interface in English, Arabic and Spanish, including full right-to-left layout.",
          ar: "تطوير تطبيق للتقويم الاقتصادي وتأثيره على الأسواق مع التركيز على العملات الرقمية، يشمل الإشعارات الفورية (Firebase Cloud Messaging وExpo) وتتبع الأعطال (Sentry) وواجهة بثلاث لغات (الإنجليزية والعربية والإسبانية) مع دعم كامل للاتجاه من اليمين لليسار." },
        { en: "Designed caching and scheduling around third-party API quotas: per-source Redis TTLs, thirteen deduplicated cron jobs and serve-stale fallbacks that keep endpoints healthy when an upstream source fails.",
          ar: "تصميم نظام التخزين المؤقت والجدولة بما يتوافق مع حدود الواجهات الخارجية: مُدد صلاحية (TTL) لكل مصدر في Redis، وثلاث عشرة مهمة مجدولة بلا تكرار، وآلية لتقديم آخر بيانات صالحة عند تعطل أي مصدر." },
        { en: "Integrated a DeepSeek LLM into the production pipeline for summarization, classification and translation with per-item caching and fail-open behaviour, and built an SVG rendering service generating branded cards from live data across twelve templates.",
          ar: "دمج نموذج DeepSeek في خط الإنتاج للتلخيص والتصنيف والترجمة مع تخزين مؤقت لكل عنصر وسلوك آمن عند الفشل، وبناء خدمة توليد بطاقات SVG من البيانات الحية عبر اثني عشر قالباً." },
      ],
      tags:  ["React Native", "TypeScript", "Redis", "LLM", "i18n / RTL", "Firebase"],
      image: "",
      links: [],
      featured: true,
    },
    {
      title:    { en: "Self-Managed Production Server & DevOps", ar: "خادم إنتاج ذاتي الإدارة وعمليات DevOps" },
      subtitle: { en: "Personal infrastructure for both apps", ar: "بنية تحتية شخصية للتطبيقين" },
      points: [
        { en: "Provisioned and hardened an Ubuntu 24.04 VPS hosting both products in Docker containers: key-only SSH, layered UFW and iptables firewalls, a shared Caddy reverse proxy with automatic Let's Encrypt HTTPS, Cloudflare DNS and email routing, nightly offsite backups and scripted deploys.",
          ar: "تجهيز وتأمين خادم Ubuntu 24.04 يستضيف التطبيقين داخل حاويات Docker: دخول SSH بالمفاتيح فقط، وجدران حماية متعددة الطبقات (UFW وiptables)، وخادم وكيل Caddy مع شهادات Let's Encrypt تلقائية، وإدارة Cloudflare DNS وتوجيه البريد، ونسخ احتياطي ليلي خارجي، وعمليات نشر مؤتمتة." },
        { en: "Used agentic AI tooling (Claude Code with MCP servers, custom skills and per-repository memory files) to develop and document a multi-repository product across six repositories.",
          ar: "استخدام أدوات البرمجة بالوكلاء الأذكياء (Claude Code مع خوادم MCP ومهارات مخصصة وملفات ذاكرة لكل مستودع) لتطوير وتوثيق منتج موزّع على ستة مستودعات." },
      ],
      tags:  ["Docker", "Ubuntu", "Caddy", "Cloudflare", "DevOps", "AI Tooling"],
      image: "",
      links: [],
      featured: true,
    },
    {
      title:    { en: "Remote I/O Module (RIOM) and Protocol Converter", ar: "وحدة الإدخال والإخراج البعيدة ومحوّل البروتوكولات (RIOM)" },
      subtitle: { en: "Graduation Project – 2024", ar: "مشروع التخرج – 2024" },
      points: [
        { en: "Designed and developed a remote I/O module with a protocol conversion system supporting Modbus, Profibus and EtherNet/IP to integrate industrial automation systems and enable remote monitoring and control.",
          ar: "تصميم وتطوير وحدة إدخال وإخراج بعيدة مع نظام لتحويل بروتوكولات الاتصال الصناعي يدعم Modbus وProfibus وEtherNet/IP، لدمج أنظمة الأتمتة الصناعية والمراقبة والتحكم عن بُعد." },
      ],
      tags:  ["Modbus", "Profibus", "EtherNet/IP", "Industrial Automation", "Embedded"],
      image: "",
      links: [],
      featured: false,
    },
  ],

  /* ---------- 9. DOCUMENTS (CV, certificates, references) ----------
     Put the actual files in  assets/docs/  then list them here.
     type: "pdf" files open in an in-page viewer; anything else downloads.
     primaryFor: "en" | "ar"  → highlighted card + navbar CV button per language
     lang: "en" | "ar"        → show this card ONLY in that language (optional)
  ------------------------------------------------------------------ */
  documents: [
    {
      title: { en: "Curriculum Vitae — English", ar: "السيرة الذاتية — الإنجليزية" },
      desc:  { en: "Full CV in English: professional summary, skills, experience, projects, education and certifications.",
               ar: "السيرة الذاتية كاملة بالإنجليزية: الملخص المهني والمهارات والخبرات والمشاريع والتعليم والشهادات." },
      file:  "assets/docs/Gehad_Alshabi_CV_EN.pdf",
      type:  "pdf",
      icon:  "file-text",
      primaryFor: "en",
    },
    {
      title: { en: "Curriculum Vitae — Arabic", ar: "السيرة الذاتية — العربية" },
      desc:  { en: "Full CV in Arabic — the same content in the Arabic language version.",
               ar: "السيرة الذاتية كاملة بالعربية — نفس المحتوى بالنسخة العربية." },
      file:  "assets/docs/Gehad_Alshabi_CV_AR.pdf",
      type:  "pdf",
      icon:  "id",
      primaryFor: "ar",
    },
    // Certificates go here the same way, e.g.:
    // {
    //   title: { en: "HSE Engineering Specialization", ar: "تخصص هندسة الصحة والسلامة والبيئة" },
    //   desc:  { en: "Certificate, 2025.", ar: "شهادة، 2025." },
    //   file:  "assets/docs/hse-certificate.pdf",
    //   type:  "pdf",
    //   icon:  "award",
    // },
  ],

  /* ---------- 10. SEO ---------- */
  seo: {
    siteUrl: "https://gehadalshabi.jeemdev.net",
    title: {
      en: "Gehad Fatehi Alshabi — CAD/CAM & Mechatronics Engineer | Full-Stack Developer",
      ar: "جهاد فتحي الشعبي — مهندس ميكاترونكس CAD/CAM | مطوّر Full-Stack",
    },
    description: {
      en: "CAD/CAM & Mechatronics Engineer | Full-Stack Developer | DevOps & AI Automation. Riyadh, Saudi Arabia. CV, projects and contact.",
      ar: "مهندس ميكاترونكس CAD/CAM | مطوّر Full-Stack & DevOps | وأتمتة بالذكاء الاصطناعي. الرياض، المملكة العربية السعودية. السيرة الذاتية والمشاريع ووسائل التواصل.",
    },
    ogImage: "assets/img/og.png",
  },
};
