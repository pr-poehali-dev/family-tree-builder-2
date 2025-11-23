import React from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Stats } from '@/data/dashboardMockData';
import { FamilyNode } from '@/components/TreeCanvas';
import { getProfileCompleteness, getGenerationDistribution, getTimeSpan } from '@/utils/dashboardMetrics';

interface DashboardStatisticsTabProps {
  stats: Stats;
  nodes?: FamilyNode[];
}

export default function DashboardStatisticsTab({ stats, nodes = [] }: DashboardStatisticsTabProps) {
  const { complete, partial, minimal } = getProfileCompleteness(nodes);
  const generations = getGenerationDistribution(nodes);
  const { years, startYear, endYear } = getTimeSpan(nodes);

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
          {generations.map((gen, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{gen.generation}</span>
                <span className="text-sm font-bold text-foreground">{gen.count} чел.</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${gen.color} transition-all duration-500`}
                  style={{ width: stats.totalPeople > 0 ? `${(gen.count / stats.totalPeople) * 100}%` : '0%' }}
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
                <span className="text-sm font-bold text-green-600">
                  {complete} ({stats.totalPeople > 0 ? Math.round((complete / stats.totalPeople) * 100) : 0}%)
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                  style={{ width: stats.totalPeople > 0 ? `${(complete / stats.totalPeople) * 100}%` : '0%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Частично заполненные</span>
                <span className="text-sm font-bold text-yellow-600">
                  {partial} ({stats.totalPeople > 0 ? Math.round((partial / stats.totalPeople) * 100) : 0}%)
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500"
                  style={{ width: stats.totalPeople > 0 ? `${(partial / stats.totalPeople) * 100}%` : '0%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Минимальная информация</span>
                <span className="text-sm font-bold text-gray-600">
                  {minimal} ({stats.totalPeople > 0 ? Math.round((minimal / stats.totalPeople) * 100) : 0}%)
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-500"
                  style={{ width: stats.totalPeople > 0 ? `${(minimal / stats.totalPeople) * 100}%` : '0%' }}
                ></div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-6">Временной охват</h3>
          <div className="flex flex-col items-center justify-center h-48">
            {years > 0 ? (
              <>
                <div className="text-6xl font-bold text-primary mb-2">{years}</div>
                <div className="text-lg text-muted-foreground mb-4">лет семейной истории</div>
                <div className="text-sm text-muted-foreground">{startYear} - {endYear}</div>
              </>
            ) : (
              <>
                <div className="text-6xl font-bold text-gray-400 mb-2">0</div>
                <div className="text-lg text-muted-foreground mb-4">лет семейной истории</div>
                <div className="text-sm text-muted-foreground">Добавьте даты рождения</div>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
