import { useState } from 'react';
import { ChevronDown, Star, Coins, Rocket, Users, Briefcase, Trophy, Check } from 'lucide-react';

const brand = {
  yellow: '#FFCC00',
  green: '#00B37E',
};

const faqs = [
  { q: 'Who can apply?', a: 'Students and early-career innovators from across India are welcome.' },
  { q: 'Is it a team event?', a: 'Yes. Teams of 2–4 are recommended. Solo applicants can be matched.' },
  { q: 'What is the selection process?', a: 'Shortlisting based on idea relevance, clarity, and motivation.' },
  { q: 'Is travel supported?', a: 'Basic travel, stay, meals, and Wi‑Fi are supported for selected teams.' },
  { q: 'Do I need a working prototype?', a: 'Not initially. You will build during the sprint and hackathon.' },
  { q: 'Are there mentors?', a: 'Yes, mentors from academia, industry, and social impact will guide you.' },
  { q: 'What should I bring?', a: 'Laptop, chargers, valid ID, and your brightest ideas.' },
  { q: 'Will certificates be provided?', a: 'Participants and winners receive certificates.' },
  { q: 'IP and ownership?', a: 'Teams retain ownership. Partner pilots may be explored post-event.' },
  { q: 'Code of conduct?', a: 'Be kind. Be respectful. Build with integrity and empathy.' },
];

const prizes = [
  { icon: Coins, title: 'Cash Prizes', text: 'Top teams win prize money.' },
  { icon: Users, title: 'Mentorship', text: '1:1 expert guidance.' },
  { icon: Rocket, title: 'Visibility', text: 'Showcase to partners.' },
  { icon: Briefcase, title: 'Incubation', text: 'Support to take ideas forward.' },
  { icon: Trophy, title: 'Pilot Opportunities', text: 'Pathways to real-world pilots.' },
];

const stats = [
  '500+ Applicants',
  '48h Sprint',
  '25+ Mentors',
];

export default function FaqPrizesFooter() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* FAQs */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">FAQs</h3>
          <div className="divide-y divide-neutral-200 rounded-2xl overflow-hidden">
            {faqs.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className={`w-full text-left p-5 flex items-center justify-between gap-4 transition-colors ${idx % 2 === 0 ? 'bg-amber-50' : 'bg-white'}`}
                >
                  <div>
                    <div className="font-medium">{f.q}</div>
                    {isOpen && (
                      <p className="text-sm text-neutral-700 mt-1">{f.a}</p>
                    )}
                  </div>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Prizes */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Prizes & Highlights</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {prizes.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
                <div className="w-10 h-10 rounded-xl grid place-items-center mb-3" style={{ background: `linear-gradient(135deg, ${brand.yellow}33, ${brand.green}33)` }}>
                  <p.icon className="h-5 w-5" style={{ color: brand.green }} />
                </div>
                <div className="font-semibold">{p.title}</div>
                <p className="text-sm text-neutral-600 mt-1">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl px-6 py-4 text-center font-semibold" style={{ background: brand.yellow }}>
            {stats.join(' · ')}
          </div>
        </div>

        {/* Judges carousel (simple) + Footer */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Judges & Mentors</h3>
            <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="min-w-[160px] bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-300 to-amber-300" />
                  <div className="mt-2 font-medium">Mentor {i + 1}</div>
                  <div className="text-xs text-neutral-500">IIT Delhi · Partner</div>
                </div>
              ))}
            </div>
          </div>

          <footer className="rounded-3xl p-8 text-white" style={{ background: '#0B3B2E' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">Square Hacks 2025</div>
                <div className="text-white/80 text-sm">Build for Rural India · IIT Delhi</div>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full grid place-items-center bg-white/10 hover:bg-white/20" aria-label="Twitter">
                  <Star className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full grid place-items-center bg-white/10 hover:bg-white/20" aria-label="Instagram">
                  <Star className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full grid place-items-center bg-white/10 hover:bg-white/20" aria-label="LinkedIn">
                  <Star className="h-5 w-5" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
