import React from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

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

interface DashboardAchievementsTabProps {
  achievements: Achievement[];
  level: number;
  currentXP: number;
  nextLevelXP: number;
}

export default function DashboardAchievementsTab({ 
  achievements, 
  level, 
  currentXP, 
  nextLevelXP 
}: DashboardAchievementsTabProps) {
  return (
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
  );
}
