import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { Language } from '../types'
import { siteConfig } from '../data/site'

type Props = {
  lang: Language
  labels: {
    about: string
    work: string
    experience: string
    skills: string
    contact: string
  }
  onLanguageChange: (lang: Language) => void
}

export function Header({ lang, labels, onLanguageChange }: Props) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const home = `/${lang}`

  const nav = [
    { label: labels.about, id: 'about' },
    { label: labels.work, id: 'work' },
    { label: labels.experience, id: 'experience' },
    { label: labels.skills, id: 'skills' },
    { label: labels.contact, id: 'contact' },
  ] as const

  const scrollToSection = (id: string) => {
    setOpen(false)
    const element = document.getElementById(id)

    if (element && location.pathname === home) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', `${home}#${id}`)
      return
    }

    navigate(`${home}#${id}`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-canvas/90 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to={home} className="font-display text-sm font-extrabold tracking-tight sm:text-base">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-sm font-medium text-slate-600 transition hover:text-ink"
            >
              {label}
            </button>
          ))}
          <div className="ml-2 flex items-center rounded-full border border-slate-200 bg-white p-1">
            {(['pt', 'en'] as Language[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onLanguageChange(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase transition ${
                  lang === item ? 'bg-ink text-white' : 'text-slate-500 hover:text-ink'
                }`}
                aria-label={`Switch language to ${item.toUpperCase()}`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-canvas lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {nav.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="border-b border-slate-200 py-4 text-left text-sm font-semibold"
              >
                {label}
              </button>
            ))}
            <div className="flex gap-2 pt-4">
              {(['pt', 'en'] as Language[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    onLanguageChange(item)
                    setOpen(false)
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase ${
                    lang === item ? 'bg-ink text-white' : 'border border-slate-300 bg-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
