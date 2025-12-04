import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#050E3C]/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">VisionTrack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-[#FF3838] font-medium transition-colors duration-300">
              Home
            </Link>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, '#features')}
              className="text-white/80 hover:text-[#FF3838] font-medium transition-colors duration-300 cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, '#how-it-works')}
              className="text-white/80 hover:text-[#FF3838] font-medium transition-colors duration-300 cursor-pointer"
            >
              How It Works
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, '#about')}
              className="text-white/80 hover:text-[#FF3838] font-medium transition-colors duration-300 cursor-pointer"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="text-white/80 hover:text-[#FF3838] font-medium transition-colors duration-300 cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-5 py-2.5 text-white hover:text-[#FF3838] font-medium transition-colors duration-300"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white font-semibold hover:shadow-lg hover:shadow-[#DC0000]/50 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#FF3838] transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#FF3838] font-medium py-2 transition-colors"
              >
                Home
              </Link>
              <a 
                href="#features" 
                onClick={(e) => scrollToSection(e, '#features')}
                className="text-white/80 hover:text-[#FF3838] font-medium py-2 transition-colors cursor-pointer"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => scrollToSection(e, '#how-it-works')}
                className="text-white/80 hover:text-[#FF3838] font-medium py-2 transition-colors cursor-pointer"
              >
                How It Works
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, '#about')}
                className="text-white/80 hover:text-[#FF3838] font-medium py-2 transition-colors cursor-pointer"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="text-white/80 hover:text-[#FF3838] font-medium py-2 transition-colors cursor-pointer"
              >
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center px-5 py-2.5 text-white hover:text-[#FF3838] font-medium transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}