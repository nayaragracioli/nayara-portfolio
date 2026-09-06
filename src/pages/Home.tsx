import { Link } from 'react-router-dom'
import type { Language } from '../types'
import { experience, featured, moreProjects, siteConfig, skills, ui } from '../data/site'
import { ProjectCard } from '../components/ProjectCard'
import { HeroVisual } from '../components/Visuals'

type Props = { lang: Language }

export function Home({ lang }: Props) {
  const copy = ui[lang]
  const emailHref = siteConfig.email.includes('@') ? `mailto:${siteConfig.email}` : '#'
  const resumeHref = lang === 'pt' ? siteConfig.resumePt : siteConfig.resumeEn

  return (
    <>
      <main>
        <section className="container-page section-space pt-14 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div className="reveal">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1 className="title-display mt-5 max-w-4xl">{copy.hero.title}</h1>
              <p className="body-copy mt-7 max-w-2xl">{copy.hero.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="button-primary">{copy.hero.primary} ↓</a>
                <a href="#contact" className="button-secondary">{copy.hero.secondary} ↗</a>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {['React', 'JavaScript', 'TypeScript', 'Python', 'AI-Assisted Development'].map((item) => (
                  <span className="pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section id="about" className="section-space border-y border-slate-200 bg-white">
          <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="eyebrow">{copy.about.eyebrow}</p>
              <h2 className="section-title mt-5">{copy.about.title}</h2>
            </div>
            <div className="lg:pt-12">
              <p className="body-copy">{copy.about.p1}</p>
              <p className="body-copy mt-5">{copy.about.p2}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Software Development', 'Digital Products', 'Accessibility', 'AI-Assisted Development'].map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="container-page section-space">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">{copy.selected.eyebrow}</p>
            <h2 className="section-title mt-5">{copy.selected.title}</h2>
            <p className="body-copy mt-5">{copy.selected.text}</p>
          </div>

          <div className="space-y-8">
            {featured[lang].map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                project={project}
                lang={lang}
                viewLabel={copy.selected.view}
              />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-slate-500">
            {copy.selected.note}
          </p>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="container-page section-space">
            <div className="max-w-3xl">
              <p className="eyebrow">{copy.more.eyebrow}</p>
              <h2 className="section-title mt-5">{copy.more.title}</h2>
              <p className="body-copy mt-5">{copy.more.text}</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {moreProjects[lang].map((project) => (
                <article key={project.title} className="card flex min-h-[330px] flex-col p-7 transition duration-200 hover:-translate-y-1">
                  <div className="mb-10 h-12 w-12 rounded-2xl bg-gradient-to-br from-violet/15 to-blue/15" />
                  <h3 className="font-display text-2xl font-extrabold tracking-[-.025em]">{project.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{project.text}</p>
                  <div className="mt-auto pt-8">
                    <p className="text-xs font-bold text-ink">{project.stack}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{project.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-ink text-white">
          <div className="container-page section-space">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-blue">{copy.experience.eyebrow}</p>
              <h2 className="section-title mt-5">{copy.experience.title}</h2>
            </div>

            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {experience[lang].map((item) => (
                <article key={item.when + item.place} className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
                  <div className="text-sm font-semibold text-white/45">{item.when}</div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold">{item.place}</h3>
                    <div className="mt-2 text-sm font-semibold text-blue">{item.title}</div>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="container-page section-space">
          <div className="max-w-3xl">
            <p className="eyebrow">{copy.skills.eyebrow}</p>
            <h2 className="section-title mt-5">{copy.skills.title}</h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <article className="card p-6" key={group.title}>
                <h3 className="font-display text-xl font-extrabold">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-ink text-white">
          <div className="container-page section-space">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-blue">{copy.contact.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-[-.035em] sm:text-5xl lg:text-6xl">
                {copy.contact.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{copy.contact.text}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a className="rounded-full bg-white px-5 py-3 text-sm font-bold text-ink" href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold" href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold" href={emailHref}>Email ↗</a>
                <a className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold" href={resumeHref} download>{copy.contact.resume} ↓</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-ink text-white">
        <div className="container-page flex flex-col gap-2 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {siteConfig.name}</span>
          <span>{lang === 'pt' ? 'Desenvolvido com React + TypeScript' : 'Built with React + TypeScript'}</span>
        </div>
      </footer>
    </>
  )
}
