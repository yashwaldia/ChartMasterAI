import { Link } from 'react-router-dom';
import { IoDownloadOutline, IoMenu, IoClose } from 'react-icons/io5';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/upgrade', label: 'Upgrade' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
  ];

  return (
    <>
      <nav 
        className="backdrop-blur-sm border-b sticky top-0 z-50"
        style={{
          backgroundColor: 'rgba(30, 31, 48, 0.95)',
          borderBottomColor: '#2A2B3E',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group z-50"
              onClick={closeMobileMenu}
            >
              <img 
                src={logo} 
                alt="ChartMasterAI Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-transform duration-200 group-hover:scale-105"
              />
              <span 
                className="font-bold text-lg sm:text-xl"
                style={{
                  color: '#F8F9FA',
                  fontWeight: '700',
                  letterSpacing: '-0.3px'
                }}
              >
                ChartMasterAI
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="transition-colors duration-200"
                  style={{
                    color: '#8F92A1',
                    fontSize: '14px',
                    fontWeight: '600',
                    letterSpacing: '-0.2px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F8F9FA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8F92A1';
                  }}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Desktop Download Button */}
              <a
                href="#download"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '-0.2px',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #7B4AFF 0%, #6C3EFF 100%)';
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

            {/* Mobile Menu Button & Download Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Mobile Download Button (Icon Only) */}
              <a
                href="#download"
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)',
                  color: '#FFFFFF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #7B4AFF 0%, #6C3EFF 100%)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(108, 62, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <IoDownloadOutline size={20} />
              </a>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(139, 92, 255, 0.1)',
                  color: '#8B5CFF',
                }}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <IoClose size={24} />
                ) : (
                  <IoMenu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: '#1E1F30',
          borderLeft: '1px solid #2A2B3E',
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b" style={{ borderBottomColor: '#2A2B3E' }}>
            <span 
              className="font-bold text-lg"
              style={{ color: '#F8F9FA' }}
            >
              Menu
            </span>
            <button
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: 'rgba(139, 92, 255, 0.1)',
                color: '#8B5CFF',
              }}
              aria-label="Close menu"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col space-y-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  color: '#8F92A1',
                  fontSize: '16px',
                  fontWeight: '600',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(139, 92, 255, 0.1)';
                  e.currentTarget.style.color = '#F8F9FA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#8F92A1';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer with Download Button */}
          <div className="mt-auto p-4 border-t" style={{ borderTopColor: '#2A2B3E' }}>
            <a
              href="#download"
              onClick={closeMobileMenu}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '600',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #7B4AFF 0%, #6C3EFF 100%)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(108, 62, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <IoDownloadOutline size={20} />
              <span>Download App</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
