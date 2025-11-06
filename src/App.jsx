import Hero from './components/Hero';
import About from './components/About';
import FlowSections from './components/FlowSections';
import FaqPrizesFooter from './components/FaqPrizesFooter';

function App() {
  return (
    <div className="font-inter text-neutral-900 bg-white">
      <Hero />
      <About />
      <FlowSections />
      <FaqPrizesFooter />

      {/* Apply anchor */}
      <section id="apply" className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to build for rural India?</h3>
          <p className="text-neutral-600 mb-6">Submit your idea and join us at IIT Delhi, 26–28 Dec 2025.</p>
          <a href="#" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg" style={{ backgroundImage: 'linear-gradient(90deg, #FFCC00, #00B37E)' }}>
            Start Application
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
