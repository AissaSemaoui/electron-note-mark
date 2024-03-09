import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

import Editor from '@/components/novel-editor';

import { useActiveNote } from '@/hooks/use-active-note';

interface ContentViewProps {
  className?: string;
}

const ContentView = ({ className }: ContentViewProps) => {
  const activeNote = useActiveNote();

  if (!activeNote)
    return (
      <section className="p-8">
        <h1>No note is selected!</h1>
      </section>
    );

  return (
    <article className={twMerge('flex flex-1 flex-col h-max', className)}>
      <header className="mb-4 space-y-1 md:mb-8">
        <h1 className="text-2xl">{activeNote.title}</h1>
        <p className="text-sm text-muted-foreground">{dayjs(activeNote.updatedAt).format('LLL')}</p>
      </header>

      <section className="flex-1">
        <Editor />
      </section>
    </article>
  );
};

export default ContentView;
