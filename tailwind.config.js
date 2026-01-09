/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom Color Palette (matching your design system)
      colors: {
        // Background colors
        darkBg: '#0B0D17',
        darkBgSecondary: '#13151F',
        headerNavy: '#1E1F30',
        borderDark: '#2A2B3E',
        
        // Purple gradient colors
        purple: {
          400: '#8B5CFF',
          500: '#6C3EFF',
          600: '#5A2FE6',
          700: '#4A26B8',
          glow: '#7B4AFF',
        },
        
        // Text colors
        offWhite: '#F8F9FA',
        gray: {
          400: '#D1D5DB',
          500: '#8F92A1',
          600: '#6B7280',
        },
        
        // Accent colors
        success: '#10B981',
        successDark: '#059669',
        warning: '#F59E0B',
        error: '#EF4444',
      },

      // Custom Font Family
      fontFamily: {
        'tech': ['Monaco', 'Menlo', 'Consolas', 'monospace'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },

      // Custom Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(139, 92, 255, 0.3)',
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(139, 92, 255, 0.6)',
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px)',
          },
          '50%': { 
            transform: 'translateY(-10px)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
      },

      // Custom Box Shadows
      boxShadow: {
        'purple-glow': '0 4px 24px rgba(139, 92, 255, 0.4)',
        'purple-glow-lg': '0 8px 32px rgba(139, 92, 255, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },

      // Custom Backdrop Blur
      backdropBlur: {
        xs: '2px',
      },

      // Custom Border Radius
      borderRadius: {
        '4xl': '2rem',
      },

      // Custom Transitions
      transitionDuration: {
        '400': '400ms',
      },

      // Custom Z-Index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // Custom Background Images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'purple-gradient': 'linear-gradient(135deg, #8B5CFF 0%, #5A2FE6 100%)',
        'purple-gradient-hover': 'linear-gradient(135deg, #7B4AFF 0%, #6C3EFF 100%)',
      },
    },
  },
  plugins: [],
}
