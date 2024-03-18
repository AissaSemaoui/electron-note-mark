import fs from 'fs-extra';

import { getRootDir } from './utils';

import type {
  CreateNote,
  GetAllNotes,
  GetNoteContent,
  NoteInfo,
  SaveNoteContent,
} from '@shared/types';
import { fileEncryption, fileExtension } from '@shared/configurations';

const rootDir = getRootDir();

console.log(rootDir);

export const createNote: CreateNote = async (filename: string, content: string) => {
  await fs.ensureDir(rootDir);

  await fs
    .writeFile(`${rootDir}/${filename}.${fileExtension}`, content, { encoding: fileEncryption })
    .catch(console.error);
};

export const getNoteContent: GetNoteContent = async (filename: string) => {
  const note = await fs
    .readFile(`${rootDir}/${filename}.${fileExtension}`, { encoding: fileEncryption })
    .catch(console.error);

  if (!note) return null;

  return note;
};

export const getNoteInfo = async (filename: string): Promise<NoteInfo> => {
  const noteStat = await fs.stat(`${rootDir}/${filename}`);

  return {
    title: filename.replace(/\.md$/, ''),
    updatedAt: noteStat.mtimeMs,
  };
};

export const saveNoteContent: SaveNoteContent = async (filename, content) => {
  const noteFile = `${rootDir}/${filename}.${fileExtension}`;

  await fs.writeFile(noteFile, content, { encoding: fileEncryption }).catch(console.error);
};

export const getAllNotes: GetAllNotes = async () => {
  const notes = await fs.readdir(rootDir).catch(console.error);

  if (!notes) return null;

  return await Promise.all(notes.map((n) => getNoteInfo(n)));
};
