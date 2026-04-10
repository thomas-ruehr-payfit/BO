import { Outlet } from 'react-router-dom'
import GlobalNav from '@/layouts/GlobalNav'

export default function RootLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-0">
      <GlobalNav />
      <div className="flex flex-col flex-1 min-w-0">
        <Outlet />
      </div>
    </div>
  )
}
