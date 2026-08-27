import Header from './components/Header';
import Hero from './components/Hero';
import GoldRateCalculator from './components/GoldRateCalculator';
import Collections from './components/Collections';
import GoldSavings from './components/GoldSavings';
import StoreVisit from './components/StoreVisit';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-royal-maroon bg-cream min-h-screen">
      <Header />
      <main>
        <Hero />
        <GoldRateCalculator />
        <Collections />
        <GoldSavings />
        <StoreVisit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
