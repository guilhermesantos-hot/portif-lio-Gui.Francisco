import { motion } from 'framer-motion'
import {
  Monitor,
  Server,
  Database,
  Code2,
  Globe,
  Cpu,
  Terminal,
  GitBranch,
  Cloud,
  ShieldCheck,
  Layout,
  Smartphone,
  Sparkles,
} from 'lucide-react'

export function About() {
  const frontendSkills = [
    { name: 'React & Next.js', icon: Monitor },
    { name: 'JavaScript Moderno & TypeScript', icon: Code2 },
    { name: 'HTML5 Semântico & Tailwind CSS', icon: Layout },
    { name: 'Consumo & Integração de APIs REST', icon: Globe },
    { name: 'Interfaces 100% Responsivas', icon: Smartphone },
    { name: 'Performance Web & Otimização', icon: Cpu },
  ]

  const backendSkills = [
    { name: 'Node.js & Lógica de Servidor', icon: Server },
    { name: 'Bancos de Dados SQL & Modelagem', icon: Database },
    { name: 'Git & Versionamento no GitHub', icon: GitBranch },
    { name: 'Resolução de Problemas & Suporte TI', icon: Terminal },
    { name: 'Deploy Cloud & Hospedagem Web', icon: Cloud },
    { name: 'Segurança & Boas Práticas', icon: ShieldCheck },
  ]

  return (
    <section id="sobre" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t dark:border-white/10 border-black/10">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ccff00] bg-black dark:bg-transparent px-2.5 py-1 rounded inline-flex mb-3 dark:px-0">
          <span>●</span>
          <span>Trajetória & Habilidades Técnicas</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase dark:text-white text-zinc-950">
          Sobre Mim
        </h2>
      </div>

      {/* Adham Dannaway Clean Columnar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Column 1: Philosophy & Story (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ccff00] bg-black dark:bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
              <span>EM MODO APRENDIZADO & EVOLUÇÃO</span>
            </div>
            <h3 className="font-display text-2xl font-bold dark:text-white text-zinc-950 mb-4">
              Aprofundando conhecimentos práticos em TI e desenvolvimento de software.
            </h3>
            <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed mb-4">
              Sempre tive afinidade e facilidade natural com computadores, tecnologia e manutenção básica no dia a dia. Hoje, estou focado em dar um salto maior: me aprofundar de verdade no ecossistema de Tecnologia da Informação.
            </p>
            <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed mb-4">
              Evoluo diariamente através de cursos dedicados de programação, lógica de sistemas, criação de interfaces web e bancos de dados. Meus 17 projetos desenvolvidos são o laboratório onde testo cada nova tecnologia que aprendo.
            </p>
            <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed">
              Além dos cursos, utilizo ativamente a <strong className="text-zinc-950 dark:text-white font-medium">Inteligência Artificial como parceira de pair programming e aprendizado contínuo</strong>, acelerando a resolução de problemas, explorando novas linguagens e elevando o nível de cada projeto desenvolvido.
            </p>
          </div>

          {/* Quick Metrics & Learning Methodology */}
          <div className="space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl dark:bg-[#141417] bg-white border dark:border-white/5 border-black/10 shadow-sm">
                <span className="font-display font-black text-3xl text-[#ccff00] bg-black dark:bg-transparent px-2 rounded inline-block dark:px-0">
                  2
                </span>
                <p className="text-xs font-mono dark:text-zinc-400 text-zinc-600 mt-1 uppercase">
                  Anos Estudando Programação
                </p>
              </div>
              <div className="p-4 rounded-xl dark:bg-[#141417] bg-white border dark:border-white/5 border-black/10 shadow-sm">
                <span className="font-display font-black text-3xl dark:text-white text-zinc-950">
                  17
                </span>
                <p className="text-xs font-mono dark:text-zinc-400 text-zinc-600 mt-1 uppercase">
                  Projetos Práticos Criados
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/10 border-black/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ccff00]/10 flex items-center justify-center text-[#ccff00] shrink-0 border border-[#ccff00]/30 shadow-[0_0_8px_rgba(204,255,0,0.2)]">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs dark:text-zinc-300 text-zinc-700 leading-snug">
                <strong className="text-zinc-950 dark:text-white">Metodologia Ágil:</strong> Cursos práticos combinados com IA para acelerar a curva de aprendizado técnico e produtividade.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Front-end Web Stack (3.5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 dark:bg-[#141417] bg-white p-6 sm:p-8 rounded-2xl border dark:border-white/10 border-black/10 flex flex-col justify-between shadow-md"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] bg-black dark:bg-transparent px-2.5 py-1 rounded inline-flex uppercase tracking-wider mb-4 dark:px-0">
              <Monitor className="w-4 h-4 text-[#ccff00]" />
              <span>Front-end & Web</span>
            </div>
            <h4 className="font-display text-xl font-bold dark:text-white text-zinc-950 mb-6">
              Interfaces & Aplicações
            </h4>
            <ul className="space-y-3.5">
              {frontendSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <li key={skill.name} className="flex items-center gap-2.5 text-xs dark:text-zinc-300 text-zinc-700">
                    <div className="w-6 h-6 rounded-md bg-[#ccff00]/10 dark:bg-[#ccff00]/15 flex items-center justify-center shrink-0 border border-[#ccff00]/30 shadow-[0_0_8px_rgba(204,255,0,0.15)]">
                      <IconComponent className="w-3.5 h-3.5 text-[#ccff00] dark:text-[#ccff00]" />
                    </div>
                    <span>{skill.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t dark:border-white/10 border-black/10">
            <span className="text-[11px] font-mono dark:text-zinc-500 text-zinc-500 uppercase">Foco Principal:</span>
            <p className="text-xs font-mono dark:text-zinc-300 text-zinc-800 mt-1">Sistemas Web & Usabilidade</p>
          </div>
        </motion.div>

        {/* Column 3: Back-end & IT Infrastructure (3.5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 dark:bg-[#141417] bg-white p-6 sm:p-8 rounded-2xl border dark:border-white/10 border-black/10 flex flex-col justify-between shadow-md"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] bg-black dark:bg-transparent px-2.5 py-1 rounded inline-flex uppercase tracking-wider mb-4 dark:px-0">
              <Server className="w-4 h-4 text-[#ccff00]" />
              <span>Back-end & Infra de TI</span>
            </div>
            <h4 className="font-display text-xl font-bold dark:text-white text-zinc-950 mb-6">
              Servidores & Dados
            </h4>
            <ul className="space-y-3.5">
              {backendSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <li key={skill.name} className="flex items-center gap-2.5 text-xs dark:text-zinc-300 text-zinc-700">
                    <div className="w-6 h-6 rounded-md bg-[#ccff00]/10 dark:bg-[#ccff00]/15 flex items-center justify-center shrink-0 border border-[#ccff00]/30 shadow-[0_0_8px_rgba(204,255,0,0.15)]">
                      <IconComponent className="w-3.5 h-3.5 text-[#ccff00] dark:text-[#ccff00]" />
                    </div>
                    <span>{skill.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t dark:border-white/10 border-black/10">
            <span className="text-[11px] font-mono dark:text-zinc-500 text-zinc-500 uppercase">Padrão de Entrega:</span>
            <p className="text-xs font-mono dark:text-zinc-300 text-zinc-800 mt-1">Estabilidade, Segurança & Clean Code</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
