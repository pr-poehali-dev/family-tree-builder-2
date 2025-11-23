import React from 'react';
import TreeCanvas from '@/components/TreeCanvas';
import PersonInspector from '@/components/PersonInspector';
import DemoPageHeader from '@/components/DemoPageHeader';
import { useDemoTreeInteraction } from '@/hooks/useDemoTreeInteraction';
import { DEMO_NODES, DEMO_EDGES } from '@/data/romanovDynastyData';

interface DemoPageProps {
  onClose: () => void;
}

export default function DemoPage({ onClose }: DemoPageProps) {
  const {
    selectedId,
    setSelectedId,
    mode,
    setMode,
    transform,
    setTransform,
    lastMousePos,
    handleWheel,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleNodeDragStart,
    selectedNode,
    parents
  } = useDemoTreeInteraction(DEMO_NODES, DEMO_EDGES);

  return (
    <div className="h-screen w-full bg-background flex flex-col relative">
      <DemoPageHeader onClose={onClose} />

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 relative">
          <TreeCanvas
            nodes={DEMO_NODES}
            edges={DEMO_EDGES}
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
            onAddRelative={() => {}}
            lastMousePos={lastMousePos}
          />
        </div>

        {selectedId && selectedNode && (
          <PersonInspector
            node={selectedNode}
            parents={parents}
            onChange={() => {}}
            onClose={() => setSelectedId(null)}
            onDelete={() => {}}
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
}
