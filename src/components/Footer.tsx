import { Link } from 'react-router-dom';
import { IoMail, IoCheckmarkCircle } from 'react-icons/io5';
import logo from '../assets/logo.png';


export default function Footer() {
  return (
    <footer 
      className="border-t mt-20 bg-darkBgSecondary"
      style={{
        borderTopColor: '#2A2B3E',
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4 group">
              <img 
                src={logo} 
                alt="ChartMasterAI Logo" 
                className="w-8 h-8 rounded-lg transition-smooth group-hover:scale-110 shadow-purple-glow"
              />
              <span 
                className="font-bold text-lg text-offWhite"
                style={{ 
                  fontWeight: '700',
                  letterSpacing: '-0.3px'
                }}
              >
                ChartMasterAI
              </span>
            </div>
            <p 
              className="text-sm text-gray-500"
              style={{ 
                fontWeight: '500',
                lineHeight: '1.6'
              }}
            >
              AI-powered stock and market analysis at your fingertips.
            </p>
          </div>


          {/* Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 
              className="font-semibold mb-4 text-offWhite"
              style={{ 
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '-0.2px'
              }}
            >
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/upgrade', label: 'Upgrade' },
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
              ].map((link, idx) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-sm text-gray-500 transition-smooth hover:text-purple-500 hover:translate-x-1 inline-block animate-fade-in"
                  style={{ 
                    fontWeight: '500',
                    animationDelay: `${(idx + 1) * 100}ms`
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>


          {/* Contact */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 
              className="font-semibold mb-4 text-offWhite"
              style={{ 
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '-0.2px'
              }}
            >
              Contact
            </h3>
            <div className="flex items-start space-x-2 mb-2 group">
              <span className="transition-smooth group-hover:scale-110" style={{ marginTop: '2px', flexShrink: 0, color: '#6C3EFF' }}>
                <IoMail size={16} />
              </span>
              <a 
                href="mailto:narisnarender@gmail.com"
                className="text-sm text-gray-500 transition-smooth hover:text-purple-500"
                style={{ 
                  fontWeight: '500',
                  wordBreak: 'break-all'
                }}
              >
                narisnarender@gmail.com
              </a>
            </div>
            <p 
              className="text-sm text-gray-400"
              style={{ 
                fontWeight: '500',
                lineHeight: '1.5'
              }}
            >
              For support and inquiries
            </p>
          </div>
        </div>


        {/* Bottom Section */}
        <div 
          className="border-t mt-8 pt-8 text-center animate-fade-in"
          style={{ borderTopColor: '#2A2B3E' }}
        >
          <p 
            className="text-sm text-gray-500"
            style={{ 
              fontWeight: '500'
            }}
          >
            © {new Date().getFullYear()} ChartMasterAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
