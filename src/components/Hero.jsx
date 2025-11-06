import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const brand = {
  yellow: '#FFCC00',
  green: '#00B37E',
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(80% 60% at 20% 10%, rgba(255,204,0,0.25) 0%, rgba(255,204,0,0) 60%), radial-gradient(70% 60% at 90% 20%, rgba(0,179,126,0.18) 0%, rgba(0,179,126,0) 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: brand.green }} />
            Build for Rural India — National Hackathon at IIT Delhi
          </span>

          <h1 className="mt-6 font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl tracking-tight">
            <span className="block">Square Hacks 2025</span>
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${brand.green}, ${brand.yellow})` }}>
              Build for Rural India
            </span>
          </h1>

          <p className="mt-5 text-lg text-neutral-700 max-w-3xl mx-auto">
            Reimagining Innovation. Reconnecting Roots.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
              <Calendar className="h-4 w-4 text-emerald-600" />
              <span>26–28 Dec 2025</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
              <MapPin className="h-4 w-4 text-amber-500" />
              <span>IIT Delhi</span>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundImage: `linear-gradient(90deg, ${brand.yellow}, ${brand.green})` }}
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Curved divider */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden>
        <path d="M0,64L80,58.7C160,53,320,43,480,37.3C640,32,800,32,960,37.3C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="#fff" />
      </svg>
    </section>
  );
}
