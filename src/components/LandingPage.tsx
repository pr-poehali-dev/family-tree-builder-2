import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
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
            <a href="#features" className="hover:text-primary transition-all hover:scale-105">
              Возможности
            </a>
            <a href="#about" className="hover:text-primary transition-all hover:scale-105">
              О проекте
            </a>
          </div>
          <Button onClick={onStart} className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
            Начать бесплатно
          </Button>
        </div>
      </header>

      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-semibold border border-primary/20">
                <Icon name="Sparkles" size={14} className="inline mr-2" />
                Сохраните историю своей семьи
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
              Ваше семейное древо{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                оживает
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Создавайте интерактивное генеалогическое древо, добавляйте фотографии и истории, 
              сохраняйте память о каждом члене семьи на века.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={onStart} 
                className="text-lg px-10 py-7 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105" 
                size="lg"
              >
                <Icon name="TreePine" className="mr-2" size={20} />
                Создать древо
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-10 py-7 border-2 hover:border-primary hover:bg-primary/5 transition-all hover:scale-105" 
                size="lg"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть демо
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  +12
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="font-bold text-foreground">1000+ семей</div>
                <div>уже создали своё древо</div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-[3rem] blur-2xl animate-pulse"></div>
            
            <div className="relative w-full h-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 p-8">
              <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <div className="relative mb-16">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white transform hover:scale-110 transition-transform cursor-pointer animate-float">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>

                <div className="w-0.5 h-24 bg-gradient-to-b from-primary/60 to-transparent mb-8"></div>

                <div className="flex gap-16 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-48 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
                  
                  <div className="transform hover:scale-110 transition-transform cursor-pointer animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div className="mt-2 text-center">
                      <div className="text-xs font-bold text-foreground">Отец</div>
                    </div>
                  </div>

                  <div className="transform hover:scale-110 transition-transform cursor-pointer animate-float" style={{ animationDelay: '1s' }}>
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div className="mt-2 text-center">
                      <div className="text-xs font-bold text-foreground">Мать</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full shadow-lg border border-primary/20 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-foreground">3 персоны</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Всё для вашей истории</h2>
            <p className="text-muted-foreground text-lg">Простые инструменты для создания семейного наследия</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-border/50 hover:border-primary/50 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="MousePointerClick" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Интерактивное древо</h3>
              <p className="text-muted-foreground leading-relaxed">
                Перемещайте, масштабируйте и редактируйте древо одним касанием. Интуитивно понятный интерфейс.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-border/50 hover:border-primary/50 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Users" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Неограниченные связи</h3>
              <p className="text-muted-foreground leading-relaxed">
                Добавляйте родителей, детей, братьев, сестёр и супругов. Стройте полное генеалогическое древо.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-border/50 hover:border-primary/50 hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Save" size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Безопасное хранение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Все данные сохраняются автоматически. Экспортируйте и делитесь древом в любое время.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}