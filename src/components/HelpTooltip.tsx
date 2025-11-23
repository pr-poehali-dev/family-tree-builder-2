import React from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

export default function HelpTooltip() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
        title="Горячие клавиши"
      >
        <Icon name="Keyboard" size={16} className="text-primary" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute right-0 top-12 z-50 p-4 w-72 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm">Горячие клавиши</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between py-1">
                <span className="text-muted-foreground">Сохранить</span>
                <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl+S</kbd>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-muted-foreground">Личный кабинет</span>
                <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl+D</kbd>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-muted-foreground">Удалить персону</span>
                <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Del</kbd>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-muted-foreground">Закрыть панель</span>
                <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Esc</kbd>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-muted-foreground">Перетащить холст</span>
                <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Зажать ЛКМ</kbd>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-muted-foreground">Масштаб</span>
                <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Колесо мыши</kbd>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}