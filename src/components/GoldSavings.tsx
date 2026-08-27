import { useState } from 'react';
import { PiggyBank, ArrowRight, Percent, Scale, Gift } from 'lucide-react';

export default function GoldSavings() {
  const [activeTab, setActiveTab] = useState<'option1' | 'option2'>('option1');

  const option2Plans = [
    { plan: 'A', monthly: 500, months: 12, totalPaid: 6000, bonus: 500, maturity: 6500 },
    { plan: 'B', monthly: 1000, months: 12, totalPaid: 12000, bonus: 1000, maturity: 13000 },
    { plan: 'C', monthly: 2000, months: 12, totalPaid: 24000, bonus: 2000, maturity: 26000 },
    { plan: 'D', monthly: 5000, months: 12, totalPaid: 60000, bonus: 5000, maturity: 65000 },
  ];

  const option1MockData = [
    { month: 1, rate: 6800, amount: 5000, weight: (5000/6800).toFixed(2) },
    { month: 2, rate: 6850, amount: 5000, weight: (5000/6850).toFixed(2) },
    { month: 3, rate: 6900, amount: 5000, weight: (5000/6900).toFixed(2) },
    { month: 4, rate: 7000, amount: 5000, weight: (5000/7000).toFixed(2) },
    { month: 5, rate: 6950, amount: 5000, weight: (5000/6950).toFixed(2) },
    { month: 6, rate: 7100, amount: 5000, weight: (5000/7100).toFixed(2) },
    { month: 7, rate: 7200, amount: 5000, weight: (5000/7200).toFixed(2) },
    { month: 8, rate: 7150, amount: 5000, weight: (5000/7150).toFixed(2) },
    { month: 9, rate: 7300, amount: 5000, weight: (5000/7300).toFixed(2) },
    { month: 10, rate: 7250, amount: 5000, weight: (5000/7250).toFixed(2) },
    { month: 11, rate: 7400, amount: 5000, weight: (5000/7400).toFixed(2) },
    { month: 12, rate: 7350, amount: 5000, weight: (5000/7350).toFixed(2) },
  ];

  const totalWeight = option1MockData.reduce((acc, curr) => acc + Number(curr.weight), 0).toFixed(2);
  const totalAmount = option1MockData.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <section id="savings" className="py-16 sm:py-24 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-royal-maroon text-cream">
        
        {/* Header Area */}
        <div className="p-8 sm:p-12 text-center border-b border-white/10">
          <div className="inline-flex items-center gap-2 bg-warm-gold/20 text-warm-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <PiggyBank size={18} /> Swarna Thittam
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Plan Your Future with our <span className="text-warm-gold">Gold Savings Scheme</span>
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Choose between accumulating gold weight to beat price hikes, or accumulating value with a guaranteed bonus from us.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-col sm:flex-row bg-black/20">
          <button 
            onClick={() => setActiveTab('option1')}
            className={`flex-1 py-4 sm:py-6 text-center font-bold text-lg sm:text-xl transition-all ${activeTab === 'option1' ? 'bg-warm-gold text-royal-maroon' : 'hover:bg-white/5 text-cream/70'}`}
          >
            Option 1: Gold Weight Plan
          </button>
          <button 
            onClick={() => setActiveTab('option2')}
            className={`flex-1 py-4 sm:py-6 text-center font-bold text-lg sm:text-xl transition-all ${activeTab === 'option2' ? 'bg-warm-gold text-royal-maroon' : 'hover:bg-white/5 text-cream/70'}`}
          >
            Option 2: Value Based Plan
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-8 lg:p-12 bg-white/5">
          
          {activeTab === 'option1' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-warm-gold mb-4 flex items-center gap-2">
                    <Scale size={24} /> Accumulate Gold Weight
                  </h3>
                  <p className="text-cream/90 mb-4">
                    Pay fixed monthly installments for <strong>12 months</strong>. Every month, your amount is converted to gold weight based on that day's prevailing board rate. 
                  </p>
                  <ul className="space-y-2 text-cream/80 mb-6">
                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-warm-gold" /> Protects you from future gold price hikes.</li>
                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-warm-gold" /> <strong>Zero Making Charges</strong> upon maturity.</li>
                  </ul>
                  <a href="https://wa.me/917010660422?text=I%20am%20interested%20in%20Option%201%20Gold%20Weight%20Plan" target="_blank" rel="noreferrer" className="bg-warm-gold text-royal-maroon px-6 py-2 rounded font-bold w-max flex items-center gap-2 hover:bg-warm-gold-light transition-colors">
                    Join Option 1
                  </a>
                </div>
                
                <div className="flex-1 w-full bg-black/30 rounded-xl overflow-hidden border border-white/10">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-warm-gold/20 text-warm-gold text-xs uppercase">
                        <tr>
                          <th className="px-4 py-3 border-b border-white/10">Month</th>
                          <th className="px-4 py-3 border-b border-white/10">Rate (₹)</th>
                          <th className="px-4 py-3 border-b border-white/10">Amount (₹)</th>
                          <th className="px-4 py-3 border-b border-white/10">Weight (g)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {option1MockData.map((row) => (
                          <tr key={row.month} className="hover:bg-white/5">
                            <td className="px-4 py-2 text-cream/70">{row.month}</td>
                            <td className="px-4 py-2">{row.rate}</td>
                            <td className="px-4 py-2">{row.amount}</td>
                            <td className="px-4 py-2 text-warm-gold font-bold">{row.weight}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-warm-gold text-royal-maroon font-bold text-base">
                        <tr>
                          <td colSpan={2} className="px-4 py-3 text-right">Total:</td>
                          <td className="px-4 py-3">₹{totalAmount.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-3">{totalWeight}g</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'option2' && (
            <div className="animate-in fade-in duration-500">
               <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-warm-gold mb-4 flex items-center gap-2">
                    <Gift size={24} /> Guaranteed Value Bonus
                  </h3>
                  <p className="text-cream/90 mb-4">
                    Pay fixed monthly installments for <strong>12 months</strong> based on a tier of your choice. At the end of 12 months, we will add an extra <strong>1 month's installment as a bonus!</strong>
                  </p>
                  <ul className="space-y-2 text-cream/80 mb-6">
                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-warm-gold" /> Clear, fixed value maturity.</li>
                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-warm-gold" /> Get a direct cash-value bonus added to your wallet.</li>
                  </ul>
                  <a href="https://wa.me/917010660422?text=I%20am%20interested%20in%20Option%202%20Value%20Based%20Plan" target="_blank" rel="noreferrer" className="bg-warm-gold text-royal-maroon px-6 py-2 rounded font-bold w-max flex items-center gap-2 hover:bg-warm-gold-light transition-colors">
                    Join Option 2
                  </a>
                </div>
                
                <div className="flex-1 w-full bg-black/30 rounded-xl overflow-hidden border border-white/10 p-4">
                   <div className="grid grid-cols-5 gap-2 text-center text-xs sm:text-sm font-bold text-warm-gold mb-4 border-b border-white/20 pb-2">
                      <div>Plan</div>
                      <div>Monthly (₹)</div>
                      <div>Duration</div>
                      <div>Total Paid</div>
                      <div>Maturity Value</div>
                   </div>
                   
                   <div className="space-y-3">
                     {option2Plans.map((plan, idx) => (
                       <div key={idx} className="grid grid-cols-5 gap-2 text-center items-center text-sm bg-white/5 rounded-lg py-3 hover:bg-white/10 transition-colors">
                          <div className="font-bold text-lg text-white">{plan.plan}</div>
                          <div className="text-cream">₹{plan.monthly}</div>
                          <div className="text-cream/70">{plan.months} Months</div>
                          <div className="text-cream/70">₹{plan.totalPaid}</div>
                          <div className="text-warm-gold font-bold text-lg">₹{plan.maturity.toLocaleString('en-IN')}</div>
                       </div>
                     ))}
                   </div>

                   <div className="mt-6 text-center text-xs text-cream/60">
                      *Maturity Value includes your 12 months payment + 1 month shop bonus.
                   </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
