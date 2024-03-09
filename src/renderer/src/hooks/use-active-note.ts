import { selectedNoteAtom } from '@/store/notes'
import { useAtomValue } from 'jotai'

export const useActiveNote = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  return selectedNote
}
