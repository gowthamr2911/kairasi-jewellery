import { Phone, MapPin, Menu, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-royal-maroon text-cream py-1.5 px-4 text-xs font-medium flex justify-between items-center sm:px-8">
        <div className="flex items-center gap-2">
          <span className="text-warm-gold font-bold">BIS 916</span>
          <span className="hidden sm:inline">| 100% Hallmarked Gold</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+917010660422" className="flex items-center gap-1 hover:text-warm-gold transition-colors">
            <Phone size={12} /> <span className="hidden sm:inline">+91 70106 60422</span>
          </a>
          <a href="https://maps.google.com/?q=2GPV+9H+Vikravandi" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-warm-gold transition-colors">
            <MapPin size={12} /> Directions
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 py-3 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-royal-maroon text-warm-gold rounded flex items-center justify-center font-serif text-xl font-bold">
            SK
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-lg leading-tight sm:text-xl font-bold text-royal-maroon">SRI KAIRASI</h1>
            <span className="text-[10px] sm:text-xs tracking-widest text-warm-gold uppercase font-semibold">Jewellery</span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 font-sans text-sm font-semibold text-royal-maroon">
          <a href="#collections" className="hover:text-warm-gold transition-colors">Collections</a>
          <a href="#savings" className="hover:text-warm-gold transition-colors">Savings Scheme</a>
          <a href="#gold-rate" className="hover:text-warm-gold transition-colors">Live Rate</a>
          <a href="#visit" className="hover:text-warm-gold transition-colors">Visit Store</a>
        </nav>

        {/* Action */}
        <div className="flex items-center gap-3">
          <a href="https://wa.me/917010660422" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border-2 border-warm-gold bg-royal-maroon text-warm-gold font-serif font-bold text-lg shadow-sm">
            KRJ
          </div>
          <button className="md:hidden text-royal-maroon p-1">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
