import clsx from 'clsx'
import { FilePlus2, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import NotePreviewList from '@/components/note-preview-list'

import { useActiveNote } from '@/hooks/use-active-note'
import { useNotesList } from '@/hooks/use-notes-list'

const Sidebar = ({ className }: { className?: string }) => {
  const { notes, hanldeSelectNote } = useNotesList()
  const activeNote = useActiveNote()

  return (
    <aside
      className={clsx(
        'w-80 border-r border-border bg-card p-4 pt-12 text-card-foreground h-full overflow-auto',
        className
      )}
    >
      <div className="flex justify-end w-full gap-2 mb-4 h-max">
        <Button variant="outline" size="icon">
          <FilePlus2 className="w-4 h-4" />
        </Button>
        <Button variant="destructive" size="icon">
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      <nav className="min-h-max">
        <NotePreviewList
          notes={notes}
          activeNote={activeNote}
          onSelectNote={(n) => hanldeSelectNote(n.title)}
        />
      </nav>
    </aside>
  )
}

export default Sidebar
