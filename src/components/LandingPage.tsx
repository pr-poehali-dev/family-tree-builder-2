import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <Icon name="Share2" />
            <span className="hidden sm:inline">Семейные корни</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#science" className="hover:text-primary transition-colors">
              Наука
            </a>
          </div>
          <Button onClick={onStart}>Начать бесплатно</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Сохрани историю <span className="text-primary">своего рода</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Интерактивная платформа для создания генеалогического древа. Безопасное хранение данных и{' '}
              <span className="text-accent font-bold inline-flex items-center gap-1">
                <Icon name="Sparkles" size={16} /> AI-помощник
              </span>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onStart} className="text-lg px-8 py-6" size="lg">
                Создать древо
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6" size="lg">
                <Icon name="Search" className="mr-2" />
                Пример древа
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl border border-primary/20">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            ></div>
            <div className="relative z-10 text-center scale-90 sm:scale-100">
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 shadow-lg flex items-center justify-center border-4 border-primary">
                <Icon name="User" size={40} className="text-foreground" />
              </div>
              <div className="w-1 h-16 bg-primary/60 mx-auto mb-4"></div>
              <div className="flex gap-12 justify-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-400">
                  <Icon name="User" size={24} className="text-muted-foreground" />
                </div>
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-pink-400">
                  <Icon name="User" size={24} className="text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
