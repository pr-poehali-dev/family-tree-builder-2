import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ArchivePage() {
  const navigate = useNavigate();

  const archives = [
    {
      id: 1,
      name: 'Государственный архив Российской Федерации (ГАРФ)',
      description: 'Крупнейший архив России. Документы высших и центральных органов власти, личные фонды государственных деятелей',
      icon: 'Building2',
      url: 'http://statearchive.ru/',
      location: 'Москва',
      collections: [
        'Документы Российской империи',
        'Метрические книги',
        'Ревизские сказки',
        'Личные фонды'
      ]
    },
    {
      id: 2,
      name: 'Российский государственный исторический архив (РGIA)',
      description: 'Документы высших и центральных учреждений Российской империи 1721-1917 гг.',
      icon: 'Landmark',
      url: 'https://rgia.su/',
      location: 'Санкт-Петербург',
      collections: [
        'Документы Сената',
        'Формулярные списки',
        'Дворянские родословные книги',
        'Документы Синода'
      ]
    },
    {
      id: 3,
      name: 'Российский государственный военно-исторический архив (РГВИА)',
      description: 'Документы военного ведомства Российской империи XVIII - начала XX века',
      icon: 'Shield',
      url: 'http://rgvia.ru/',
      location: 'Москва',
      collections: [
        'Послужные списки офицеров',
        'Формулярные списки',
        'Наградные документы',
        'Документы военных училищ'
      ]
    },
    {
      id: 4,
      name: 'Российский государственный архив древних актов (РГАДА)',
      description: 'Документы XI - начала XIX века, включая писцовые и переписные книги',
      icon: 'Scroll',
      url: 'http://rgada.info/',
      location: 'Москва',
      collections: [
        'Боярские и дворянские роды',
        'Писцовые книги',
        'Разрядные книги',
        'Родословные росписи'
      ]
    },
    {
      id: 5,
      name: 'Центральный исторический архив Москвы (ЦИАМ)',
      description: 'Документы учреждений и организаций Москвы и Московской губернии',
      icon: 'MapPin',
      url: 'https://ცiam-arhiv.mos.ru/',
      location: 'Москва',
      collections: [
        'Метрические книги Москвы',
        'Городские обывательские книги',
        'Купеческие гильдии',
        'Мещанские общества'
      ]
    },
    {
      id: 6,
      name: 'Центральный государственный исторический архив СПб (ЦГИА СПб)',
      description: 'Документы учреждений Санкт-Петербурга и Санкт-Петербургской губернии',
      icon: 'Building',
      url: 'https://spbarchives.ru/',
      location: 'Санкт-Петербург',
      collections: [
        'Метрические книги приходов',
        'Исповедальные ведомости',
        'Документы учебных заведений',
        'Паспортные столы'
      ]
    },
    {
      id: 7,
      name: 'ОБД Мемориал',
      description: 'Банк данных о защитниках Отечества в годы Великой Отечественной войны',
      icon: 'Medal',
      url: 'https://obd-memorial.ru/',
      location: 'Онлайн',
      collections: [
        'Безвозвратные потери',
        'Документы о награждениях',
        'Донесения о потерях',
        'Картотеки захоронений'
      ]
    },
    {
      id: 8,
      name: 'Подвиг народа',
      description: 'Электронный банк документов о награжденных и награждениях периода ВОВ',
      icon: 'Award',
      url: 'http://podvignaroda.ru/',
      location: 'Онлайн',
      collections: [
        'Наградные листы',
        'Приказы о награждениях',
        'Журналы боевых действий',
        'Донесения о боевых действиях'
      ]
    },
    {
      id: 9,
      name: 'FamilySpace',
      description: 'Крупнейшая российская база генеалогических данных и метрических книг',
      icon: 'Users',
      url: 'https://familyspace.ru/',
      location: 'Онлайн',
      collections: [
        'Оцифрованные метрические книги',
        'Ревизские сказки',
        'Исповедальные ведомости',
        'Генеалогическое древо России'
      ]
    },
    {
      id: 10,
      name: 'Архивы регионов России',
      description: 'Справочник региональных государственных архивов субъектов РФ',
      icon: 'Map',
      url: 'http://archives.ru/state/list.shtml',
      location: 'Все регионы',
      collections: [
        'Метрические книги регионов',
        'Местные учреждения',
        'Краеведческие материалы',
        'Семейные фонды'
      ]
    },
    {
      id: 11,
      name: 'Всероссийское генеалогическое древо (ВГД)',
      description: 'Крупнейший онлайн-проект по созданию единого генеалогического древа',
      icon: 'GitBranch',
      url: 'https://vgd.ru/',
      location: 'Онлайн',
      collections: [
        'База генеалогических данных',
        'Форум генеалогов',
        'Справочники и методики',
        'Совместные исследования'
      ]
    },
    {
      id: 12,
      name: 'Архив Яд Вашем',
      description: 'Документы о жертвах Холокоста, в т.ч. на территории СССР',
      icon: 'Heart',
      url: 'https://www.yadvashem.org/',
      location: 'Израиль (онлайн)',
      collections: [
        'Страницы Памяти',
        'Списки жертв',
        'Свидетельства выживших',
        'Документы гетто и лагерей'
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
            <Icon name="Archive" /> Архивы России
          </div>
        </div>
        <Button onClick={() => navigate('/tree')} variant="outline">
          <Icon name="TreePine" size={16} className="mr-2" />
          Перейти к древу
        </Button>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Архивы России</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Государственные архивы и онлайн-базы данных для генеалогических исследований
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archives.map((archive) => (
            <Card key={archive.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={archive.icon as any} size={24} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded flex items-center gap-1">
                  <Icon name="MapPin" size={10} />
                  {archive.location}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">{archive.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{archive.description}</p>
              
              <div className="space-y-2 mb-4">
                {archive.collections.map((collection, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs">
                    <Icon name="Check" size={14} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{collection}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => window.open(archive.url, '_blank')}
                className="w-full"
                size="sm"
              >
                <Icon name="ExternalLink" size={14} className="mr-2" />
                Перейти на сайт
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <Icon name="Info" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Как работать с архивами</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-blue-600 mt-1 shrink-0" />
                  <span>Начните с онлайн-баз данных (FamilySpace, ВГД) — многие документы уже оцифрованы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-blue-600 mt-1 shrink-0" />
                  <span>Для запроса в госархив нужны точные данные: ФИО, даты, место жительства</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-blue-600 mt-1 shrink-0" />
                  <span>Срок ответа из архива — от 30 дней, для срочных запросов есть платные услуги</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-blue-600 mt-1 shrink-0" />
                  <span>Для работы в читальном зале архива нужен читательский билет</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
