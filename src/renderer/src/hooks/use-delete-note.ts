export const useDeleteNote = () => {
  return async (filename?: string) => {
    if (!filename) return;

    await window.context.deleteNote(filename);
  };
};
