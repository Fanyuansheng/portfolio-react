import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: '关于', id: 'about' },
    { name: '项目', id: 'projects' },
    { name: '联系', id: 'contact' },
  ];

  return (
    <>
      <div className="h-20 w-full" />
      
      <div 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1a1f35]/85 backdrop-blur-md border-b border-purple-900/30'
            : 'bg-transparent'
        }`}
        style={{ 
          position: 'fixed', 
          top: 0,
          width: '100%',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
        <nav className="w-full h-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              <motion.div
                className="text-3xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection('hero')}
                style={{ cursor: 'pointer' }}
              >
                <span className="bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
                  FYS
                </span>
              </motion.div>
              
              <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-10">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      className={`relative px-4 py-2 text-base font-medium transition-colors ${
                        activeSection === item.id
                          ? 'text-sky-400'
                          : 'text-gray-400 hover:text-sky-400'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"
                          layoutId="activeSection"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
                
                <div className="h-8 w-px bg-purple-900/30 hidden md:block" />
                <ThemeToggle />

                <motion.button
                  className="md:hidden text-gray-400 hover:text-sky-400"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] md:hidden"
          >
            <div 
              className="fixed inset-0 bg-[#1a1f35]/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-[#1a1f35] shadow-lg pt-24"
            >
              <div className="flex flex-col p-4 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className={`text-left px-4 py-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'text-sky-400 bg-gradient-to-r from-sky-500/20 to-purple-500/20'
                        : 'text-gray-400 hover:text-sky-400 hover:bg-sky-500/10'
                    }`}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 