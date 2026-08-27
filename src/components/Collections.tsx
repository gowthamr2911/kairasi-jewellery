import { useState } from 'react';

const categories = [
  { id: 'bridal', name: 'Bridal & Antique', items: ['Haram', 'Chokers', 'Vanki', 'Oddiyanam'] },
  { id: 'daily', name: 'Lightweight Gold', items: ['Chains', 'Bangles', 'Studs', 'Rings'] },
  { id: 'silver', name: 'Silver Articles', items: ['Pooja Articles', 'Anklets', 'Utensils', 'Gifts'] },
];

export default function Collections() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="collections" className="py-16 sm:py-24 px-4 sm:px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-royal-maroon mb-4">Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From grand wedding trousseaus to elegant daily wear, explore our meticulously crafted pieces.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 justify-start md:justify-center gap-2 sm:gap-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === cat.id 
                  ? 'bg-royal-maroon text-warm-gold shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.find(c => c.id === activeTab)?.items.map((item, idx) => {
            const itemImages: Record<string, string> = {
              'Haram': '/images/haram.png',
              'Chokers': '/images/chokers.png',
              'Vanki': '/images/vanki.png',
              'Oddiyanam': '/images/oddiyanam.png',
              'Chains': '/images/chains.png',
              'Bangles': '/images/bangles.png',
              'Studs': '/images/studs.png',
              'Rings': '/images/rings.png',
              'Pooja Articles': '/images/pooja articles.png',
              'Anklets': '/images/anklets.png',
              'Utensils': '/images/utensils.png',
              'Gifts': '/images/gifts.png'
            };
            
            const imagePath = itemImages[item];

            return (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 overflow-hidden relative">
                  {imagePath ? (
                    <img src={imagePath} alt={item} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <>
                      {/* Placeholder pattern/gradient when no image is available */}
                      <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/10 to-royal-maroon/5 group-hover:scale-105 transition-transform duration-500"></div>
                      <span className="font-serif text-royal-maroon/20 text-4xl font-bold select-none relative z-10">SK</span>
                    </>
                  )}
                </div>
                <h3 className="text-center font-semibold text-royal-maroon group-hover:text-warm-gold-dark transition-colors">{item}</h3>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://wa.me/917010660422" target="_blank" rel="noreferrer" className="inline-block border-2 border-royal-maroon text-royal-maroon px-8 py-3 rounded font-semibold hover:bg-royal-maroon hover:text-cream transition-colors">
            Request Catalog on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
