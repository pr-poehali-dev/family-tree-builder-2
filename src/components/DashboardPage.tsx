import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="Users" size={24} className="text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600 bg-blue-200 px-2 py-1 rounded-full">
                    +5 за неделю
                  </span>
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">{stats.totalPeople}</div>
                <div className="text-sm text-blue-700">Членов семьи</div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="GitBranch" size={24} className="text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-900 mb-1">{stats.generations}</div>
                <div className="text-sm text-green-700">Поколений</div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="Camera" size={24} className="text-purple-600" />
                  <span className="text-xs font-semibold text-purple-600 bg-purple-200 px-2 py-1 rounded-full">
                    +3 за неделю
                  </span>
                </div>
                <div className="text-3xl font-bold text-purple-900 mb-1">{stats.photosAdded}</div>
                <div className="text-sm text-purple-700">Фотографий</div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="BookOpen" size={24} className="text-amber-600" />
                  <span className="text-xs font-semibold text-amber-600 bg-amber-200 px-2 py-1 rounded-full">
                    +2 за неделю
                  </span>
                </div>
                <div className="text-3xl font-bold text-amber-900 mb-1">{stats.storiesWritten}</div>
                <div className="text-sm text-amber-700">Историй написано</div>
              </Card>
            </div>

            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">Прогресс заполнения древа</h3>
                  <p className="text-muted-foreground">Заполните основную информацию о каждом члене семьи</p>
                </div>
                <div className="text-5xl font-bold text-primary">{stats.completionPercentage}%</div>
              </div>
              
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 relative"
                  style={{ width: `${stats.completionPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">Заполнено</div>
                    <div className="text-sm text-green-700">30 профилей</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Icon name="AlertCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-yellow-900">Частично</div>
                    <div className="text-sm text-yellow-700">12 профилей</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Не заполнено</div>
                    <div className="text-sm text-gray-700">5 профилей</div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Последняя активность
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={activity.icon as any} size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground">{activity.action}</div>
                        <div className="text-sm text-muted-foreground truncate">{activity.person}</div>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Target" size={20} className="text-primary" />
                  Рекомендации
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-lg border border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                    <div className="flex items-start gap-3">
                      <Icon name="UserPlus" size={20} className="text-primary mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Добавьте родителей</div>
                        <div className="text-sm text-muted-foreground">У 8 членов семьи не указаны родители</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                    <div className="flex items-start gap-3">
                      <Icon name="Camera" size={20} className="text-primary mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Загрузите фотографии</div>
                        <div className="text-sm text-muted-foreground">19 профилей без фотографий</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                    <div className="flex items-start gap-3">
                      <Icon name="Calendar" size={20} className="text-primary mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Укажите даты</div>
                        <div className="text-sm text-muted-foreground">Заполните даты рождения для 6 человек</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Ваш уровень: {level}</h3>
                  <p className="text-amber-700">До следующего уровня: {nextLevelXP - currentXP} XP</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                  <Icon name="Trophy" size={48} className="text-white" />
                </div>
              </div>
              <div className="mt-6 h-3 bg-amber-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-500"
                  style={{ width: `${(currentXP / nextLevelXP) * 100}%` }}
                ></div>
              </div>
            </Card>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Достижения ({achievements.filter(a => a.unlocked).length}/{achievements.length})</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map(achievement => (
                  <Card
                    key={achievement.id}
                    className={`p-6 transition-all ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          achievement.unlocked
                            ? 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg'
                            : 'bg-gray-300'
                        }`}
                      >
                        <Icon name={achievement.icon as any} size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-bold ${achievement.unlocked ? 'text-green-900' : 'text-gray-700'}`}>
                            {achievement.title}
                          </h4>
                          {achievement.unlocked && (
                            <Icon name="CheckCircle2" size={20} className="text-green-600" />
                          )}
                        </div>
                        <p className={`text-sm mb-3 ${achievement.unlocked ? 'text-green-700' : 'text-gray-600'}`}>
                          {achievement.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-4">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all ${
                                  achievement.unlocked
                                    ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                                    : 'bg-gray-400'
                                }`}
                                style={{
                                  width: `${Math.min((achievement.progress / achievement.maxProgress) * 100, 100)}%`
                                }}
                              ></div>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {achievement.progress}/{achievement.maxProgress}
                            </div>
                          </div>
                          <div className={`text-sm font-semibold ${achievement.unlocked ? 'text-amber-600' : 'text-gray-500'}`}>
                            {achievement.reward}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'statistics' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Всего членов семьи</h4>
                  <Icon name="Users" size={20} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stats.totalPeople}</div>
                <div className="text-sm text-muted-foreground">Охвачено {stats.generations} поколений</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Медиа материалы</h4>
                  <Icon name="Image" size={20} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stats.photosAdded}</div>
                <div className="text-sm text-muted-foreground">Фотографий и документов</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Семейные истории</h4>
                  <Icon name="BookOpen" size={20} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stats.storiesWritten}</div>
                <div className="text-sm text-muted-foreground">Историй сохранено</div>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Распределение по поколениям</h3>
              <div className="space-y-4">
                {[
                  { generation: 'Я и мои дети', count: 8, color: 'from-blue-400 to-blue-600' },
                  { generation: 'Родители', count: 4, color: 'from-green-400 to-green-600' },
                  { generation: 'Бабушки и дедушки', count: 8, color: 'from-purple-400 to-purple-600' },
                  { generation: 'Прабабушки и прадедушки', count: 15, color: 'from-amber-400 to-amber-600' },
                  { generation: 'Более дальние предки', count: 12, color: 'from-pink-400 to-pink-600' }
                ].map((gen, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{gen.generation}</span>
                      <span className="text-sm font-bold text-foreground">{gen.count} чел.</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${gen.color} transition-all duration-500`}
                        style={{ width: `${(gen.count / stats.totalPeople) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Полнота профилей</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Полные профили</span>
                      <span className="text-sm font-bold text-green-600">30 (64%)</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[64%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Частично заполненные</span>
                      <span className="text-sm font-bold text-yellow-600">12 (26%)</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 w-[26%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Минимальная информация</span>
                      <span className="text-sm font-bold text-gray-600">5 (10%)</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-gray-400 to-gray-600 w-[10%]"></div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Временной охват</h3>
                <div className="flex flex-col items-center justify-center h-48">
                  <div className="text-6xl font-bold text-primary mb-2">127</div>
                  <div className="text-lg text-muted-foreground mb-4">лет семейной истории</div>
                  <div className="text-sm text-muted-foreground">1897 - 2024</div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
