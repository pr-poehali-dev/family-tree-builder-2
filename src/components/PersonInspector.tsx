import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { FamilyNode, getFullName } from './TreeCanvas';

interface PersonInspectorProps {
  selectedNode: FamilyNode | null;
  parents: FamilyNode[];
  onClose: () => void;
  onUpdateNode: (field: keyof FamilyNode, value: any) => void;
  onSelectNode: (id: string) => void;
  onDeleteNode: (id: string) => void;
}

export default function PersonInspector({
  selectedNode,
  parents,
  onClose,
  onUpdateNode,
  onSelectNode,
  onDeleteNode
}: PersonInspectorProps) {
  if (!selectedNode) return null;

  return (
    <>
      <div className="p-4 border-b flex justify-between items-center bg-muted/30">
        <h3 className="font-bold text-foreground">Карточка персоны</h3>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground p-1 hover:bg-muted rounded transition-colors"
        >
          <Icon name="X" size={20} />
        </button>
      </div>
      <div className="p-4 overflow-y-auto flex-1 space-y-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-muted border-2 border-dashed border-border rounded-full mx-auto mb-2 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
            <Icon name="User" size={40} className="text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Фамилия</Label>
            <Input
              className="mt-1"
              value={selectedNode.lastName}
              onChange={(e) => onUpdateNode('lastName', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Имя</Label>
              <Input
                className="mt-1"
                value={selectedNode.firstName}
                onChange={(e) => onUpdateNode('firstName', e.target.value)}
              />
            </div>
            <div>
              <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Отчество</Label>
              <Input
                className="mt-1"
                value={selectedNode.middleName}
                onChange={(e) => onUpdateNode('middleName', e.target.value)}
              />
            </div>
          </div>
          {selectedNode.gender === 'female' && (
            <div>
              <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Девичья фамилия
              </Label>
              <Input
                className="mt-1"
                value={selectedNode.maidenName}
                onChange={(e) => onUpdateNode('maidenName', e.target.value)}
              />
            </div>
          )}
          <div>
            <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Пол</Label>
            <Select value={selectedNode.gender} onValueChange={(value) => onUpdateNode('gender', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Мужской</SelectItem>
                <SelectItem value="female">Женский</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-px bg-border my-2"></div>

          <div className="space-y-3">
            <div>
              <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Дата рождения
              </Label>
              <Input
                className="mt-1"
                placeholder="ГГГГ"
                value={selectedNode.birthDate}
                onChange={(e) => onUpdateNode('birthDate', e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2 bg-primary/10 p-2 rounded-lg border border-primary/20">
              <Checkbox
                id="isAlive"
                checked={selectedNode.isAlive}
                onCheckedChange={(checked) => onUpdateNode('isAlive', checked)}
              />
              <Label htmlFor="isAlive" className="text-sm font-medium text-foreground cursor-pointer">
                Человек жив
              </Label>
            </div>
            
            <div>
              <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Место рождения
              </Label>
              <div className="relative mt-1">
                <Input
                  className="pl-8"
                  value={selectedNode.birthPlace}
                  onChange={(e) => onUpdateNode('birthPlace', e.target.value)}
                />
                <Icon name="Home" size={14} className="absolute left-2.5 top-2.5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {!selectedNode.isAlive && (
            <div className="space-y-3">
              <div>
                <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Дата смерти
                </Label>
                <Input
                  className="mt-1"
                  placeholder="—"
                  value={selectedNode.deathDate}
                  onChange={(e) => onUpdateNode('deathDate', e.target.value)}
                />
              </div>
              <div>
                <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Место смерти
                </Label>
                <div className="relative mt-1">
                  <Input
                    className="pl-8"
                    value={selectedNode.deathPlace}
                    onChange={(e) => onUpdateNode('deathPlace', e.target.value)}
                  />
                  <Icon name="Home" size={14} className="absolute left-2.5 top-2.5 text-muted-foreground" />
                </div>
              </div>
            </div>
          )}

          <div className="h-px bg-border my-2"></div>

          <div>
            <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Профессия</Label>
            <div className="relative mt-1">
              <Input
                className="pl-8"
                value={selectedNode.occupation}
                onChange={(e) => onUpdateNode('occupation', e.target.value)}
              />
              <Icon name="FileText" size={14} className="absolute left-2.5 top-2.5 text-muted-foreground" />
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                <Icon name="FileText" size={14} /> Биография
              </h4>
            </div>
            <Textarea
              className="w-full h-32 resize-none"
              value={selectedNode.bio || ''}
              onChange={(e) => onUpdateNode('bio', e.target.value)}
            />
          </div>

          {parents.length > 0 && (
            <div className="mt-2 p-3 bg-muted/50 rounded-lg border border-border">
              <span className="text-xs font-bold text-muted-foreground block mb-2">Родители</span>
              <div className="flex flex-wrap gap-2">
                {parents.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectNode(p.id)}
                    className="text-xs bg-white border hover:border-primary text-foreground px-2 py-1 rounded flex items-center gap-1 transition-colors shadow-sm"
                  >
                    <Icon name="User" size={10} /> {getFullName(p)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 border-t bg-muted/30 space-y-2">
        <Button className="w-full" onClick={onClose}>
          <Icon name="Save" size={16} className="mr-2" />
          Сохранить
        </Button>
        <Button className="w-full" variant="destructive" onClick={() => onDeleteNode(selectedNode.id)}>
          <Icon name="Trash2" size={16} className="mr-2" />
          Удалить
        </Button>
      </div>
    </>
  );
}