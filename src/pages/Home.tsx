import { useState, useEffect } from 'react';
import { 
  IoSparkles, 
  IoTrendingUp, 
  IoGlobeOutline, 
  IoBarChart, 
  IoFlash, 
  IoBriefcase, 
  IoSchool, 
  IoNotifications, 
  IoPhonePortrait, 
  IoDownloadOutline, 
  IoChevronForward,
  IoCheckmarkCircle,
  IoShieldCheckmark,
  IoAnalytics,
  IoRocket,
  IoTimeOutline,
  IoServerOutline
} from 'react-icons/io5';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #8B5CFF 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{
              background: 'radial-gradient(circle, #5A2FE6 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Main Headline - NO LOGO HERE */}
              <div>
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  <span className="text-offWhite">Trade Smarter</span>
                  <br />
                  <span className="text-offWhite">with </span>
                  <span className="gradient-text">AI-Powered</span>
                  <br />
                  <span className="text-offWhite">Insights</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                  Get instant, intelligent stock analysis powered by advanced AI. 
                  Make confident trading decisions in seconds, not hours.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purple-glow inline-flex items-center justify-center gap-3 text-lg px-8 py-4 group"
                >
                  <IoDownloadOutline size={24} />
                  <span>Download Free</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    <IoChevronForward size={20} />
                  </span>
                </a>
                <button
                  onClick={() => {
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-outline-purple inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  <IoSparkles size={20} />
                  <span>Explore Features</span>
                </button>
              </div>

              {/* Trust Indicators - GENUINE DATA ONLY */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div style={{ color: '#8B5CFF' }}>
                    <IoSparkles size={24} />
                  </div>
                  <span className="text-gray-400 font-semibold">Powered by Gemini AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ color: '#10B981' }}>
                    <IoShieldCheckmark size={24} />
                  </div>
                  <span className="text-gray-400 font-semibold">100% Free Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ color: '#F59E0B' }}>
                    <IoTimeOutline size={24} />
                  </div>
                  <span className="text-gray-400 font-semibold">Real-Time Data</span>
                </div>
              </div>
            </div>

            {/* Right - App Preview */}
            <div className="relative animate-fade-in-up animation-delay-400">
              <div className="relative">
                {/* Phone Mockup with Screenshot */}
                <div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-md"
                  style={{
                    background: 'linear-gradient(135deg, #13151F 0%, #1A1B2E 100%)',
                    border: '2px solid rgba(139, 92, 255, 0.3)',
                  }}
                >
                  {/* Carousel */}
                  <div className="relative h-[500px] sm:h-[600px]">
                    {images.map((img, idx) => (
                      <div
                        key={idx}
                        className="absolute inset-0 transition-all duration-700 flex items-center justify-center p-4"
                        style={{
                          opacity: currentSlide === idx ? 1 : 0,
                          transform: currentSlide === idx ? 'scale(1)' : 'scale(0.95)',
                        }}
                      >
                        <img
                          src={img}
                          alt={`ChartMasterAI Screenshot ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Carousel Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className="transition-all duration-300"
                        style={{
                          width: currentSlide === idx ? '24px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          backgroundColor: currentSlide === idx ? '#8B5CFF' : 'rgba(255,255,255,0.3)',
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Feature Cards */}
                <div className="hidden lg:block">
                  <div 
                    className="absolute -left-8 top-20 glass-card p-4 animate-float"
                    style={{ width: '200px' }}
                  >
                    <div className="flex items-center gap-3">
                      <div style={{ color: '#10B981' }}>
                        <IoCheckmarkCircle size={24} />
                      </div>
                      <div>
                        <p className="text-offWhite font-semibold text-sm">Buy Signal</p>
                        <p className="text-gray-400 text-xs">Strong uptrend</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="absolute -right-8 bottom-32 glass-card p-4 animate-float animation-delay-400"
                    style={{ width: '180px' }}
                  >
                    <div className="flex items-center gap-3">
                      <div style={{ color: '#8B5CFF' }}>
                        <IoAnalytics size={24} />
                      </div>
                      <div>
                        <p className="text-offWhite font-semibold text-sm">AI Analysis</p>
                        <p className="text-gray-400 text-xs">Instant insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - GENUINE METRICS ONLY */}
      <section className="py-16 border-y border-borderDark bg-darkBgSecondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-3" style={{ color: '#8B5CFF' }}>
                <IoGlobeOutline size={32} />
              </div>
              <div className="text-4xl font-bold text-offWhite mb-2">50+</div>
              <div className="text-gray-400 font-medium">Markets Covered</div>
            </div>
            
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="flex justify-center mb-3" style={{ color: '#10B981' }}>
                <IoSparkles size={32} />
              </div>
              <div className="text-4xl font-bold text-offWhite mb-2">AI</div>
              <div className="text-gray-400 font-medium">Powered Analysis</div>
            </div>
            
            <div className="text-center animate-fade-in-up animation-delay-400">
              <div className="flex justify-center mb-3" style={{ color: '#F59E0B' }}>
                <IoTimeOutline size={32} />
              </div>
              <div className="text-4xl font-bold text-offWhite mb-2">&lt;3s</div>
              <div className="text-gray-400 font-medium">Response Time</div>
            </div>
            
            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="flex justify-center mb-3" style={{ color: '#EC4899' }}>
                <IoServerOutline size={32} />
              </div>
              <div className="text-4xl font-bold text-offWhite mb-2">24/7</div>
              <div className="text-gray-400 font-medium">Live Data Feed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-offWhite mb-4">
              Everything You Need to Trade Smart
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful AI-driven features designed to give you the edge in the market
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature 1 */}
            <div className="md:col-span-2 glass-card p-8 card-hover animate-fade-in-up">
              <div className="flex flex-col h-full">
                <div style={{ color: '#8B5CFF' }} className="mb-4">
                  <IoSparkles size={48} />
                </div>
                <h3 className="text-2xl font-bold text-offWhite mb-3">
                  AI-Powered Analysis
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  Advanced machine learning algorithms analyze millions of data points to provide 
                  you with actionable insights in real-time. Get buy/sell recommendations backed by AI.
                </p>
                <div className="flex items-center gap-2 text-purple-400 font-semibold">
                </div>
              </div>
            </div>

            {/* Medium Feature */}
            <div className="glass-card p-8 card-hover animate-fade-in-up animation-delay-200">
              <div style={{ color: '#10B981' }} className="mb-4">
                <IoTrendingUp size={40} />
              </div>
              <h3 className="text-xl font-bold text-offWhite mb-3">
                Real-Time Data
              </h3>
              <p className="text-gray-400">
                Live market data from global exchanges updated every second.
              </p>
            </div>

            {/* Medium Feature */}
            <div className="glass-card p-8 card-hover animate-fade-in-up animation-delay-400">
              <div style={{ color: '#F59E0B' }} className="mb-4">
                <IoNotifications size={40} />
              </div>
              <h3 className="text-xl font-bold text-offWhite mb-3">
                Smart Alerts
              </h3>
              <p className="text-gray-400">
                Get notified instantly when AI detects trading opportunities.
              </p>
            </div>

            {/* Large Feature 2 */}
            <div className="md:col-span-2 glass-card p-8 card-hover animate-fade-in-up animation-delay-600">
              <div className="flex flex-col h-full">
                <div style={{ color: '#8B5CFF' }} className="mb-4">
                  <IoGlobeOutline size={48} />
                </div>
                <h3 className="text-2xl font-bold text-offWhite mb-3">
                  Global Market Coverage
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  Track stocks from India (NSE, BSE), US (NASDAQ, NYSE), Europe, and Asian markets. 
                  All in one powerful platform with unified analysis.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['NSE', 'BSE', 'NASDAQ', 'NYSE'].map((market) => (
                    <span 
                      key={market}
                      className="px-4 py-2 rounded-lg text-sm font-semibold"
                      style={{
                        background: 'rgba(139, 92, 255, 0.1)',
                        border: '1px solid rgba(139, 92, 255, 0.3)',
                        color: '#8B5CFF'
                      }}
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features List */}
      <section className="py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-offWhite mb-12 text-center">
              Built for Modern Traders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <IoBarChart size={24} />, text: 'Advanced chart patterns', color: '#8B5CFF' },
                { icon: <IoFlash size={24} />, text: 'Lightning-fast performance', color: '#F59E0B' },
                { icon: <IoPhonePortrait size={24} />, text: 'Beautiful, intuitive UI', color: '#10B981' },
                { icon: <IoBriefcase size={24} />, text: 'Portfolio tracking & management', color: '#8B5CFF' },
                { icon: <IoRocket size={24} />, text: 'Entry/exit suggestions', color: '#EC4899' },
                { icon: <IoSchool size={24} />, text: 'Educational resources', color: '#3B82F6' },
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl transition-smooth hover-lift bg-darkBg border border-transparent hover:border-purple-500"
                >
                  <div 
                    className="flex items-center justify-center rounded-lg p-3"
                    style={{
                      backgroundColor: 'rgba(139, 92, 255, 0.1)',
                      border: '1px solid rgba(139, 92, 255, 0.2)',
                      color: feature.color
                    }}
                  >
                    {feature.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 255, 0.2) 0%, rgba(90, 47, 230, 0.2) 100%)',
              border: '2px solid rgba(139, 92, 255, 0.3)',
            }}
          >
            <div className="relative z-10">
              <div style={{ color: '#8B5CFF' }} className="flex justify-center mb-6">
                <IoRocket size={64} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-offWhite mb-6">
                Start Trading Smarter Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the power of AI-driven stock analysis. 
                Download now and get full access—completely free during early access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purple-glow inline-flex items-center justify-center gap-3 text-lg px-10 py-5"
                >
                  <IoDownloadOutline size={28} />
                  <span>Download Free Now</span>
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                ✓ No credit card required  ✓ Free early access  ✓ All features unlocked
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
