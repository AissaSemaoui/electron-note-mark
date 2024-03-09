export type NoteInfo = {
  title: string;
  updatedAt: number;
};

export type CreateNote = (filename: string, content: string) => void;
export type GetNoteContent = (filename: string) => Promise<string | null>;
export type GetAllNotes = () => Promise<NoteInfo[] | null>;
