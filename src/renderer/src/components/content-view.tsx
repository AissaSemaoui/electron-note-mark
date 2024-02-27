import { useActiveNote } from '@/hooks/use-active-note'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

interface ContentViewProps {
  className?: string
}

const ContentView = ({ className }: ContentViewProps) => {
  const activeNote = useActiveNote()

  if (!activeNote)
    return (
      <section className="p-8">
        <h1>No note is selected!</h1>
      </section>
    )

  return (
    <article className={twMerge('py-12 px-8', className)}>
      <header className="mb-8 space-y-1">
        <h1 className="text-2xl">{activeNote.title}</h1>
        <p className="text-sm text-muted-foreground">{dayjs(activeNote.updatedAt).format('LLL')}</p>
      </header>

      <section>Note Content</section>
    </article>
  )
}

export default ContentView
