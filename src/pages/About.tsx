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
      <section className="relative min-h-[60vh] flex items-center py-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #8B5CFF 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 animate-fade-in shadow-purple-glow" style={{ background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)' }}>
              <IoRocket size={40} color="#F8F9FA" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-offWhite mb-6 animate-fade-in-up animation-delay-200" style={{ letterSpacing: '-0.02em' }}>
              About ChartMasterAI
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Democratizing professional-grade stock market analysis through the power of AI
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Split Layout */}
      <section className="py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Icon & Title */}
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-purple-dark">
                    <IoSparkles size={32} color="#8B5CFF" />
                  </div>
                  <h2 className="text-4xl font-bold text-offWhite">
                    Our Mission
                  </h2>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6 animate-fade-in-up animation-delay-200">
                <p className="text-lg text-gray-400 leading-relaxed">
                  ChartMasterAI is designed to democratize access to professional-grade stock market analysis. 
                  We believe that everyone should have access to powerful AI-driven insights for making informed 
                  investment decisions.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our mobile app combines cutting-edge artificial intelligence with real-time market data to 
                  provide you with actionable trading insights, anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div style={{ color: feature.color, marginBottom: '16px' }}>
                    <feature.icon size={36} />
                  </div>
                  <h3 className="text-offWhite font-bold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Bento Grid Style */}
      <section className="py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Title Card */}
              <div className="glass-card p-8 card-hover flex flex-col justify-center animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-purple-dark">
                    <IoTrendingUp size={32} color="#8B5CFF" />
                  </div>
                  <h2 className="text-4xl font-bold text-offWhite">
                    What We Offer
                  </h2>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Comprehensive tools and features designed to give you the edge in the market
                </p>
              </div>

              {/* Right - Features List */}
              <div className="glass-card p-8 animate-fade-in-up animation-delay-200">
                <div className="space-y-4">
                  {offerings.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div 
                        className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: '#10B981' }}
                      >
                        <IoCheckmarkCircle size={24} />
                      </div>
                      <span className="text-gray-300 leading-relaxed group-hover:text-offWhite transition-colors duration-300">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-12 card-hover animate-fade-in-up">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-4 rounded-xl bg-gradient-purple-dark">
                    <IoBulb size={32} color="#8B5CFF" />
                  </div>
                  <h2 className="text-4xl font-bold text-offWhite">
                    Our Technology
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-400 leading-relaxed">
                    ChartMasterAI leverages Google's advanced Gemini AI technology to analyze stock charts, 
                    market trends, and financial data. Our algorithms process millions of data points to 
                    provide you with accurate, timely insights.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    We continuously update our models to adapt to changing market conditions, ensuring you 
                    always have access to the most relevant information.
                  </p>
                </div>

                {/* Tech Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-purple-500/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-offWhite mb-2">AI</div>
                    <div className="text-sm text-gray-400">Powered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-offWhite mb-2">50+</div>
                    <div className="text-sm text-gray-400">Markets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-offWhite mb-2">&lt;3s</div>
                    <div className="text-sm text-gray-400">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-offWhite mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-offWhite mb-4 text-center">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 card-hover animate-fade-in-up">
                <div className="flex justify-center mb-6" style={{ color: '#8B5CFF' }}>
                  <IoShieldCheckmark size={48} />
                </div>
                <h3 className="text-2xl font-bold text-offWhite mb-4 text-center">
                  Transparency
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Honest AI insights with clear explanations of how we analyze market data
                </p>
              </div>

              <div className="glass-card p-8 card-hover animate-fade-in-up animation-delay-200">
                <div className="flex justify-center mb-6" style={{ color: '#10B981' }}>
                  <IoPeople size={48} />
                </div>
                <h3 className="text-2xl font-bold text-offWhite mb-4 text-center">
                  Accessibility
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Making professional trading tools available to everyone, everywhere
                </p>
              </div>

              <div className="glass-card p-8 card-hover animate-fade-in-up animation-delay-400">
                <div className="flex justify-center mb-6" style={{ color: '#F59E0B' }}>
                  <IoBarChart size={48} />
                </div>
                <h3 className="text-2xl font-bold text-offWhite mb-4 text-center">
                  Excellence
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Continuously improving our AI models for the most accurate insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="text-4xl font-bold text-offWhite mb-4">
                Ready to Start Trading Smarter?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our community of traders and experience the power of AI-driven market analysis
              </p>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-purple-glow inline-flex items-center gap-3 text-lg px-10 py-5"
              >
                <IoRocket size={24} />
                <span>Get Started Free</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
