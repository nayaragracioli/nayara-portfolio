import { Link } from 'react-router-dom'
import type { Language } from '../types'
import { BookVisual, ChildhoodVisual, PipelineVisual } from './Visuals'

type Props = {
  index: number
  project: {
    id: string
    eyebrow?: string
    title: string
    summary: string
    stack: string[]
    focus: string[]
  }
  lang: Language
  viewLabel: string
}

export function ProjectCard({ index, project, lang, viewLabel }: Props) {
  const visual =
    project.id === 'digital-book-platform' ? <BookVisual /> :
    project.id === 'early-childhood-book' ? <ChildhoodVisual /> :
    <PipelineVisual />

  return (
    <article className="card overflow-hidden">
      <div className={`grid items-stretch lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div>{visual}</div>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-extrabold tracking-[.18em] text-slate-400">
              {String(index + 1).padStart(2, '0')} / FEATURED CASE
            </span>
          </div>
          {project.eyebrow && <div className="eyebrow mb-3">{project.eyebrow}</div>}
          <h3 className="font-display text-3xl font-extrabold tracking-[-.03em] sm:text-4xl">{project.title}</h3>
          <p className="mt-5 text-base leading-7 text-slate-600">{project.summary}</p>

          {project.stack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => <span className="pill" key={item}>{item}</span>)}
            </div>
          )}

          <p className="mt-6 text-sm font-semibold leading-6 text-slate-500">
            {project.focus.join(' · ')}
          </p>

          <Link
            to={`/${lang}/projects/${project.id}`}
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-ink transition hover:gap-3"
          >
            {viewLabel} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
