import { selectedNoteAtom } from '@/store/notes'
import { useAtomValue } from 'jotai'

export const useSelectedNote = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  return selectedNote
}
