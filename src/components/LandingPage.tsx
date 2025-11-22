import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import HomePage from '@/components/HomePage';
import LearningPage from '@/components/LearningPage';
import ArchivesPage from '@/components/ArchivesPage';
import SupportPage from '@/components/SupportPage';
import AuthModal from '@/components/AuthModal';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'learning' | 'archives' | 'support'>('home');
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background overflow-y-auto">
      <header className="fixed w-full bg-white/90 backdrop-blur-lg z-50 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 text-primary font-bold text-2xl">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Share2" className="text-white" size={20} />
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Семейные корни
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => setCurrentPage('home')} className={`hover:text-primary transition-all ${currentPage === 'home' ? 'text-primary font-semibold' : ''}`}>
              Главная
            </button>
            <button onClick={onStart} className="hover:text-primary transition-all">
              Древо
            </button>
            <button onClick={() => setCurrentPage('learning')} className={`hover:text-primary transition-all ${currentPage === 'learning' ? 'text-primary font-semibold' : ''}`}>
              Обучение
            </button>
            <button onClick={() => setCurrentPage('archives')} className={`hover:text-primary transition-all ${currentPage === 'archives' ? 'text-primary font-semibold' : ''}`}>
              Архивы
            </button>
            <button onClick={() => setCurrentPage('support')} className={`hover:text-primary transition-all ${currentPage === 'support' ? 'text-primary font-semibold' : ''}`}>
              Поддержка
            </button>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => { setAuthMode('login'); setAuthModalOpen(true); }} 
              className="border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              Войти
            </Button>
            <Button 
              onClick={() => { setAuthMode('register'); setAuthModalOpen(true); }} 
              className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </header>

      {currentPage === 'home' && <HomePage onStart={onStart} />}
      {currentPage === 'learning' && <LearningPage />}
      {currentPage === 'archives' && <ArchivesPage />}
      {currentPage === 'support' && <SupportPage />}

      <AuthModal
        isOpen={authModalOpen}
        mode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(sessionToken, userData) => {
          setAuthModalOpen(false);
          onStart();
        }}
        onSwitchMode={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
      />
    </div>
  );
}