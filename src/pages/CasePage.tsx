import { Link, Navigate, useParams } from 'react-router-dom'
import type { Language } from '../types'
import { caseStudies, ui } from '../data/site'
import { BookVisual, ChildhoodVisual, PipelineVisual } from '../components/Visuals'

type Props = { lang: Language }

export function CasePage({ lang }: Props) {
  const { id } = useParams()
  const copy = ui[lang]
  const allCases = caseStudies[lang]
  const index = allCases.findIndex((item) => item.id === id)

  if (index < 0) return <Navigate to={`/${lang}`} replace />

  const current = allCases[index]
  const next = allCases[(index + 1) % allCases.length]

  const visual =
    current.id === 'digital-book-platform' ? <BookVisual /> :
    current.id === 'early-childhood-book' ? <ChildhoodVisual /> :
    <PipelineVisual />

  return (
    <main>
      <section className="container-page pb-14 pt-12 sm:pt-16">
        <Link to={`/${lang}#work`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-ink">
          ← {copy.back}
        </Link>

        <div className="mt-10 max-w-5xl">
          {current.eyebrow && <p className="eyebrow">{current.eyebrow}</p>}
          <h1
  className="mt-4 font-display text-4xl font-extrabold tracking-[-.04em] sm:text-5xl lg:text-7xl"
  style={{ lineHeight: '1.15' }}
>
  {current.title}
</h1>
          <p className="body-copy mt-7 max-w-3xl">{current.summary}</p>
        </div>

        <div className="mt-10 grid gap-4 border-y border-slate-200 py-7 sm:grid-cols-2 lg:grid-cols-4">
          <Meta label="Role" value={current.role} />
          <Meta label="Stack" value={current.stack.length ? current.stack.join(' · ') : '—'} />
          <Meta label="Focus" value={current.focus.join(' · ')} />
          <Meta label="Context" value={current.context} />
        </div>

        <div className="mt-10">{visual}</div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">{copy.selected.note}</p>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="container-page py-14 sm:py-20">
          <div className="mx-auto max-w-4xl">
            {current.sections.map((section, sectionIndex) => (
              <article key={section.title} className="grid gap-6 border-b border-slate-200 py-10 last:border-0 sm:grid-cols-[90px_1fr]">
                <div className="font-display text-sm font-extrabold text-slate-300">
                  {String(sectionIndex + 1).padStart(2, '0')}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-extrabold tracking-[-.025em] sm:text-3xl">{section.title}</h2>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-5 text-base leading-7 text-slate-600">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((item) => (
                        <li key={item} className="rounded-2xl border border-slate-200 bg-canvas p-4 text-sm font-medium text-slate-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue">{copy.next}</p>
          <Link to={`/${lang}/projects/${next.id}`} className="mt-4 inline-block max-w-4xl font-display text-3xl font-extrabold tracking-[-.03em] sm:text-5xl">
            {next.title} →
          </Link>
        </div>
      </section>
    </main>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-slate-400">{label}</div>
      <div className="mt-2 text-sm font-semibold leading-6 text-ink">{value}</div>
    </div>
  )
}
