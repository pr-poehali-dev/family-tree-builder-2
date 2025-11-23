import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import LandingPage from '@/components/LandingPage';
import OnboardingFlow from '@/components/OnboardingFlow';
import DashboardPage from '@/components/DashboardPage';
import HelpTooltip from '@/components/HelpTooltip';
import EmptyTreeState from '@/components/EmptyTreeState';
import TreeCanvas from '@/components/TreeCanvas';
import PersonInspector from '@/components/PersonInspector';
import { useTreeData } from '@/hooks/useTreeData';
import { useCanvasInteraction } from '@/hooks/useCanvasInteraction';
import { useOnboarding } from '@/hooks/useOnboarding';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

export default function Index() {
  const [currentView, setCurrentView] = useState<'landing' | 'onboarding' | 'tree' | 'dashboard'>('landing');
  const [showWelcome, setShowWelcome] = useState(true);

  const {
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
  } = useTreeData(currentView);

  const {
    transform,
    lastMousePos,
    setTransform,
    handleWheel,
    handleMouseDown,
    handleNodeDragStart,
    handleMouseMove,
    handleMouseUp
  } = useCanvasInteraction();

  const {
    onboardingStep,
    formData,
    setFormData,
    handleOnboardingBack,
    handleOnboardingSkip,
    handleOnboardingNext
  } = useOnboarding(nodes, setNodes, setEdges, setCurrentView);

  useKeyboardShortcuts(selectedId, setSelectedId, saveTreeToDatabase, setCurrentView);

  const handleStart = () => setCurrentView('onboarding');

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
        onBack={handleOnboardingBack}
        onSkip={handleOnboardingSkip}
      />
    );
  }

  if (currentView === 'dashboard') {
    return <DashboardPage onClose={() => setCurrentView('tree')} nodes={nodes} edges={edges} />;
  }

  return (
    <div className="h-screen w-full bg-background flex flex-col relative">
      {showSuccessToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in slide-in-from-top">
          <Icon name="Check" size={20} />
          <span className="font-medium">Древо сохранено</span>
        </div>
      )}

      <div className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentView('landing')}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Вернуться на главную"
          >
            <Icon name="Home" size={20} />
          </button>
          <div className="font-bold text-primary flex items-center gap-2">
            <Icon name="Share2" /> Семейные корни
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <button
            onClick={saveTreeToDatabase}
            disabled={isSaving}
            className="px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 text-xs md:text-sm font-medium flex items-center gap-2"
            title="Сохранить в базу данных"
          >
            <Icon name={isSaving ? "Loader2" : "Save"} size={16} className={isSaving ? "animate-spin" : ""} />
            <span className="hidden sm:inline">{isSaving ? 'Сохранение...' : 'Сохранить'}</span>
          </button>
          
          {!isSaving && nodes.length > 1 && (
            <span className="text-xs text-muted-foreground hidden lg:inline">
              Автосохранение
            </span>
          )}

          <div className="w-px h-6 bg-border mx-1 md:mx-2"></div>

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

          <div className="w-px h-6 bg-border mx-1 md:mx-2"></div>

          <button 
            onClick={() => setCurrentView('dashboard')}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Личный кабинет"
          >
            <Icon name="LayoutDashboard" size={20} />
          </button>
          <HelpTooltip />
          
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs cursor-pointer hover:bg-primary/20 transition-colors"
            title="Открыть профиль"
          >
            {nodes[0]?.firstName?.[0] || 'U'}
            {nodes[0]?.lastName?.[0] || ''}
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)] overflow-hidden relative bg-muted/30 select-none">
        {nodes.length === 1 && !selectedId && showWelcome && <EmptyTreeState onClose={() => setShowWelcome(false)} />}
        
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
          onMouseMove={(e) => handleMouseMove(e, nodes, setNodes)}
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