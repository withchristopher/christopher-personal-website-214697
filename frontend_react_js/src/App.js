import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AnnouncementBanner from './components/AnnouncementBanner';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import { initAnalytics } from './services/analytics';
import Chatbot from './components/Chatbot';

// Initialize analytics on app load
initAnalytics();

// PUBLIC_INTERFACE
function App() {
  /** Root application component with layout, banner, header, routed content, and footer. */
  return (
    <div className="app-root">
      <AnnouncementBanner />
      <Header />
      <main role="main" className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
