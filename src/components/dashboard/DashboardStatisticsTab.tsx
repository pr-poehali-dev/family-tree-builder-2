import React from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

interface Stats {
  totalPeople: number;
  generations: number;
  photosAdded: number;
  storiesWritten: number;
  documentsUploaded: number;
  completionPercentage: number;
}

interface DashboardStatisticsTabProps {
  stats: Stats;
}

export default function DashboardStatisticsTab({ stats }: DashboardStatisticsTabProps) {
  return (
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
  );
}
