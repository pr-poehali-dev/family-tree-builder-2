import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'learning' | 'archives' | 'support'>('home');

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
          <Button onClick={onStart} className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
            Начать бесплатно
          </Button>
        </div>
      </header>

      {currentPage === 'archives' && (
        <div className="pt-24 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 text-foreground">Архивы России</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                База данных государственных и региональных архивов с полезной информацией для генеалогических исследований
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Поиск по названию или региону..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
              <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium whitespace-nowrap">
                Все регионы
              </button>
              <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
                Москва
              </button>
              <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
                Санкт-Петербург
              </button>
              <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
                Центральная Россия
              </button>
              <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
                Сибирь
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Building2" size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">РГИА (Российский государственный исторический архив)</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Крупнейший архив документов Российской империи XVIII - начала XX века. Метрические книги, ревизские сказки, формулярные списки.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">Санкт-Петербург</span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">XVIII-XX век</span>
                    </div>
                    <a href="http://rgia.su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                      Перейти на сайт <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Landmark" size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">РГАДА (Российский государственный архив древних актов)</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Документы XI - начала XX века. Родословные книги, дворянские дела, церковные акты, переписные книги.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full font-medium">Москва</span>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">XI-XX век</span>
                    </div>
                    <a href="http://rgada.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                      Перейти на сайт <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="FileText" size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">ЦГАМ (Центральный государственный архив Москвы)</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Метрические книги московских церквей, документы загсов, домовые книги, адресные справочники.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Москва</span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">XIX-XX век</span>
                    </div>
                    <a href="https://cgamos.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                      Перейти на сайт <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Ship" size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">ЦГИА СПб (Центральный государственный исторический архив)</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Метрические книги Санкт-Петербурга и губернии, документы учебных заведений, формулярные списки чиновников.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">Санкт-Петербург</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">XVIII-XX век</span>
                    </div>
                    <a href="https://spbarchives.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                      Перейти на сайт <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Users" size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Архивы регионов России</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Региональные архивы хранят местные метрические книги, загсы, документы предприятий и учреждений вашего региона.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full font-medium">Все регионы</span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-700 text-xs rounded-full font-medium">XIX-XXI век</span>
                    </div>
                    <a href="https://rusarchives.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                      Список архивов <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Globe" size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Портал "Архивы России"</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Единый портал доступа к архивным документам. Поиск по базам данных, оцифрованные документы, онлайн-запросы.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium">Федеральный</span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">Онлайн-доступ</span>
                    </div>
                    <a href="https://rusarchives.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                      Перейти на портал <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="Info" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Как работать с архивами</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Определите, в каком регионе жили ваши предки и выберите соответствующий архив</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Изучите справочники и описи фондов на сайте архива перед подачей запроса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Подайте письменный запрос с максимально точными данными (ФИО, даты, место)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Срок ответа на запрос — обычно 30 дней, госпошлина зависит от типа документа</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'support' && (
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
      )}

      {currentPage === 'learning' && (
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
      )}

      {currentPage === 'home' && (
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
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  О проекте
                </a>
                <button onClick={onStart} className="block text-muted-foreground hover:text-primary transition-colors">
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
      )}
    </div>
  );
}