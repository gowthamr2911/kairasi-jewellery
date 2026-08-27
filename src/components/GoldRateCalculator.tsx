import { useState, useEffect } from 'react';
import { Calculator, Calendar, Loader2 } from 'lucide-react';

export default function GoldRateCalculator() {
  const [grams, setGrams] = useState<number | ''>('');
  const [material, setMaterial] = useState<'Gold' | 'Silver'>('Gold');
  const [rates, setRates] = useState({ 'Gold': 0, 'Silver': 0 });
  const [loading, setLoading] = useState(true);
  const [displayDate, setDisplayDate] = useState('');

  useEffect(() => {
    // Fetch from our backend scraper API
    const fetchLiveRates = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/rates`);
        
        if (!res.ok) {
           throw new Error("Backend not responding properly");
        }
        
        const json = await res.json();
        
        if (json.success && json.data) {
           setRates({
             'Gold': json.data.gold,
             'Silver': json.data.silver
           });
           
           const fetchedDate = new Date(json.data.lastUpdated);
           setDisplayDate(fetchedDate.toLocaleDateString('en-IN', {
             day: 'numeric', month: 'short', year: 'numeric'
           }));
        } else {
           throw new Error("Rates data not found in response");
        }
      } catch (error) {
        console.error("Failed to fetch rates from backend:", error);
        // Fallback gracefully if backend is offline
        setRates({
          'Gold': 15010,
          'Silver': 264.9
        });
        setDisplayDate(new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }));
      } finally {
        setLoading(false);
      }
    };

    fetchLiveRates();
  }, []);

  const calculateTotal = () => {
    if (!grams) return 0;
    const activeRate = rates[material] || (material === 'Gold' ? 15010 : 264.9);
    return Number(grams) * activeRate;
  };

  return (
    <section id="gold-rate" className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-cream p-6 sm:p-10 rounded-2xl shadow-lg border border-warm-gold/20">
        
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-warm-gold/20 text-royal-maroon rounded-full mb-2">
            <Calculator size={24} />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-royal-maroon">Live Metal Rate (Chennai)</h2>
          <p className="text-gray-600 text-sm">
            Check today's live market rates in Chennai and calculate your estimated metal value instantly.
          </p>
          <div className="flex items-center gap-2 text-royal-maroon font-semibold bg-white px-4 py-2 w-max rounded shadow-sm border border-gray-100 mt-2">
             <Calendar size={16} /> 
             {loading ? <span className="w-24 h-4 bg-gray-200 animate-pulse rounded"></span> : displayDate}
          </div>
          
          <div className="flex gap-4 mt-2">
            <div className="bg-white px-4 py-3 rounded shadow-sm border border-gray-100 flex-1 relative overflow-hidden">
              <span className="text-xs text-gray-500 block mb-1">Gold 22K (916)</span>
              {loading ? (
                <div className="flex items-center gap-2 text-gray-400"><Loader2 size={16} className="animate-spin" /> Fetching...</div>
              ) : (
                <span className="font-bold text-royal-maroon text-xl">₹{(rates['Gold'] || 15010).toLocaleString('en-IN')}/g</span>
              )}
            </div>
            <div className="bg-white px-4 py-3 rounded shadow-sm border border-gray-100 flex-1 relative overflow-hidden">
              <span className="text-xs text-gray-500 block mb-1">Silver (1g)</span>
              {loading ? (
                <div className="flex items-center gap-2 text-gray-400"><Loader2 size={16} className="animate-spin" /> Fetching...</div>
              ) : (
                <span className="font-bold text-gray-600 text-xl">₹{(rates['Silver'] || 264.9).toLocaleString('en-IN')}/g</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full bg-white p-6 rounded-xl shadow-inner border border-gray-100 relative">
          {loading && (
             <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-xl">
                <Loader2 size={32} className="animate-spin text-warm-gold" />
             </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Metal</label>
              <div className="flex gap-2">
                <button 
                  onClick={() => setMaterial('Gold')}
                  className={`flex-1 py-2 rounded text-sm font-semibold transition-colors ${material === 'Gold' ? 'bg-warm-gold text-royal-maroon' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Gold (22K)
                </button>
                <button 
                  onClick={() => setMaterial('Silver')}
                  className={`flex-1 py-2 rounded text-sm font-semibold transition-colors ${material === 'Silver' ? 'bg-gray-400 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Silver
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 mt-4">Weight (Grams)</label>
              <input 
                type="number" 
                value={grams}
                onChange={(e) => setGrams(e.target.value ? Number(e.target.value) : '')}
                placeholder="e.g. 8"
                className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-warm-gold focus:border-warm-gold outline-none text-lg font-medium"
              />
            </div>
            
            <div className="pt-6 border-t border-gray-200 mt-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-500 font-medium">Estimated Value</span>
                <span className="font-bold text-4xl text-royal-maroon">
                  ₹{calculateTotal().toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </span>
              </div>
              <p className="text-[10px] text-gray-400 leading-tight mt-2">
                *Base metal cost only. Does not include GST, making charges, or stones.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
