import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Sportsbook } from './pages/Sportsbook';
import { Casino } from './pages/Casino';
import { VIP } from './pages/VIP';
import { LiveCasino } from './pages/LiveCasino';
import { Account } from './pages/Account';
import { LegacyTV } from './pages/LegacyTV';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { OddsProvider } from './context/OddsContext';

export default function App() {
  return (
    <OddsProvider>
      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sports" element={<Sportsbook />} />
          <Route path="/sports/*" element={<Sportsbook />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/live-casino" element={<LiveCasino />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/legacy-tv" element={<LegacyTV />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </OddsProvider>
  );
}
