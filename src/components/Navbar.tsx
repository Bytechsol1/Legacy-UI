import { Menu, User, Wallet, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import logoImg from '@/assets/lg.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Sports', path: '/sports' },
    { name: 'Casino', path: '/casino' },
    { name: 'Live Casino', path: '/live-casino' },
    { name: 'VIP', path: '/vip' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-legacy-green-900/90 backdrop-blur-md border-b border-legacy-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logoImg} alt="Legacy Casino" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-legacy-gold-400 uppercase tracking-widest",
                  location.pathname === item.path ? "text-legacy-gold-400" : "text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/account">
              <div className="flex items-center space-x-2 bg-legacy-green-800/50 px-3 py-1.5 rounded-full border border-legacy-gold-500/20 hover:bg-legacy-green-800 transition-colors cursor-pointer">
                <Wallet className="h-4 w-4 text-legacy-gold-500" />
                <span className="text-sm font-mono text-legacy-gold-400">$12,450.00</span>
              </div>
            </Link>
            <Link to="/account">
              <Button variant="gold" size="sm" className="shadow-lg shadow-legacy-gold-500/20">
                DEPOSIT
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-legacy-green-900 border-b border-legacy-gold-500/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-legacy-gold-400 hover:bg-legacy-green-800 rounded-md border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <div className="flex items-center justify-between px-3 py-2 bg-legacy-green-800 rounded-lg border border-legacy-gold-500/20">
                  <span className="text-sm text-gray-400">Balance</span>
                  <span className="text-sm font-mono text-legacy-gold-400">$12,450.00</span>
                </div>
                <Button variant="gold" className="w-full">DEPOSIT</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
