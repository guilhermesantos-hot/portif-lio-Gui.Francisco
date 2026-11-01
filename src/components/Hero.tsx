import { motion } from 'framer-motion'
import { Magnetic } from './Magnetic'
import { ArrowDown, Code2, Cpu, Sparkles, Monitor, Database, Server } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      {/* Subtle ambient gradient mesh in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] dark:bg-[#ccff00]/5 bg-[#ccff00]/15 blur-[140px] pointer-events-none rounded-full" />
      
      {/* Top Tagline / Meta row */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b dark:border-white/10 border-black/10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs md:text-sm font-mono dark:text-zinc-400 text-zinc-600"
        >
          <span className="text-[#ccff00]">●</span>
          <span>SÃO PAULO, BRASIL</span>
          <span className="dark:text-zinc-600 text-zinc-400">/</span>
          <span>DESENVOLVIMENTO DE SOFTWARE & TI</span>
        </motion.div>

        {/* Clean Identification Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 dark:bg-[#141417] bg-white px-4 py-1.5 rounded-full border dark:border-white/10 border-black/10 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ccff00] bg-black dark:bg-transparent rounded-full" />
          <span className="text-xs font-mono font-semibold tracking-wider uppercase dark:text-zinc-300 text-zinc-800">
            Desenvolvedor de TI — Em Aprendizado Contínuo
          </span>
        </motion.div>
      </div>

      {/* Dennis Snellenberg Signature Giant Display Typography */}
      <div className="w-full max-w-6xl mx-auto my-auto py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 md:space-y-3"
        >
          <div className="overflow-hidden">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#ccff00] bg-black dark:bg-transparent px-3 py-1 rounded inline-block dark:px-0 mb-3 font-semibold">
              Portfólio de TI — Estudos, Prática & Código
            </p>
          </div>

          <div className="overflow-hidden">
            <h1 className="font-display font-extrabold text-[12vw] sm:text-[11vw] lg:text-[8.5rem] tracking-tighter leading-[0.88] uppercase dark:text-white/95 text-zinc-950">
              DESENVOLVEDOR
            </h1>
          </div>

          <div className="overflow-hidden">
            <h1 className="font-display font-black text-[12vw] sm:text-[11vw] lg:text-[8.5rem] tracking-tighter leading-[0.88] uppercase text-[#ccff00] drop-shadow-[0_2px_15px_rgba(204,255,0,0.3)]">
              DE TI
            </h1>
          </div>
        </motion.div>

        {/* Clean Side-by-Side IT Specialization Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          {/* Card 1: Web & Frontend Development */}
          <div className="p-6 md:p-8 rounded-2xl border dark:bg-[#141417]/80 bg-white dark:border-white/10 border-black/10 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ccff00] bg-black dark:bg-transparent px-2.5 py-1 rounded dark:px-0">
                <Monitor className="w-4 h-4" />
                <span>01. Aplicações Web</span>
              </div>
              <span className="text-xs dark:text-zinc-500 text-zinc-400 font-mono">FRONT-END</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold dark:text-white text-zinc-950 mb-2">
              Desenvolvimento de Interfaces Web
            </h3>
            <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed mb-4">
              Construção de sistemas rápidos, responsivos para mobile e desktop, focados em estabilidade, acessibilidade e boa experiência para o usuário.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="dark:bg-white/5 bg-black/5 dark:text-zinc-300 text-zinc-700 px-3 py-1 rounded-md border dark:border-white/10 border-black/5 flex items-center gap-1.5">
                <Code2 className="w-3 h-3 text-[#ccff00]" /> React & JavaScript
              </span>
              <span className="dark:bg-white/5 bg-black/5 dark:text-zinc-300 text-zinc-700 px-3 py-1 rounded-md border dark:border-white/10 border-black/5 flex items-center gap-1.5">
                <Monitor className="w-3 h-3 text-[#ccff00]" /> HTML5, CSS3 & Tailwind
              </span>
              <span className="dark:bg-white/5 bg-black/5 dark:text-zinc-300 text-zinc-700 px-3 py-1 rounded-md border dark:border-white/10 border-black/5">
                Responsividade Total
              </span>
            </div>
          </div>

          {/* Card 2: Systems, APIs & Backend */}
          <div className="p-6 md:p-8 rounded-2xl border dark:bg-[#141417]/80 bg-white dark:border-white/10 border-black/10 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ccff00] bg-black dark:bg-transparent px-2.5 py-1 rounded dark:px-0">
                <Server className="w-4 h-4" />
                <span>02. Sistemas & Dados</span>
              </div>
              <span className="text-xs dark:text-zinc-500 text-zinc-400 font-mono">BACK-END & INFRA</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold dark:text-white text-zinc-950 mb-2">
              APIs, Banco de Dados & Lógica
            </h3>
            <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed mb-4">
              Integração de serviços, rotas de API seguras, conexão com bancos de dados relacionais e não-relacionais, e controle de versão via Git.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="dark:bg-white/5 bg-black/5 dark:text-zinc-300 text-zinc-700 px-3 py-1 rounded-md border dark:border-white/10 border-black/5 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-[#ccff00]" /> Node.js & TypeScript
              </span>
              <span className="dark:bg-white/5 bg-black/5 dark:text-zinc-300 text-zinc-700 px-3 py-1 rounded-md border dark:border-white/10 border-black/5 flex items-center gap-1.5">
                <Database className="w-3 h-3 text-[#ccff00]" /> Banco de Dados & SQL
              </span>
              <span className="dark:bg-white/5 bg-black/5 dark:text-zinc-300 text-zinc-700 px-3 py-1 rounded-md border dark:border-white/10 border-black/5">
                Git & Deploy Cloud
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Magnetic Scroll Down Button */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between pt-6 border-t dark:border-white/10 border-black/10">
        <p className="text-xs font-mono dark:text-zinc-500 text-zinc-500 uppercase tracking-widest hidden sm:block">
          Explore os projetos de tecnologia abaixo
        </p>

        <Magnetic strength={0.4}>
          <a
            href="#projetos"
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>Ver projetos desenvolvidos</span>
            <div className="w-9 h-9 rounded-full border dark:border-white/20 border-black/20 flex items-center justify-center group-hover:border-[#ccff00] group-hover:bg-[#ccff00] group-hover:text-black transition-all">
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </Magnetic>
      </div>
    </section>
  )
}
