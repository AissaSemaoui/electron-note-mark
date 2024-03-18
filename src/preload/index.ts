import { contextBridge, ipcRenderer } from 'electron';

import type {
  CreateNote,
  DeleteNote,
  GetAllNotes,
  GetNoteContent,
  SaveNoteContent,
} from '@shared/types';

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow');
}

try {
  contextBridge.exposeInMainWorld('context', {
    createNote: (...args: Parameters<CreateNote>) => ipcRenderer.invoke('createNote', ...args),
    getNoteContent: (...args: Parameters<GetNoteContent>) =>
      ipcRenderer.invoke('getNoteContent', ...args),
    getAllNotes: (...args: Parameters<GetAllNotes>) => ipcRenderer.invoke('getAllNotes', ...args),
    saveNoteContent: (...args: Parameters<SaveNoteContent>) =>
      ipcRenderer.invoke('saveNoteContent', ...args),
    deleteNote: (...args: Parameters<DeleteNote>) => ipcRenderer.invoke('deleteNote', ...args),
  });
} catch (error) {
  console.error(error);
}
