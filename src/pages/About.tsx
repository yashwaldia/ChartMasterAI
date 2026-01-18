import { 
  IoCheckmarkCircle, 
  IoSparkles, 
  IoTrendingUp, 
  IoBulb,
  IoRocket,
  IoGlobeOutline,
  IoBarChart,
  IoShieldCheckmark,
  IoAnalytics,
  IoPeople,
  IoSchool
} from 'react-icons/io5';

export default function About() {
  const offerings = [
    'AI-powered stock chart analysis',
    'Real-time market data and trends',
    'Global market coverage (India, US, Europe, Asia)',
    'Technical indicator analysis',
    'Pattern recognition and predictions',
    'Risk assessment tools',
    'Educational resources for traders'
  ];

  const features = [
    {
      icon: IoSparkles,
      title: 'AI-Powered',
      description: 'Gemini AI technology for accurate predictions',
      color: '#8B5CFF'
    },
    {
      icon: IoGlobeOutline,
      title: 'Global Markets',
      description: 'Coverage across 50+ markets worldwide',
      color: '#10B981'
    },
    {
      icon: IoAnalytics,
      title: 'Real-Time Data',
      description: 'Live market data updated every second',
      color: '#F59E0B'
    },
    {
      icon: IoSchool,
      title: 'Educational',
      description: 'Learn while you trade with our resources',
      color: '#3B82F6'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center py-12 sm:py-16 md:py-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #8B5CFF 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl mb-6 sm:mb-7 md:mb-8 animate-fade-in shadow-purple-glow" style={{ background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)' }}>
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <IoRocket size="100%" color="#F8F9FA" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-offWhite mb-4 sm:mb-5 md:mb-6 animate-fade-in-up animation-delay-200 px-4" style={{ letterSpacing: '-0.02em' }}>
              About ChartMasterAI
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 px-4">
              Democratizing professional-grade stock market analysis through the power of AI
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Split Layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Left - Icon & Title */}
              <div className="animate-fade-in-up text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="p-3 sm:p-3.5 md:p-4 rounded-xl bg-gradient-purple-dark flex-shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <IoSparkles size="100%" color="#8B5CFF" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-offWhite">
                    Our Mission
                  </h2>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in-up animation-delay-200">
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  ChartMasterAI is designed to democratize access to professional-grade stock market analysis. 
                  We believe that everyone should have access to powerful AI-driven insights for making informed 
                  investment decisions.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  Our mobile app combines cutting-edge artificial intelligence with real-time market data to 
                  provide you with actionable trading insights, anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-5 sm:p-6 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div style={{ color: feature.color, marginBottom: '12px' }}>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9">
                      <feature.icon size="100%" />
                    </div>
                  </div>
                  <h3 className="text-offWhite font-bold text-base sm:text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Bento Grid Style */}
      <section className="py-12 sm:py-16 md:py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Left - Title Card */}
              <div className="glass-card p-6 sm:p-7 md:p-8 card-hover flex flex-col justify-center animate-fade-in-up">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="p-3 sm:p-3.5 md:p-4 rounded-xl bg-gradient-purple-dark flex-shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <IoTrendingUp size="100%" color="#8B5CFF" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-offWhite">
                    What We Offer
                  </h2>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed text-center lg:text-left">
                  Comprehensive tools and features designed to give you the edge in the market
                </p>
              </div>

              {/* Right - Features List */}
              <div className="glass-card p-6 sm:p-7 md:p-8 animate-fade-in-up animation-delay-200">
                <div className="space-y-3 sm:space-y-4">
                  {offerings.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3 group">
                      <div 
                        className="flex-shrink-0 mt-0.5 sm:mt-1 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: '#10B981' }}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6">
                          <IoCheckmarkCircle size="100%" />
                        </div>
                      </div>
                      <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-offWhite transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - Large Card */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 card-hover animate-fade-in-up">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-7 md:mb-8">
                  <div className="p-3 sm:p-3.5 md:p-4 rounded-xl bg-gradient-purple-dark flex-shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <IoBulb size="100%" color="#8B5CFF" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-offWhite">
                    Our Technology
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    ChartMasterAI leverages Google's advanced Gemini AI technology to analyze stock charts, 
                    market trends, and financial data. Our algorithms process millions of data points to 
                    provide you with accurate, timely insights.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    We continuously update our models to adapt to changing market conditions, ensuring you 
                    always have access to the most relevant information.
                  </p>
                </div>

                {/* Tech Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-purple-500/20">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-offWhite mb-1 sm:mb-2">AI</div>
                    <div className="text-xs sm:text-sm text-gray-400">Powered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-offWhite mb-1 sm:mb-2">50+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Markets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-offWhite mb-1 sm:mb-2">&lt;3s</div>
                    <div className="text-xs sm:text-sm text-gray-400">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-offWhite mb-1 sm:mb-2">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-400">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-offWhite mb-3 sm:mb-4 text-center px-4">
              Our Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12 text-center max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="glass-card p-6 sm:p-7 md:p-8 card-hover animate-fade-in-up">
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6" style={{ color: '#8B5CFF' }}>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12">
                    <IoShieldCheckmark size="100%" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-offWhite mb-3 sm:mb-4 text-center">
                  Transparency
                </h3>
                <p className="text-sm sm:text-base text-gray-400 text-center leading-relaxed">
                  Honest AI insights with clear explanations of how we analyze market data
                </p>
              </div>

              <div className="glass-card p-6 sm:p-7 md:p-8 card-hover animate-fade-in-up animation-delay-200">
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6" style={{ color: '#10B981' }}>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12">
                    <IoPeople size="100%" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-offWhite mb-3 sm:mb-4 text-center">
                  Accessibility
                </h3>
                <p className="text-sm sm:text-base text-gray-400 text-center leading-relaxed">
                  Making professional trading tools available to everyone, everywhere
                </p>
              </div>

              <div className="glass-card p-6 sm:p-7 md:p-8 card-hover animate-fade-in-up animation-delay-400 sm:col-span-2 md:col-span-1">
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6" style={{ color: '#F59E0B' }}>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12">
                    <IoBarChart size="100%" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-offWhite mb-3 sm:mb-4 text-center">
                  Excellence
                </h3>
                <p className="text-sm sm:text-base text-gray-400 text-center leading-relaxed">
                  Continuously improving our AI models for the most accurate insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 255, 0.2) 0%, rgba(90, 47, 230, 0.2) 100%)',
              border: '2px solid rgba(139, 92, 255, 0.3)',
            }}
          >
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-offWhite mb-3 sm:mb-4 px-4">
                Ready to Start Trading Smarter?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join our community of traders and experience the power of AI-driven market analysis
              </p>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-purple-glow inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5"
              >
                <IoRocket size={20} />
                <span>Get Started Free</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
