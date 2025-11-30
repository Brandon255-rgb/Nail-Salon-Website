import { motion } from 'framer-motion'
import {
	ArrowRight,
	CalendarClock,
	Check,
	HandHeart,
	Instagram,
	MapPin,
	MessageCircle,
	Phone,
	ShieldCheck,
	Sparkles,
	Star,
	Wand2,
} from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    title: 'Structured Gel Set',
    description: 'Builder gel with custom shaping, cuticle detailing, and a restrained, mirror-gloss finish.',
    duration: '75 min',
    price: 'From R420',
    perks: ['Strength apex + gentle e-file prep', 'Perfect for natural or medium length', 'Aftercare oil to take home'],
  },
  {
    title: 'Architected Acrylics',
    description: 'Lightweight, sculpted enhancements for lasting wear without bulk or harsh lines.',
    duration: '90 min',
    price: 'From R480',
    perks: ['Tailored structure for each nail', 'Neutral palettes, micro-French, or negative space', 'Weekly check-in after first set'],
  },
  {
    title: 'Modern French',
    description: 'Soft gradients, micro tips, and tonal overlays crafted by hand for a quiet-luxury look.',
    duration: '70 min',
    price: 'R450',
    perks: ['Custom color mapping to your skin tone', 'Sealed for chip resistance', 'Includes hydrating finish massage'],
  },
  {
    title: 'Spa Pedicure Ritual',
    description: 'Mineral soak, exfoliation, targeted massage, and a polish or gel finish that lasts.',
    duration: '60 min',
    price: 'R520',
    perks: ['Medical-grade hygiene and single-use files', 'Aromatherapeutic soak + heel repair balm', 'Pressure-point lower leg massage'],
  },
]

const commitments = [
  {
    title: 'Designed to last',
    copy: 'Structured overlays, meticulous prep, and the right chemistry for your nails and lifestyle.',
    icon: ShieldCheck,
  },
  {
    title: 'Art direction, simplified',
    copy: 'We map tones to your skin and wardrobe for sets that read polished, not flashy.',
    icon: Wand2,
  },
  {
    title: 'Unrushed appointments',
    copy: 'Limited daily bookings in a calm private suite so every set leaves on time.',
    icon: HandHeart,
  },
]

const stats = [
  { label: 'Rebook rate', value: '92% return', detail: 'Clients keep us on retainer for consistent, easy upkeep.' },
  { label: 'Hygiene', value: 'Medical-grade', detail: 'Autoclaved tools, single-use files, and hospital-level prep.' },
  { label: 'Experience', value: '15 yrs craft', detail: 'Led by senior nail architects with global training.' },
]

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => ref.current?.scrollIntoView({ behavior: 'smooth' })

  const navItems = [
    { name: 'Experience', ref: homeRef },
    { name: 'Services', ref: servicesRef },
    { name: 'Studio', ref: aboutRef },
    { name: 'Visit', ref: contactRef },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f4ea] via-[#f7f2e9] to-[#f8fafc] text-slate-900">
      <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-4 flex items-center justify-between gap-4 rounded-full border border-slate-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white!">
                GJ
              </div>
              <div className="leading-tight">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Nail Atelier</p>
                <p className="text-base font-semibold">Glow Nails Jozi</p>
              </div>
            </div>
            <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2, opacity: 1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo(item.ref)}
                  className="group relative transition hover:text-slate-900 focus:outline-none"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-slate-900 transition-all duration-200 group-hover:w-full" />
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <motion.a
                href="tel:+27712345678"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow-md md:inline-flex"
              >
                Call
              </motion.a>
              <motion.a
                href="https://wa.me/27712345678"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white! shadow-sm transition hover:bg-slate-800 hover:shadow-lg"
              >
                Book now
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="pt-28">
        <section ref={homeRef} className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-slate-200 via-white to-transparent blur-3xl" />
            <div className="absolute -right-16 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-white via-slate-200 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-gradient-to-br from-amber-100 to-transparent blur-3xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-12 top-24 h-40 w-40 rounded-full bg-gradient-to-br from-slate-900/5 via-slate-500/5 to-transparent blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-10 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-200/30 via-white/40 to-transparent blur-2xl"
            />
          </div>
          <div
            className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-10 md:grid-cols-[1.1fr,0.9fr] md:pb-24"
            style={{ perspective: 1600 }}
          >
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-slate-500">
                Sandton · Appointment only
              </p>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
                Nail artistry with
                <span className="ml-2 inline-block bg-gradient-to-r from-slate-900 via-amber-400 to-slate-700 bg-clip-text text-transparent">
                  calm precision.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-600">
                Quiet, detail-led sets designed to look effortless and last. We cap bookings daily, pair you with the
                right tech, and keep every appointment on time.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.a
                  href="https://wa.me/27712345678"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white! shadow-sm transition hover:bg-slate-800 hover:shadow-lg"
                >
                  Book via WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo(servicesRef)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                >
                  View services
                </motion.button>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:shadow-lg"
                  >
                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-600">{stat.detail}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: 'Soft chrome tips', colors: 'from-[#f8d7a7] via-[#f5b4a8] to-[#f7f2e9]' },
                  { label: 'Milk-bath florals', colors: 'from-[#f1e6ff] via-[#e5d9ff] to-[#f7f2e9]' },
                  { label: 'Micro-French', colors: 'from-[#d7f2f2] via-[#dff5e6] to-[#f7f2e9]' },
                  { label: 'Editorial accents', colors: 'from-[#ffe9c7] via-[#ffd0c8] to-[#f7f2e9]' },
                ].map((chip, index) => (
                  <motion.span
                    key={chip.label}
                    whileHover={{ y: -2, scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${chip.colors} px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition`}
                  >
                    <Sparkles className="h-4 w-4 text-slate-700" />
                    {chip.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 2.2, rotateY: -2.2 }}
              className="relative"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-white via-slate-200 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Next availability</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">Thursday · 14:30</p>
                    <p className="text-sm text-slate-600">Sandton City · Suite L312</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <Sparkles className="h-4 w-4" />
                    Low wait
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <CalendarClock className="h-5 w-5 text-slate-500" />
                  <p className="text-sm text-slate-700">Structured Gel Rebalance · 75 min · R420</p>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-3 text-sm text-slate-700">
                  {[
                    { title: 'Hygiene', detail: 'Medical-grade sterilisation each visit' },
                    { title: 'Finish', detail: 'Custom shaping + high-gloss seal' },
                    { title: 'Care', detail: 'Aftercare notes sent post-visit' },
                    { title: 'Pace', detail: 'Appointments start on time, every time' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-100 bg-white px-3 py-3 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{item.title}</p>
                      <p className="mt-1 text-slate-800">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-3 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3">
                  <Star className="h-5 w-5 text-amber-500 fill-amber-400/80" />
                  <p className="text-sm text-slate-800">4.9/5 from 180 returning clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section ref={servicesRef} className="border-y border-slate-200 bg-gradient-to-b from-white via-[#fdf7ed] to-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Menu</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Signature services</h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-600">
                  Tailored sets built for longevity, comfort, and a refined finish. Every appointment includes a calm
                  consult, structured prep, and hydration.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo(contactRef)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                >
                  Talk with a tech
                </motion.button>
                <motion.a
                  href="https://wa.me/27712345678"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white! shadow-sm transition hover:bg-slate-800 hover:shadow-lg"
                >
                  Reserve a chair
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2" style={{ perspective: 1400 }}>
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -10, scale: 1.02, rotateX: 3, rotateY: -3 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-stone-100 p-8 shadow-md transition hover:border-slate-300 hover:shadow-2xl"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-slate-900/8 via-amber-100/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{service.duration}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900">{service.title}</h3>
                    </div>
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white!">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-3 text-slate-600">{service.description}</p>
                  <div className="mt-6 space-y-2 text-sm text-slate-700">
                    {service.perks.map((perk) => (
                      <div key={perk} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={aboutRef} className="border-b border-slate-200 bg-gradient-to-b from-[#f8f3ea] to-[#f7f7f2]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 py-16 md:grid-cols-[1.1fr,0.9fr]">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Approach</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  A studio built for people who hate rushed salons.
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  We borrowed from boutique hospitality and Apple Store-level restraint: clean lines, quiet music,
                  generous spacing, and techs who move with intention.
                </p>
                  <div className="mt-8 grid gap-4" style={{ perspective: 1200 }}>
                    {commitments.map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -6, scale: 1.015, rotateX: 2, rotateY: -2 }}
                        transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                        className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                    >
                      <div className="mt-1 rounded-full bg-slate-900/90 p-2 text-white!">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-600">{item.copy}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.015, rotateX: 2, rotateY: -2 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md"
              >
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-amber-500 fill-amber-400/90" />
                  ))}
                  <p className="text-sm font-semibold text-slate-800">4.9 average · Sandton</p>
                </div>
                <p className="mt-6 text-xl leading-relaxed text-slate-700">
                  "The only salon in Joburg that understands quiet luxury. My sets stay flawless, and the studio feels
                  like a private lounge."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white!">
                    TM
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">Thando M.</p>
                    <p className="text-xs text-slate-500">Client since 2021</p>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-slate-900" />
                    <div>
                      <p className="font-semibold text-slate-900">Prep that protects</p>
                      <p>Cuticle care, e-file safety, and product matching to your nail chemistry.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-slate-900" />
                    <div>
                      <p className="font-semibold text-slate-900">Time-respectful</p>
                      <p>Appointments run to schedule with padded buffers between guests.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section ref={contactRef} className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.015, rotateX: 2, rotateY: -2 }}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Visit</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  A calm suite in Sandton City.
                </h3>
                <p className="mt-3 text-lg text-slate-600">
                  Private, appointment-only space with warm lighting, comfortable seating, and refreshments on arrival.
                </p>
                <div className="mt-6 space-y-4 text-sm text-slate-800">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-slate-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Sandton City · Suite L312</p>
                      <p className="text-slate-600">Level 3, near the Diamond Walk entrance</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="mt-1 h-5 w-5 text-slate-600" />
                    <div>
                      <p className="font-semibold text-slate-900">+27 71 234 5678</p>
                      <p className="text-slate-600">Call or WhatsApp to reserve</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CalendarClock className="mt-1 h-5 w-5 text-slate-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Tuesday — Saturday</p>
                      <p className="text-slate-600">10:00 — 18:00 (by appointment)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <motion.a
                    href="https://wa.me/27712345678"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white! shadow-md transition hover:bg-slate-800 hover:shadow-lg"
                  >
                    Book a session
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/27712345678?text=Please%20share%20the%20service%20menu"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                  >
                    Download the menu
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.015, rotateX: -2, rotateY: 2 }}
                className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-lg"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Concierge</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">Prefer a human touch?</h3>
                  <p className="mt-3 text-slate-200">
                    Send us your preferred date, style references, and budget. We will confirm availability and pair you
                    with the right tech.
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-slate-200">
                    <a
                      href="https://wa.me/27712345678"
                      className="flex items-center gap-3 transition hover:opacity-90"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp concierge: +27 71 234 5678</span>
                    </a>
                    <a
                      href="https://instagram.com/glownails.jozi"
                      className="flex items-center gap-3 transition hover:opacity-90"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>@glownails.jozi</span>
                    </a>
                  </div>
                </div>
                <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm backdrop-blur">
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4" />
                    <p>We reply within 15 minutes during studio hours.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4" />
                    <p>Personalized palettes + shape guidance for your hands.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4" />
                    <p>Secure deposit links for quick confirmation.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white!">
              GJ
            </div>
            <div>
              <p className="font-semibold text-slate-900">Glow Nails Jozi</p>
              <p className="text-xs text-slate-500">Sandton · Appointment only</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-700">
            <span>© 2025 Glow Nails Jozi</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a
              href="https://wa.me/27712345678"
              className="inline-flex transition hover:-translate-y-0.5 hover:text-slate-900"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/glownails.jozi"
              className="inline-flex transition hover:-translate-y-0.5 hover:text-slate-900"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
