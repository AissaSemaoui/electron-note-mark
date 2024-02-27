import React from 'react'

import Sidebar from './sidebar'

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex w-full h-screen dark">
      <Sidebar />
      <div className="flex-1 p-4 bg-background text-foreground">{children}</div>
    </main>
  )
}

export default MainLayout
