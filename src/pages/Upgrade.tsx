import { useState } from 'react';
import { 
  IoCheckmarkCircle, 
  IoSparkles, 
  IoTrendingUp, 
  IoBarChart, 
  IoNotifications, 
  IoBriefcase, 
  IoSchool,
  IoGlobeOutline,
  IoFlash,
  IoRocket,
  IoHeart,
  IoTime,
  IoShieldCheckmark,
  IoDownloadOutline
} from 'react-icons/io5';

export default function Upgrade() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const plans = [
    {
      name: 'Free',
      tagline: 'For beginners',
      price: { monthly: 0, annual: 0 },
      futurePrice: { monthly: 0, annual: 0 },
      popular: false,
      features: [
        '5 stock analyses per day',
        'Basic chart analysis',
        'Global market indices',
        'Standard AI insights',
        'Email support',
      ],
      icon: IoSchool,
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Pro',
      tagline: 'For serious traders',
      price: { monthly: 0, annual: 0 },
      futurePrice: { monthly: 19, annual: 15 },
      popular: true,
      features: [
        'Unlimited stock analyses',
        'Advanced chart patterns',
        'Real-time market alerts',
        'Multi-timeframe analysis',
        'Buy/sell score indicators',
        'Technical indicator deep-dive',
        'Priority support',
        'Early access to new features',
      ],
      icon: IoTrendingUp,
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      name: 'Enterprise',
      tagline: 'For professionals',
      price: { monthly: 0, annual: 0 },
      futurePrice: { monthly: 49, annual: 39 },
      popular: false,
      features: [
        'Everything in Pro',
        'Portfolio tracking',
        'Custom AI models',
        'API access',
        'White-label options',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom integrations',
      ],
      icon: IoBriefcase,
      gradient: 'from-indigo-500 to-indigo-700',
    },
  ];

  const earlyAccessFeatures = [
    {
      icon: IoRocket,
      title: 'Early Access Period',
      description: 'Be among the first to experience cutting-edge AI stock analysis',
      color: '#8B5CFF'
    },
    {
      icon: IoSparkles,
      title: 'All Features Unlocked',
      description: 'Full access to Pro and Enterprise features at no cost',
      color: '#10B981'
    },
    {
      icon: IoHeart,
      title: 'Shape the Future',
      description: 'Your feedback directly influences our product development',
      color: '#EC4899'
    },
    {
      icon: IoTime,
      title: 'Limited Time',
      description: 'Lock in early access benefits before we launch paid plans',
      color: '#F59E0B'
    },
  ];

  const faqs = [
    {
      question: 'How long will the free early access last?',
      answer: 'We\'re currently in early access phase and all features are completely free. We\'ll notify users well in advance before introducing any paid plans. Early adopters will receive special lifetime benefits and grandfathered pricing.',
    },
    {
      question: 'Do I need to provide credit card details?',
      answer: 'No! There\'s absolutely no credit card required. Simply download the app and start using all features immediately. We believe in earning your trust first.',
    },
    {
      question: 'What happens when paid plans are introduced?',
      answer: 'Early access users will receive exclusive benefits including discounted pricing, bonus features, and priority access to new capabilities. You\'ll always have access to a free tier.',
    },
    {
      question: 'Can I use this for real trading decisions?',
      answer: 'ChartMasterAI provides educational insights and analysis powered by AI. Always conduct your own research and consult with financial advisors before making investment decisions.',
    },
    {
      question: 'Which features are available right now?',
      answer: 'All features across all plans are currently available for free during early access. This includes unlimited analyses, real-time alerts, advanced indicators, and priority support.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Modern Split Layout */}
      <section className="relative min-h-[80vh] flex items-center py-20">
        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #8B5CFF 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Early Access Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 animate-fade-in glass-card">
              <span style={{ color: '#8B5CFF' }}>
                <IoSparkles size={24} />
              </span>
              <span className="text-offWhite font-semibold">
                Limited Time Early Access
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200"
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className="text-offWhite">Everything is </span>
              <span className="gradient-text">Free</span>
              <br />
              <span className="text-offWhite">Right Now</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              We're in early access! Enjoy unlimited access to all Pro and Enterprise features at no cost. 
              No credit card required. No hidden fees. Just pure AI-powered stock analysis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-purple-glow inline-flex items-center justify-center gap-3 text-lg px-10 py-5"
              >
                <IoDownloadOutline size={24} />
                <span>Download App Now</span>
              </a>
              <button className="btn-outline-purple inline-flex items-center justify-center gap-2 text-lg px-10 py-5">
                <IoSparkles size={20} />
                <span>Learn More</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-2">
                <div style={{ color: '#8B5CFF' }}>
                  <IoSparkles size={20} />
                </div>
                <span className="text-gray-400 font-semibold text-sm">Powered by Gemini AI</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ color: '#10B981' }}>
                  <IoShieldCheckmark size={20} />
                </div>
                <span className="text-gray-400 font-semibold text-sm">100% Free Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ color: '#F59E0B' }}>
                  <IoRocket size={20} />
                </div>
                <span className="text-gray-400 font-semibold text-sm">No Credit Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Benefits - Bento Style */}
      <section className="py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-offWhite mb-4 text-center">
              Why Join Early Access?
            </h2>
            <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
              Be part of the revolution and get exclusive benefits
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {earlyAccessFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div style={{ color: feature.color, marginBottom: '16px' }}>
                    <feature.icon size={40} />
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-offWhite mb-4">
                Future Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Here's what our pricing will look like when we exit early access
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span 
                className={`font-semibold ${billingCycle === 'monthly' ? 'text-offWhite' : 'text-gray-500'}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-16 h-8 rounded-full transition-all duration-300"
                style={{
                  background: billingCycle === 'annual' ? 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)' : '#2A2D3A'
                }}
              >
                <div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300"
                  style={{
                    left: billingCycle === 'annual' ? '36px' : '4px'
                  }}
                />
              </button>
              <span 
                className={`font-semibold ${billingCycle === 'annual' ? 'text-offWhite' : 'text-gray-500'}`}
              >
                Annual
              </span>
              {billingCycle === 'annual' && (
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-success/20 text-success border border-success/30">
                  Save 20%
                </span>
              )}
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-3xl transition-all duration-300 ${
                    plan.popular ? 'glass-card card-hover' : 'bg-darkBgSecondary card-hover'
                  }`}
                  style={{
                    border: plan.popular ? '2px solid #8B5CFF' : '1px solid rgba(139, 92, 255, 0.2)',
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold bg-purple-gradient text-offWhite shadow-purple-glow">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-purple-dark">
                      <div style={{ color: '#8B5CFF' }}>
                        <plan.icon size={28} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-offWhite">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-5xl font-bold text-success">
                        FREE
                      </span>
                    </div>
                    
                    {plan.futurePrice[billingCycle] > 0 && (
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-400 text-sm">
                          Future pricing:
                        </span>
                        <span className="text-offWhite text-xl font-semibold">
                          ${plan.futurePrice[billingCycle]}
                        </span>
                        <span className="text-gray-400 text-sm">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                      plan.popular ? 'btn-purple-glow' : 'btn-outline-purple'
                    }`}
                  >
                    Get Started Free
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }}>
                          <IoCheckmarkCircle size={20} />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-darkBgSecondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-offWhite mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 mb-12 text-center">
              Everything you need to know about early access
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between transition-smooth hover:bg-purple-500/5"
                  >
                    <span className="text-offWhite font-semibold text-lg pr-4">
                      {faq.question}
                    </span>
                    <div
                      className="transition-transform duration-300 flex-shrink-0"
                      style={{
                        transform: openFaqIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#8B5CFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  
                  {openFaqIndex === index && (
                    <div className="px-8 pb-6 border-t border-purple-500/10">
                      <p className="pt-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
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
            className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 255, 0.2) 0%, rgba(90, 47, 230, 0.2) 100%)',
              border: '2px solid rgba(139, 92, 255, 0.3)',
            }}
          >
            <div className="relative z-10">
              <div style={{ color: '#8B5CFF' }} className="flex justify-center mb-8">
                <IoRocket size={64} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-offWhite mb-6">
                Ready to Revolutionize Your Trading?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of traders who are already using ChartMasterAI to make smarter investment decisions. 
                Download now and get full access to all features—completely free during early access.
              </p>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-purple-glow inline-flex items-center gap-3 text-xl px-12 py-5"
              >
                <IoDownloadOutline size={28} />
                <span>Download ChartMasterAI</span>
              </a>
              <p className="text-gray-400 text-sm mt-8">
                ✓ No credit card required  ✓ Free early access  ✓ All features unlocked
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
