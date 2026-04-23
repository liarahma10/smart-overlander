import React, { useState, useEffect } from 'react';
import { 
  MapPin, Tent, Star, Compass, Calendar, 
  CreditCard, History, User, X, ChevronRight, 
  Sparkles, CheckCircle, Navigation, ShieldCheck
} from 'lucide-react';

// --- MOCK DATA ---
const CAMPSITES = [
  {
    id: 1,
    name: "Neon Pines Retreat",
    location: "Whispering Woods, OR",
    distance: "12 miles away",
    price: 45,
    rating: 4.8,
    reviews: 124,
    tags: ["Forest", "Secluded", "Dark Sky"],
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Starlight Ridge",
    location: "Echo Mountain, CO",
    distance: "28 miles away",
    price: 65,
    rating: 4.9,
    reviews: 89,
    tags: ["Mountain", "Views", "Hiking"],
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Dune Mirage Camp",
    location: "Red Sands, UT",
    distance: "45 miles away",
    price: 55,
    rating: 4.7,
    reviews: 210,
    tags: ["Desert", "Off-road", "Astrophotography"],
    image: "https://images.unsplash.com/photo-1504280390267-3310470602cb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Aurora Basecamp",
    location: "Northern Reaches, AK",
    distance: "120 miles away",
    price: 85,
    rating: 5.0,
    reviews: 42,
    tags: ["Extreme", "Wildlife", "Aurora"],
    image: "https://images.unsplash.com/photo-1531366936310-6cb1c837130a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Emerald Cove",
    location: "Pacific Coast, CA",
    distance: "18 miles away",
    price: 70,
    rating: 4.6,
    reviews: 156,
    tags: ["Beach", "Surfing", "Breeze"],
    image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Deep Creek Overlook",
    location: "Appalachians, NC",
    distance: "32 miles away",
    price: 40,
    rating: 4.5,
    reviews: 78,
    tags: ["River", "Fishing", "Family"],
    image: "https://images.unsplash.com/photo-1537565266750-f8da8b8f2a1b?auto=format&fit=crop&w=800&q=80"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Weekend Warrior",
    text: "Smart-Overlander found me a hidden gem just 20 miles away. The neon aesthetic of the app matches the futuristic feeling of finding the perfect spot instantly.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Full-time Nomad",
    text: "The 'Surprise Me' feature is game-changing. It somehow knew I needed a quiet desert night after weeks in the mountains. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // home, checkout, history
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [bookings, setBookings] = useState([]);
  
  // Surprise Me State
  const [isSurprising, setIsSurprising] = useState(false);
  const [surpriseModalOpen, setSurpriseModalOpen] = useState(false);
  const [surprisedSpot, setSurprisedSpot] = useState(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleBookNow = (spot) => {
    setSelectedSpot(spot);
    setCurrentView('checkout');
    setSurpriseModalOpen(false);
  };

  const handleSurpriseMe = () => {
    setSurpriseModalOpen(true);
    setIsSurprising(true);
    setSurprisedSpot(null);
    
    // Simulate AI thinking and picking a spot
    setTimeout(() => {
      const randomSpot = CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
      setSurprisedSpot(randomSpot);
      setIsSurprising(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#009432] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-[#009432]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => setCurrentView('home')}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-[#009432] shadow-[0_0_15px_rgba(0,148,50,0.4)] flex items-center justify-center mr-3 group-hover:shadow-[0_0_25px_rgba(0,148,50,0.8)] transition-all duration-300">
                <Compass className="text-[#009432] w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-wider text-white">
                SMART<span className="text-[#009432]">OVERLANDER</span>
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setCurrentView('home')} className={`text-sm font-medium hover:text-[#009432] transition-colors ${currentView === 'home' ? 'text-[#009432]' : 'text-slate-300'}`}>Discover</button>
              <button onClick={() => setCurrentView('history')} className={`text-sm font-medium hover:text-[#009432] transition-colors ${currentView === 'history' ? 'text-[#009432]' : 'text-slate-300'}`}>My Bookings</button>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentView('history')}
                className="p-2 rounded-full hover:bg-slate-800 transition-colors relative"
              >
                <History className="w-5 h-5 text-slate-300 hover:text-[#009432]" />
                {bookings.length > 0 && (
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#009432] rounded-full shadow-[0_0_5px_#009432]"></span>
                )}
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <User className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main>
        {currentView === 'home' && (
          <HomeView 
            onBook={handleBookNow} 
            onSurprise={handleSurpriseMe} 
          />
        )}
        
        {currentView === 'checkout' && (
          <CheckoutView 
            spot={selectedSpot} 
            onCancel={() => setCurrentView('home')}
            onSuccess={(bookingData) => {
              setBookings([bookingData, ...bookings]);
              setCurrentView('history');
            }}
          />
        )}

        {currentView === 'history' && (
          <HistoryView 
            bookings={bookings} 
            onBack={() => setCurrentView('home')} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Compass className="text-[#009432] w-6 h-6 mr-2" />
                <span className="font-bold text-lg text-white">SMARTOVERLANDER</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pioneering the future of wilderness exploration. We guide you to the nearest, most breathtaking campsites using smart preferences.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-[#009432] cursor-pointer transition-colors">Nearest Spots</li>
                <li className="hover:text-[#009432] cursor-pointer transition-colors">Surprise Me</li>
                <li className="hover:text-[#009432] cursor-pointer transition-colors">Available Today</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-[#009432] cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-[#009432] cursor-pointer transition-colors">Contact</li>
                <li className="hover:text-[#009432] cursor-pointer transition-colors">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Smart-Overlander. Pitching Prototype.
          </div>
        </div>
      </footer>

      {/* Surprise Me Modal */}
      {surpriseModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-[#009432]/50 shadow-[0_0_30px_rgba(0,148,50,0.2)] rounded-3xl max-w-md w-full overflow-hidden relative">
            <button 
              onClick={() => setSurpriseModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 text-center">
              {isSurprising ? (
                <div className="py-12 flex flex-col items-center">
                  <div className="w-20 h-20 border-4 border-slate-800 border-t-[#009432] rounded-full animate-spin mb-6 shadow-[0_0_15px_#009432]"></div>
                  <h3 className="text-xl font-bold text-white mb-2">Analyzing Your Vibe...</h3>
                  <p className="text-slate-400 text-sm">Matching past bookings with real-time nature data.</p>
                </div>
              ) : (
                surprisedSpot && (
                  <div className="animate-fade-in-up">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#009432]/20 text-[#009432] mb-4">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">We Found Your Match!</h3>
                    <p className="text-slate-400 text-sm mb-6">Based on your love for stargazing and seclusion.</p>
                    
                    <div className="relative rounded-2xl overflow-hidden h-48 mb-6 group">
                      <img src={surprisedSpot.image} alt={surprisedSpot.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-left">
                        <h4 className="text-lg font-bold text-white">{surprisedSpot.name}</h4>
                        <div className="flex items-center text-sm text-[#009432]">
                          <MapPin className="w-3 h-3 mr-1" />
                          {surprisedSpot.location}
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleBookNow(surprisedSpot)}
                      className="w-full bg-[#009432] hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(0,148,50,0.4)] hover:shadow-[0_0_25px_rgba(0,148,50,0.8)] flex justify-center items-center"
                    >
                      Book This Adventure <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- HOME VIEW COMPONENTS ---

function HomeView({ onBook, onSurprise }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?auto=format&fit=crop&w=1920&q=80" 
            alt="Overlanding under stars" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#009432] bg-[#009432]/10 text-[#009432] text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_10px_rgba(0,148,50,0.2)]">
            <Navigation className="w-3 h-3 mr-2" /> Next-Gen Overlanding
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Find Your <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009432] to-green-400 drop-shadow-[0_0_15px_rgba(0,148,50,0.5)]">
              Wilderness.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
            Smart-Overlander uses intelligent routing to point you to the nearest, most beautiful campsites tailored to your exact rig and preferences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => document.getElementById('nearest-spots').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-[#009432] hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,148,50,0.5)] hover:shadow-[0_0_25px_rgba(0,148,50,0.8)] flex justify-center items-center"
            >
              <MapPin className="w-5 h-5 mr-2" /> Find Nearest Spot
            </button>
            <button 
              onClick={onSurprise}
              className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md border border-[#009432]/50 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:border-[#009432] hover:shadow-[0_0_15px_rgba(0,148,50,0.3)] flex justify-center items-center"
            >
              <Sparkles className="w-5 h-5 mr-2 text-[#009432]" /> Surprise Me
            </button>
          </div>
        </div>
      </section>

      {/* Nearest Spots */}
      <section id="nearest-spots" className="py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#009432]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Nearest To You" subtitle="Beautiful spots just a drive away" icon={<Navigation className="w-6 h-6 text-[#009432]"/>} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAMPSITES.slice(0, 3).map(spot => (
              <SpotCard key={spot.id} spot={spot} onBook={() => onBook(spot)} />
            ))}
          </div>
        </div>
      </section>

      {/* Available Today */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader title="Available Today" subtitle="Grab these before sunset" icon={<Calendar className="w-6 h-6 text-[#009432]"/>} noMargin />
            <span className="hidden sm:inline-flex items-center text-sm text-[#009432] hover:text-green-400 cursor-pointer transition-colors">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAMPSITES.slice(3, 6).map(spot => (
              <SpotCard key={spot.id} spot={spot} onBook={() => onBook(spot)} featured={spot.id === 4} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Overlander Stories" subtitle="Real experiences from the wild" icon={<Tent className="w-6 h-6 text-[#009432]"/>} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimony) => (
              <div key={testimony.id} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-[#009432]/50 transition-colors duration-300 relative group">
                <div className="absolute top-8 right-8 text-slate-800 group-hover:text-[#009432]/20 transition-colors">
                  <Star className="w-12 h-12 fill-current" />
                </div>
                <div className="flex items-center mb-6">
                  <img src={testimony.avatar} alt={testimony.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#009432]" />
                  <div className="ml-4">
                    <h4 className="text-white font-bold">{testimony.name}</h4>
                    <p className="text-sm text-[#009432]">{testimony.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed relative z-10">
                  "{testimony.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-slate-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800 border border-[#009432]/50 mb-6 shadow-[0_0_20px_rgba(0,148,50,0.2)]">
            <Compass className="w-8 h-8 text-[#009432]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">About Smart-Overlander</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            We believe the best parts of nature shouldn't be hard to find. Born from a passion for off-grid exploration and modern technology, Smart-Overlander bridges the gap between your 4x4 rig and the great outdoors. Our algorithm doesn't just find a spot; it finds <span className="text-[#009432] font-semibold">your</span> spot.
          </p>
        </div>
      </section>
    </div>
  );
}

// --- CHECKOUT VIEW ---

function CheckoutView({ spot, onCancel, onSuccess }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  if (!spot) return onCancel();

  const handleProcessBooking = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      const newBooking = {
        id: `BKG-${Math.floor(Math.random() * 10000)}`,
        spot: spot,
        date: formData.date || new Date().toISOString().split('T')[0],
        totalPrice: spot.price + 15, // Adding dummy fee
        status: 'Confirmed',
        bookedAt: new Date().toISOString()
      };
      
      setIsProcessing(false);
      onSuccess(newBooking);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <button 
        onClick={onCancel}
        className="text-slate-400 hover:text-white flex items-center mb-8 transition-colors"
      >
        <ChevronRight className="w-5 h-5 rotate-180 mr-1" /> Back to exploring
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <ShieldCheck className="w-6 h-6 text-[#009432] mr-2" /> Secure Checkout
            </h2>
            
            <form onSubmit={handleProcessBooking}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009432] focus:ring-1 focus:ring-[#009432] transition-all"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Arrival Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009432] focus:ring-1 focus:ring-[#009432] transition-all"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-slate-400" /> Payment Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Card Number</label>
                      <input 
                        required
                        type="text" 
                        maxLength="19"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009432] focus:ring-1 focus:ring-[#009432] transition-all font-mono"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Expiry</label>
                        <input 
                          required
                          type="text" 
                          placeholder="MM/YY"
                          maxLength="5"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009432] focus:ring-1 focus:ring-[#009432] transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">CVC</label>
                        <input 
                          required
                          type="text" 
                          placeholder="123"
                          maxLength="4"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#009432] focus:ring-1 focus:ring-[#009432] transition-all font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-[#009432] hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(0,148,50,0.3)] hover:shadow-[0_0_25px_rgba(0,148,50,0.6)] mt-8 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </span>
                  ) : (
                    `Confirm & Pay $${spot.price + 15}`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 border border-[#009432]/30 rounded-3xl overflow-hidden sticky top-28 shadow-[0_0_20px_rgba(0,148,50,0.1)]">
            <div className="h-40 w-full relative">
              <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-1">{spot.name}</h3>
              <p className="text-sm text-slate-400 mb-6 flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-[#009432]" /> {spot.location}
              </p>
              
              <div className="space-y-3 text-sm border-b border-slate-800 pb-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Nightly Rate</span>
                  <span className="text-white">${spot.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Service Fee</span>
                  <span className="text-white">$15</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-white">Total</span>
                <span className="text-[#009432]">${spot.price + 15}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HISTORY VIEW ---

function HistoryView({ bookings, onBack }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in min-h-[70vh]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <button 
            onClick={onBack}
            className="text-slate-400 hover:text-white flex items-center mb-2 transition-colors text-sm"
          >
            <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Home
          </button>
          <h2 className="text-3xl font-bold text-white flex items-center">
            <History className="w-8 h-8 text-[#009432] mr-3" /> Booking History
          </h2>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Tent className="w-10 h-10 text-slate-600" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No adventures yet</h3>
          <p className="text-slate-400 mb-8">Your future camping trips will appear here.</p>
          <button 
            onClick={onBack}
            className="bg-[#009432]/20 text-[#009432] hover:bg-[#009432] hover:text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 border border-[#009432]"
          >
            Start Exploring
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 hover:border-[#009432]/50 transition-colors group">
              <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden shrink-0 relative">
                <img src={booking.spot.image} alt={booking.spot.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{booking.spot.name}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#009432]/10 text-[#009432] border border-[#009432]/30">
                      <CheckCircle className="w-3 h-3 mr-1" /> Confirmed
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 flex items-center mb-4">
                    <MapPin className="w-4 h-4 mr-1" /> {booking.spot.location}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-slate-500 mr-2" />
                    <span className="text-slate-300">Date: <span className="text-white font-medium">{booking.date}</span></span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 text-slate-500 mr-2" />
                    <span className="text-slate-300">Total: <span className="text-[#009432] font-bold">${booking.totalPrice}</span></span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate-500 text-xs">ID: {booking.id}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- SHARED COMPONENTS ---

function SectionHeader({ title, subtitle, icon, noMargin }) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between ${noMargin ? '' : 'mb-12'}`}>
      <div>
        <div className="flex items-center space-x-3 mb-2">
          {icon}
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-slate-400 text-lg">{subtitle}</p>
      </div>
    </div>
  );
}

function SpotCard({ spot, onBook, featured }) {
  return (
    <div className={`bg-slate-900 rounded-3xl overflow-hidden border ${featured ? 'border-[#009432] shadow-[0_0_20px_rgba(0,148,50,0.15)]' : 'border-slate-800 hover:border-[#009432]/50'} transition-all duration-300 group flex flex-col h-full`}>
      <div className="relative h-56 overflow-hidden">
        <img 
          src={spot.image} 
          alt={spot.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-sm font-semibold border border-slate-700">
          <Star className="w-4 h-4 text-[#009432] mr-1 fill-current" />
          <span className="text-white">{spot.rating}</span>
          <span className="text-slate-400 ml-1 text-xs">({spot.reviews})</span>
        </div>
        {featured && (
          <div className="absolute top-4 left-4 bg-[#009432] text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#009432]">
            Hot Spot
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-[#009432] transition-colors">{spot.name}</h3>
        </div>
        <p className="text-sm text-slate-400 flex items-center mb-4">
          <MapPin className="w-4 h-4 mr-1 text-[#009432]" /> {spot.location} • <span className="ml-1 text-slate-500">{spot.distance}</span>
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {spot.tags.map(tag => (
            <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-auto">
          <div>
            <span className="text-2xl font-bold text-white">${spot.price}</span>
            <span className="text-slate-500 text-sm">/night</span>
          </div>
          <button 
            onClick={onBook}
            className="bg-transparent hover:bg-[#009432] text-[#009432] hover:text-white border border-[#009432] font-semibold py-2 px-5 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,148,50,0.5)]"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}