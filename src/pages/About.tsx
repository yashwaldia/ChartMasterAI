import { IoCheckmarkCircle, IoSparkles, IoTrendingUp, IoBulb } from 'react-icons/io5';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{
            color: '#F8F9FA', // offWhite
            fontWeight: '700',
            letterSpacing: '-0.5px',
            lineHeight: '1.2'
          }}
        >
          About ChartMasterAI
        </h1>

        {/* Mission Card */}
        <div 
          className="backdrop-blur-sm rounded-2xl p-8 mb-8"
          style={{
            backgroundColor: '#1A1B2E', // darkNavy
            border: '1.5px solid #2A2B3E',
          }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <IoSparkles size={24} color="#6C3EFF" />
            <h2 
              className="text-2xl font-bold"
              style={{
                color: '#F8F9FA', // offWhite
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              Our Mission
            </h2>
          </div>
          <p 
            className="mb-4"
            style={{
              color: '#8F92A1', // gray500
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.7'
            }}
          >
            ChartMasterAI is designed to democratize access to professional-grade stock market analysis. 
            We believe that everyone should have access to powerful AI-driven insights for making informed 
            investment decisions.
          </p>
          <p 
            style={{
              color: '#8F92A1', // gray500
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.7'
            }}
          >
            Our mobile app combines cutting-edge artificial intelligence with real-time market data to 
            provide you with actionable trading insights, anywhere, anytime.
          </p>
        </div>

        {/* What We Offer Card */}
        <div 
          className="backdrop-blur-sm rounded-2xl p-8 mb-8"
          style={{
            backgroundColor: '#1A1B2E', // darkNavy
            border: '1.5px solid #2A2B3E',
          }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <IoTrendingUp size={24} color="#6C3EFF" />
            <h2 
              className="text-2xl font-bold"
              style={{
                color: '#F8F9FA', // offWhite
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              What We Offer
            </h2>
          </div>
          <ul className="space-y-3">
            {[
              'AI-powered stock chart analysis',
              'Real-time market data and trends',
              'Global market coverage (India, US, Europe, Asia)',
              'Technical indicator analysis',
              'Pattern recognition and predictions',
              'Risk assessment tools',
              'Educational resources for traders'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <div style={{ marginTop: '2px', flexShrink: 0 }}>
                  <IoCheckmarkCircle size={20} color="#00FF88" />
                </div>
                <span 
                  style={{
                    color: '#8F92A1', // gray500
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '1.6'
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Card */}
        <div 
          className="backdrop-blur-sm rounded-2xl p-8"
          style={{
            backgroundColor: '#1A1B2E', // darkNavy
            border: '1.5px solid #2A2B3E',
          }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <IoBulb size={24} color="#6C3EFF" />
            <h2 
              className="text-2xl font-bold"
              style={{
                color: '#F8F9FA', // offWhite
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              Our Technology
            </h2>
          </div>
          <p 
            className="mb-4"
            style={{
              color: '#8F92A1', // gray500
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.7'
            }}
          >
            ChartMasterAI leverages Google's advanced Gemini AI technology to analyze stock charts, 
            market trends, and financial data. Our algorithms process millions of data points to 
            provide you with accurate, timely insights.
          </p>
          <p 
            style={{
              color: '#8F92A1', // gray500
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.7'
            }}
          >
            We continuously update our models to adapt to changing market conditions, ensuring you 
            always have access to the most relevant information.
          </p>
        </div>
      </div>
    </div>
  );
}
