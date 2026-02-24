import React from "react";
import { Navbar } from "@/components/Navbar";
import { Particles } from "@/components/Particles";
import { useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

interface LayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

export const Layout = ({ children, showParticles = false }: LayoutProps) => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="min-h-screen bg-legacy-green-900 text-white selection:bg-legacy-gold-500/30 flex flex-col">
      {showParticles && <Particles />}
      <Navbar />

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-legacy-black py-12 border-t border-legacy-gold-500/10 relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col items-start">
              <img src={logoImg} alt="Legacy Casino" className="h-28 sm:h-36 md:h-40 w-auto object-contain mb-3" />
              <p className="text-gray-500 text-xs">The Pinnacle of Luxury Gaming.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/sports" className="hover:text-legacy-gold-400">Sportsbook</a></li>
                <li><a href="/casino" className="hover:text-legacy-gold-400">Casino</a></li>
                <li><a href="/live-casino" className="hover:text-legacy-gold-400">Live Casino</a></li>
                <li><a href="/vip" className="hover:text-legacy-gold-400">VIP Club</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-legacy-gold-400">Help Center</a></li>
                <li><a href="#" className="hover:text-legacy-gold-400">Live Chat</a></li>
                <li><a href="#" className="hover:text-legacy-gold-400">Responsible Gaming</a></li>
                <li><a href="#" className="hover:text-legacy-gold-400">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Secure Payment Methods</h3>
              <div className="flex flex-wrap gap-2">
                {/* Visa */}
                <div className="flex items-center justify-center px-3 py-1.5 bg-white rounded-md min-w-[52px]">
                  <span className="font-extrabold text-[13px] tracking-tight" style={{ color: '#1A1F71', fontFamily: 'sans-serif', letterSpacing: '-0.5px' }}>
                    <span style={{ color: '#1A1F71' }}>VISA</span>
                  </span>
                </div>
                {/* Mastercard */}
                <div className="flex items-center justify-center gap-0.5 px-2 py-1.5 bg-white/10 rounded-md border border-white/10 min-w-[52px]">
                  <div className="w-4 h-4 rounded-full bg-[#EB001B] opacity-90" />
                  <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90 -ml-2" />
                </div>
                {/* PayPal */}
                <div className="flex items-center justify-center px-3 py-1.5 bg-[#003087] rounded-md min-w-[52px]">
                  <span className="font-extrabold text-white text-[12px]" style={{ fontFamily: 'sans-serif' }}>
                    Pay<span style={{ color: '#009CDE' }}>Pal</span>
                  </span>
                </div>
                {/* Bitcoin */}
                <div className="flex items-center gap-1 px-2 py-1.5 bg-[#F7931A]/20 rounded-md border border-[#F7931A]/40 min-w-[52px]">
                  <span className="text-[#F7931A] font-bold text-[13px]">₿</span>
                  <span className="text-[#F7931A] text-[10px] font-bold">BTC</span>
                </div>
                {/* Skrill */}
                <div className="flex items-center justify-center px-3 py-1.5 bg-[#862165]/80 rounded-md min-w-[52px]">
                  <span className="text-white font-bold text-[11px] tracking-wide">Skrill</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
            <p>© 2026 Legacy Casino. All rights reserved. 18+ Play Responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
