import { refreshNotesAtom } from '@/store/notes';
import { useSetAtom } from 'jotai';

export const useRefreshNotes = () => {
  const refresh = useSetAtom(refreshNotesAtom);

  return refresh;
};
