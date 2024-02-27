import dayjs from 'dayjs'

import { cn } from '@/lib/utils'

import type { NoteInfo } from '@shared/types'

interface NotePreviewProps {
  note: NoteInfo
  isActive?: boolean
  className?: string
  onSelect: (note: NoteInfo) => void
}

const NotePreview = ({ note, isActive, className, onSelect }: NotePreviewProps) => {
  const { title, updatedAt } = note

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 px-4 py-4 border-b rounded-sm cursor-pointer border-border/40 hover:bg-muted',
        isActive && 'bg-accent/60',
        className
      )}
      onClick={() => onSelect(note)}
    >
      <h3 className="text-base font-light truncate text-foreground">{title} </h3>
      <p className="text-xs font-light text-muted-foreground">{dayjs(updatedAt).format('L')}</p>
    </div>
  )
}

export default NotePreview
