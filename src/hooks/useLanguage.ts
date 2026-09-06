import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { Language } from '../types'

export function useLanguage() {
  const location = useLocation()
  const navigate = useNavigate()

  const pathLang = location.pathname.split('/')[1]
  const lang: Language = pathLang === 'en' ? 'en' : 'pt'

  useEffect(() => {
    localStorage.setItem('portfolio-language', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  function switchLanguage(next: Language) {
    const segments = location.pathname.split('/').filter(Boolean)

    if (segments[0] === 'pt' || segments[0] === 'en') {
      segments[0] = next
    } else {
      segments.unshift(next)
    }

    navigate('/' + segments.join('/') + location.search + location.hash)
  }

  return { lang, switchLanguage }
}
