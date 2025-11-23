import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import DashboardOverviewTab from '@/components/dashboard/DashboardOverviewTab';
import DashboardAchievementsTab from '@/components/dashboard/DashboardAchievementsTab';
import DashboardStatisticsTab from '@/components/dashboard/DashboardStatisticsTab';

interface DashboardPageProps {
  onClose: () => void;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  reward: string;
}

interface Stats {
  totalPeople: number;
  generations: number;
  photosAdded: number;
  storiesWritten: number;
  documentsUploaded: number;
  completionPercentage: number;
}

export default function DashboardPage({ onClose }: DashboardPageProps) {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'achievements' | 'statistics'>('overview');

  const stats: Stats = {
    totalPeople: 47,
    generations: 5,
    photosAdded: 28,
    storiesWritten: 15,
    documentsUploaded: 8,
    completionPercentage: 64
  };

  const achievements: Achievement[] = [
    {
      id: 'first-person',
      title: 'Первый шаг',
      description: 'Добавьте первого человека в древо',
      icon: 'User',
      progress: 1,
      maxProgress: 1,
      unlocked: true,
      reward: '+50 XP'
    },
    {
      id: 'family-of-10',
      title: 'Большая семья',
      description: 'Добавьте 10 членов семьи',
      icon: 'Users',
      progress: 47,
      maxProgress: 10,
      unlocked: true,
      reward: '+100 XP'
    },
    {
      id: 'photographer',
      title: 'Фотограф',
      description: 'Загрузите 20 фотографий',
      icon: 'Camera',
      progress: 28,
      maxProgress: 20,
      unlocked: true,
      reward: '+150 XP'
    },
    {
      id: 'storyteller',
      title: 'Хранитель историй',
      description: 'Напишите 10 семейных историй',
      icon: 'BookOpen',
      progress: 15,
      maxProgress: 10,
      unlocked: true,
      reward: '+200 XP'
    },
    {
      id: 'archivist',
      title: 'Архивариус',
      description: 'Загрузите 15 документов',
      icon: 'FileText',
      progress: 8,
      maxProgress: 15,
      unlocked: false,
      reward: '+250 XP'
    },
    {
      id: 'century',
      title: 'Век истории',
      description: 'Охватите 100 лет семейной истории',
      icon: 'Calendar',
      progress: 87,
      maxProgress: 100,
      unlocked: false,
      reward: '+300 XP'
    },
    {
      id: 'dynasty',
      title: 'Династия',
      description: 'Заполните 7 поколений',
      icon: 'Crown',
      progress: 5,
      maxProgress: 7,
      unlocked: false,
      reward: '+500 XP'
    },
    {
      id: 'researcher',
      title: 'Исследователь',
      description: 'Добавьте информацию из архивов',
      icon: 'Search',
      progress: 3,
      maxProgress: 5,
      unlocked: false,
      reward: '+350 XP'
    }
  ];

  const recentActivity = [
    { action: 'Добавлен портрет', person: 'Мария Ивановна', time: '2 часа назад', icon: 'Camera' },
    { action: 'Написана история', person: 'Александр Петрович', time: '5 часов назад', icon: 'BookOpen' },
    { action: 'Добавлен член семьи', person: 'Елена Сергеевна', time: '1 день назад', icon: 'UserPlus' },
    { action: 'Загружен документ', person: 'Свидетельство о рождении', time: '2 дня назад', icon: 'FileText' }
  ];

  const nextLevelXP = 1000;
  const currentXP = 650;
  const level = 7;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background pt-20">
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-primary/30 hover:border-primary"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
            <div>
              <h1 className="text-xl font-bold text-foreground">Личный кабинет</h1>
              <p className="text-sm text-muted-foreground">Ваш прогресс и достижения</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-lg border border-amber-200">
              <Icon name="Sparkles" size={18} className="text-amber-600" />
              <div className="text-sm">
                <div className="font-bold text-amber-900">Уровень {level}</div>
                <div className="text-xs text-amber-700">{currentXP}/{nextLevelXP} XP</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex gap-4 border-b border-border/50">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="LayoutDashboard" size={16} className="inline mr-2" />
              Обзор
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 ${
                activeTab === 'achievements'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Trophy" size={16} className="inline mr-2" />
              Достижения
            </button>
            <button
              onClick={() => setActiveTab('statistics')}
              className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 ${
                activeTab === 'statistics'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="BarChart3" size={16} className="inline mr-2" />
              Статистика
            </button>
          </div>
        </div>

        {activeTab === 'overview' && (
          <DashboardOverviewTab stats={stats} recentActivity={recentActivity} />
        )}

        {activeTab === 'achievements' && (
          <DashboardAchievementsTab 
            achievements={achievements}
            level={level}
            currentXP={currentXP}
            nextLevelXP={nextLevelXP}
          />
        )}

        {activeTab === 'statistics' && (
          <DashboardStatisticsTab stats={stats} />
        )}
      </div>
    </div>
  );
}
