import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Magnetic } from './Magnetic'

interface Project {
  id: string
  title: string
  category: string
  type: 'design' | 'dev' | 'both'
  year: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  gradientDark: string
  gradientLight: string
  mockupLabel: string
}

const PROJECTS: Project[] = [
  {
    id: 'lumina-os',
    title: 'Lumina Dashboard & Design System',
    category: 'Product Design & Frontend',
    type: 'both',
    year: '2025',
    description:
      'Sistema financeiro de alta precisão com visual dark mode cirúrgico, gráficos interativos em tempo real e biblioteca de componentes reutilizáveis.',
    tags: ['Next.js', 'Tailwind CSS', 'Figma', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/41321-hash',
    gradientDark: 'from-emerald-950/40 via-zinc-900 to-[#141417]',
    gradientLight: 'from-emerald-100/70 via-emerald-50 to-white',
    mockupLabel: 'FINTECH SaaS INTERFACE',
  },
  {
    id: 'kroma-audio',
    title: 'Kroma Sound Architecture',
    category: 'Creative Development',
    type: 'dev',
    year: '2024',
    description:
      'Experiência imersiva de áudio espacial com Web Audio API, animações responsivas ao som e transições de página ultra-fluidas.',
    tags: ['TypeScript', 'Three.js / Canvas', 'Web Audio', 'Lenis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/41321-hash',
    gradientDark: 'from-blue-950/40 via-zinc-900 to-[#141417]',
    gradientLight: 'from-blue-100/70 via-blue-50 to-white',
    mockupLabel: 'AUDIO REACTIVE WEB APP',
  },
  {
    id: 'atelier-monolith',
    title: 'Monolith Architectural Studio',
    category: 'Visual Identity & Digital Experience',
    type: 'design',
    year: '2024',
    description:
      'Direção de arte editorial e website para estúdio de arquitetura brutalista com tipografia expressiva e curadoria de fotografias em alta resolução.',
    tags: ['Art Direction', 'Editorial UI', 'Responsive Cards', 'Micro-interactions'],
    liveUrl: 'https://example.com',
    gradientDark: 'from-neutral-900 via-zinc-900 to-[#141417]',
    gradientLight: 'from-zinc-200/80 via-zinc-100 to-white',
    mockupLabel: 'EDITORIAL ARCHITECTURE',
  },
  {
    id: 'nexus-cloud',
    title: 'Nexus Cloud Infrastructure',
    category: 'Fullstack Platform & UX',
    type: 'both',
    year: '2023',
    description:
      'Console de monitoramento de servidores distribuídos com métricas de telemetria em tempo real, dark UI de alto contraste e latência reduzida.',
    tags: ['React', 'Node.js', 'Tailwind', 'Real-time WebSocket'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradientDark: 'from-purple-950/40 via-zinc-900 to-[#141417]',
    gradientLight: 'from-purple-100/70 via-purple-50 to-white',
    mockupLabel: 'CLOUD DEV CONSOLE',
  },
]

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'design' | 'dev'>('all')

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'design') return p.type === 'design' || p.type === 'both'
    if (filter === 'dev') return p.type === 'dev' || p.type === 'both'
    return true
  })

  return (
    <section id="projetos" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b dark:border-white/10 border-black/10 pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ccff00] bg-black dark:bg-transparent px-2.5 py-1 rounded inline-flex mb-3 dark:px-0">
            <span>●</span>
            <span>Trabalhos Selecionados</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase dark:text-white text-zinc-950">
            Projetos em Destaque
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 dark:bg-[#141417] bg-zinc-200/80 p-1.5 rounded-full border dark:border-white/10 border-black/10 self-start md:self-auto">
          {(['all', 'design', 'dev'] as const).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                filter === item
                  ? 'bg-[#ccff00] text-black font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]'
                  : 'dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-white'
              }`}
            >
              {item === 'all' ? 'Todos' : item === 'design' ? 'UI/UX Design' : 'Engenharia'}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            data-cursor="view"
            data-cursor-text="VER"
            className="group relative flex flex-col dark:bg-[#141417]/90 bg-white rounded-2xl border dark:border-white/10 border-black/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg dark:shadow-2xl dark:shadow-black/70"
          >
            {/* Visual Preview Container */}
            <div
              className={`relative h-64 sm:h-72 w-full dark:bg-gradient-to-br ${project.gradientDark} bg-gradient-to-br ${project.gradientLight} p-6 flex flex-col justify-between overflow-hidden border-b dark:border-white/5 border-black/5`}
            >
              {/* Top metadata tags */}
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-mono uppercase tracking-wider dark:text-zinc-300 text-zinc-800 dark:bg-black/50 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border dark:border-white/10 border-black/10">
                  {project.category}
                </span>
                <span className="text-xs font-mono dark:text-zinc-400 text-zinc-700 dark:bg-black/50 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border dark:border-white/10 border-black/10">
                  {project.year}
                </span>
              </div>

              {/* Mockup Stylized Representation */}
              <div className="my-auto text-center transform group-hover:scale-105 transition-transform duration-500">
                <div className="inline-block px-5 py-3 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md shadow-2xl">
                  <p className="font-mono text-xs text-[#ccff00] tracking-widest uppercase font-semibold">
                    {project.mockupLabel}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">Design System & High Performance Code</p>
                </div>
              </div>

              {/* Subtle hover reveal line */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-bold text-2xl dark:text-white text-zinc-950 group-hover:text-black dark:group-hover:text-[#ccff00] transition-colors">
                    {project.title}
                  </h3>

                  <Magnetic strength={0.3}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-black/5 flex items-center justify-center dark:text-zinc-300 text-zinc-700 group-hover:text-black group-hover:bg-[#ccff00] group-hover:border-[#ccff00] transition-all"
                      aria-label={`Ver ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </Magnetic>
                </div>

                <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags & External Links */}
              <div className="flex items-center justify-between pt-4 border-t dark:border-white/5 border-black/5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono dark:text-zinc-400 text-zinc-700 dark:bg-white/[0.04] bg-black/[0.04] px-2.5 py-0.5 rounded border dark:border-white/5 border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:text-zinc-500 text-zinc-500 hover:text-black dark:hover:text-white p-1 transition-colors"
                      aria-label="Código no GitHub"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:text-zinc-500 text-zinc-500 hover:text-black dark:hover:text-white p-1 transition-colors"
                      aria-label="Demo ao vivo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
