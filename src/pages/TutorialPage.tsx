import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TutorialPage() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'Введение в генеалогию',
      description: 'Основы генеалогического исследования, терминология и методология',
      icon: 'BookOpen',
      duration: '20 мин',
      topics: [
        'Что такое генеалогия и зачем она нужна',
        'Основные понятия: поколения, степени родства',
        'Прямые и боковые линии родства',
        'Восходящее и нисходящее древо'
      ]
    },
    {
      id: 2,
      title: 'Источники информации',
      description: 'Где искать сведения о предках: документы, архивы, базы данных',
      icon: 'Search',
      duration: '30 мин',
      topics: [
        'Семейные документы и фотоальбомы',
        'Метрические книги и ревизские сказки',
        'Государственные архивы России',
        'Онлайн-базы данных и оцифрованные архивы'
      ]
    },
    {
      id: 3,
      title: 'Работа с архивами',
      description: 'Как правильно делать запросы в архивы и интерпретировать документы',
      icon: 'FileText',
      duration: '25 мин',
      topics: [
        'Подготовка запроса в архив',
        'Чтение старых документов и почерков',
        'Церковнославянский язык в документах',
        'Работа с метрическими книгами'
      ]
    },
    {
      id: 4,
      title: 'Датировка и хронология',
      description: 'Работа с историческими датами, календарями и временными периодами',
      icon: 'Calendar',
      duration: '15 мин',
      topics: [
        'Юлианский и григорианский календари',
        'Старый и новый стиль дат в России',
        'Расчет возраста по датам в документах',
        'Определение примерных дат по косвенным данным'
      ]
    },
    {
      id: 5,
      title: 'Родословная роспись',
      description: 'Составление систематического описания рода по поколениям',
      icon: 'GitBranch',
      duration: '20 мин',
      topics: [
        'Восходящая родословная (от себя к предкам)',
        'Нисходящая родословная (от предка к потомкам)',
        'Смешанная родословная роспись',
        'Нумерация поколений и персон'
      ]
    },
    {
      id: 6,
      title: 'Дворянские роды',
      description: 'Особенности исследования дворянских родословных',
      icon: 'Crown',
      duration: '25 мин',
      topics: [
        'Дворянские родословные книги',
        'Гербовники и геральдика',
        'Формулярные списки и послужные списки',
        'Российский Дворянский Собор и современная геральдика'
      ]
    },
    {
      id: 7,
      title: 'Крестьянские роды',
      description: 'Исследование родословной крестьян и мещан',
      icon: 'Home',
      duration: '30 мин',
      topics: [
        'Ревизские сказки (ревизии населения)',
        'Исповедальные ведомости приходов',
        'Посемейные списки XIX века',
        'Податные документы и рекрутские списки'
      ]
    },
    {
      id: 8,
      title: 'Купеческие роды',
      description: 'Генеалогия купцов, промышленников и почетных граждан',
      icon: 'Building',
      duration: '20 мин',
      topics: [
        'Гильдейские свидетельства',
        'Почетное гражданство',
        'Торговые дома и фирмы',
        'Документы торгово-промышленных архивов'
      ]
    },
    {
      id: 9,
      title: 'ДНК-генеалогия',
      description: 'Использование генетических данных в генеалогических исследованиях',
      icon: 'Activity',
      duration: '25 мин',
      topics: [
        'Y-ДНК и митохондриальная ДНК',
        'Гаплогруппы и их распространение',
        'Этническое происхождение по ДНК',
        'ДНК-тесты для поиска родственников'
      ]
    },
    {
      id: 10,
      title: 'Оформление родословной',
      description: 'Как красиво представить результаты исследования',
      icon: 'PenTool',
      duration: '15 мин',
      topics: [
        'Генеалогические таблицы и схемы',
        'Родословное древо: виды и формы',
        'Оформление родословной книги',
        'Цифровые форматы и веб-публикации'
      ]
    },
    {
      id: 11,
      title: 'Региональная специфика',
      description: 'Особенности исследований в разных регионах России',
      icon: 'Map',
      duration: '20 мин',
      topics: [
        'Казачьи роды и войсковые архивы',
        'Старообрядческие семьи',
        'Народы Поволжья и Сибири',
        'Переселенцы и эмигранты'
      ]
    },
    {
      id: 12,
      title: 'Профессиональная генеалогия',
      description: 'Как стать профессиональным генеалогом',
      icon: 'Award',
      duration: '15 мин',
      topics: [
        'Генеалогическое образование в России',
        'Профессиональные генеалогические общества',
        'Этика генеалогических исследований',
        'Платные генеалогические услуги'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
          </button>
          <div className="font-bold text-primary flex items-center gap-2">
            <Icon name="GraduationCap" /> Курсы по генеалогии
          </div>
        </div>
        <Button onClick={() => navigate('/tree')} variant="outline">
          <Icon name="TreePine" size={16} className="mr-2" />
          Перейти к древу
        </Button>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Обучающие материалы по генеалогии</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Изучите основы генеалогического исследования и научитесь составлять родословную своей семьи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={course.icon as any} size={24} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {course.duration}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
              
              <div className="space-y-2">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <Icon name="Lightbulb" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Рекомендации начинающим</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                  <span>Начните с опроса старших родственников — они хранят бесценную информацию</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                  <span>Соберите все семейные документы, фотографии и записи в одном месте</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                  <span>Фиксируйте источники информации для каждого факта в родословной</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                  <span>Будьте готовы к длительным исследованиям — генеалогия требует терпения</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
