import clsx from 'clsx'
import NotePreview from './note-preview'
import { Button } from '@/components/ui/button'
import { FilePlus2, Trash2 } from 'lucide-react'
import { useNotesList } from '@/hooks/use-notes-list'
import { useSelectedNote } from '@/hooks/use-selected-note'

const Sidebar = ({ className }: { className?: string }) => {
  const { notes, hanldeSelectNote } = useNotesList()
  const selectedNote = useSelectedNote()

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

      <div className="min-h-max">
        {notes.map((note, index) => (
          <NotePreview
            key={index}
            {...note}
            onClick={() => hanldeSelectNote(note.title)}
            isActive={note.title === selectedNote?.title}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
