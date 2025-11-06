import { motion } from 'framer-motion';
import { HeartHandshake, Users } from 'lucide-react';

const brand = {
  yellow: '#FFCC00',
  green: '#00B37E',
};

export default function About() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About the Hackathon</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Square Hacks 2025 is a celebration of youth-driven innovation, bringing together students, creators, and problem-solvers to build for rural India.
            </p>
            <ul className="space-y-3">
              <li className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-2 rounded-full">
                <HeartHandshake className="h-4 w-4" />
                <span className="font-medium">Purpose-driven creation</span>
              </li>
              <li className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-2 rounded-full">
                <Users className="h-4 w-4" />
                <span className="font-medium">Human-centered design</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(255,204,0,0.3), rgba(0,179,126,0.25)), url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* soft divider */}
      <svg className="w-full" height="16" viewBox="0 0 1440 16" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0 8 C 200 0, 400 16, 600 8 S 1000 0, 1440 8" stroke="rgba(0,179,126,0.25)" strokeWidth="2" fill="none" />
      </svg>
    </section>
  );
}
