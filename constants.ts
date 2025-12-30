import { ContentStrings, Language } from './types';

export const TEXT_CONTENT: Record<Language, ContentStrings> = {
  FR: {
    whatsappMessage: "Bonjour, je voudrais des informations sur les analyses...",
    topBar: {
      urgency: "Urgence 24/7 :",
      phone: "0528 82 02 10",
      location: "Talborjt, Agadir",
    },
    nav: {
      home: "Accueil",
      services: "Services",
      results: "Vos Résultats",
      contact: "Contact",
    },
    hero: {
      title: "Analyses & Biologie Médicale à Agadir",
      subtitle: "Votre santé mérite l'excellence. Accrédité NM ISO 15189.",
      ctaPhone: "Appelez-nous",
      ctaResults: "Vos Résultats",
      badge: "Accrédité NM ISO 15189:2023",
    },
    stats: {
      experience: "Années d'expérience",
      patients: "Patients satisfaits",
      available: "Service d'urgence",
    },
    services: {
      title: "Analyses Médicales",
      subtitle: "Un large éventail d'analyses pour votre suivi santé.",
      items: {
        blood: { title: "Analyses de Sang", desc: "NFS, Bilan complet, Hématologie." },
        diabetes: { title: "Diabète & Glycémie", desc: "HbA1c, Suivi glycémique précis." },
        hormones: { title: "Hormonologie", desc: "Bilan Thyroïde, Fertilité, TSH." },
        pregnancy: { title: "Suivi de Grossesse", desc: "Beta HCG, Toxoplasmose, Suivi mensuel." },
        covid: { title: "Covid-19 & PCR", desc: "Résultats rapides et certifiés pour voyage." },
      }
    },
    trust: {
      title: "Pourquoi nous choisir ?",
      subtitle: "L'excellence médicale au service de votre santé.",
      items: {
        experience: { title: "Depuis 2002", desc: "Plus de 20 ans d'expertise à Agadir." },
        iso: { title: "Certifié ISO 15189", desc: "Norme internationale de compétence." },
        confidentiality: { title: "Confidentialité", desc: "Secrets médicaux 100% garantis." },
        precision: { title: "Précision", desc: "Contrôle qualité interne et externe rigoureux." },
      }
    },
    testimonials: {
      title: "Témoignages",
      reviews: [
        { name: "S. K.", text: "Service rapide et professionnel.", stars: 5 },
        { name: "M. A.", text: "Très bon accueil, je recommande.", stars: 5 },
        { name: "L. B.", text: "Résultats disponibles rapidement en ligne.", stars: 4 },
      ]
    },
    portal: {
      title: "Espace Résultats",
      desc: "Accédez à vos rapports médicaux en toute sécurité.",
      loginPlaceholder: "Identifiant / Tél",
      passPlaceholder: "Mot de passe",
      button: "Connexion Sécurisée",
      help: "Problème d'accès ? Contactez-nous.",
    },
    footer: {
      address: "Imm Marhaba, Bd Cheikh Saadi, Talborjt, Agadir",
      hours: "Lun-Ven : 7h30 - 19h00 | Sam : 7h30 - 13h30",
      contact: "Contactez-nous",
      rights: "© 2024 Laboratoire Mahfoud. Tous droits réservés.",
    },
  },
  AR: {
    whatsappMessage: "مرحبًا، أود الاستفسار عن التحاليل الطبية...",
    topBar: {
      urgency: "طوارئ 24/7 :",
      phone: "0528 82 02 10",
      location: "تالبرجت، أكادير",
    },
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      results: "نتائجي",
      contact: "اتصل بنا",
    },
    hero: {
      title: "تحاليل وبيولوجيا طبية في أكادير",
      subtitle: "صحتكم تستحق التميز. معتمد NM ISO 15189.",
      ctaPhone: "اتصل بنا",
      ctaResults: "نتائجي",
      badge: "معتمد NM ISO 15189:2023",
    },
    stats: {
      experience: "سنوات من الخبرة",
      patients: "مريض راضٍ",
      available: "خدمة الطوارئ",
    },
    services: {
      title: "تحاليل طبية شاملة",
      subtitle: "مجموعة واسعة من التحاليل لمتابعة صحتكم.",
      items: {
        blood: { title: "تحاليل الدم", desc: "NFS، فحص شامل، أمراض الدم." },
        diabetes: { title: "السكري والسكر", desc: "HbA1c، تتبع دقيق لنسبة السكر." },
        hormones: { title: "الهرمونات", desc: "الغدة الدرقية، الخصوبة، TSH." },
        pregnancy: { title: "تتبع الحمل", desc: "Beta HCG، داء المقوسات، تتبع شهري." },
        covid: { title: "كوفيد-19 و PCR", desc: "نتائج سريعة ومعتمدة للسفر." },
      }
    },
    trust: {
      title: "لماذا تختارنا؟",
      subtitle: "التميز الطبي في خدمة صحتكم.",
      items: {
        experience: { title: "منذ 2002", desc: "أكثر من 20 عامًا من الخبرة في أكادير." },
        iso: { title: "معتمد ISO 15189", desc: "المعيار الدولي للكفاءة والجودة." },
        confidentiality: { title: "السرية التامة", desc: "ضمان سرية المعلومات الطبية 100%." },
        precision: { title: "الدقة", desc: "مراقبة جودة داخلية وخارجية صارمة." },
      }
    },
    testimonials: {
      title: "آراء المرضى",
      reviews: [
        { name: "س. ك.", text: "خدمة سريعة ومهنية.", stars: 5 },
        { name: "م. أ.", text: "استقبال جيد جدا، أنصح به.", stars: 5 },
        { name: "ل. ب.", text: "النتائج متوفرة بسرعة عبر الإنترنت.", stars: 4 },
      ]
    },
    portal: {
      title: "فضاء النتائج",
      desc: "ادخل إلى تقاريرك الطبية بأمان.",
      loginPlaceholder: "رقم الملف / الهاتف",
      passPlaceholder: "كلمة المرور",
      button: "دخول آمن",
      help: "تواجه مشكلة؟ اتصل بنا.",
    },
    footer: {
      address: "عمارة مرحبا، شارع الشيخ سعدي، تالبرجت، أكادير",
      hours: "الاثنين-الجمعة: 7:30 - 19:00 | السبت: 7:30 - 13:30",
      contact: "اتصل بنا",
      rights: "© 2024 مختبر محفوظ. جميع الحقوق محفوظة.",
    },
  },
  EN: {
    whatsappMessage: "Hello, I would like to inquire about medical tests...",
    topBar: {
      urgency: "Emergency 24/7 :",
      phone: "0528 82 02 10",
      location: "Talborjt, Agadir",
    },
    nav: {
      home: "Home",
      services: "Services",
      results: "My Results",
      contact: "Contact",
    },
    hero: {
      title: "Medical Analysis & Biology in Agadir",
      subtitle: "Your health deserves excellence. NM ISO 15189 Accredited.",
      ctaPhone: "Call Us",
      ctaResults: "My Results",
      badge: "Accredited NM ISO 15189:2023",
    },
    stats: {
      experience: "Years of Experience",
      patients: "Satisfied Patients",
      available: "Emergency Service",
    },
    services: {
      title: "Medical Analysis",
      subtitle: "A wide range of tests for your health monitoring.",
      items: {
        blood: { title: "Blood Analysis", desc: "CBC, Full Checkup, Hematology." },
        diabetes: { title: "Diabetes", desc: "HbA1c, Precise glucose monitoring." },
        hormones: { title: "Hormonology", desc: "Thyroid Check, Fertility, TSH." },
        pregnancy: { title: "Pregnancy", desc: "Beta HCG, Toxoplasmosis, Monitoring." },
        covid: { title: "Covid-19 & PCR", desc: "Fast results certified for travel." },
      }
    },
    trust: {
      title: "Why Choose Us?",
      subtitle: "Medical excellence at your service.",
      items: {
        experience: { title: "Since 2002", desc: "Over 20 years of expertise in Agadir." },
        iso: { title: "ISO 15189 Certified", desc: "International standard of competence." },
        confidentiality: { title: "Confidentiality", desc: "100% guaranteed medical secrecy." },
        precision: { title: "Precision", desc: "Rigorous internal and external quality control." },
      }
    },
    testimonials: {
      title: "Testimonials",
      reviews: [
        { name: "S. K.", text: "Fast and professional service.", stars: 5 },
        { name: "M. A.", text: "Very good welcome, I recommend.", stars: 5 },
        { name: "L. B.", text: "Results available quickly online.", stars: 4 },
      ]
    },
    portal: {
      title: "Patient Portal",
      desc: "Securely access your medical reports online.",
      loginPlaceholder: "Patient ID / Phone",
      passPlaceholder: "Password",
      button: "Secure Login",
      help: "Having trouble? Contact us.",
    },
    footer: {
      address: "Imm Marhaba, Bd Cheikh Saadi, Talborjt, Agadir",
      hours: "Mon-Fri: 7:30 - 19:00 | Sat: 7:30 - 13:30",
      contact: "Contact Us",
      rights: "© 2024 Laboratoire Mahfoud. All rights reserved.",
    },
  },
};