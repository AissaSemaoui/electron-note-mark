import { CreateNote, GetAllNotes, GetNoteContent, SaveNoteContent } from '@shared/types';

declare global {
  interface Window {
    context: {
      createNote: CreateNote;
      getNoteContent: GetNoteContent;
      getAllNotes: GetAllNotes;
      saveNoteContent: SaveNoteContent;
    };
  }
}
