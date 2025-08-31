import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.classes'), href: '#classes' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img src="/logo.png" alt="Dhyandeep Yog Foundation" className="h-10 w-10 object-contain" />
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white drop-shadow-lg font-black">
              Dhyandeep Yog Foundation
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-yellow-300 transition-colors duration-200 font-semibold text-lg drop-shadow-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="bg-gray-100 dark:bg-white/90 border-gray-300 dark:border-white text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-white font-semibold drop-shadow-lg"
            >
              <Languages className="h-4 w-4 mr-2" />
              {language === 'en' ? 'हिं' : 'EN'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="bg-gray-100 dark:bg-white/90 border-gray-300 dark:border-white text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-white font-semibold drop-shadow-lg"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline" className="bg-gray-100 dark:bg-white/90 border-gray-300 dark:border-white text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-white font-semibold drop-shadow-lg">
              {t('nav.login')}
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 border-0 font-bold drop-shadow-lg px-6">
              {t('nav.trial')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="bg-gray-100 dark:bg-white/90 border-gray-300 dark:border-white text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-white font-semibold drop-shadow-lg"
            >
              <Languages className="h-4 w-4 mr-1" />
              <span className="text-xs">{language === 'en' ? 'हिं' : 'EN'}</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="bg-gray-100 dark:bg-white/90 border-gray-300 dark:border-white text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-white font-semibold drop-shadow-lg"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 dark:bg-white/90 border-gray-300 dark:border-white text-gray-800 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-white font-semibold drop-shadow-lg"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-border/20">
            <div className="px-6 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full">
                  {t('nav.login')}
                </Button>
                <Button className="w-full gradient-primary text-primary-foreground">
                  {t('nav.trial')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;