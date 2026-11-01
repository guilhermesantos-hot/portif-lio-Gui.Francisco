import { useState, useEffect } from 'react'
import { Magnetic } from './Magnetic'
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 md:py-6 px-4 md:px-12 flex justify-center ${
          scrolled ? 'py-3 md:py-4' : ''
        }`}
      >
        <nav
          className={`w-full max-w-6xl mx-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'dark:bg-[#141417]/85 bg-white/85 backdrop-blur-xl border dark:border-white/10 border-black/10 shadow-xl dark:shadow-black/60 shadow-zinc-200/50'
              : 'dark:bg-[#141417]/40 bg-white/60 backdrop-blur-md border dark:border-white/5 border-black/5'
          }`}
        >
          {/* Brand Identity */}
          <Magnetic strength={0.2}>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-semibold tracking-tight dark:text-white/90 text-zinc-900 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] inline-block shadow-[0_0_10px_#ccff00]"></span>
              <span className="font-display font-bold text-base tracking-tight">
                GUILHERME SANTOS FRANCISCO <span className="dark:text-white/40 text-zinc-400 font-normal">/ PORTFÓLIO</span>
              </span>
            </a>
          </Magnetic>

          {/* Center Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-1 dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/[0.06] border-black/[0.06] rounded-full px-3 py-1">
            <a
              href="#projetos"
              className="px-4 py-1.5 text-xs uppercase tracking-widest dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            >
              Projetos
            </a>
            <a
              href="#sobre"
              className="px-4 py-1.5 text-xs uppercase tracking-widest dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            >
              Sobre Mim
            </a>
            <a
              href="#contato"
              className="px-4 py-1.5 text-xs uppercase tracking-widest dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            >
              Contato
            </a>
          </div>

          {/* Right Action, Availability Status & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Accessibility Theme Toggle Button */}
            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Mudar para modo claro (acessibilidade)' : 'Mudar para modo escuro'}
                title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
                className="w-9 h-9 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10 dark:bg-white/5 bg-black/5 dark:text-zinc-300 text-zinc-700 hover:scale-105 transition-all cursor-pointer"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#ccff00] transition-transform duration-300 rotate-0 hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-800 transition-transform duration-300 rotate-0 hover:-rotate-12" />
                )}
              </button>
            </Magnetic>

            {/* Availability Badge */}
            <div className="flex items-center gap-2 text-xs dark:text-zinc-400 text-zinc-600 border dark:border-white/5 border-black/5 dark:bg-white/[0.02] bg-black/[0.02] px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
              </span>
              <span>Disponível para projetos</span>
            </div>

            {/* Magnetic CTA */}
            <Magnetic strength={0.3}>
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 bg-[#ccff00] text-black font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all hover:bg-[#d8ff33] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]"
              >
                <span>Fale Comigo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Right Controls (Theme Toggle + Menu) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 dark:text-zinc-300 text-zinc-700"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-[#ccff00]" /> : <Moon className="w-5 h-5 text-zinc-900" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 dark:text-zinc-400 text-zinc-700 hover:text-black dark:hover:text-white"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 dark:bg-[#0b0b0d]/98 bg-white/98 backdrop-blur-2xl flex flex-col justify-center items-center px-6 md:hidden">
          <div className="flex flex-col items-center gap-6 text-xl font-display font-bold">
            <a
              href="#projetos"
              onClick={() => setMobileMenuOpen(false)}
              className="dark:text-zinc-300 text-zinc-800 hover:text-[#ccff00] dark:hover:text-[#ccff00] transition-colors"
            >
              Projetos Selecionados
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="dark:text-zinc-300 text-zinc-800 hover:text-[#ccff00] dark:hover:text-[#ccff00] transition-colors"
            >
              Sobre Mim
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="dark:text-zinc-300 text-zinc-800 hover:text-[#ccff00] dark:hover:text-[#ccff00] transition-colors"
            >
              Contato Direto
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-[#ccff00] text-black text-sm px-6 py-3 rounded-full font-bold uppercase tracking-wider shadow-lg"
            >
              Iniciar Conversa
            </a>
          </div>
        </div>
      )}
    </>
  )
}
