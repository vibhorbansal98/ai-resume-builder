import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">
            <FileText size={18} />
          </span>
          ResumeAI
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/create" className="navbar-link">Create Resume</Link>
          <Link to="/preview" className="navbar-link">Preview</Link>
          <Link to="/portfolio" className="navbar-link">Portfolio</Link>
          <Link to="/create" className="btn btn-primary btn-sm navbar-cta" id="navbar-get-started">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
