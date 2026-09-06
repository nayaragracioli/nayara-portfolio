export type Language = 'pt' | 'en'

export type CaseId = 'digital-book-platform' | 'early-childhood-book' | 'ai-pipeline'

export type CaseStudy = {
  id: CaseId
  title: string
  eyebrow?: string
  summary: string
  role: string
  stack: string[]
  focus: string[]
  context: string
  sections: {
    title: string
    paragraphs: string[]
    bullets?: string[]
  }[]
}
