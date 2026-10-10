import { Route, Routes, useLocation } from 'react-router-dom';
import { WhatsAppChat } from './components/WhatsAppChat';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';

/** Router-agnostic app shell: BrowserRouter wraps it in main.tsx, StaticRouter in entry-server.tsx. */
export default function App() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppChat />
    </>
  );
}
