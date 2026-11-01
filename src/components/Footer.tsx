import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { Magnetic } from './Magnetic'

export function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 md:px-12 max-w-6xl mx-auto border-t dark:border-white/10 border-black/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Signature & Stack */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-display font-bold dark:text-white text-zinc-950 text-sm tracking-tight">
            GUILHERME SANTOS FRANCISCO <span className="dark:text-zinc-500 text-zinc-400 font-normal">© {new Date().getFullYear()}</span>
          </p>
          <p className="text-xs font-mono dark:text-zinc-500 text-zinc-500">
            Inspirado na estética Snellenberg, Emotion, Dannaway & Guglieri (usado pela IA)
          </p>
        </div>

        {/* Center: Live Time Tracker */}
        <div className="flex items-center gap-2.5 text-xs font-mono dark:text-zinc-400 text-zinc-600 dark:bg-[#141417] bg-white px-4 py-2 rounded-full border dark:border-white/5 border-black/10 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#ccff00] inline-block animate-pulse shadow-[0_0_8px_#ccff00]" />
          <span>SÃO PAULO (GMT-3):</span>
          <span className="dark:text-white text-zinc-950 font-medium">{time || '18:00:00'}</span>
        </div>

        {/* Right: Magnetic Back to Top button */}
        <Magnetic strength={0.4}>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <div className="w-7 h-7 rounded-full dark:bg-white/10 bg-black/5 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-zinc-900 dark:text-[#ccff00]" />
            </div>
          </button>
        </Magnetic>
      </div>
    </footer>
  )
}
