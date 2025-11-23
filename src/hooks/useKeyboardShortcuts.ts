import { useEffect } from 'react';

export function useKeyboardShortcuts(
  selectedId: string | null,
  setSelectedId: (id: string | null) => void,
  saveTreeToDatabase: () => void,
  setCurrentView: (view: string) => void,
  deleteNode?: (id: string) => void
) {
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInputField = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
      
      if (e.key === 'Escape' && selectedId) {
        setSelectedId(null);
      }
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId && deleteNode && !isInputField) {
        e.preventDefault();
        deleteNode(selectedId);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        saveTreeToDatabase();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
        e.preventDefault();
        setCurrentView('dashboard');
      }
    };
    
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [selectedId, saveTreeToDatabase, setCurrentView, setSelectedId, deleteNode]);
}