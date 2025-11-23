import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import LandingPage from '@/components/LandingPage';
import OnboardingFlow from '@/components/OnboardingFlow';
import DashboardPage from '@/components/DashboardPage';
import TreeCanvas, { FamilyNode, Edge } from '@/components/TreeCanvas';
import PersonInspector from '@/components/PersonInspector';

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

const API_URLS = {
  saveTree: 'https://functions.poehali.dev/aeece77d-47a7-4370-aaaf-cd7f3f0c85a3',
  loadTree: 'https://functions.poehali.dev/b34d5849-b70f-4939-be6a-ca52bbbf3b71',
  listTrees: 'https://functions.poehali.dev/37b2ca54-22fb-4d55-a1eb-6415bea1e80f'
};

export default function Index() {
  const [currentView, setCurrentView] = useState<'landing' | 'onboarding' | 'tree' | 'dashboard'>('landing');
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [nodes, setNodes] = useState<FamilyNode[]>(INITIAL_NODES);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  const [isDraggingNode, setIsDraggingNode] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [dragNodeId, setDragNodeId] = useState<string | null>(null);
  const [mode, setMode] = useState<'canvas' | 'timeline'>('canvas');
  const [currentTreeId, setCurrentTreeId] = useState<number | null>(null);
  const [userEmail, setUserEmail] = useState<string>('demo@familytree.com');
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    fatherName: '',
    motherName: ''
  });

  const lastMousePos = useRef({ x: 0, y: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedNodes = localStorage.getItem('familyTree_nodes');
    const savedEdges = localStorage.getItem('familyTree_edges');
    const savedTreeId = localStorage.getItem('familyTree_treeId');
    
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
    if (savedTreeId) {
      setCurrentTreeId(parseInt(savedTreeId));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('familyTree_nodes', JSON.stringify(nodes));
    localStorage.setItem('familyTree_edges', JSON.stringify(edges));
  }, [nodes, edges]);

  const saveTreeToDatabase = async () => {
    setIsSaving(true);
    try {
      const response = await fetch(API_URLS.saveTree, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Email': userEmail
        },
        body: JSON.stringify({
          tree_id: currentTreeId,
          user_email: userEmail,
          title: 'Моё семейное древо',
          nodes,
          edges
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setCurrentTreeId(data.tree_id);
        localStorage.setItem('familyTree_treeId', data.tree_id.toString());
        alert('Древо успешно сохранено в базе данных!');
      } else {
        alert('Ошибка сохранения: ' + data.error);
      }
    } catch (error) {
      console.error('Error saving tree:', error);
      alert('Ошибка при сохранении древа');
    } finally {
      setIsSaving(false);
    }
  };

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

  const parentIds = selectedNode
    ? edges.filter((e) => e.target === selectedNode.id && e.type !== 'spouse').map((e) => e.source)
    : [];
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
    return <LandingPage onStart={handleStart} />;
  }

  if (currentView === 'onboarding') {
    return (
      <OnboardingFlow
        step={onboardingStep}
        formData={formData}
        onFormDataChange={setFormData}
        onNext={handleOnboardingNext}
      />
    );
  }

  if (currentView === 'dashboard') {
    return <DashboardPage onClose={() => setCurrentView('tree')} />;
  }

  return (
    <div className="h-screen w-full bg-background flex flex-col">
      <div className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
        <div className="font-bold text-primary flex items-center gap-2">
          <Icon name="Share2" /> Семейные корни
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={saveTreeToDatabase}
            disabled={isSaving}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 text-sm font-medium flex items-center gap-2"
            title="Сохранить в базу данных"
          >
            <Icon name="Save" size={16} />
            {isSaving ? 'Сохранение...' : 'Сохранить'}
          </button>

          <div className="w-px h-6 bg-border mx-2"></div>

          <button
            onClick={handleExport}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Экспорт в JSON"
          >
            <Icon name="Download" size={20} />
          </button>

          <input type="file" ref={fileInputRef} onChange={handleImport} accept=".json" className="hidden" />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Импорт из JSON"
          >
            <Icon name="Upload" size={20} />
          </button>

          <div className="w-px h-6 bg-border mx-2"></div>

          <button 
            onClick={() => setCurrentView('dashboard')}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Личный кабинет"
          >
            <Icon name="LayoutDashboard" size={20} />
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            <Icon name="Settings" size={20} />
          </button>
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs cursor-pointer hover:bg-primary/20 transition-colors">
            {nodes[0]?.firstName?.[0]}
            {nodes[0]?.lastName?.[0]}
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)] overflow-hidden relative bg-muted/30 select-none">
        <TreeCanvas
          nodes={nodes}
          edges={edges}
          selectedId={selectedId}
          transform={transform}
          mode={mode}
          onSetMode={setMode}
          onSetTransform={setTransform}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onNodeDragStart={handleNodeDragStart}
          onSelectNode={setSelectedId}
          onAddRelative={addRelative}
          lastMousePos={lastMousePos}
        />

        {mode === 'canvas' && (
          <div
            className={`fixed md:relative inset-y-0 right-0 w-80 md:w-96 bg-white shadow-2xl md:shadow-xl border-l border-border flex flex-col transition-transform duration-300 z-40 transform ${
              selectedId ? 'translate-x-0' : 'translate-x-full md:mr-[-24rem]'
            }`}
          >
            <PersonInspector
              selectedNode={selectedNode || null}
              parents={parents}
              onClose={() => setSelectedId(null)}
              onUpdateNode={updateSelectedNode}
              onSelectNode={setSelectedId}
              onDeleteNode={deleteNode}
            />
          </div>
        )}
      </div>
    </div>
  );
}