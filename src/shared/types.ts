export type NoteInfo = {
  title: string;
  updatedAt: number;
};

export type CreateNote = (filename: string, content: string) => Promise<void>;
export type GetNoteContent = (filename: string) => Promise<string | null>;
export type GetAllNotes = () => Promise<NoteInfo[] | null>;
export type SaveNoteContent = (filename: string, content: string) => Promise<void>;
