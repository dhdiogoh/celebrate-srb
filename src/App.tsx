import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage         = lazy(() => import('@/pages/HomePage'))
const CorporativosPage = lazy(() => import('@/pages/CorporativosPage'))
const QuinzeAnosPage   = lazy(() => import('@/pages/QuinzeAnosPage'))

function PageLoader() {
  return <div style={{ minHeight: '100vh', background: '#303030' }} />
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"                      element={<HomePage />} />
        <Route path="/eventos-corporativos"  element={<CorporativosPage />} />
        <Route path="/15-anos"              element={<QuinzeAnosPage />} />
      </Routes>
    </Suspense>
  )
}
