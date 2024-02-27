import type { NoteInfo } from '@shared/types'
import NotePreview from './note-preview'

interface NotePreviewListProps {
  notes: NoteInfo[]
  activeNote: NoteInfo | null
  onSelectNote: (note: NoteInfo) => void
}

const NotePreviewList = ({ notes, activeNote, onSelectNote }: NotePreviewListProps) => {
  return (
    <section>
      {notes.map((note) => (
        <NotePreview
          key={note.title}
          note={note}
          onSelect={onSelectNote}
          isActive={note.title === activeNote?.title}
        />
      ))}
    </section>
  )
}

export default NotePreviewList
