import { Link } from 'react-router-dom';
import { IoDownloadOutline } from 'react-icons/io5';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav 
      className="backdrop-blur-sm border-b sticky top-0 z-50"
      style={{
        backgroundColor: 'rgba(30, 31, 48, 0.95)', // headerNavy with transparency
        borderBottomColor: '#2A2B3E',
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={logo} 
              alt="ChartMasterAI Logo" 
              className="w-10 h-10 rounded-lg transition-transform duration-200 group-hover:scale-105"
            />
            <span 
              className="font-bold text-xl"
              style={{
                color: '#F8F9FA', // offWhite
                fontWeight: '700',
                letterSpacing: '-0.3px'
              }}
            >
              ChartMasterAI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/privacy', label: 'Privacy' },
              { to: '/terms', label: 'Terms' },
            ].map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="transition-colors duration-200"
                style={{
                  color: '#8F92A1', // gray500
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '-0.2px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F8F9FA'; // offWhite
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8F92A1'; // gray500
                }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Download Button */}
            <a
              href="#download"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)', // purple400 to purple600
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '-0.2px',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #7B4AFF 0%, #6C3EFF 100%)'; // purpleGlow to purple500
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(108, 62, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <IoDownloadOutline size={18} />
              <span>Download App</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
