import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function SupportPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Поддержка</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы готовы помочь вам с любыми вопросами по работе с сервисом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="MessageCircle" size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Задать вопрос</h3>
            <p className="text-muted-foreground mb-6">
              Напишите нам в Telegram или по электронной почте. Мы отвечаем на все вопросы в течение 24 часов.
            </p>
            <div className="space-y-3">
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-md transition-all text-blue-700 font-medium">
                <Icon name="Send" size={20} />
                <span>Написать в Telegram</span>
              </a>
              <a href="mailto:rnb-dir@yandex.ru" className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-md transition-all text-green-700 font-medium">
                <Icon name="Mail" size={20} />
                <span>rnb-dir@yandex.ru</span>
              </a>
              <a href="tel:+79173415731" className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:shadow-md transition-all text-purple-700 font-medium">
                <Icon name="Phone" size={20} />
                <span>+7 (917) 341-57-31</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="BookOpen" size={28} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">База знаний</h3>
            <p className="text-muted-foreground mb-6">
              Часто задаваемые вопросы и пошаговые инструкции по работе с сервисом.
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-muted/30 rounded-xl">
                <h4 className="font-semibold text-foreground mb-1">Как добавить родственника?</h4>
                <p className="text-sm text-muted-foreground">Наведите на карточку персоны и нажмите + в нужном направлении</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl">
                <h4 className="font-semibold text-foreground mb-1">Как сохранить древо?</h4>
                <p className="text-sm text-muted-foreground">Нажмите кнопку "Сохранить" в верхней панели — данные сохранятся автоматически</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl">
                <h4 className="font-semibold text-foreground mb-1">Как экспортировать древо?</h4>
                <p className="text-sm text-muted-foreground">Используйте кнопку экспорта в верхней панели для скачивания JSON файла</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Sparkles" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Помощь в исследовании родословной</h3>
            <p className="text-muted-foreground mb-6">
              Нужна помощь в поиске информации о предках? Мы предоставляем консультации по работе с архивами, 
              составлению запросов и интерпретации исторических документов.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              <Icon name="Calendar" className="mr-2" size={18} />
              Записаться на консультацию
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-blue-600" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Быстрый ответ</h4>
            <p className="text-sm text-muted-foreground">Отвечаем на вопросы в течение 24 часов</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-green-600" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Опытная команда</h4>
            <p className="text-sm text-muted-foreground">Эксперты в генеалогии и истории семьи</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-purple-600" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Безопасность данных</h4>
            <p className="text-sm text-muted-foreground">Ваши данные надежно защищены</p>
          </div>
        </div>
      </div>
    </div>
  );
}
