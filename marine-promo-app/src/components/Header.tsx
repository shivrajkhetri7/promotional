import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaUserTie, FaPhoneAlt, FaSearch } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import logo from '../assets/images/logo.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <p>🌊 New maritime jobs posted daily! <a href="/jobs">Browse openings →</a></p>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`main-header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
      >
        <div className="header-container">
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="Maritime Careers Logo" className="logo" />
            <span>Maritime<span>Pro</span></span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    {item.name}
                    <motion.span 
                      className="nav-underline"
                      layoutId="nav-underline"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button 
              className="search-button" 
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <FaSearch />
            </button>
            <NavLink to="/jobs" className="cta-button">
              <FaUserTie /> Job Portal
            </NavLink>
            <NavLink to="/contact" className="cta-button secondary">
              <FaPhoneAlt /> Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <MdOutlineClose size={28} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mobile-nav"
            >
              <ul>
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => isActive ? 'active' : ''}
                    >
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-cta">
                <NavLink to="/jobs" className="cta-button">
                  <FaUserTie /> Job Portal
                </NavLink>
                <NavLink to="/contact" className="cta-button secondary">
                  <FaPhoneAlt /> Contact Us
                </NavLink>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="search-bar"
            >
              <input type="text" placeholder="Search for jobs, services..." />
              <button className="close-search" onClick={() => setSearchOpen(false)}>
                <MdOutlineClose />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}