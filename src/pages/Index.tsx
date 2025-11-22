import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface FamilyNode {
  id: string;
  x: number;
  y: number;
  firstName: string;
  lastName: string;
  middleName: string;
  maidenName: string;
  gender: 'male' | 'female';
  birthDate: string;
  birthPlace: string;
  deathDate: string;
  deathPlace: string;
  occupation: string;
  isAlive: boolean;
  relation: string;
  bio: string;
  historyContext: string;
}

interface Edge {
  id: string;
  source: string;
  target: string;
  type?: 'spouse';
}

const INITIAL_NODES: FamilyNode[] = [
  {
    id: 'root',
    x: 400,
    y: 300,
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    maidenName: '',
    gender: 'male',
    birthDate: '1990',
    birthPlace: 'Москва',
    deathDate: '',
    deathPlace: '',
    occupation: 'Программист',
    isAlive: true,
    relation: 'self',
    bio: '',
    historyContext: ''
  }
];

const getFullName = (node: FamilyNode | null): string => {
  if (!node) return '';
  return `${node.lastName || ''} ${node.firstName || ''} ${node.middleName || ''}`.trim();
};

export default function Index() {
  const [currentView, setCurrentView] = useState<'landing' | 'onboarding' | 'tree'>('landing');
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [nodes, setNodes] = useState<FamilyNode[]>(INITIAL_NODES);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  const [isDraggingNode, setIsDraggingNode] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [dragNodeId, setDragNodeId] = useState<string | null>(null);
  const [mode, setMode] = useState<'canvas' | 'timeline'>('canvas');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    fatherName: '',
    motherName: ''
  });

  const lastMousePos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedNodes = localStorage.getItem('familyTree_nodes');
    const savedEdges = localStorage.getItem('familyTree_edges');
    if (savedNodes) {
      try {
        setNodes(JSON.parse(savedNodes));
      } catch (e) {
        console.error('Error loading nodes', e);
      }
    }
    if (savedEdges) {
      try {
        setEdges(JSON.parse(savedEdges));
      } catch (e) {
        console.error('Error loading edges', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('familyTree_nodes', JSON.stringify(nodes));
    localStorage.setItem('familyTree_edges', JSON.stringify(edges));
  }, [nodes, edges]);

  const handleStart = () => setCurrentView('onboarding');

  const handleOnboardingNext = () => {
    if (onboardingStep === 3) {
      const updatedRoot: FamilyNode = {
        ...nodes[0],
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender as 'male' | 'female'
      };

      const newNodes = [updatedRoot];
      const newEdges: Edge[] = [];

      if (formData.fatherName) {
        const fatherId = 'father';
        newNodes.push({
          ...INITIAL_NODES[0],
          id: fatherId,
          x: 250,
          y: 150,
          firstName: formData.fatherName,
          lastName: formData.lastName,
          gender: 'male',
          relation: 'parent'
        });
        newEdges.push({ id: 'e1', source: fatherId, target: 'root' });
      }

      if (formData.motherName) {
        const motherId = 'mother';
        newNodes.push({
          ...INITIAL_NODES[0],
          id: motherId,
          x: 550,
          y: 150,
          firstName: formData.motherName,
          lastName: formData.lastName + 'а',
          gender: 'female',
          relation: 'parent'
        });
        newEdges.push({ id: 'e2', source: motherId, target: 'root' });
      }

      if (formData.fatherName && formData.motherName) {
        newEdges.push({ id: 'e3', source: 'father', target: 'mother', type: 'spouse' });
      }

      setNodes(newNodes);
      setEdges(newEdges);
      setCurrentView('tree');
    } else {
      setOnboardingStep(onboardingStep + 1);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    const zoomSensitivity = 0.001;
    const newK = Math.min(Math.max(0.4, transform.k - e.deltaY * zoomSensitivity), 2.5);
    setTransform((prev) => ({ ...prev, k: newK }));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragNodeId) {
      setIsPanning(true);
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleNodeDragStart = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setIsDraggingNode(true);
    setDragNodeId(id);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    if (isDraggingNode && dragNodeId) {
      setNodes((prev) =>
        prev.map((n) =>
          n.id === dragNodeId ? { ...n, x: n.x + deltaX / transform.k, y: n.y + deltaY / transform.k } : n
        )
      );
    } else if (isPanning) {
      setTransform((prev) => ({ ...prev, x: prev.x + deltaX, y: prev.y + deltaY }));
    }
  };

  const handleMouseUp = () => {
    setIsDraggingNode(false);
    setDragNodeId(null);
    setIsPanning(false);
  };

  const addRelative = (sourceId: string, type: string) => {
    const sourceNode = nodes.find((n) => n.id === sourceId);
    if (!sourceNode) return;

    const newId = Date.now().toString();
    let newX = sourceNode.x;
    let newY = sourceNode.y;
    const newLastName = sourceNode.lastName;

    if (type === 'parent') {
      newY -= 180;
      newX += Math.random() * 60 - 30;
    } else if (type === 'child') {
      newY += 180;
      newX += Math.random() * 60 - 30;
    } else if (type === 'sibling') {
      newX -= 220;
    } else if (type === 'spouse') {
      newX += 220;
    }

    let newGender: 'male' | 'female' = sourceNode.gender;
    if (type === 'spouse') newGender = sourceNode.gender === 'male' ? 'female' : 'male';
    else if (type === 'parent') newGender = 'male';

    const newNode: FamilyNode = {
      id: newId,
      x: newX,
      y: newY,
      firstName: '',
      lastName: newLastName,
      middleName: '',
      maidenName: '',
      gender: newGender,
      birthDate: '',
      birthPlace: '',
      deathDate: '',
      deathPlace: '',
      occupation: '',
      relation: type,
      bio: '',
      historyContext: '',
      isAlive: true
    };

    setNodes((prev) => [...prev, newNode]);

    const newEdgesList: Edge[] = [];

    if (type === 'sibling') {
      const parentEdges = edges.filter((e) => e.target === sourceId);
      if (parentEdges.length > 0) {
        parentEdges.forEach((pe) =>
          newEdgesList.push({ id: `e-${Date.now()}-${pe.source}`, source: pe.source, target: newId })
        );
      }
    } else if (type === 'spouse') {
      newEdgesList.push({ id: `e-${Date.now()}`, source: sourceId, target: newId, type: 'spouse' });
    } else {
      newEdgesList.push({
        id: `e-${Date.now()}`,
        source: type === 'child' ? sourceId : newId,
        target: type === 'child' ? newId : sourceId
      });

      if (type === 'parent') {
        const otherParents = edges.filter((e) => e.target === sourceId).map((e) => e.source);
        if (otherParents.length > 0) {
          const spouseId = otherParents[0];
          newEdgesList.push({ id: `e-spouse-${Date.now()}`, source: spouseId, target: newId, type: 'spouse' });
        }
      }
    }

    setEdges((prev) => [...prev, ...newEdgesList]);
    setSelectedId(newId);
  };

  const deleteNode = (id: string) => {
    if (id === 'root') {
      alert('Нельзя удалить корневую персону!');
      return;
    }
    setNodes((prev) => prev.filter((n) => n.id !== id));
    setEdges((prev) => prev.filter((e) => e.source !== id && e.target !== id));
    setSelectedId(null);
  };

  const selectedNode = nodes.find((n) => n.id === selectedId);
  const updateSelectedNode = (field: keyof FamilyNode, value: any) =>
    setNodes(nodes.map((n) => (n.id === selectedId ? { ...n, [field]: value } : n)));

  const parentIds = selectedNode ? edges.filter((e) => e.target === selectedNode.id && e.type !== 'spouse').map((e) => e.source) : [];
  const parents = nodes.filter((n) => parentIds.includes(n.id));

  const handleExport = () => {
    const data = { nodes, edges };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'family_tree.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (data.nodes && Array.isArray(data.nodes)) setNodes(data.nodes);
        if (data.edges && Array.isArray(data.edges)) setEdges(data.edges);
      } catch (error) {
        alert('Ошибка при чтении файла: Неверный формат JSON');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  if (currentView === 'landing') {
    return (
      <div className="min-h-screen bg-background overflow-y-auto">
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary font-bold text-xl">
              <Icon name="Share2" />
              <span className="hidden sm:inline">Семейные корни</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
              <a href="#features" className="hover:text-primary transition-colors">
                Возможности
              </a>
              <a href="#science" className="hover:text-primary transition-colors">
                Наука
              </a>
            </div>
            <Button onClick={handleStart}>Начать бесплатно</Button>
          </div>
        </header>

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Сохрани историю <span className="text-primary">своего рода</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Интерактивная платформа для создания генеалогического древа. Безопасное хранение данных и{' '}
                <span className="text-accent font-bold inline-flex items-center gap-1">
                  <Icon name="Sparkles" size={16} /> AI-помощник
                </span>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleStart} className="text-lg px-8 py-6" size="lg">
                  Создать древо
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6" size="lg">
                  <Icon name="Search" className="mr-2" />
                  Пример древа
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl border border-primary/20">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              ></div>
              <div className="relative z-10 text-center scale-90 sm:scale-100">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 shadow-lg flex items-center justify-center border-4 border-primary">
                  <Icon name="User" size={40} className="text-foreground" />
                </div>
                <div className="w-1 h-16 bg-primary/60 mx-auto mb-4"></div>
                <div className="flex gap-12 justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-400">
                    <Icon name="User" size={24} className="text-muted-foreground" />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-pink-400">
                    <Icon name="User" size={24} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (currentView === 'onboarding') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${onboardingStep * 33.3}%` }}
            ></div>
          </div>

          <div className="mb-8 mt-4 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              {onboardingStep === 1 && 'Давайте знакомиться!'}
              {onboardingStep === 2 && 'Ваши родители'}
              {onboardingStep === 3 && 'Готово!'}
            </h2>
          </div>

          <div className="space-y-4">
            {onboardingStep === 1 && (
              <>
                <div>
                  <Label>Ваше Имя</Label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Иван"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Ваша Фамилия</Label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Иванов"
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setFormData({ ...formData, gender: 'male' })}
                    className={`flex-1 p-3 rounded-lg border transition-all ${
                      formData.gender === 'male'
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border hover:bg-muted'
                    }`}
                  >
                    Мужской
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, gender: 'female' })}
                    className={`flex-1 p-3 rounded-lg border transition-all ${
                      formData.gender === 'female'
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border hover:bg-muted'
                    }`}
                  >
                    Женский
                  </button>
                </div>
              </>
            )}

            {onboardingStep === 2 && (
              <>
                <div>
                  <Label>Имя Отца</Label>
                  <Input
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    placeholder="Петр"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Имя Матери</Label>
                  <Input
                    value={formData.motherName}
                    onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                    placeholder="Мария"
                    className="mt-1"
                  />
                </div>
              </>
            )}

            {onboardingStep === 3 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <p className="text-muted-foreground">
                  Базовая информация собрана. Теперь перейдем к самому интересному — вашему древу!
                </p>
              </div>
            )}

            <Button onClick={handleOnboardingNext} className="w-full mt-6">
              {onboardingStep === 3 ? 'Перейти в кабинет' : 'Далее'} <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-background flex flex-col">
      <div className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
        <div className="font-bold text-primary flex items-center gap-2">
          <Icon name="Share2" /> Семейные корни
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleExport}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Сохранить в файл"
          >
            <Icon name="Download" size={20} />
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImport}
            accept=".json"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Загрузить из файла"
          >
            <Icon name="Upload" size={20} />
          </button>

          <div className="w-px h-6 bg-border mx-2"></div>

          <button className="text-muted-foreground hover:text-primary transition-colors">
            <Icon name="Home" size={20} />
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            <Icon name="Settings" size={20} />
          </button>
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
            {nodes[0]?.firstName?.[0]}
            {nodes[0]?.lastName?.[0]}
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)] overflow-hidden relative bg-muted/30 select-none">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur rounded-full shadow-lg p-1 flex border border-border">
          <button
            onClick={() => setMode('canvas')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
              mode === 'canvas' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:bg-muted'
            }`}
          >
            <Icon name="Share2" size={16} /> Древо
          </button>
          <button
            onClick={() => setMode('timeline')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
              mode === 'timeline' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:bg-muted'
            }`}
          >
            <Icon name="Calendar" size={16} /> Лента
          </button>
        </div>

        {mode === 'canvas' ? (
          <>
            <div className="absolute top-4 left-4 z-20 bg-white p-2 rounded-lg shadow-md flex flex-col gap-2 border border-border">
              <button
                className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setTransform((t) => ({ ...t, k: Math.min(t.k + 0.2, 2.5) }))}
              >
                <Icon name="ZoomIn" size={20} />
              </button>
              <button
                className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setTransform((t) => ({ ...t, k: Math.max(t.k - 0.2, 0.4) }))}
              >
                <Icon name="ZoomOut" size={20} />
              </button>
              <div className="h-px bg-border my-1"></div>
              <button
                className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setTransform({ x: 0, y: 0, k: 1 })}
              >
                <Icon name="Move" size={20} />
              </button>
            </div>

            <div
              ref={containerRef}
              className="flex-1 relative cursor-default overflow-hidden"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                style={{
                  transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`,
                  transformOrigin: '0 0',
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none'
                }}
              >
                <div className="absolute inset-0 w-full h-full pointer-events-auto">
                  <svg className="absolute top-0 left-0 w-[5000px] h-[5000px] pointer-events-none overflow-visible">
                    {edges.map((edge) => {
                      const s = nodes.find((n) => n.id === edge.source);
                      const t = nodes.find((n) => n.id === edge.target);
                      if (!s || !t) return null;
                      const isHorizontal = edge.type === 'spouse' || Math.abs(s.y - t.y) < 50;
                      let start, end;
                      if (isHorizontal) {
                        const leftNode = s.x < t.x ? s : t;
                        const rightNode = s.x < t.x ? t : s;
                        start = { x: leftNode.x + 192, y: leftNode.y + 40 };
                        end = { x: rightNode.x, y: rightNode.y + 40 };
                      } else {
                        start = { x: s.x + 96, y: s.y + 70 };
                        end = { x: t.x + 96, y: t.y };
                      }

                      if (isHorizontal) {
                        return (
                          <path
                            key={edge.id}
                            d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
                            fill="none"
                            stroke="hsl(var(--destructive))"
                            strokeWidth="1.5"
                            strokeDasharray="5,5"
                            className="pointer-events-none"
                          />
                        );
                      } else {
                        const deltaY = end.y - start.y;
                        const cp1 = { x: start.x, y: start.y + deltaY / 2 };
                        const cp2 = { x: end.x, y: end.y - deltaY / 2 };
                        return (
                          <path
                            key={edge.id}
                            d={`M ${start.x} ${start.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${end.x} ${end.y}`}
                            fill="none"
                            stroke="hsl(var(--muted-foreground))"
                            strokeWidth="2"
                            className="pointer-events-none"
                          />
                        );
                      }
                    })}
                  </svg>
                  {nodes.map((node) => {
                    const isMale = node.gender === 'male';
                    const borderColor = isMale ? 'border-blue-400' : 'border-pink-400';
                    const bgColor = isMale ? 'bg-blue-50' : 'bg-pink-50';
                    const iconColor = isMale ? 'text-blue-400' : 'text-pink-400';
                    const selected = selectedId === node.id;

                    return (
                      <div
                        key={node.id}
                        className="absolute w-48 transition-shadow duration-200 group"
                        style={{
                          left: node.x,
                          top: node.y,
                          zIndex: selected ? 50 : 10,
                          cursor: 'grab'
                        }}
                        onMouseDown={(e) => handleNodeDragStart(e, node.id)}
                        onMouseUp={(e) => {
                          const startPos = lastMousePos.current;
                          const dist = Math.sqrt(
                            Math.pow(e.clientX - startPos.x, 2) + Math.pow(e.clientY - startPos.y, 2)
                          );
                          if (dist < 5) {
                            setSelectedId(node.id);
                          }
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          className={`relative bg-white rounded-lg shadow-md p-3 border-l-4 ${borderColor} ${
                            selected ? 'ring-2 ring-primary shadow-xl' : ''
                          }`}
                        >
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <button
                              title="Добавить родителя"
                              className="bg-foreground text-background rounded-full w-6 h-6 flex items-center justify-center hover:bg-primary shadow-lg hover:scale-110 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                addRelative(node.id, 'parent');
                              }}
                            >
                              <Icon name="Plus" size={14} />
                            </button>
                          </div>
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <button
                              title="Добавить ребенка"
                              className="bg-foreground text-background rounded-full w-6 h-6 flex items-center justify-center hover:bg-primary shadow-lg hover:scale-110 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                addRelative(node.id, 'child');
                              }}
                            >
                              <Icon name="Plus" size={14} />
                            </button>
                          </div>
                          <div className="absolute top-1/2 -left-3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <button
                              title="Добавить брата/сестру"
                              className="bg-foreground text-background rounded-full w-6 h-6 flex items-center justify-center hover:bg-primary shadow-lg hover:scale-110 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                addRelative(node.id, 'sibling');
                              }}
                            >
                              <Icon name="Users" size={12} />
                            </button>
                          </div>
                          <div className="absolute top-1/2 -right-3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <button
                              title="Добавить супруга"
                              className="bg-rose-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-rose-600 shadow-lg hover:scale-110 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                addRelative(node.id, 'spouse');
                              }}
                            >
                              <Icon name="Heart" size={12} />
                            </button>
                          </div>

                          <div className="flex items-center gap-3 select-none">
                            <div
                              className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center ${iconColor} shrink-0`}
                            >
                              <Icon name="User" size={20} />
                            </div>
                            <div className="overflow-hidden w-full">
                              <h4 className="font-bold text-foreground text-sm truncate leading-tight">
                                {node.firstName} {node.lastName}
                              </h4>
                              {node.maidenName && (
                                <p className="text-[10px] text-muted-foreground truncate">({node.maidenName})</p>
                              )}
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {node.birthDate || '????'} - {node.isAlive ? '' : node.deathDate || '...'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 overflow-y-auto bg-background">
            <div className="p-8 max-w-3xl mx-auto">
              <div className="relative border-l-4 border-primary/30 ml-4 space-y-8 pb-12">
                {[...nodes]
                  .filter((n) => n.birthDate && !isNaN(parseInt(n.birthDate)))
                  .sort((a, b) => parseInt(a.birthDate) - parseInt(b.birthDate))
                  .map((node) => (
                    <div key={node.id} className="relative pl-8">
                      <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-white border-4 border-primary"></div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex justify-between">
                        <div>
                          <h3 className="font-bold text-foreground">{getFullName(node)}</h3>
                          <span className="text-sm text-primary font-bold">{node.birthDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {mode === 'canvas' && (
          <div
            className={`fixed md:relative inset-y-0 right-0 w-80 md:w-96 bg-white shadow-2xl md:shadow-xl border-l border-border flex flex-col transition-transform duration-300 z-40 transform ${
              selectedId ? 'translate-x-0' : 'translate-x-full md:mr-[-24rem]'
            }`}
          >
            {selectedNode && (
              <>
                <div className="p-4 border-b flex justify-between items-center bg-muted/30">
                  <h3 className="font-bold text-foreground">Карточка персоны</h3>
                  <button
                    onClick={() => setSelectedId(null)}
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
                      <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Фамилия
                      </Label>
                      <Input
                        className="mt-1"
                        value={selectedNode.lastName}
                        onChange={(e) => updateSelectedNode('lastName', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Имя</Label>
                        <Input
                          className="mt-1"
                          value={selectedNode.firstName}
                          onChange={(e) => updateSelectedNode('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Отчество
                        </Label>
                        <Input
                          className="mt-1"
                          value={selectedNode.middleName}
                          onChange={(e) => updateSelectedNode('middleName', e.target.value)}
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
                          onChange={(e) => updateSelectedNode('maidenName', e.target.value)}
                        />
                      </div>
                    )}
                    <div>
                      <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Пол</Label>
                      <Select
                        value={selectedNode.gender}
                        onValueChange={(value) => updateSelectedNode('gender', value)}
                      >
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
                          onChange={(e) => updateSelectedNode('birthDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Место рождения
                        </Label>
                        <div className="relative mt-1">
                          <Input
                            className="pl-8"
                            value={selectedNode.birthPlace}
                            onChange={(e) => updateSelectedNode('birthPlace', e.target.value)}
                          />
                          <Icon name="Home" size={14} className="absolute left-2.5 top-2.5 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-primary/10 p-2 rounded-lg border border-primary/20">
                      <Checkbox
                        id="isAlive"
                        checked={selectedNode.isAlive}
                        onCheckedChange={(checked) => updateSelectedNode('isAlive', checked)}
                      />
                      <Label htmlFor="isAlive" className="text-sm font-medium text-foreground cursor-pointer">
                        Человек жив
                      </Label>
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
                            onChange={(e) => updateSelectedNode('deathDate', e.target.value)}
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
                              onChange={(e) => updateSelectedNode('deathPlace', e.target.value)}
                            />
                            <Icon name="Home" size={14} className="absolute left-2.5 top-2.5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="h-px bg-border my-2"></div>

                    <div>
                      <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Профессия
                      </Label>
                      <div className="relative mt-1">
                        <Input
                          className="pl-8"
                          value={selectedNode.occupation}
                          onChange={(e) => updateSelectedNode('occupation', e.target.value)}
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
                        onChange={(e) => updateSelectedNode('bio', e.target.value)}
                      />
                    </div>

                    {parents.length > 0 && (
                      <div className="mt-2 p-3 bg-muted/50 rounded-lg border border-border">
                        <span className="text-xs font-bold text-muted-foreground block mb-2">Родители</span>
                        <div className="flex flex-wrap gap-2">
                          {parents.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => setSelectedId(p.id)}
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
                  <Button className="w-full" onClick={() => setSelectedId(null)}>
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить
                  </Button>
                  <Button className="w-full" variant="destructive" onClick={() => deleteNode(selectedId!)}>
                    <Icon name="Trash2" size={16} className="mr-2" />
                    Удалить
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
