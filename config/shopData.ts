export const SHOP = {
  name: "[SALON_NAME]",
  tagline: { sk: "Krása, ktorú si zaslúžite.", en: "The beauty you deserve." },
  phone: "+421 900 000 000",
  email: "hello@salonname.sk",
  address: { street: "Fashion Ave 12", city: "Bratislava", zip: "811 01", country: "SK" },
  mapEmbedUrl: "https://maps.google.com/maps?q=Bratislava&output=embed",
  heroVideoUrl: "/hero-bg.mp4",
  heroFallbackImage: "/hero-fallback.jpg",

  socials: {
    instagram: "https://instagram.com/salonname",
    facebook:  "https://facebook.com/salonname",
  },

  hours: [
    { day: { sk: "Pondelok",   en: "Monday"    }, open: "09:00", close: "19:00", closed: false },
    { day: { sk: "Utorok",     en: "Tuesday"   }, open: "09:00", close: "19:00", closed: false },
    { day: { sk: "Streda",     en: "Wednesday" }, open: "09:00", close: "19:00", closed: false },
    { day: { sk: "Štvrtok",    en: "Thursday"  }, open: "09:00", close: "20:00", closed: false },
    { day: { sk: "Piatok",     en: "Friday"    }, open: "09:00", close: "20:00", closed: false },
    { day: { sk: "Sobota",     en: "Saturday"  }, open: "08:00", close: "15:00", closed: false },
    { day: { sk: "Nedeľa",     en: "Sunday"    }, open: "",      close: "",      closed: true  },
  ],

  team: [
    {
      id: "emma",
      name: "Emma Kováčová",
      role:  { sk: "Art Director & Colorist", en: "Art Director & Colorist" },
      bio:   { sk: "Špecialistka na balayage a zosvetľovanie s 10 ročnou praxou.", en: "Balayage and blonding specialist with 10 years of experience." },
      image: "/team/stylist1.jpg",
      instagram: "https://instagram.com/",
    },
    {
      id: "sofia",
      name: "Sofia Nováková",
      role:  { sk: "Senior Stylist", en: "Senior Stylist" },
      bio:   { sk: "Majsterka v precíznych strihoch a svadobných účesoch.", en: "Master of precision cuts and elegant bridal updos." },
      image: "/team/stylist2.jpg",
      instagram: "https://instagram.com/",
    },
    {
      id: "mia",
      name: "Mia Horváthová",
      role:  { sk: "Hair Care Specialist", en: "Hair Care Specialist" },
      bio:   { sk: "Odborníčka na regeneráciu vlasov a keratínové kúry.", en: "Expert in hair restoration and keratin smoothing treatments." },
      image: "/team/stylist3.jpg",
      instagram: "https://instagram.com/",
    },
  ],

  services: [
    // ── Cuts & Styling ─────────────────────────────────────────────
    {
      id: "womens-cut",
      category: "cut",
      name: { sk: "Dámsky strih & fúkanie", en: "Women's Cut & Blowdry" },
      desc: { sk: "Konzultácia, umytie, strih a finálny styling.", en: "Consultation, wash, tailored cut, and signature blowout." },
      duration: 60,
      price: 45,
    },
    {
      id: "blowout",
      category: "cut",
      name: { sk: "Wash & Signature Blowout", en: "Wash & Signature Blowout" },
      desc: { sk: "Umytie a luxusné fúkanie pre objem.", en: "Wash and luxurious round-brush blowout for maximum volume." },
      duration: 45,
      price: 25,
    },
    // ── Colors ────────────────────────────────────────────────
    {
      id: "balayage",
      category: "color",
      name: { sk: "Full Balayage & Toning", en: "Full Balayage & Toning" },
      desc: { sk: "Kompletné presvetlenie technikou balayage a tónovanie.", en: "Hand-painted highlights for a natural, sun-kissed look." },
      duration: 180,
      price: 130,
    },
    {
      id: "root-touchup",
      category: "color",
      name: { sk: "Farbenie odrastov", en: "Root Touch-Up" },
      desc: { sk: "Dofarbenie odrastov a zjednotenie farby.", en: "Covering regrowth and refreshing your base color." },
      duration: 90,
      price: 55,
    },
    // ── Treatments & Extras ───────────────────────────────────────────────
    {
      id: "keratin",
      category: "treatment",
      name: { sk: "Keratínová kúra", en: "Keratin Smoothing" },
      desc: { sk: "Dlhodobé vyrovnanie a hĺbková výživa vlasov.", en: "Frizz-eliminating treatment for silky, manageable hair." },
      duration: 150,
      price: 110,
    },
    {
      id: "olaplex",
      category: "treatment",
      name: { sk: "Olaplex regenerácia", en: "Olaplex Repair Treatment" },
      desc: { sk: "Obnova disulfidových väzieb pre zničené vlasy.", en: "Bond-building treatment to repair damaged, over-processed hair." },
      duration: 30,
      price: 35,
    },
    {
      id: "bridal",
      category: "styling",
      name: { sk: "Svadobný / Spoločenský účes", en: "Bridal & Event Updo" },
      desc: { sk: "Kompletný styling pre váš špeciálny deň.", en: "Intricate styling, pinning, and prep for special events." },
      duration: 90,
      price: 75,
    },
  ],

  gallery: [
    { src: "/gallery/g1.jpg", alt: "Balayage" },
    { src: "/gallery/g2.jpg", alt: "Signature Blowout" },
    { src: "/gallery/g3.jpg", alt: "Precision Cut" },
    { src: "/gallery/g4.jpg", alt: "Bridal Updo" },
    { src: "/gallery/g5.jpg", alt: "Color Correction" },
    { src: "/gallery/g6.jpg", alt: "Keratin Treatment" },
  ],

  timeSlots: [
    "09:00","09:30","10:00","10:30","11:00","11:30",
    "12:00","12:30","13:00","13:30","14:00","14:30",
    "15:00","15:30","16:00","16:30","17:00","17:30","18:00",
  ],
} as const;

export type TeamMember = (typeof SHOP.team)[number];
export type Service    = (typeof SHOP.services)[number];
export type Lang       = "sk" | "en";