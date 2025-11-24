import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TutorialPage() {
  const navigate = useNavigate();

  const tutorials = [
    {
      id: 1,
      title: 'Создание первого древа',
      description: 'Узнайте, как начать работу и создать ваше первое генеалогическое древо',
      icon: 'TreePine',
      duration: '5 мин',
      steps: [
        'Войдите в систему через Яндекс ID',
        'Заполните информацию о себе',
        'Добавьте родителей через кнопку "+"',
        'Сохраните древо кнопкой "Сохранить"'
      ]
    },
    {
      id: 2,
      title: 'Добавление родственников',
      description: 'Как добавлять родителей, детей, супругов и других родственников',
      icon: 'UserPlus',
      duration: '3 мин',
      steps: [
        'Выберите узел на древе',
        'Нажмите кнопку "+" рядом с узлом',
        'Выберите тип родства',
        'Заполните данные родственника'
      ]
    },
    {
      id: 3,
      title: 'Работа с фотографиями',
      description: 'Добавление и управление фотографиями членов семьи',
      icon: 'Image',
      duration: '2 мин',
      steps: [
        'Кликните на узел персоны',
        'В правой панели нажмите "Загрузить фото"',
        'Выберите изображение с компьютера',
        'Фото автоматически сохранится'
      ]
    },
    {
      id: 4,
      title: 'Навигация по древу',
      description: 'Управление холстом, масштабирование и перемещение',
      icon: 'Move',
      duration: '2 мин',
      steps: [
        'Зажмите левую кнопку мыши для перемещения',
        'Используйте колесико мыши для масштабирования',
        'Двойной клик на узел для фокуса',
        'Кнопка "Home" возвращает в центр'
      ]
    },
    {
      id: 5,
      title: 'Экспорт и импорт',
      description: 'Сохранение древа на компьютер и загрузка резервных копий',
      icon: 'Download',
      duration: '2 мин',
      steps: [
        'Нажмите иконку "Скачать" в верхней панели',
        'Древо сохранится в формате JSON',
        'Для загрузки нажмите иконку "Загрузить"',
        'Выберите ранее сохраненный файл'
      ]
    },
    {
      id: 6,
      title: 'Горячие клавиши',
      description: 'Ускорьте работу с помощью клавиатурных сокращений',
      icon: 'Keyboard',
      duration: '1 мин',
      steps: [
        'Ctrl+S / Cmd+S - Быстрое сохранение',
        'Delete / Backspace - Удалить выбранный узел',
        'Esc - Снять выделение',
        'D - Открыть личный кабинет'
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
            <Icon name="GraduationCap" /> Обучение
          </div>
        </div>
        <Button onClick={() => navigate('/tree')} variant="outline">
          <Icon name="TreePine" size={16} className="mr-2" />
          Перейти к древу
        </Button>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Обучающие материалы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Пошаговые инструкции помогут вам освоить все возможности платформы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={tutorial.icon as any} size={24} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {tutorial.duration}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">{tutorial.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tutorial.description}</p>
              
              <div className="space-y-2">
                {tutorial.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{step}</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Полезные советы</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                  <span>Сохраняйте древо регулярно - автосохранение работает, но лучше перестраховаться</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                  <span>Используйте экспорт для создания резервных копий перед большими изменениями</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                  <span>Добавляйте фотографии - так древо становится более живым и запоминающимся</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                  <span>Заполняйте даты и места - эта информация важна для будущих поколений</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
