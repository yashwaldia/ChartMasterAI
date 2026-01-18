import { useState, useEffect } from 'react';
import { 
  IoDocumentText,
  IoCheckmarkCircle,
  IoWarning,
  IoShieldCheckmark,
  IoPeople,
  IoLockClosed,
  IoCash,
  IoSparkles,
  IoAlertCircle,
  IoClose,
  IoTime,
  IoGlobeOutline,
  IoMailOutline,
  IoReader,
  IoBan,
  IoMenu,
  IoChevronDown,
  IoChevronUp
} from 'react-icons/io5';

export default function Terms() {
  const [activeSection, setActiveSection] = useState('');
  const [isTocOpen, setIsTocOpen] = useState(false);

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: IoCheckmarkCircle },
    { id: 'description', title: 'Description of Service', icon: IoDocumentText },
    { id: 'not-advice', title: 'NOT Financial Advice', icon: IoWarning },
    { id: 'eligibility', title: 'Eligibility', icon: IoPeople },
    { id: 'responsibilities', title: 'User Responsibilities', icon: IoShieldCheckmark },
    { id: 'prohibited', title: 'Prohibited Activities', icon: IoBan },
    { id: 'intellectual', title: 'Intellectual Property', icon: IoLockClosed },
    { id: 'third-party', title: 'Third-Party Services', icon: IoGlobeOutline },
    { id: 'pricing', title: 'Pricing and Payments', icon: IoCash },
    { id: 'ai-disclaimer', title: 'AI-Generated Content', icon: IoSparkles },
    { id: 'liability', title: 'Limitation of Liability', icon: IoAlertCircle },
    { id: 'warranties', title: 'Disclaimer of Warranties', icon: IoAlertCircle },
    { id: 'indemnification', title: 'Indemnification', icon: IoShieldCheckmark },
    { id: 'termination', title: 'Termination', icon: IoClose },
    { id: 'changes', title: 'Changes to Terms', icon: IoTime },
    { id: 'governing', title: 'Governing Law', icon: IoGlobeOutline },
    { id: 'severability', title: 'Severability', icon: IoReader },
    { id: 'entire', title: 'Entire Agreement', icon: IoDocumentText },
    { id: 'contact', title: 'Contact Us', icon: IoMailOutline },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setIsTocOpen(false);
    }
  };

  return (
    <div className="relative py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6 shadow-purple-glow" style={{ background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)' }}>
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <IoDocumentText size="100%" color="#F8F9FA" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-offWhite mb-3 sm:mb-4 px-4" style={{ letterSpacing: '-0.02em' }}>
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Please read these terms carefully before using ChartMasterAI
            </p>
            <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 px-4">
              <span><strong className="text-offWhite">Effective Date:</strong> December 7, 2025</span>
              <span className="hidden sm:inline text-purple-500">•</span>
              <span><strong className="text-offWhite">Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Mobile Table of Contents Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full glass-card p-4 rounded-xl flex items-center justify-between text-offWhite font-semibold hover:bg-purple-500/10 transition-all"
              >
                <div className="flex items-center gap-2">
                  <IoMenu size={20} />
                  <span>Table of Contents</span>
                </div>
                {isTocOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
              </button>

              {/* Mobile TOC Dropdown */}
              {isTocOpen && (
                <div className="glass-card p-4 rounded-xl mt-2 max-h-96 overflow-y-auto">
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm ${
                          activeSection === section.id
                            ? 'bg-purple-500/20 text-purple-400 font-semibold'
                            : 'text-gray-400 hover:text-offWhite hover:bg-purple-500/10'
                        }`}
                      >
                        <section.icon size={16} />
                        <span className="line-clamp-1">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>

            {/* Desktop Sidebar Navigation - Sticky */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <div className="glass-card p-5 xl:p-6 rounded-2xl">
                  <h3 className="text-offWhite font-bold mb-4 text-sm uppercase tracking-wide">
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm ${
                          activeSection === section.id
                            ? 'bg-purple-500/20 text-purple-400 font-semibold'
                            : 'text-gray-400 hover:text-offWhite hover:bg-purple-500/10'
                        }`}
                      >
                        <section.icon size={16} />
                        <span className="truncate">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Introduction */}
                <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    These Terms of Service ("Terms") govern your use of the ChartMasterAI mobile application 
                    ("the App," "we," "our," or "us"). By downloading, installing, or using the App, you agree 
                    to be bound by these Terms. If you do not agree, please do not use the App.
                  </p>
                </div>

                {/* Section 1 - Acceptance */}
                <section id="acceptance" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoCheckmarkCircle size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">1. Acceptance of Terms</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    By accessing and using ChartMasterAI, you acknowledge that you have read, understood, and 
                    agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally 
                    binding agreement between you and ChartMasterAI.
                  </p>
                </section>

                {/* Section 2 - Description */}
                <section id="description" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoDocumentText size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">2. Description of Service</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>ChartMasterAI provides the following services:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li><strong className="text-offWhite">AI-powered stock chart analysis:</strong> Upload stock charts for instant AI interpretation</li>
                      <li><strong className="text-offWhite">Market insights:</strong> Receive analysis on stocks, global markets, and trading patterns</li>
                      <li><strong className="text-offWhite">Educational content:</strong> Learn about technical analysis and market trends</li>
                      <li><strong className="text-offWhite">Real-time analysis:</strong> Get immediate responses powered by Google Gemini AI</li>
                      <li><strong className="text-offWhite">Advertising:</strong> The app may display advertisements via Google AdMob</li>
                    </ul>
                    <p className="text-xs sm:text-sm italic text-gray-400 mt-3 sm:mt-4">
                      The service is provided "as is" for informational and educational purposes only.
                    </p>
                  </div>
                </section>

                {/* Section 3 - NOT FINANCIAL ADVICE - CRITICAL */}
                <section id="not-advice" className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8" style={{ background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.2) 100%)', border: '2px solid rgba(255, 193, 7, 0.5)' }}>
                  <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <span className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: 'rgba(255, 193, 7, 0.3)' }}>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                        <IoWarning size="100%" color="#FFC107" />
                      </div>
                    </span>
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold" style={{ color: '#FFC107' }}>
                      ⚠️ 3. NOT FINANCIAL ADVICE - CRITICAL DISCLAIMER
                    </h2>
                  </div>
                  
                  <p className="mb-3 sm:mb-4 leading-relaxed font-semibold text-base sm:text-lg" style={{ color: '#FFE082' }}>
                    PLEASE READ THIS SECTION CAREFULLY:
                  </p>

                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base" style={{ color: '#FFF3E0' }}>
                    <p className="leading-relaxed">
                      <strong>ChartMasterAI DOES NOT provide financial, investment, or trading advice.</strong> 
                      All analysis, predictions, insights, and recommendations generated by the App are:
                    </p>
                    
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>Generated by artificial intelligence (Google Gemini AI)</li>
                      <li>For <strong>educational and informational purposes only</strong></li>
                      <li><strong>NOT</strong> personalized financial advice</li>
                      <li><strong>NOT</strong> guaranteed to be accurate or profitable</li>
                      <li>Subject to errors, misinterpretations, or technical limitations</li>
                    </ul>

                    <p className="leading-relaxed font-semibold mt-3 sm:mt-4">
                      You acknowledge and agree that:
                    </p>

                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li><strong>You use the App entirely at your own risk</strong></li>
                      <li>You should <strong>never</strong> rely solely on AI-generated analysis for investment decisions</li>
                      <li>You must <strong>always consult with a qualified, licensed financial advisor</strong> before making investment decisions</li>
                      <li>Past performance does <strong>not</strong> guarantee future results</li>
                      <li>Trading and investing involve substantial risk of financial loss</li>
                      <li><strong>You could lose all or part of your investment</strong></li>
                      <li>We are <strong>not responsible</strong> for any financial losses you may incur</li>
                    </ul>
                  </div>
                </section>

                {/* Section 4 - Eligibility */}
                <section id="eligibility" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoPeople size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">4. Eligibility</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    You must be at least <strong className="text-offWhite">18 years of age</strong> to use ChartMasterAI. By using the App, 
                    you represent and warrant that you meet this age requirement and have the legal capacity to 
                    enter into these Terms. The App is not intended for children under 13 years of age.
                  </p>
                </section>

                {/* Section 5 - User Responsibilities */}
                <section id="responsibilities" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoShieldCheckmark size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">5. User Responsibilities</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>When using ChartMasterAI, you agree to:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li><strong className="text-offWhite">Use the App legally:</strong> Comply with all applicable local, state, national, and international laws</li>
                      <li><strong className="text-offWhite">Upload appropriate content:</strong> Only upload stock charts and legitimate market-related images</li>
                      <li><strong className="text-offWhite">Respect intellectual property:</strong> Not upload copyrighted or proprietary content without permission</li>
                      <li><strong className="text-offWhite">No misuse:</strong> Not attempt to hack, reverse engineer, or exploit the App for unauthorized purposes</li>
                      <li><strong className="text-offWhite">No abuse:</strong> Not use the App to spam, harass, or engage in illegal activities</li>
                      <li><strong className="text-offWhite">Personal responsibility:</strong> Take full responsibility for all trading and investment decisions you make</li>
                    </ul>
                  </div>
                </section>

                {/* Section 6 - Prohibited Activities */}
                <section id="prohibited" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoBan size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">6. Prohibited Activities</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>You may NOT:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>Reverse engineer, decompile, or disassemble the App</li>
                      <li>Attempt to gain unauthorized access to our systems or other users' data</li>
                      <li>Use automated scripts, bots, or scrapers to access the App</li>
                      <li>Resell, redistribute, or commercially exploit the App without permission</li>
                      <li>Remove or modify any copyright, trademark, or proprietary notices</li>
                      <li>Use the App for market manipulation, fraud, or illegal trading activities</li>
                      <li>Interfere with or disrupt the App's functionality or servers</li>
                      <li>Click on ads fraudulently or attempt to manipulate ad revenue</li>
                    </ul>
                  </div>
                </section>

                {/* Section 7 - Intellectual Property */}
                <section id="intellectual" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoLockClosed size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">7. Intellectual Property Rights</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      All content, features, design, code, and functionality of ChartMasterAI (including but not limited 
                      to the app interface, logo, graphics, and AI analysis algorithms) are owned by ChartMasterAI 
                      developers and are protected by:
                    </p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>Copyright laws</li>
                      <li>Trademark laws</li>
                      <li>Intellectual property laws</li>
                    </ul>
                    <p>
                      You are granted a limited, non-exclusive, non-transferable license to use the App for personal, 
                      non-commercial purposes only.
                    </p>
                  </div>
                </section>

                {/* Section 7b - Third-Party Services */}
                <section id="third-party" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoGlobeOutline size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">7b. Third-Party Services and Advertising</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>ChartMasterAI uses third-party services, including:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li><strong className="text-offWhite">Google Gemini AI:</strong> For AI-powered chart analysis</li>
                      <li><strong className="text-offWhite">Google AdMob:</strong> For displaying advertisements</li>
                      <li><strong className="text-offWhite">Expo:</strong> For app framework and diagnostics</li>
                    </ul>
                    <p>
                      By using the App, you agree to the terms and privacy policies of these third-party services. 
                      We display ads via Google AdMob, which may collect device identifiers, ad interaction data, 
                      and approximate location. You can manage ad preferences in your device settings.
                    </p>
                    <p>
                      We are not responsible for the content, accuracy, or practices of third-party services or advertisements.
                    </p>
                  </div>
                </section>

                {/* Section 8 - Pricing */}
                <section id="pricing" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoCash size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">8. Pricing and Payments</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      ChartMasterAI is currently <strong className="text-offWhite">free to use</strong>. However, we reserve the right to:
                    </p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>Introduce paid features or premium subscriptions in the future</li>
                      <li>Limit usage for free users (e.g., daily analysis limits)</li>
                      <li>Require payment for certain advanced features</li>
                    </ul>
                    <p>If paid subscriptions are introduced:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>Pricing will be clearly displayed before purchase</li>
                      <li>Payments will be processed through Google Play Store or Apple App Store</li>
                      <li>Subscription fees are generally <strong className="text-offWhite">non-refundable</strong> unless required by law</li>
                      <li>You may cancel subscriptions at any time through your device's app store settings</li>
                      <li>Cancellations take effect at the end of the current billing period</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9 - AI Disclaimer */}
                <section id="ai-disclaimer" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoSparkles size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">9. AI-Generated Content Disclaimer</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      All analysis provided by ChartMasterAI is generated by artificial intelligence (Google Gemini AI). 
                      You acknowledge that:
                    </p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li><strong className="text-offWhite">AI is not infallible:</strong> AI can make errors, misinterpret data, or provide inaccurate analysis</li>
                      <li><strong className="text-offWhite">No guarantees:</strong> We do not guarantee the accuracy, completeness, or reliability of AI-generated content</li>
                      <li><strong className="text-offWhite">Market volatility:</strong> Stock markets are unpredictable, and AI predictions may not account for sudden events</li>
                      <li><strong className="text-offWhite">Technical limitations:</strong> AI analysis is based on visual chart patterns and may miss fundamental factors</li>
                      <li><strong className="text-offWhite">Not a substitute:</strong> AI analysis should complement, not replace, professional financial advice</li>
                    </ul>
                  </div>
                </section>

                {/* Section 10 - Limitation of Liability */}
                <section id="liability" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoAlertCircle size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">10. Limitation of Liability</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p className="font-semibold text-warning">
                      IMPORTANT: PLEASE READ THIS SECTION CAREFULLY.
                    </p>
                    <p>
                      To the maximum extent permitted by law, ChartMasterAI and its developers, owners, employees, 
                      and affiliates shall <strong className="text-offWhite">NOT</strong> be liable for any:
                    </p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li><strong className="text-offWhite">Financial losses:</strong> Including losses from trading, investments, or financial decisions based on the App</li>
                      <li><strong className="text-offWhite">Direct damages:</strong> Any direct damages resulting from use or inability to use the App</li>
                      <li><strong className="text-offWhite">Indirect damages:</strong> Lost profits, lost data, business interruption, or consequential damages</li>
                      <li><strong className="text-offWhite">Incidental damages:</strong> Any incidental, special, exemplary, or punitive damages</li>
                      <li><strong className="text-offWhite">AI errors:</strong> Damages resulting from incorrect, incomplete, or misleading AI analysis</li>
                      <li><strong className="text-offWhite">Third-party services:</strong> Issues caused by Google Gemini AI, Google AdMob, or other third-party services</li>
                      <li><strong className="text-offWhite">Technical issues:</strong> App crashes, bugs, downtime, or data loss</li>
                      <li><strong className="text-offWhite">Advertising content:</strong> Any third-party advertisements displayed in the App</li>
                    </ul>
                    <p className="font-semibold">
                      <strong className="text-offWhite">Your use of ChartMasterAI is entirely at your own risk.</strong> The App is provided 
                      "as is" and "as available" without warranties of any kind, either express or implied.
                    </p>
                  </div>
                </section>

                {/* Section 11 - Warranties */}
                <section id="warranties" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoAlertCircle size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">11. Disclaimer of Warranties</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>We make <strong className="text-offWhite">no warranties or representations</strong> about:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>The accuracy, reliability, or completeness of the App's content or analysis</li>
                      <li>The App's availability, uptime, or uninterrupted operation</li>
                      <li>The App being free from errors, bugs, viruses, or security vulnerabilities</li>
                      <li>Results you may achieve from using the App</li>
                      <li>The App meeting your specific requirements or expectations</li>
                    </ul>
                  </div>
                </section>

                {/* Section 12 - Indemnification */}
                <section id="indemnification" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoShieldCheckmark size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">12. Indemnification</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      You agree to indemnify, defend, and hold harmless ChartMasterAI and its developers from any 
                      claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                    </p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>Your use or misuse of the App</li>
                      <li>Your violation of these Terms</li>
                      <li>Your violation of any laws or regulations</li>
                      <li>Your financial or investment decisions</li>
                      <li>Content you upload to the App</li>
                    </ul>
                  </div>
                </section>

                {/* Section 13 - Termination */}
                <section id="termination" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoClose size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">13. Termination</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      We reserve the right to suspend, restrict, or terminate your access to the App at any time, 
                      with or without notice, for any reason, including but not limited to:
                    </p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>Violation of these Terms</li>
                      <li>Fraudulent or illegal activity</li>
                      <li>Abuse or misuse of the App</li>
                      <li>Non-payment of fees (if applicable)</li>
                      <li>Any reason at our sole discretion</li>
                    </ul>
                    <p>You may stop using the App at any time by uninstalling it from your device.</p>
                  </div>
                </section>

                {/* Section 14 - Changes */}
                <section id="changes" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoTime size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">14. Changes to the App and Terms</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>We reserve the right to:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li><strong className="text-offWhite">Modify these Terms:</strong> We may update these Terms at any time by posting the revised version</li>
                      <li><strong className="text-offWhite">Update the App:</strong> Add, remove, or change features, functionality, or design</li>
                      <li><strong className="text-offWhite">Discontinue the App:</strong> We may shut down the App permanently at any time</li>
                    </ul>
                    <p>Continued use of the App after changes constitutes your acceptance of the new Terms.</p>
                  </div>
                </section>

                {/* Section 15 - Governing Law */}
                <section id="governing" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoGlobeOutline size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">15. Governing Law and Jurisdiction</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of <strong className="text-offWhite">India</strong>, 
                    without regard to its conflict of law principles. Any disputes arising from these Terms or your 
                    use of the App shall be subject to the exclusive jurisdiction of the courts located in India.
                  </p>
                </section>

                {/* Section 16 - Severability */}
                <section id="severability" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoReader size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">16. Severability</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining 
                    provisions shall continue in full force and effect.
                  </p>
                </section>

                {/* Section 17 - Entire Agreement */}
                <section id="entire" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoDocumentText size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">17. Entire Agreement</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you 
                    and ChartMasterAI regarding your use of the App, and supersede any prior agreements or understandings.
                  </p>
                </section>

                {/* Section 18 - Contact */}
                <section id="contact" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoMailOutline size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">18. Contact Us</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>If you have questions, concerns, or feedback about these Terms of Service, please contact us:</p>
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6" style={{ background: 'rgba(139, 92, 255, 0.1)', border: '1.5px solid rgba(139, 92, 255, 0.3)' }}>
                      <p className="mb-2 break-all">
                        <strong className="text-offWhite">Email:</strong>{' '}
                        <a 
                          href="mailto:narisnarender@gmail.com"
                          className="text-purple-400 hover:text-purple-300 underline"
                        >
                          narisnarender@gmail.com
                        </a>
                      </p>
                      <p className="text-xs sm:text-sm">
                        <strong className="text-offWhite">Response Time:</strong> We aim to respond within 48 hours
                      </p>
                    </div>
                  </div>
                </section>

                {/* Acknowledgment Box */}
                <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 255, 0.2) 0%, rgba(90, 47, 230, 0.2) 100%)', border: '2px solid rgba(139, 92, 255, 0.4)' }}>
                  <h3 className="font-bold text-offWhite mb-3 sm:mb-4 text-lg sm:text-xl flex items-center gap-2">
                    <IoCheckmarkCircle size={24} color="#10B981" />
                    <span>By Using ChartMasterAI, You Acknowledge That:</span>
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>You have read and understood these Terms of Service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>You agree to be bound by these Terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>You understand that ChartMasterAI does NOT provide financial advice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>You use the App entirely at your own risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>You are solely responsible for your investment decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>You will not hold ChartMasterAI liable for any financial losses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
