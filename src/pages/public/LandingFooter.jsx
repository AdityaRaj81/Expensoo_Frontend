import { Link } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';
import logo from "../../assets/logo_1.png";

function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t bg-card border-accent-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content - Mobile: 2 columns (links + vertical name), Desktop: standard grid */}
        <div className="py-12 sm:py-16">
          {/* Mobile View - Brand, Links on left, vertical name on right */}
          <div className="lg:hidden">
            {/* Brand Section - Mobile */}
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center space-x-3 group mb-4">
                <div className="relative">
                  <div className="relative w-14 h-14 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2 overflow-hidden bg-main border-accent-medium">
                    <img src={logo} alt="Expensoo" className="relative w-full h-full object-contain p-3" />
                  </div>
                </div>
                <span className="text-2xl font-bold transition-all duration-300 font-heading gradient-text">Expensoo</span>
              </Link>
              <div className="backdrop-blur-sm rounded-xl p-4 border shadow-sm bg-card-translucent border-accent-medium max-w-xs">
                <p className="text-xs mb-1 text-subtle">Proudly crafted by</p>
                <p className="font-bold text-sm text-brand-primary">Adivika Digital Pvt. Ltd.</p>
                <p className="text-xs mt-1 leading-relaxed text-muted">Building innovative financial solutions</p>
              </div>
            </div>

            {/* Links and Vertical Name */}
            <div className="flex justify-between items-start gap-4">
              {/* All Links - Mobile - Left Aligned */}
              <div className="flex-1">
                <ul className="space-y-3">
                  {[
                    { href: '#features', label: 'Features' },
                    { href: '#how', label: 'How It Works' },
                    { href: '#insights', label: 'Insights' },
                    { href: '#pricing', label: 'Pricing' },
                    { href: '#faq', label: 'FAQs' },
                    { href: '#contact', label: 'Contact' },
                    { href: '#', label: 'Privacy Policy' },
                    { href: '#', label: 'Terms of Service' }
                  ].map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-sm transition-colors duration-200 inline-block font-medium hover:opacity-80 text-muted">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Vertical Expensoo - Mobile Only - Big Letters Bottom to Top */}
              <div className="flex items-end justify-center">
                <span className="text-6xl font-extrabold font-heading gradient-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                  Expensoo
                </span>
              </div>
            </div>
          </div>

          {/* Desktop View - Standard Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="col-span-2 space-y-5">
              <Link to="/" className="inline-flex items-center space-x-3 group">
                <div className="relative">
                  <div className="relative w-14 h-14 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2 overflow-hidden bg-main border-accent-medium">
                    <img src={logo} alt="Expensoo" className="relative w-full h-full object-contain p-3" />
                  </div>
                </div>
                <span className="text-2xl font-bold transition-all duration-300 font-heading gradient-text">Expensoo</span>
              </Link>
              <div className="backdrop-blur-sm rounded-xl p-4 border shadow-sm bg-card-translucent border-accent-medium">
                <p className="text-xs mb-1 text-subtle">Proudly crafted by</p>
                <p className="font-bold text-sm text-brand-primary">Adivika Digital Pvt. Ltd.</p>
                <p className="text-xs mt-1 leading-relaxed text-muted">Building innovative financial solutions</p>
              </div>
            </div>

            {/* Empty space for balance */}
            <div className="hidden lg:block"></div>

            {/* Quick Links Column 1 */}
            <div>
              <ul className="space-y-3">
                {[
                  { href: '#features', label: 'Features' },
                  { href: '#how', label: 'How It Works' },
                  { href: '#insights', label: 'Insights' },
                  { href: '#pricing', label: 'Pricing' }
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm transition-colors duration-200 inline-block font-medium hover:opacity-80 text-muted">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column 2 */}
            <div>
              <ul className="space-y-3">
                {[
                  { href: '#faq', label: 'FAQs' },
                  { href: '#contact', label: 'Contact' },
                  { href: '#', label: 'Privacy Policy' },
                  { href: '#', label: 'Terms of Service' }
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm transition-colors duration-200 inline-block font-medium hover:opacity-80 text-muted">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-accent-light flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <p className="text-xs sm:text-sm text-subtle">&copy; {currentYear} Expensoo. All rights reserved.</p>
            <span className="hidden sm:inline text-subtle">•</span>
            <a
              href="https://adityaraj81.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-brand-primary hover:opacity-80 transition-opacity inline-flex items-center gap-1"
            >
              <span>Designed & Built by Aditya Raj</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-subtle">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1.5 animate-pulse text-brand-accent" />
            <span>in India</span>
          </div>
        </div>

        {/* Large Bold Expensoo - Desktop Bottom */}
        {/* Large Full Width Expensoo - Desktop Bottom */}
        <div className="hidden lg:block py-10 border-t border-accent-light w-full overflow-hidden">
          <div className="w-full text-center">
            <span className="block w-full 
      text-[12vw] xl:text-[14vw] 2xl:text-[16vw]
      leading-none
      font-extrabold font-heading gradient-text select-none">
              Expensoo
            </span>
          </div>
        </div>

        {/* <div className="hidden lg:block py-8 border-t border-accent-light">
          <div className="flex justify-center">
            <span className="text-12xl xl:text-24xl font-extrabold font-heading gradient-text select-none">
              Expensoo
            </span>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default LandingFooter;