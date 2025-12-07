export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{
            color: '#F8F9FA',
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}
        >
          Privacy Policy
        </h1>

        <div 
          className="backdrop-blur-sm rounded-2xl p-8 space-y-8"
          style={{
            backgroundColor: '#1A1B2E',
            border: '1.5px solid #2A2B3E',
          }}
        >
          <p 
            className="text-sm"
            style={{ color: '#8F92A1' }}
          >
            <strong>Effective Date:</strong> December 7, 2025<br/>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          {/* Introduction */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              Introduction
            </h2>
            <p 
              className="mb-3 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              ChartMasterAI ("we," "our," or "the app") is committed to protecting your privacy. 
              This Privacy Policy explains how our mobile application handles information when you use our stock chart analysis service.
            </p>
            <p 
              className="leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              <strong style={{ color: '#F8F9FA' }}>Important:</strong> ChartMasterAI does NOT require user accounts, 
              does NOT collect or store personal information, and does NOT use databases to retain your data.
            </p>
          </section>

          {/* 1. Information We DO NOT Collect */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              1. Information We DO NOT Collect
            </h2>
            <p 
              className="mb-3 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              ChartMasterAI does NOT collect, store, or process:
            </p>
            <ul 
              className="space-y-2 ml-6"
              style={{ 
                color: '#C5C7D0', 
                fontSize: '15px',
                listStyleType: 'disc',
                listStylePosition: 'outside'
              }}
            >
              <li>Personal identification information (name, email, phone number, address)</li>
              <li>User accounts or login credentials</li>
              <li>Payment information (the app is free)</li>
              <li>Location data or GPS coordinates</li>
              <li>Contact lists or phone data</li>
              <li>Photos from your device gallery (images are selected but not stored)</li>
              <li>Browsing history or search queries</li>
            </ul>
          </section>

          {/* 2. Information We Temporarily Process */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              2. Information We Temporarily Process
            </h2>
            <p 
              className="mb-3 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              When you use ChartMasterAI to analyze stock charts:
            </p>
            <ul 
              className="space-y-2 ml-6"
              style={{ 
                color: '#C5C7D0', 
                fontSize: '15px',
                listStyleType: 'disc',
                listStylePosition: 'outside'
              }}
            >
              <li>
                <strong style={{ color: '#F8F9FA' }}>Chart Images:</strong> When you upload a stock chart image, 
                it is temporarily sent to Google Gemini AI for analysis. The image is processed in real-time 
                and is NOT stored on our servers or databases.
              </li>
              <li>
                <strong style={{ color: '#F8F9FA' }}>Analysis Results:</strong> AI-generated analysis results 
                are displayed to you instantly and are NOT saved after you close the app.
              </li>
            </ul>
          </section>

          {/* 3. Device Information Collected by Expo/React Native */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              3. Device Information Collected by Expo/React Native
            </h2>
            <p 
              className="mb-3 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              The Expo framework (used to build this app) may automatically collect:
            </p>
            <ul 
              className="space-y-2 ml-6"
              style={{ 
                color: '#C5C7D0', 
                fontSize: '15px',
                listStyleType: 'disc',
                listStylePosition: 'outside'
              }}
            >
              <li>Device model and manufacturer</li>
              <li>Operating system version (Android)</li>
              <li>App version and build number</li>
              <li>Crash logs and error reports (for debugging)</li>
              <li>Device language and timezone</li>
            </ul>
            <p 
              className="mt-3 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              This data is collected automatically by the Expo framework for app stability and performance. 
              It does NOT identify you personally.
            </p>
          </section>

          {/* 4. Third-Party Services */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              4. Third-Party Services
            </h2>
            <p 
              className="mb-4 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              ChartMasterAI uses the following third-party services:
            </p>

            <div className="space-y-4">
              <div 
                className="rounded-xl p-4"
                style={{
                  backgroundColor: 'rgba(108, 62, 255, 0.1)',
                  border: '1.5px solid rgba(108, 62, 255, 0.3)'
                }}
              >
                <h3 
                  className="font-bold mb-2"
                  style={{ color: '#F8F9FA', fontSize: '16px' }}
                >
                  Google Gemini AI
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: '#C5C7D0', fontSize: '14px' }}
                >
                  Used for analyzing stock chart images. When you upload a chart, it is sent to Google's 
                  Gemini AI API for processing. Google may temporarily process the image according to their 
                  privacy policy: <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#6C3EFF', textDecoration: 'underline' }}
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              <div 
                className="rounded-xl p-4"
                style={{
                  backgroundColor: 'rgba(108, 62, 255, 0.1)',
                  border: '1.5px solid rgba(108, 62, 255, 0.3)'
                }}
              >
                <h3 
                  className="font-bold mb-2"
                  style={{ color: '#F8F9FA', fontSize: '16px' }}
                >
                  Google AdMob (If Ads Are Enabled)
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: '#C5C7D0', fontSize: '14px' }}
                >
                  If the app displays advertisements, Google AdMob may collect device identifiers 
                  (like Advertising ID), ad interaction data, and approximate location for ad targeting. 
                  You can opt-out of personalized ads in your device settings. 
                  AdMob Privacy Policy: <a 
                    href="https://support.google.com/admob/answer/6128543" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#6C3EFF', textDecoration: 'underline' }}
                  >
                    https://support.google.com/admob/answer/6128543
                  </a>
                </p>
              </div>

              <div 
                className="rounded-xl p-4"
                style={{
                  backgroundColor: 'rgba(108, 62, 255, 0.1)',
                  border: '1.5px solid rgba(108, 62, 255, 0.3)'
                }}
              >
                <h3 
                  className="font-bold mb-2"
                  style={{ color: '#F8F9FA', fontSize: '16px' }}
                >
                  Expo Platform
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: '#C5C7D0', fontSize: '14px' }}
                >
                  The app is built using Expo, which collects crash reports and diagnostics. 
                  Expo Privacy Policy: <a 
                    href="https://expo.dev/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#6C3EFF', textDecoration: 'underline' }}
                  >
                    https://expo.dev/privacy
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* 5. Local Data Storage */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              5. Local Data Storage
            </h2>
            <p 
              className="mb-3 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              The app may store the following data <strong style={{ color: '#F8F9FA' }}>locally on your device ONLY</strong>:
            </p>
            <ul 
              className="space-y-2 ml-6"
              style={{ 
                color: '#C5C7D0', 
                fontSize: '15px',
                listStyleType: 'disc',
                listStylePosition: 'outside'
              }}
            >
              <li>App preferences and settings</li>
              <li>Analysis history (stored locally, not on our servers)</li>
              <li>App cache for performance optimization</li>
            </ul>
            <p 
              className="mt-3 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              This data remains on your device and is deleted when you uninstall the app.
            </p>
          </section>

          {/* 6. Data Security */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              6. Data Security
            </h2>
            <p 
              className="leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              Since we do NOT store personal data on servers, there is minimal risk of data breaches. 
              Images sent to Google Gemini AI are transmitted over secure HTTPS connections. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              7. Children's Privacy (COPPA Compliance)
            </h2>
            <p 
              className="leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              ChartMasterAI is intended for users aged 18 and above. We do NOT knowingly collect 
              data from children under 13 years of age. If you are a parent or guardian and believe 
              your child has used the app, please contact us.
            </p>
          </section>

          {/* 8. Your Rights and Choices */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              8. Your Rights and Choices
            </h2>
            <ul 
              className="space-y-2 ml-6"
              style={{ 
                color: '#C5C7D0', 
                fontSize: '15px',
                listStyleType: 'disc',
                listStylePosition: 'outside'
              }}
            >
              <li>
                <strong style={{ color: '#F8F9FA' }}>Delete Local Data:</strong> Uninstall the app 
                to remove all locally stored data.
              </li>
              <li>
                <strong style={{ color: '#F8F9FA' }}>Opt-Out of Personalized Ads:</strong> Go to your 
                Android device settings → Google → Ads → Reset advertising ID or opt-out of ad personalization.
              </li>
              <li>
                <strong style={{ color: '#F8F9FA' }}>Stop Using the Service:</strong> You can stop using 
                ChartMasterAI at any time by uninstalling the app.
              </li>
            </ul>
          </section>

          {/* 9. International Users */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              9. International Users
            </h2>
            <p 
              className="leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              If you are using ChartMasterAI outside of India, please note that data may be processed 
              by third-party services (like Google Gemini AI) in different countries. By using the app, 
              you consent to such transfers.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              10. Changes to This Privacy Policy
            </h2>
            <p 
              className="leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              We may update this Privacy Policy from time to time. Changes will be posted on this page 
              with an updated "Last Updated" date. Continued use of the app after changes constitutes 
              acceptance of the revised policy.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#F8F9FA',
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              11. Contact Us
            </h2>
            <p 
              className="mb-3 leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div 
              className="rounded-xl p-4"
              style={{
                backgroundColor: 'rgba(108, 62, 255, 0.15)',
                border: '1.5px solid rgba(108, 62, 255, 0.3)'
              }}
            >
              <p 
                className="font-bold"
                style={{ color: '#6C3EFF', fontSize: '16px' }}
              >
                Email: <a 
                  href="mailto:narisnarender@gmail.com" 
                  style={{ color: '#6C3EFF', textDecoration: 'underline' }}
                >
                  narisnarender@gmail.com
                </a>
              </p>
              <p 
                className="mt-2"
                style={{ color: '#C5C7D0', fontSize: '14px' }}
              >
                Developer: ChartMasterAI Team
              </p>
            </div>
          </section>

          {/* Summary Box */}
          <div 
            className="rounded-xl p-6 mt-8"
            style={{
              background: 'linear-gradient(135deg, rgba(108, 62, 255, 0.2) 0%, rgba(90, 47, 230, 0.2) 100%)',
              border: '1.5px solid rgba(108, 62, 255, 0.4)'
            }}
          >
            <h3 
              className="font-bold mb-3"
              style={{ color: '#F8F9FA', fontSize: '18px' }}
            >
              📋 Summary
            </h3>
            <p 
              className="leading-relaxed"
              style={{ color: '#C5C7D0', fontSize: '15px' }}
            >
              <strong style={{ color: '#F8F9FA' }}>In simple terms:</strong> ChartMasterAI does NOT 
              collect or store your personal information. Images you upload are temporarily sent to 
              Google AI for analysis and are not saved. The app uses standard device information 
              for functionality and may display ads via Google AdMob. All data remains private and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
