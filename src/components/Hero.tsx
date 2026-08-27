import { ShieldCheck, Gem, Hammer, PenTool } from 'lucide-react';

export default function Hero() {
  const trustCards = [
    { icon: <ShieldCheck size={28} />, title: 'BIS 916 Certified', desc: '100% Hallmarked Purity' },
    { icon: <Gem size={28} />, title: 'Transparent Pricing', desc: '0% Hidden Charges' },
    { icon: <Hammer size={28} />, title: 'Traditional Craftsmanship', desc: 'Master Artisans' },
    { icon: <PenTool size={28} />, title: 'Custom Orders', desc: 'Your Dream Design' },
  ];

  return (
    <section className="relative bg-royal-maroon text-cream py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-warm-gold via-transparent to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center mt-8">
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-widest text-warm-gold uppercase drop-shadow-lg">
          Sri Kairasi <br className="sm:hidden" /> Jewellery
        </h1>
        <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
          Timeless Elegance, <span className="text-warm-gold">Crafted for Generations.</span>
        </h2>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg mb-10 text-cream/90">
          Discover the finest traditional South Indian bridal jewelry and everyday wear at Vikravandi's most trusted gold destination.
        </p>
        <div className="flex gap-4">
          <a href="#collections" className="bg-warm-gold text-royal-maroon px-6 py-3 rounded text-sm sm:text-base font-semibold hover:bg-warm-gold-light transition-colors">
            Explore Collections
          </a>
          <a href="#visit" className="border border-warm-gold text-warm-gold px-6 py-3 rounded text-sm sm:text-base font-semibold hover:bg-warm-gold/10 transition-colors">
            Visit Store
          </a>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {trustCards.map((card, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 flex flex-col items-center text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="text-warm-gold mb-3">{card.icon}</div>
            <h3 className="font-serif font-semibold text-sm sm:text-base mb-1">{card.title}</h3>
            <p className="text-xs text-cream/70">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
