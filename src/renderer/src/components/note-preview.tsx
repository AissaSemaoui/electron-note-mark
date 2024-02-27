import { cn } from '@/lib/utils'
import type { NoteInfo } from '@shared/types'
import dayjs from 'dayjs'
import { ComponentProps } from 'react'

interface NotePreviewProps extends NoteInfo, Omit<ComponentProps<'div'>, 'title'> {
  isActive?: boolean
}

const NotePreview = ({ title, updatedAt, isActive, className, ...props }: NotePreviewProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 px-4 py-4 border-b rounded-sm cursor-pointer border-border/40 hover:bg-foreground/5',
        isActive && 'bg-muted',
        className
      )}
      {...props}
    >
      <h3 className="text-base font-light truncate text-foreground">{title} </h3>
      <p className="text-xs font-light text-muted-foreground">{dayjs(updatedAt).format('L')}</p>
    </div>
  )
}

export default NotePreview
