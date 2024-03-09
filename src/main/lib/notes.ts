import fs from 'fs-extra';

import { getRootDir } from './utils';

import type { CreateNote, GetAllNotes, GetNoteContent, NoteInfo } from '@shared/types';

const rootDir = getRootDir();

console.log(rootDir);

export const createNote: CreateNote = async (filename: string, content: string) => {
  await fs.ensureDir(rootDir);

  fs.writeFile(`${rootDir}/${filename}.novel`, content, { encoding: 'utf-8' }).catch(console.error);
};

export const getNoteContent: GetNoteContent = async (filename: string) => {
  const note = await fs
    .readFile(`${rootDir}/${filename}.novel`, { encoding: 'utf-8' })
    .catch(console.error);

  if (!note) return null;

  return note;
};

export const getNoteInfo = async (filename: string): Promise<NoteInfo> => {
  const noteStat = await fs.stat(`${rootDir}/${filename}`);

  return {
    title: filename,
    updatedAt: noteStat.mtimeMs,
  };
};

export const getAllNotes: GetAllNotes = async () => {
  const notes = await fs.readdir(rootDir).catch(console.error);

  if (!notes) return null;

  return await Promise.all(notes.map((n) => getNoteInfo(n)));
};
