import '@/lib/dayjs'

import MainLayout from '@/components/main-layout'
import ContentView from '@/components/content-view'

function App(): JSX.Element {
  return (
    <MainLayout>
      <ContentView />
    </MainLayout>
  )
}

export default App
