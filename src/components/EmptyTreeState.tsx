import React from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EmptyTreeStateProps {
  onClose: () => void;
}

export default function EmptyTreeState({ onClose }: EmptyTreeStateProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none p-4">
      <Card className="max-w-sm p-5 pointer-events-auto relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          title="Закрыть"
        >
          <Icon name="X" size={18} />
        </button>
        <div className="text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="TreePine" size={28} className="text-primary" />
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-2">
            Начните строить древо
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">
            Наведите на карточку и нажмите кнопку <span className="font-bold">+</span> внизу
          </p>
          
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
              <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="MousePointer2" size={14} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs">Клик по персоне</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
              <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="UserPlus" size={14} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs">Кнопка + добавит родственника</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
              <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Move" size={14} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs">Зажмите ЛКМ для перемещения</div>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full mt-4"
            size="sm"
          >
            <Icon name="Check" size={16} className="mr-2" />
            Понятно
          </Button>
        </div>
      </Card>
    </div>
  );
}