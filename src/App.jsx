import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './App.css';

function AppInner() {
  const { dark } = useTheme();
  return (
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
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: dark ? '#1e2235' : '#ffffff',
            color: dark ? '#f0f2ff' : '#1a1a2e',
            border: `1px solid ${dark ? '#2e3350' : '#e2e8f0'}`,
            borderRadius: '12px',
            fontSize: '0.9rem',
          }
        }}
      />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ThemeProvider>
  );
}
