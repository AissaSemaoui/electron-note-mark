import clsx from 'clsx';
import { FilePlus2Icon, RefreshCwIcon, Trash2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import NotePreviewList from '@/components/note-preview-list';
import { CreateNoteModal } from '@/components/create-note-modal';
import { DeleteNoteConfirm } from '@/components/delete-note-confirm';

import { useActiveNote } from '@/hooks/use-active-note';
import { useNotesList } from '@/hooks/use-notes-list';
import { useRefreshNotes } from '@/hooks/use-refresh-notes';
import { useDeleteNote } from '@/hooks/use-delete-note';

const Sidebar = ({ className }: { className?: string }) => {
  const { notes, hanldeSelectNote } = useNotesList();
  const refresh = useRefreshNotes();
  const deleteNote = useDeleteNote();

  const activeNote = useActiveNote();

  return (
    <aside
      className={clsx(
        'w-80 border-r border-border bg-card p-4 pt-12 text-card-foreground h-screen overflow-auto',
        className,
      )}
    >
      <div className="flex items-center justify-between w-full mb-4">
        <Button variant="outline" size="icon" onClick={refresh} className="group">
          <RefreshCwIcon className="w-4 h-4 group-active:animate-[spin_1s_forwards]" />
        </Button>

        <div className="space-x-2">
          <CreateNoteModal onSuccess={refresh}>
            <Button variant="outline" size="icon">
              <FilePlus2Icon className="w-4 h-4" />
            </Button>
          </CreateNoteModal>

          <DeleteNoteConfirm onConfirm={() => deleteNote(activeNote?.title)} onSuccess={refresh}>
            <Button variant="destructive" size="icon">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </DeleteNoteConfirm>
        </div>
      </div>

      <nav className="min-h-max">
        <NotePreviewList
          notes={notes}
          activeNote={activeNote}
          onSelectNote={(n) => hanldeSelectNote(n.title)}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
