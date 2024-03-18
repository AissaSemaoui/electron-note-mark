import { atom } from 'jotai';

import type { NoteInfo } from '@shared/types';
import { unwrap } from 'jotai/utils';

const loadNotes = async () => {
  const notes = (await window.context.getAllNotes()) ?? [];

  return notes?.sort((p, n) => p.updatedAt - n.updatedAt);
};

const AsyncNoteAtom = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes());

export const refreshNotesAtom = atom(null, (_get, set) => {
  console.log('hello world', set);
  set(AsyncNoteAtom, loadNotes());
});

export const notesAtom = unwrap(AsyncNoteAtom, (prev) => prev ?? []);

export const selectedNoteTitleAtom = atom<string | null>(null);

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom);
  const selectedNoteTitle = get(selectedNoteTitleAtom);

  if (typeof selectedNoteTitle !== 'string') {
    return null;
  }

  const selectedNote = notes.find((n) => n.title === selectedNoteTitle);

  if (!selectedNote) {
    return null;
  }

  return selectedNote;
});

console.log(notesAtom, selectedNoteTitleAtom, selectedNoteAtom);
