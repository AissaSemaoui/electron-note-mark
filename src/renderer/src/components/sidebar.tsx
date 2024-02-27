import clsx from 'clsx'
import NotePreview from './note-preview'
import { Button } from '@/components/ui/button'
import { FilePlus2, Trash2 } from 'lucide-react'

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <aside
      className={clsx(
        'w-60 border-r border-border bg-card px-2 pb-4 pt-12 text-card-foreground h-full overflow-auto',
        className
      )}
    >
      <div className="flex justify-end w-full gap-2 mb-2 h-max">
        <Button variant="outline" size="icon">
          <FilePlus2 className="w-4 h-4" />
        </Button>
        <Button variant="destructive" size="icon">
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      <div className="min-h-max">
        {Array.from({ length: 10 }).map((_, index) => (
          <NotePreview key={index} />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
