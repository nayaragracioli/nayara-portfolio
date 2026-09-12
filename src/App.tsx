import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { CasePage } from './pages/CasePage'
import { ui } from './data/site'
import { useLanguage } from './hooks/useLanguage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const { lang, switchLanguage } = useLanguage()
  const copy = ui[lang]

  const isSupportedLanguage = location.pathname.startsWith('/pt') || location.pathname.startsWith('/en')

  if (!isSupportedLanguage && location.pathname !== '/') {
    return <Navigate to="/pt" replace />
  }

  if (location.pathname === '/') {
    const saved = localStorage.getItem('portfolio-language')
    const preferred = saved === 'en' ? 'en' : 'pt'
    return <Navigate to={`/${preferred}`} replace />
  }

  return (
    <>
      <ScrollToTop />
      <Header
        lang={lang}
        labels={copy.nav}
        onLanguageChange={(nextLang) => switchLanguage(nextLang)}
      />

      <Routes>
        <Route path="/:lang" element={<Home lang={lang} />} />
        <Route path="/:lang/projects/:id" element={<CasePage lang={lang} />} />
        <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
      </Routes>
    </>
  )
}

export default App
