import { useState, useEffect } from 'react';
import { 
  IoShieldCheckmark, 
  IoEyeOff, 
  IoTime, 
  IoPhonePortrait,
  IoGlobeOutline,
  IoLockClosed,
  IoPeople,
  IoDocumentText,
  IoMailOutline,
  IoCheckmarkCircle,
  IoWarning,
  IoChevronDown,
  IoChevronUp,
  IoMenu
} from 'react-icons/io5';

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('');
  const [isTocOpen, setIsTocOpen] = useState(false);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: IoDocumentText },
    { id: 'not-collect', title: 'Information We DO NOT Collect', icon: IoEyeOff },
    { id: 'temp-process', title: 'Information We Temporarily Process', icon: IoTime },
    { id: 'device-info', title: 'Device Information', icon: IoPhonePortrait },
    { id: 'third-party', title: 'Third-Party Services', icon: IoGlobeOutline },
    { id: 'local-storage', title: 'Local Data Storage', icon: IoLockClosed },
    { id: 'security', title: 'Data Security', icon: IoShieldCheckmark },
    { id: 'children', title: 'Children\'s Privacy', icon: IoPeople },
    { id: 'rights', title: 'Your Rights and Choices', icon: IoCheckmarkCircle },
    { id: 'gdpr', title: 'GDPR Rights', icon: IoGlobeOutline },
    { id: 'ccpa', title: 'California Rights (CCPA)', icon: IoGlobeOutline },
    { id: 'international', title: 'International Users', icon: IoGlobeOutline },
    { id: 'changes', title: 'Policy Changes', icon: IoDocumentText },
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
                <IoShieldCheckmark size="100%" color="#F8F9FA" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-offWhite mb-3 sm:mb-4 px-4" style={{ letterSpacing: '-0.02em' }}>
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Your privacy is our priority. Learn how we protect your data.
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
                <section id="introduction" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoDocumentText size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">Introduction</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      ChartMasterAI ("we," "our," or "the app") is committed to protecting your privacy. 
                      This Privacy Policy explains how our mobile application handles information when you use our stock chart analysis service.
                    </p>
                    <div className="rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: '#10B981' }}>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 mt-0.5 sm:mt-1">
                          <IoCheckmarkCircle size={20} color="#10B981" />
                        </span>                        
                        <p className="text-sm sm:text-base">
                          <strong className="text-offWhite">Important:</strong> ChartMasterAI does NOT require user accounts, 
                          does NOT collect or store personal information, and does NOT use databases to retain your data.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 1 */}
                <section id="not-collect" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoEyeOff size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">1. Information We DO NOT Collect</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>ChartMasterAI does NOT collect, store, or process:</p>
                    <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6 list-disc">
                      <li>Personal identification information (name, email, phone number, address)</li>
                      <li>User accounts or login credentials</li>
                      <li>Payment information (the app is free)</li>
                      <li>Location data or GPS coordinates</li>
                      <li>Contact lists or phone data</li>
                      <li>Photos from your device gallery (images are selected but not stored)</li>
                      <li>Browsing history or search queries</li>
                    </ul>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="temp-process" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoTime size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">2. Information We Temporarily Process</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>When you use ChartMasterAI to analyze stock charts:</p>
                    <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6 list-disc">
                      <li>
                        <strong className="text-offWhite">Chart Images:</strong> When you upload a stock chart image, 
                        it is temporarily sent to Google Gemini AI for analysis. The image is processed in real-time 
                        and is NOT stored on our servers or databases.
                      </li>
                      <li>
                        <strong className="text-offWhite">Analysis Results:</strong> AI-generated analysis results 
                        are displayed to you instantly and are NOT saved after you close the app.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="device-info" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoPhonePortrait size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">3. Device Information Collected by Expo/React Native</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>The Expo framework (used to build this app) may automatically collect:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>Device model and manufacturer</li>
                      <li>Operating system version (Android)</li>
                      <li>App version and build number</li>
                      <li>Crash logs and error reports (for debugging)</li>
                      <li>Device language and timezone</li>
                    </ul>
                    <p className="mt-3 sm:mt-4">
                      This data is collected automatically by the Expo framework for app stability and performance. 
                      It does NOT identify you personally.
                    </p>
                  </div>
                </section>

                {/* Section 4 - Third Party Services */}
                <section id="third-party" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoGlobeOutline size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">4. Third-Party Services</h2>
                  </div>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      ChartMasterAI uses the following third-party services:
                    </p>

                    {/* Google Gemini AI */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border" style={{ background: 'rgba(139, 92, 255, 0.05)', borderColor: 'rgba(139, 92, 255, 0.3)' }}>
                      <h3 className="font-bold text-offWhite mb-2 sm:mb-3 text-base sm:text-lg">Google Gemini AI</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Used for analyzing stock chart images. When you upload a chart, it is sent to Google's 
                        Gemini AI API for processing. Google may temporarily process the image according to their 
                        privacy policy: <a 
                          href="https://policies.google.com/privacy" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 underline break-all"
                        >
                          https://policies.google.com/privacy
                        </a>
                      </p>
                    </div>

                    {/* Google AdMob */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border" style={{ background: 'rgba(139, 92, 255, 0.05)', borderColor: 'rgba(139, 92, 255, 0.3)' }}>
                      <h3 className="font-bold text-offWhite mb-2 sm:mb-3 text-base sm:text-lg">Google AdMob (Advertising)</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                        The app displays advertisements via Google AdMob. AdMob may collect:
                      </p>
                      <ul className="space-y-2 ml-4 sm:ml-6 list-disc text-sm sm:text-base text-gray-300 mb-3">
                        <li>Device identifiers (Advertising ID)</li>
                        <li>Ad interaction data (clicks, impressions)</li>
                        <li>Approximate location (for ad targeting)</li>
                        <li>Device information (model, OS version)</li>
                      </ul>
                      <div className="rounded-lg p-3 sm:p-4 mb-3" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="flex-shrink-0 mt-0.5 sm:mt-1">
                            <IoWarning size={18} color="#F59E0B" />
                          </span>        
                          <p className="text-xs sm:text-sm text-gray-300">
                            <strong className="text-offWhite">For EU/UK/EEA users:</strong> We use Google's 
                            User Messaging Platform (UMP) to obtain your consent for personalized ads and data collection. 
                            You can change your consent preferences at any time in the app settings.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        You can opt-out of personalized ads in your device settings. 
                        AdMob Privacy Policy: <a 
                          href="https://support.google.com/admob/answer/6128543" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 underline break-all"
                        >
                          https://support.google.com/admob/answer/6128543
                        </a>
                      </p>
                    </div>

                    {/* Expo Platform */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border" style={{ background: 'rgba(139, 92, 255, 0.05)', borderColor: 'rgba(139, 92, 255, 0.3)' }}>
                      <h3 className="font-bold text-offWhite mb-2 sm:mb-3 text-base sm:text-lg">Expo Platform</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        The app is built using Expo, which collects crash reports and diagnostics. 
                        Expo Privacy Policy: <a 
                          href="https://expo.dev/privacy" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 underline break-all"
                        >
                          https://expo.dev/privacy
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="local-storage" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoLockClosed size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">5. Local Data Storage</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>The app may store the following data <strong className="text-offWhite">locally on your device ONLY</strong>:</p>
                    <ul className="space-y-2 ml-4 sm:ml-6 list-disc">
                      <li>App preferences and settings</li>
                      <li>Analysis history (stored locally, not on our servers)</li>
                      <li>App cache for performance optimization</li>
                    </ul>
                    <p className="mt-3 sm:mt-4">
                      This data remains on your device and is deleted when you uninstall the app.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="security" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoShieldCheckmark size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">6. Data Security</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Since we do NOT store personal data on servers, there is minimal risk of data breaches. 
                    Images sent to Google Gemini AI are transmitted over secure HTTPS connections. 
                    However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="children" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoPeople size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">7. Children's Privacy (COPPA Compliance)</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    ChartMasterAI is intended for users aged 18 and above. We do NOT knowingly collect 
                    data from children under 13 years of age. If you are a parent or guardian and believe 
                    your child has used the app, please contact us.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="rights" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoCheckmarkCircle size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">8. Your Rights and Choices</h2>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6 list-disc text-sm sm:text-base text-gray-300 leading-relaxed">
                    <li>
                      <strong className="text-offWhite">Delete Local Data:</strong> Uninstall the app 
                      to remove all locally stored data.
                    </li>
                    <li>
                      <strong className="text-offWhite">Opt-Out of Personalized Ads:</strong> Go to your 
                      Android device settings → Google → Ads → Reset advertising ID or opt-out of ad personalization.
                    </li>
                    <li>
                      <strong className="text-offWhite">Stop Using the Service:</strong> You can stop using 
                      ChartMasterAI at any time by uninstalling the app.
                    </li>
                  </ul>
                </section>

                {/* Section 8b - GDPR */}
                <section id="gdpr" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoGlobeOutline size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">8b. GDPR Rights (For European Users)</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>
                      If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have the following rights:
                    </p>
                    <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6 list-disc">
                      <li><strong className="text-offWhite">Right to Access:</strong> Request a copy of your data (though we don't store personal data)</li>
                      <li><strong className="text-offWhite">Right to Rectification:</strong> Correct inaccurate data</li>
                      <li><strong className="text-offWhite">Right to Erasure:</strong> Request deletion (uninstall the app)</li>
                      <li><strong className="text-offWhite">Right to Restrict Processing:</strong> Limit how we process your data</li>
                      <li><strong className="text-offWhite">Right to Data Portability:</strong> Receive your data in a structured format</li>
                      <li><strong className="text-offWhite">Right to Object:</strong> Object to data processing for marketing purposes</li>
                      <li><strong className="text-offWhite">Right to Withdraw Consent:</strong> Withdraw consent for data collection at any time</li>
                    </ul>
                    <p className="mt-3 sm:mt-4">
                      To exercise these rights, contact us at <a 
                        href="mailto:narisnarender@gmail.com" 
                        className="text-purple-400 hover:text-purple-300 underline break-all"
                      >
                        narisnarender@gmail.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* Section 8c - CCPA */}
                <section id="ccpa" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoGlobeOutline size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">8c. California Privacy Rights (CCPA)</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>California residents have the right to:</p>
                    <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6 list-disc">
                      <li>Know what personal information we collect (disclosed in this policy)</li>
                      <li>Request deletion of personal information</li>
                      <li>Opt-out of the sale of personal information (we do NOT sell your data)</li>
                      <li>Non-discrimination for exercising privacy rights</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="international" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoGlobeOutline size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">9. International Users</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    If you are using ChartMasterAI outside of India, please note that data may be processed 
                    by third-party services (like Google Gemini AI) in different countries. By using the app, 
                    you consent to such transfers.
                  </p>
                </section>

                {/* Section 10 */}
                <section id="changes" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoDocumentText size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">10. Changes to This Privacy Policy</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page 
                    with an updated "Last Updated" date. Continued use of the app after changes constitutes 
                    acceptance of the revised policy.
                  </p>
                </section>

                {/* Section 11 - Contact */}
                <section id="contact" className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-purple-dark flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        <IoMailOutline size="100%" color="#8B5CFF" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-offWhite">11. Contact Us</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6" style={{ background: 'rgba(139, 92, 255, 0.1)', border: '1.5px solid rgba(139, 92, 255, 0.3)' }}>
                      <p className="font-bold text-purple-400 mb-2 break-all">
                        Email: <a 
                          href="mailto:narisnarender@gmail.com" 
                          className="hover:text-purple-300 underline"
                        >
                          narisnarender@gmail.com
                        </a>
                      </p>
                      <p className="text-xs sm:text-sm">Developer: ChartMasterAI Team</p>
                    </div>
                  </div>
                </section>

                {/* Summary Box */}
                <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 255, 0.2) 0%, rgba(90, 47, 230, 0.2) 100%)', border: '2px solid rgba(139, 92, 255, 0.4)' }}>
                  <h3 className="font-bold text-offWhite mb-3 sm:mb-4 text-lg sm:text-xl flex items-center gap-2">
                    <IoCheckmarkCircle size={24} color="#10B981" />
                    <span>Summary</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    <strong className="text-offWhite">In simple terms:</strong> ChartMasterAI does NOT 
                    collect or store your personal information. Images you upload are temporarily sent to 
                    Google AI for analysis and are not saved. The app uses standard device information 
                    for functionality and may display ads via Google AdMob. All data remains private and secure.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
