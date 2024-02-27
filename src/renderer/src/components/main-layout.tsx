import React from 'react'

import Sidebar from './sidebar'

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex w-full h-screen dark">
      <Sidebar />
      <main className="flex-1 p-4 bg-background text-foreground">{children}</main>
    </div>
  )
}

export default MainLayout
