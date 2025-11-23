import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PricingPageProps {
  onStart: () => void;
}

export default function PricingPage({ onStart }: PricingPageProps) {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-semibold border border-primary/20">
              <Icon name="Sparkles" size={14} className="inline mr-2" />
              Выберите подходящий тариф
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Тарифные планы
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Начните бесплатно или выберите премиум для полного доступа ко всем возможностям
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all border-2 lg:col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Star" size={24} className="text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Старт</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Отличный вариант для знакомства с сервисом
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black text-foreground">0</span>
                <span className="text-2xl font-semibold text-muted-foreground">₽</span>
              </div>
              <p className="text-sm text-muted-foreground">Навсегда бесплатно</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">До 50 персон</div>
                  <div className="text-sm text-muted-foreground">Достаточно для 3-4 поколений родственников</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">1 ГБ хранилища</div>
                  <div className="text-sm text-muted-foreground">До 300 фотографий среднего качества</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Одиночный режим</div>
                  <div className="text-sm text-muted-foreground">Создавайте древо самостоятельно</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Базовое обучение</div>
                  <div className="text-sm text-muted-foreground">Курс «Генеалогия для начинающих»</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Экспорт для экрана</div>
                  <div className="text-sm text-muted-foreground">Низкое разрешение, без печати</div>
                </div>
              </div>
            </div>

            <Button 
              onClick={onStart}
              variant="outline" 
              className="w-full text-lg py-6 border-2 hover:border-primary hover:bg-primary/5"
            >
              Начать бесплатно
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all border-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Crown" size={24} className="text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Премиум</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Месяц
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black text-foreground">490</span>
                <span className="text-xl font-semibold text-muted-foreground">₽</span>
              </div>
              <p className="text-sm text-muted-foreground">за месяц</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Безлимитное древо</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Совместная работа</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Умные алгоритмы</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Все курсы</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Экспорт HD + GEDCOM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Безлимитное хранилище</span>
              </div>
            </div>

            <Button 
              onClick={onStart}
              variant="outline"
              className="w-full text-lg py-6 border-2 hover:border-primary hover:bg-primary/5"
            >
              Выбрать план
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all border-2 border-primary/50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold">
              ПОПУЛЯРНЫЙ
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Crown" size={24} className="text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Премиум</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Полгода
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black text-foreground">2 490</span>
                <span className="text-xl font-semibold text-muted-foreground">₽</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground line-through">2 940 ₽</p>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">-17%</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Безлимитное древо</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Совместная работа</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Умные алгоритмы</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Все курсы</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Экспорт HD + GEDCOM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Безлимитное хранилище</span>
              </div>
            </div>

            <Button 
              onClick={onStart}
              className="w-full text-lg py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Выбрать план
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-2xl transition-all border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              ВЫГОДНЕЕ ВСЕГО
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Crown" size={24} className="text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Премиум</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Год
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black text-foreground">3 990</span>
                <span className="text-xl font-semibold text-muted-foreground">₽</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground line-through">5 880 ₽</p>
                <span className="px-2 py-0.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-bold">-33%</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-semibold">Безлимитное древо</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-semibold">Совместная работа</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-semibold">Умные алгоритмы</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-semibold">Все курсы</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-semibold">Экспорт HD + GEDCOM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-semibold">Безлимитное хранилище</span>
              </div>
            </div>

            <Button 
              onClick={onStart}
              className="w-full text-lg py-6 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Выбрать план
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Всего 333 ₽/мес при оплате за год
            </p>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="Gift" size={32} className="text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Специальное предложение для новых пользователей
                </h3>
                <p className="text-muted-foreground">
                  Получите 14 дней бесплатного доступа ко всем премиум-функциям при регистрации
                </p>
              </div>
              <Button 
                onClick={onStart}
                size="lg"
                className="flex-shrink-0"
              >
                Получить доступ
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Часто задаваемые вопросы</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-6 text-left hover:shadow-lg transition-all">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={18} className="text-primary" />
                Могу ли я перейти с бесплатного на платный тариф?
              </h4>
              <p className="text-muted-foreground text-sm">
                Да, вы можете обновить тариф в любое время. Все ваши данные сохранятся, и вы получите доступ ко всем премиум-функциям.
              </p>
            </Card>

            <Card className="p-6 text-left hover:shadow-lg transition-all">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={18} className="text-primary" />
                Что происходит после окончания пробного периода?
              </h4>
              <p className="text-muted-foreground text-sm">
                По окончании 14-дневного пробного периода с вас не спишутся деньги автоматически. Вы сможете выбрать план оплаты или продолжить с бесплатным тарифом.
              </p>
            </Card>

            <Card className="p-6 text-left hover:shadow-lg transition-all">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={18} className="text-primary" />
                Как работает совместное редактирование?
              </h4>
              <p className="text-muted-foreground text-sm">
                В премиум-тарифе вы можете пригласить родственников по email. Они смогут добавлять информацию, фотографии и редактировать древо в реальном времени. Все изменения синхронизируются мгновенно.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
