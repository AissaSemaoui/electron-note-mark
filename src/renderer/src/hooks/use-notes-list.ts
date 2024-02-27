import { notesAtom, selectedNoteIndexAtom } from '@/store/notes'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = () => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const hanldeSelectNote = (title: string) => {
    const noteIndex = notes.findIndex((note) => note.title === title)

    if (noteIndex === -1 || noteIndex === selectedNoteIndex) {
      return
    }

    setSelectedNoteIndex(noteIndex)
  }

  return {
    notes,
    hanldeSelectNote
  }
}
