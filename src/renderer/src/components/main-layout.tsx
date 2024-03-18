import React from 'react';

import Sidebar from './sidebar';

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex w-full h-screen dark">
      <Sidebar />
      <main className="flex flex-col flex-1 min-h-screen px-8 pt-16 pb-8 overflow-auto bg-background text-foreground">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
