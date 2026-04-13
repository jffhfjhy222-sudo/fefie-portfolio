/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import PortfolioView from './views/PortfolioView';
import CVView from './views/CVView';
import ContactView from './views/ContactView';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'cv', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <CustomCursor />
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pastel-pink/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pastel-blue/20 blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-pastel-yellow/20 blur-[120px]" />
      </div>

      <Navbar activeSection={activeSection} onSectionChange={scrollToSection} />

      <main>
        <HomeView />
        <AboutView />
        <PortfolioView />
        <CVView />
        <ContactView />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
