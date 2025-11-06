import { motion } from 'framer-motion';
import { Rocket, Link, Sparkles, Wrench, Award, Leaf, Heart, BookOpen, GraduationCap, ShieldCheck, Wifi, UtensilsCrossed, Bed, Plane } from 'lucide-react';

const brand = {
  yellow: '#FFCC00',
  green: '#00B37E',
};

const objectives = [
  { icon: Rocket, title: 'Empower Innovators' },
  { icon: Heart, title: 'Human-Centered Design' },
  { icon: Link, title: 'Build Connections' },
  { icon: Wrench, title: 'Prototype for Change' },
  { icon: Award, title: 'Celebrate Youth' },
];

const themes = [
  { icon: Leaf, title: 'AgriTech & Water' },
  { icon: ShieldCheck, title: 'Rural Health' },
  { icon: BookOpen, title: 'Education & Skills' },
  { icon: GraduationCap, title: 'Livelihoods & Inclusion' },
  { icon: Sparkles, title: 'Sustainability' },
];

const process = [
  'Idea Submission',
  'Design Sprint',
  'Hackathon',
  'Pitch & Awards',
];

const expect = [
  { emoji: '✨', title: 'Innovation', text: 'Fresh challenges, real problems.' },
  { emoji: '🤝', title: 'Mentorship', text: 'Guidance from domain experts.' },
  { emoji: '📚', title: 'Learning', text: 'Workshops and resources.' },
  { emoji: '🧪', title: 'Prototype', text: 'Build fast and iterate.' },
  { emoji: '🎉', title: 'Fun', text: 'Community, music, games.' },
];

const logistics = [
  { icon: Plane, title: 'Travel' },
  { icon: Bed, title: 'Stay' },
  { icon: UtensilsCrossed, title: 'Meals' },
  { icon: Wifi, title: 'Wi‑Fi' },
];

const evaluation = ['Design', 'Originality', 'Technical Depth', 'Usability', 'Impact'];

export default function FlowSections() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Objectives flow */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Key Objectives</h3>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-200 -translate-y-1/2 rounded-full" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 relative">
              {objectives.map((o, idx) => (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative z-10 bg-white rounded-xl p-4 shadow-sm border border-neutral-100 flex flex-col items-center text-center"
                >
                  <o.icon className="h-6 w-6 mb-2" style={{ color: brand.green }} />
                  <span className="font-medium text-sm">{o.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Themes */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Themes / Tracks</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {themes.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl grid place-items-center mb-3" style={{ background: `linear-gradient(135deg, ${brand.yellow}33, ${brand.green}33)` }}>
                  <t.icon className="h-5 w-5" style={{ color: brand.green }} />
                </div>
                <div className="font-semibold">{t.title}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process timeline */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Challenge Process</h3>
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-0.5 border-t-2 border-dotted border-emerald-300" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {process.map((p, idx) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative bg-white rounded-xl p-4 shadow-sm border border-neutral-100 text-center"
                >
                  <div className="mx-auto mb-2 w-10 h-10 rounded-full grid place-items-center text-sm font-bold text-white" style={{ background: `linear-gradient(135deg, ${brand.green}, ${brand.yellow})` }}>
                    {idx + 1}
                  </div>
                  <div className="font-medium text-sm">{p}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What to expect */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">What to Expect</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {expect.map((e, idx) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl">{e.emoji}</div>
                <div className="font-semibold mt-1">{e.title}</div>
                <p className="text-sm text-neutral-600 mt-1">{e.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Logistics */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Logistics Support</h3>
          <div className="relative rounded-2xl p-6" style={{ background: `linear-gradient(135deg, ${brand.yellow}22, ${brand.green}22)` }}>
            <div className="grid sm:grid-cols-2 gap-6">
              {logistics.map((l, idx) => (
                <motion.div
                  key={l.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100 flex items-center gap-3"
                >
                  <l.icon className="h-5 w-5" style={{ color: brand.green }} />
                  <div className="font-medium">{l.title}</div>
                </motion.div>
              ))}
            </div>
            <svg className="absolute -z-0 right-4 bottom-4 opacity-30" width="160" height="80" viewBox="0 0 200 100" aria-hidden>
              <path d="M0 60 C 40 10, 80 110, 120 60 S 200 10, 200 60" fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" />
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor={brand.green} />
                  <stop offset="100%" stopColor={brand.yellow} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Evaluation */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Evaluation</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {evaluation.map((c, idx) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl p-5 text-center text-sm font-medium text-emerald-900"
                style={{ background: `linear-gradient(135deg, ${brand.green}22, ${brand.yellow}22)` }}
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
