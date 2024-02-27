const NotePreview = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b rounded-sm cursor-pointer border-border/40 hover:bg-foreground/5">
      <h3 className="text-lg font-light truncate text-foreground">The best </h3>
      <p className="text-xs font-light text-muted-foreground">12 Feb, 2023</p>
    </div>
  )
}

export default NotePreview
