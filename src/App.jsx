import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './App.css';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/:id" element={<PropertyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#1e2235', color: '#f0f2ff', border: '1px solid #c9a84c' } }} />
      </BrowserRouter>
    </LanguageProvider>
  );
}
