import { MapPin, Clock, Navigation } from 'lucide-react';

export default function StoreVisit() {
  return (
    <section id="visit" className="py-16 sm:py-24 px-4 sm:px-8 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        <div className="lg:w-1/3 space-y-8 w-full">
          <div>
            <h2 className="font-serif text-3xl font-bold text-royal-maroon mb-2">Visit Our Store</h2>
            <p className="text-gray-600">Experience our craftsmanship in person.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm text-royal-maroon mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-royal-maroon mb-1">Address</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No. 164, Vikravandi Rd,<br/>
                  Vikravandi, Tamil Nadu 605652
                </p>
                <p className="text-xs text-gray-400 mt-1">Plus Code: 2GPV+9H Vikravandi</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm text-royal-maroon mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-royal-maroon mb-1">Store Timings</h4>
                <p className="text-gray-600 text-sm">
                  Monday – Sunday<br/>
                  9:30 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
          
          <a href="https://maps.google.com/?q=2GPV+9H+Vikravandi" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-royal-maroon text-cream px-6 py-4 rounded-xl font-bold hover:bg-royal-maroon/90 transition-colors shadow-lg">
            <Navigation size={20} /> Navigate via Google Maps
          </a>
        </div>
        
        <div className="lg:w-2/3 w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner border-4 border-white">
          <iframe 
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.431267803328!2d79.5445!3d12.0308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a534f9a5f4c5e3f%3A0x8e8e8e8e8e8e8e8e!2sVikravandi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
