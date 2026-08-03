import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import logo from "../../assets/logo_1.png";

function LandingHeader() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 ${isScrolled
        ? 'shadow-lg border-b border-accent-light'
        : 'shadow-sm border-transparent'
        }`} style={{ backdropFilter: 'blur(12px)' }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo with Enhanced Animations */}
            <Link to="/" className="flex items-center space-x-3 sm:space-x-4 group">
              <div className="relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-brand-primary-medium transition-all duration-500 group-hover:rotate-180 group-hover:scale-110"></div>

                {/* Animated gradient glow */}
                <div className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500 animate-pulse-slow gradient-bg-accent"></div>

                {/* Logo container */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 overflow-hidden border-2 bg-card border-brand-primary-light">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-bg-subtle"></div>

                  {/* Logo image - larger and more visible */}
                  <img
                    src={logo}
                    alt="Expensoo"
                    className="relative w-full h-full object-contain p-2.5 sm:p-3 group-hover:scale-110 transition-transform duration-300 animate-float"
                  />
                </div>

                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Sparkles className="w-5 h-5 animate-ping text-highlight" />
                </div>
                <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '150ms' }}>
                  <div className="w-2 h-2 rounded-full animate-bounce bg-brand-accent"></div>
                </div>
              </div>

              {/* Brand Name with gradient */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold transition-all duration-300 font-heading gradient-text">
                  Expensoo
                </span>
              </div>
            </Link>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/login"
                className="px-5 py-2 text-sm font-medium transition-colors rounded-lg text-primary hover:bg-brand-primary-10"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="relative group px-6 py-2.5 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 gradient-bg font-heading"
                style={{ color: '#FFFFFF' }}
              >
                <span className="flex items-center space-x-1.5">
                  <span>Get Started</span>
                  <Sparkles className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors text-primary hover:bg-brand-primary-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-accent-light">
              <div className="flex flex-col space-y-2">
                <div className="pt-2 space-y-2">
                  <Link
                    to="/login"
                    className="block w-full px-4 py-3 text-center font-medium border rounded-lg text-primary border-accent-light hover:bg-brand-primary-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full px-4 py-3 text-center font-semibold rounded-lg shadow-lg gradient-bg font-heading"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ color: '#FFFFFF' }}
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20"></div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
      `}</style>
    </>
  );
}

export default LandingHeader;