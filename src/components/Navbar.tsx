import { useLanguage } from '../LanguageContext';
import { content } from '../data/content';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const { language, setLanguage } = useLanguage();
  const t = content[language].nav;

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'portfolio', label: t.portfolio },
    { id: 'cv', label: t.cv },
    { id: 'contact', label: t.contact },
  ];

  return (
    <nav className="fixed top-0 right-0 p-6 z-50 flex items-center gap-8">
      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`text-base font-bold transition-all hover:scale-110 relative font-heading px-4 py-1 ${
                activeSection === item.id 
                  ? 'text-pastel-pink-dark doodle-border-soft bg-white rotate-2' 
                  : 'text-slate-600 hover:text-pastel-blue-dark -rotate-1'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-dot"
                  className="absolute -top-1 -right-1 w-3 h-3 bg-pastel-yellow-dark rounded-full"
                />
              )}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-slate-400 hover:border-pastel-pink-dark transition-all text-sm font-bold text-slate-700 bg-white doodle-border-soft hover:rotate-3"
      >
        <Globe size={16} className="text-pastel-blue-dark" />
        {language === 'en' ? '中文' : 'EN'}
      </button>
    </nav>
  );
}
