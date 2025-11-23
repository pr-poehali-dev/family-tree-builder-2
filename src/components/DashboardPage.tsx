import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import DashboardOverviewTab from '@/components/dashboard/DashboardOverviewTab';
import DashboardAchievementsTab from '@/components/dashboard/DashboardAchievementsTab';
import DashboardStatisticsTab from '@/components/dashboard/DashboardStatisticsTab';
import { mockStats, mockAchievements, mockRecentActivity, mockLevelData } from '@/data/dashboardMockData';

interface DashboardPageProps {
  onClose: () => void;
}

export default function DashboardPage({ onClose }: DashboardPageProps) {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'achievements' | 'statistics'>('overview');

  const { level, currentXP, nextLevelXP } = mockLevelData;

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
          <DashboardOverviewTab stats={mockStats} recentActivity={mockRecentActivity} />
        )}

        {activeTab === 'achievements' && (
          <DashboardAchievementsTab 
            achievements={mockAchievements}
            level={level}
            currentXP={currentXP}
            nextLevelXP={nextLevelXP}
          />
        )}

        {activeTab === 'statistics' && (
          <DashboardStatisticsTab stats={mockStats} />
        )}
      </div>
    </div>
  );
}