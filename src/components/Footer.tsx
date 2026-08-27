import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-royal-maroon-dark text-cream pt-16 pb-24 md:pb-8 px-4 sm:px-8 border-t border-warm-gold/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-warm-gold text-royal-maroon rounded flex items-center justify-center font-serif text-lg font-bold">
                SK
              </div>
              <h3 className="font-serif text-xl font-bold text-warm-gold">SRI KAIRASI JEWELLERY</h3>
            </div>
            <p className="text-sm text-cream/70 max-w-sm mb-4">
              Your trusted destination for 100% 916 BIS Hallmarked gold, exquisite silver, and diamond jewelry in Vikravandi.
            </p>
            <p className="text-xs text-cream/50">
              Registration & Compliance: BIS Certified Jeweller.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-warm-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><a href="#collections" className="hover:text-warm-gold transition-colors">Our Collections</a></li>
              <li><a href="#gold-rate" className="hover:text-warm-gold transition-colors">Live Gold Rate</a></li>
              <li><a href="#savings" className="hover:text-warm-gold transition-colors">Gold Savings Scheme</a></li>
              <li><a href="#visit" className="hover:text-warm-gold transition-colors">Store Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-warm-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>+91 70106 60422</li>
              <li>No. 164, Vikravandi Rd,<br/>Vikravandi, TN 605652</li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-6xl mx-auto text-center border-t border-white/10 pt-8 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} Sri Kairasi Jewellery. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex items-center justify-around p-2 z-50">
        <a href="tel:+917010660422" className="flex flex-col items-center p-2 text-royal-maroon flex-1">
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-semibold">Call Now</span>
        </a>
        <div className="w-px h-8 bg-gray-200"></div>
        <a href="https://wa.me/917010660422" target="_blank" rel="noreferrer" className="flex flex-col items-center p-2 text-green-600 flex-1">
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
        <div className="w-px h-8 bg-gray-200"></div>
        <a href="https://maps.google.com/?q=2GPV+9H+Vikravandi" target="_blank" rel="noreferrer" className="flex flex-col items-center p-2 text-blue-600 flex-1">
          <MapPin size={20} className="mb-1" />
          <span className="text-[10px] font-semibold">Navigate</span>
        </a>
      </div>
    </>
  );
}
