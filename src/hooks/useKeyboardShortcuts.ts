import { useEffect } from 'react';

export function useKeyboardShortcuts(
  selectedId: string | null,
  setSelectedId: (id: string | null) => void,
  saveTreeToDatabase: () => void,
  setCurrentView: (view: string) => void
) {
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedId) {
        setSelectedId(null);
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
  }, [selectedId, saveTreeToDatabase, setCurrentView, setSelectedId]);
}
