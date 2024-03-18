import { notesAtom, selectedNoteTitleAtom } from '@/store/notes';
import { useAtom, useAtomValue } from 'jotai';

export const useNotesList = () => {
  const notes = useAtomValue(notesAtom);

  const [selectedNoteTitle, setSelectedNoteTitle] = useAtom(selectedNoteTitleAtom);

  const hanldeSelectNote = (title: string) => {
    if (!title || title === selectedNoteTitle) {
      return;
    }

    setSelectedNoteTitle(title);
  };

  return {
    notes,
    hanldeSelectNote,
  };
};
