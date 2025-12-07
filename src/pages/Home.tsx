import { useState, useEffect } from 'react';
import { IoSparkles, IoTrendingUp, IoGlobeOutline, IoBarChart, IoFlash, IoBriefcase, IoSchool, IoNotifications, IoPhonePortrait, IoDownloadOutline, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import logo from '../assets/logo.png';
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
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block mb-6">
          <img 
            src={logo} 
            alt="ChartMasterAI Logo" 
            className="w-28 h-28 rounded-2xl mx-auto"
            style={{
              boxShadow: '0 12px 40px rgba(108, 62, 255, 0.4)'
            }}
          />
        </div>
        <h1 
          className="text-6xl md:text-7xl font-bold mb-6"
          style={{
            color: '#F8F9FA',
            fontWeight: '700',
            letterSpacing: '-0.5px',
            lineHeight: '1.1'
          }}
        >
          ChartMasterAI
        </h1>
        <p 
          className="text-2xl mb-10 max-w-3xl mx-auto"
          style={{
            color: '#8F92A1',
            fontSize: '22px',
            fontWeight: '500',
            lineHeight: '1.6'
          }}
        >
          AI-powered stock analysis. Instantly.
        </p>
        
        {/* BIG Hero CTA Button */}
        <a
          href="#download"
          className="inline-flex items-center justify-center space-x-3 px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)',
            color: '#FFFFFF',
            fontWeight: '700',
            letterSpacing: '-0.3px',
            fontSize: '20px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #7B4AFF 0%, #6C3EFF 100%)';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(108, 62, 255, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <IoDownloadOutline size={28} />
          <span>Download on Google Play</span>
        </a>
      </div>

      {/* Carousel Section - FIXED */}
      <div className="mb-20 relative">
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundColor: '#0A0B1A',
            border: '1.5px solid #2A2B3E',
            minHeight: '450px',
          }}
        >
          {/* Carousel Images */}
          <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '450px' }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 flex items-center justify-center p-4"
                style={{
                  opacity: currentSlide === idx ? 1 : 0,
                  pointerEvents: currentSlide === idx ? 'auto' : 'none',
                }}
              >
                <img
                  src={img}
                  alt={`ChartMasterAI Promo ${idx + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '450px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            style={{
              backgroundColor: 'rgba(26, 27, 46, 0.95)',
              border: '1.5px solid #6C3EFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6C3EFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(26, 27, 46, 0.95)';
            }}
          >
            <IoChevronBack size={24} color="#F8F9FA" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            style={{
              backgroundColor: 'rgba(26, 27, 46, 0.95)',
              border: '1.5px solid #6C3EFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6C3EFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(26, 27, 46, 0.95)';
            }}
          >
            <IoChevronForward size={24} color="#F8F9FA" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="transition-all duration-300"
              style={{
                width: currentSlide === idx ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                backgroundColor: currentSlide === idx ? '#6C3EFF' : '#2A2B3E',
                border: currentSlide === idx ? 'none' : '1.5px solid #2A2B3E',
              }}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: <IoSparkles size={48} color="#6C3EFF" />,
            title: 'AI-Powered Analysis',
            description: 'Get instant insights powered by advanced AI technology for smarter trading decisions.'
          },
          {
            icon: <IoTrendingUp size={48} color="#6C3EFF" />,
            title: 'Real-Time Data',
            description: 'Access real-time stock prices and market trends from global exchanges.'
          },
          {
            icon: <IoGlobeOutline size={48} color="#6C3EFF" />,
            title: 'Global Coverage',
            description: 'Track stocks and markets from India, US, Europe, and Asia all in one place.'
          }
        ].map((feature, idx) => (
          <div 
            key={idx}
            className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#1A1B2E',
              border: '1.5px solid #2A2B3E',
            }}
          >
            <div className="mb-5">{feature.icon}</div>
            <h3 
              className="text-xl font-bold mb-3"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              {feature.title}
            </h3>
            <p 
              style={{
                color: '#8F92A1',
                fontSize: '15px',
                fontWeight: '500',
                lineHeight: '1.6'
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Powerful Features */}
      <div 
        className="backdrop-blur-sm rounded-2xl p-12 mb-20"
        style={{
          backgroundColor: '#1A1B2E',
          border: '1.5px solid #2A2B3E',
        }}
      >
        <h2 
          className="text-4xl font-bold mb-10 text-center"
          style={{
            color: '#F8F9FA',
            fontWeight: '700',
            letterSpacing: '-0.4px'
          }}
        >
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <IoBarChart size={20} color="#6C3EFF" />, text: 'Advanced chart analysis' },
            { icon: <IoSparkles size={20} color="#6C3EFF" />, text: 'AI-driven predictions' },
            { icon: <IoPhonePortrait size={20} color="#6C3EFF" />, text: 'Clean, intuitive interface' },
            { icon: <IoFlash size={20} color="#6C3EFF" />, text: 'Lightning-fast performance' },
            { icon: <IoNotifications size={20} color="#6C3EFF" />, text: 'Real-time alerts' },
            { icon: <IoTrendingUp size={20} color="#6C3EFF" />, text: 'Multiple timeframes' },
            { icon: <IoBriefcase size={20} color="#6C3EFF" />, text: 'Portfolio tracking' },
            { icon: <IoSchool size={20} color="#6C3EFF" />, text: 'Educational resources' }
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div 
                className="flex items-center justify-center rounded-lg"
                style={{
                  backgroundColor: 'rgba(108, 62, 255, 0.15)',
                  padding: '10px',
                  border: '1.5px solid rgba(108, 62, 255, 0.3)',
                  minWidth: '44px',
                  minHeight: '44px'
                }}
              >
                {feature.icon}
              </div>
              <span 
                style={{
                  color: '#8F92A1',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - Text Left, Button Right */}
      <div 
        className="backdrop-blur-sm rounded-2xl p-10"
        style={{
          background: 'linear-gradient(135deg, rgba(108, 62, 255, 0.15) 0%, rgba(90, 47, 230, 0.15) 100%)',
          border: '1.5px solid rgba(108, 62, 255, 0.3)',
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Text */}
          <div className="flex-1">
            <h2 
              className="text-3xl font-bold mb-3"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.4px'
              }}
            >
              Ready to elevate your trading?
            </h2>
            <p 
              style={{
                color: '#8F92A1',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '1.6'
              }}
            >
              Join thousands of traders using ChartMasterAI for smarter investment decisions.
            </p>
          </div>

          {/* Right Side - SMALLER Download Button */}
          <a
            href="#download"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)',
              color: '#FFFFFF',
              fontWeight: '600',
              letterSpacing: '-0.2px',
              fontSize: '15px',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #7B4AFF 0%, #6C3EFF 100%)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(108, 62, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <IoDownloadOutline size={20} />
            <span>Download Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
