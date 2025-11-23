import React from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EmptyTreeStateProps {
  onClose: () => void;
}

export default function EmptyTreeState({ onClose }: EmptyTreeStateProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <Card className="max-w-md p-8 pointer-events-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          title="Закрыть"
        >
          <Icon name="X" size={20} />
        </button>
        <div className="text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="TreePine" size={40} className="text-primary" />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Начните строить своё древо
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Кликните на карточку персоны, чтобы добавить родственников и заполнить информацию
          </p>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="MousePointer2" size={16} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">Клик по персоне</div>
                <div className="text-xs text-muted-foreground">Откроет панель редактирования</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="UserPlus" size={16} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">Кнопка + на карточке</div>
                <div className="text-xs text-muted-foreground">Добавит родственника</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Move" size={16} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">Перетаскивание</div>
                <div className="text-xs text-muted-foreground">Зажмите ЛКМ чтобы двигать холст</div>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full mt-6"
            size="lg"
          >
            <Icon name="Check" size={20} className="mr-2" />
            Понятно
          </Button>
        </div>
      </Card>
    </div>
  );
}