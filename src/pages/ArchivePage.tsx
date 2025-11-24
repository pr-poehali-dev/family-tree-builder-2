import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TreeArchive {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  nodesCount: number;
  thumbnail?: string;
}

export default function ArchivePage() {
  const navigate = useNavigate();
  const [archives, setArchives] = useState<TreeArchive[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadArchives();
  }, []);

  const loadArchives = async () => {
    try {
      const sessionToken = localStorage.getItem('session_token');
      if (!sessionToken) {
        navigate('/');
        return;
      }

      const response = await fetch('https://functions.poehali.dev/37b2ca54-22fb-4d55-a1eb-6415bea1e80f', {
        headers: {
          'X-Auth-Token': sessionToken
        }
      });

      if (response.ok) {
        const data = await response.json();
        setArchives(data.trees || []);
      }
    } catch (error) {
      console.error('Failed to load archives:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDeleteArchive = async (archiveId: string) => {
    if (!confirm('Вы уверены, что хотите удалить это древо?')) {
      return;
    }

    // TODO: Реализовать удаление через API
    setArchives(archives.filter(a => a.id !== archiveId));
  };

  const handleLoadArchive = async (archiveId: string) => {
    try {
      const sessionToken = localStorage.getItem('session_token');
      const response = await fetch(`https://functions.poehali.dev/b34d5849-b70f-4939-be6a-ca52bbbf3b71?tree_id=${archiveId}`, {
        headers: {
          'X-Auth-Token': sessionToken || ''
        }
      });

      if (response.ok) {
        navigate('/tree');
      }
    } catch (error) {
      console.error('Failed to load archive:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
          </button>
          <div className="font-bold text-primary flex items-center gap-2">
            <Icon name="Archive" /> Архивы
          </div>
        </div>
        <Button onClick={() => navigate('/tree')} variant="outline">
          <Icon name="TreePine" size={16} className="mr-2" />
          Текущее древо
        </Button>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Сохраненные древа</h1>
          <p className="text-lg text-muted-foreground">
            Все ваши генеалогические древа в одном месте
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <Icon name="Loader2" size={48} className="animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Загрузка архивов...</p>
          </div>
        ) : archives.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Inbox" size={40} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Архив пуст</h3>
            <p className="text-muted-foreground mb-6">
              Вы еще не сохранили ни одного генеалогического древа
            </p>
            <Button onClick={() => navigate('/tree')}>
              <Icon name="Plus" size={16} className="mr-2" />
              Создать древо
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archives.map((archive) => (
              <Card key={archive.id} className="p-6 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="TreePine" size={24} className="text-primary" />
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleLoadArchive(archive.id)}
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                      title="Открыть"
                    >
                      <Icon name="FolderOpen" size={16} className="text-primary" />
                    </button>
                    <button
                      onClick={() => handleDeleteArchive(archive.id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      title="Удалить"
                    >
                      <Icon name="Trash2" size={16} className="text-red-600" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 truncate">
                  {archive.name || 'Без названия'}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={14} />
                    <span>{archive.nodesCount} человек</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    <span>Обновлено {formatDate(archive.updatedAt)}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleLoadArchive(archive.id)}
                  className="w-full"
                  size="sm"
                >
                  <Icon name="Eye" size={14} className="mr-2" />
                  Открыть древо
                </Button>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={20} className="text-blue-600 mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-foreground mb-1">О сохранении древ</h3>
              <p className="text-sm text-muted-foreground">
                Все ваши древа автоматически сохраняются в облаке. Вы можете создавать несколько независимых 
                древ для разных ветвей семьи. Экспортируйте древо в JSON для создания резервной копии на компьютере.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
