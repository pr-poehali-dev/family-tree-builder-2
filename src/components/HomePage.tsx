import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  onStart: () => void;
  onDemo: () => void;
}

export default function HomePage({ onStart, onDemo }: HomePageProps) {
  const navigate = useNavigate();
  
  return (
    <>
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-[0.9fr,1.3fr] gap-8 lg:gap-16 items-center relative z-10">
          <div className="space-y-7">
            <div className="inline-block">
              <div className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-semibold border border-primary/20">
                <Icon name="Sparkles" size={14} className="inline mr-2" />
                Сохраните историю своей семьи
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1]">
              Ваше семейное древо{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                оживает
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Создавайте интерактивное генеалогическое древо, добавляйте фотографии и истории, 
              сохраняйте память о каждом члене семьи на века.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={onStart} 
                className="text-lg px-10 py-6 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105" 
                size="lg"
              >
                <Icon name="TreePine" className="mr-2" size={20} />
                Создать древо
              </Button>
              <Button 
                onClick={onDemo}
                variant="outline" 
                className="text-lg px-10 py-6 border-2 hover:border-primary hover:bg-primary/5 transition-all hover:scale-105" 
                size="lg"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть демо
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md"></div>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white shadow-md"></div>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-md"></div>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
                  +12
                </div>
              </div>
              <div className="text-sm">
                <div className="font-bold text-foreground text-base">1000+ семей</div>
                <div className="text-muted-foreground">уже создали своё древо</div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] md:h-[550px] flex items-center justify-center -mr-6 md:mr-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/15 to-primary/15 blur-3xl opacity-60"></div>
            
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/154e461b-cfd7-4d9f-96c7-91ca810ff9e7/files/9de6bb42-8f27-4563-bac8-f444f4bf7c69.jpg"
                alt="Семья из трёх поколений создаёт семейное древо"
                className="w-full h-full object-cover object-center rounded-3xl shadow-2xl"
                style={{
                  maskImage: 'radial-gradient(ellipse 100% 100% at center, black 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at center, black 60%, transparent 100%)'
                }}
              />
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

      <footer className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary font-bold text-xl">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="Share2" className="text-white" size={20} />
                </div>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Семейные корни
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Создавайте интерактивное генеалогическое древо и сохраняйте историю вашей семьи для будущих поколений.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Навигация</h4>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                  Возможности
                </a>
                <button onClick={() => navigate('/tutorial')} className="block text-muted-foreground hover:text-primary transition-colors text-left">
                  Обучение
                </button>
                <button onClick={() => navigate('/support')} className="block text-muted-foreground hover:text-primary transition-colors text-left">
                  Поддержка
                </button>
                <button onClick={onStart} className="block text-muted-foreground hover:text-primary transition-colors text-left">
                  Начать работу
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Контакты</h4>
              <div className="space-y-3">
                <a href="mailto:rnb-dir@yandex.ru" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Mail" size={16} />
                  rnb-dir@yandex.ru
                </a>
                <a href="tel:+79173415731" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (917) 341-57-31
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                  <Icon name="Award" size={16} className="inline mr-2 text-primary" />
                  <span className="font-semibold text-foreground">Конкурс "Студенческий стартап"</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Сайт разработан <span className="font-bold text-primary">Рябых Никитой</span> специально для конкурса <span className="font-semibold">Студенческий стартап</span>
              </p>
              <p className="text-muted-foreground text-xs">
                © 2025 Семейные корни. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}