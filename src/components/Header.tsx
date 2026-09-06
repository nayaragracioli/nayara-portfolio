import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const home = `/${lang}`

  const nav = [
    [labels.about, `${home}#about`],
    [labels.work, `${home}#work`],
    [labels.experience, `${home}#experience`],
    [labels.skills, `${home}#skills`],
    [labels.contact, `${home}#contact`],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-canvas/90 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to={home} className="font-display text-sm font-extrabold tracking-tight sm:text-base">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} to={href} className="text-sm font-medium text-slate-600 transition hover:text-ink">
              {label}
            </Link>
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
            {nav.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-200 py-4 text-sm font-semibold"
              >
                {label}
              </Link>
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
