import { Link } from 'react-router-dom';
import { IoMail, IoCheckmarkCircle } from 'react-icons/io5';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer 
      className="border-t mt-20"
      style={{
        backgroundColor: '#1A1B2E', // darkNavy
        borderTopColor: '#2A2B3E',
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="ChartMasterAI Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span 
                className="font-bold text-lg"
                style={{ 
                  color: '#F8F9FA', // offWhite
                  fontWeight: '700',
                  letterSpacing: '-0.3px'
                }}
              >
                ChartMasterAI
              </span>
            </div>
            <p 
              className="text-sm"
              style={{ 
                color: '#8F92A1', // gray500
                fontWeight: '500',
                lineHeight: '1.6'
              }}
            >
              AI-powered stock and market analysis at your fingertips.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 
              className="font-semibold mb-4"
              style={{ 
                color: '#F8F9FA', // offWhite
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
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-sm transition-colors duration-200"
                  style={{ 
                    color: '#8F92A1', // gray500
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#6C3EFF'; // purple500
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8F92A1'; // gray500
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 
              className="font-semibold mb-4"
              style={{ 
                color: '#F8F9FA', // offWhite
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '-0.2px'
              }}
            >
              Contact
            </h3>
            <div className="flex items-start space-x-2 mb-2">
              <span style={{ marginTop: '2px', flexShrink: 0 }}>
                <IoMail 
                  size={16} 
                  color="#6C3EFF" // purple500
                />
              </span>
              <a 
                href="mailto:narisnarender@gmail.com"
                className="text-sm transition-colors duration-200"
                style={{ 
                  color: '#8F92A1', // gray500
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#6C3EFF'; // purple500
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8F92A1'; // gray500
                }}
              >
                narisnarender@gmail.com
              </a>
            </div>
            <p 
              className="text-sm"
              style={{ 
                color: '#9CA3AF', // gray400
                fontWeight: '500',
                lineHeight: '1.5'
              }}
            >
              For support and inquiries
            </p>
          </div>
        </div>

        <div 
          className="border-t mt-8 pt-8 text-center"
          style={{ borderTopColor: '#2A2B3E' }}
        >
          <p 
            className="text-sm"
            style={{ 
              color: '#8F92A1', // gray500
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
