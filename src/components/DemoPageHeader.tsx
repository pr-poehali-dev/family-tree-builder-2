import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface DemoPageHeaderProps {
  onClose: () => void;
}

export default function DemoPageHeader({ onClose }: DemoPageHeaderProps) {
  return (
    <div className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
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
          <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Icon name="Crown" size={20} className="text-amber-500" />
            Династия Романовых (1613-1918)
          </h1>
          <p className="text-xs text-muted-foreground">Демонстрация возможностей конструктора</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
        <Icon name="Eye" size={18} className="text-blue-600" />
        <span className="text-sm font-semibold text-blue-700">Режим просмотра</span>
      </div>
    </div>
  );
}
