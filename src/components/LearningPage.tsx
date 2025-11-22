import React from 'react';
import Icon from '@/components/ui/icon';

export default function LearningPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Обучение</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Курсы, статьи и инструкции для эффективного исследования родословной и работы с архивными материалами
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Поиск по курсам и материалам..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium whitespace-nowrap">
            Все материалы
          </button>
          <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
            Курсы
          </button>
          <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
            Инструкции
          </button>
          <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
            Шаблоны
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="relative">
              <div className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                Бесплатно
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl mb-4 flex items-center justify-center">
                <Icon name="BookOpen" size={64} className="text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Видеокурс: Генеалогия для начинающих</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Базовые принципы построения родословных древ и работы с архивными источниками
            </p>
            <div className="text-sm text-muted-foreground">5 уроков, 2 часа</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl mb-4 flex items-center justify-center">
              <Icon name="Search" size={64} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Как работать с архивами: инструкция</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Подробное руководство по поиску информации в государственных и региональных архивах
            </p>
            <div className="text-sm text-muted-foreground">25 минут чтения</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl mb-4 flex items-center justify-center">
              <Icon name="FileText" size={64} className="text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Шаблоны интервью для родственников</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Готовые вопросы для проведения интервью с родственниками и сохранения семейных историй
            </p>
            <div className="text-sm text-muted-foreground">10 шаблонов</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="relative">
              <div className="absolute top-3 right-3 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                Популярное
              </div>
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-50 rounded-xl mb-4 flex items-center justify-center">
                <Icon name="Dna" size={64} className="text-red-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">ДНК-генеалогия: основы и возможности</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Как ДНК-тесты могут помочь в построении родословной и поиске родственников
            </p>
            <div className="text-sm text-muted-foreground">4 урока, 1.5 часа</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl mb-4 flex items-center justify-center">
              <Icon name="FileStack" size={64} className="text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Типы генеалогических документов</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Обзор основных типов документов, которые помогут в исследовании родословной
            </p>
            <div className="text-sm text-muted-foreground">15 минут чтения</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="h-48 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl mb-4 flex items-center justify-center">
              <Icon name="Library" size={64} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Метрические книги: как читать и понимать</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Руководство по работе с церковными метрическими книгами XIX - начала XX веков
            </p>
            <div className="text-sm text-muted-foreground">3 урока, 1 час</div>
          </div>
        </div>
      </div>
    </div>
  );
}
