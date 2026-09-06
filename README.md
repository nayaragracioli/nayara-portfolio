# Portfolio — Nayara Gracioli

Portfólio em React + TypeScript + Vite + Tailwind CSS, com:
- PT como idioma padrão
- Alternância PT/EN
- URLs separadas por idioma
- Home responsiva
- 3 case studies profissionais
- 3 projetos complementares
- Seções de experiência, competências e contato
- Visuais conceituais recriados para preservar confidencialidade

## 1. Instalar dependências

```bash
npm install
```

## 2. Rodar localmente

```bash
npm run dev
```

## 3. Build de produção

```bash
npm run build
```

## 4. Antes de publicar

Edite `src/data/site.ts`:

```ts
export const siteConfig = {
  name: 'Nayara Gracioli',
  email: 'SEU_EMAIL_AQUI',
  linkedin: 'SEU_LINKEDIN_AQUI',
  github: 'SEU_GITHUB_AQUI',
  resumePt: '/cv-nayara-pt.pdf',
  resumeEn: '/cv-nayara-en.pdf',
}
```

Também coloque os PDFs do currículo em `public/` com estes nomes:

- `cv-nayara-pt.pdf`
- `cv-nayara-en.pdf`

## 5. Publicar na Vercel

Depois de subir o projeto para GitHub:

1. Entre na Vercel.
2. Clique em **Add New Project**.
3. Importe o repositório.
4. Framework: Vite.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

## Estrutura

```text
src/
  components/
    Header.tsx
    ProjectCard.tsx
    Visuals.tsx
  data/
    site.ts
  hooks/
    useLanguage.ts
  pages/
    Home.tsx
    CasePage.tsx
  App.tsx
  main.tsx
  styles.css
```

## Observação

Os visuais dos cases são conceituais e foram criados para representar os tipos de solução sem expor materiais proprietários.

## Próximos ajustes recomendados

- Substituir links e e-mail.
- Adicionar os PDFs dos currículos.
- Revisar datas exatas da experiência.
- Se quiser, trocar os visuais conceituais por mockups próprios.
- Adicionar favicon e imagem Open Graph.
- Configurar domínio personalizado.
