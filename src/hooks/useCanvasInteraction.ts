import { useState, useRef } from 'react';

export function useCanvasInteraction() {
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  const [isDraggingNode, setIsDraggingNode] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [dragNodeId, setDragNodeId] = useState<string | null>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent, nodes: any[], setNodes: (fn: (prev: any[]) => any[]) => void) => {
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    if (isDraggingNode && dragNodeId) {
      setNodes((prev: any[]) =>
        prev.map((n: any) =>
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

  return {
    transform,
    isDraggingNode,
    isPanning,
    dragNodeId,
    lastMousePos,
    setTransform,
    handleWheel,
    handleMouseDown,
    handleNodeDragStart,
    handleMouseMove,
    handleMouseUp
  };
}
