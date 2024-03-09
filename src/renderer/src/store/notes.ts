import { atom } from 'jotai'

import type { NoteInfo } from '@shared/types'
import { mockedNotes } from '@/lib/mock'

export const notesAtom = atom<NoteInfo[]>(mockedNotes)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteIndexAtom)

  if (typeof selectedNoteIndex !== 'number') {
    return null
  }

  const selectedNote = notes[selectedNoteIndex]

  return selectedNote
})

console.log(notesAtom, selectedNoteIndexAtom, selectedNoteAtom)
