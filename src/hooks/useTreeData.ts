import { useState, useEffect, useRef } from 'react';
import { FamilyNode, Edge } from '@/components/TreeCanvas';

const INITIAL_NODES: FamilyNode[] = [
  {
    id: 'root',
    x: 400,
    y: 300,
    firstName: '',
    lastName: '',
    middleName: '',
    maidenName: '',
    gender: 'male',
    birthDate: '',
    birthPlace: '',
    deathDate: '',
    deathPlace: '',
    occupation: '',
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

export function useTreeData(currentView: string) {
  const [nodes, setNodes] = useState<FamilyNode[]>(INITIAL_NODES);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mode, setMode] = useState<'canvas' | 'timeline'>('canvas');
  const [currentTreeId, setCurrentTreeId] = useState<number | null>(null);
  const [userEmail] = useState<string>('demo@familytree.com');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [autoSaveTimer, setAutoSaveTimer] = useState<NodeJS.Timeout | null>(null);
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
    
    if (autoSaveTimer) {
      clearTimeout(autoSaveTimer);
    }
    
    const timer = setTimeout(() => {
      if (nodes.length > 1 && currentView === 'tree') {
        saveTreeToDatabase();
      }
    }, 5000);
    
    setAutoSaveTimer(timer);
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [nodes, edges, currentView]);

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
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 3000);
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
    
    const node = nodes.find(n => n.id === id);
    const nodeName = node ? `${node.firstName} ${node.lastName}`.trim() || 'этого человека' : 'этого человека';
    
    if (!window.confirm(`Вы уверены, что хотите удалить ${nodeName} из древа?`)) {
      return;
    }
    
    setNodes((prev) => prev.filter((n) => n.id !== id));
    setEdges((prev) => prev.filter((e) => e.source !== id && e.target !== id));
    setSelectedId(null);
  };

  const updateSelectedNode = (field: keyof FamilyNode, value: any) =>
    setNodes(nodes.map((n) => (n.id === selectedId ? { ...n, [field]: value } : n)));

  const handleExport = () => {
    const data = { nodes, edges };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'familytree.json';
    a.click();
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

  const selectedNode = nodes.find((n) => n.id === selectedId);
  const parentIds = selectedNode
    ? edges.filter((e) => e.target === selectedNode.id && e.type !== 'spouse').map((e) => e.source)
    : [];
  const parents = nodes.filter((n) => parentIds.includes(n.id));

  return {
    nodes,
    edges,
    selectedId,
    mode,
    isSaving,
    showSuccessToast,
    selectedNode,
    parents,
    fileInputRef,
    setNodes,
    setEdges,
    setSelectedId,
    setMode,
    addRelative,
    deleteNode,
    updateSelectedNode,
    saveTreeToDatabase,
    handleExport,
    handleImport
  };
}