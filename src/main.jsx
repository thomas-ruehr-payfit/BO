import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'

import RootLayout        from '@/layouts/RootLayout'
import CompanyLayout     from '@/layouts/CompanyLayout'
import SpacePlaceholder  from '@/layouts/SpacePlaceholder'
import CompanyList       from '@/routes/CompanyList'
import People            from '@/routes/People'
import Declaration       from '@/routes/Declaration'
import Files             from '@/routes/Files'
import Timeline          from '@/routes/Timeline'
import AdvancedActions   from '@/routes/AdvancedActions'
import Test             from '@/routes/Test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,                    element: <Navigate to="/companies" replace /> },
      { path: 'companies',              element: <CompanyList /> },
      {
        path: 'companies/:companyId',
        element: <CompanyLayout />,
        children: [
          { index: true,                element: <Navigate to="people" replace /> },
          { path: 'people',             element: <People /> },
          { path: 'declaration',        element: <Navigate to="dashboard" replace /> },
          { path: 'declaration/:sub',   element: <Declaration /> },
          { path: 'files',              element: <Files /> },
          { path: 'timeline',           element: <Timeline /> },
          { path: 'advanced-actions',   element: <Navigate to="operations" replace /> },
          { path: 'advanced-actions/:sub', element: <AdvancedActions /> },
        ],
      },
      { path: 'declarations', element: <SpacePlaceholder space="declarations" /> },
      { path: 'documents',    element: <SpacePlaceholder space="documents" /> },
      { path: 'billing',      element: <SpacePlaceholder space="billing" /> },
      { path: 'activity',     element: <SpacePlaceholder space="activity" /> },
      { path: 'settings',     element: <SpacePlaceholder space="settings" /> },
      { path: 'users',        element: <SpacePlaceholder space="users" /> },
      { path: 'account',      element: <SpacePlaceholder space="account" /> },
      { path: 'test',         element: <Test /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
