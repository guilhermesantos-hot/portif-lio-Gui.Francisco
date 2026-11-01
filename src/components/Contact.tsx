import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, Copy, ArrowUpRight, Mail, MessageSquare } from 'lucide-react'
import { Magnetic } from './Magnetic'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ambos',
    message: '',
  })

  const emailAddress = 'guilhermesantosfrancisco150@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contato" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t dark:border-white/10 border-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Information Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ccff00] bg-black dark:bg-transparent px-2.5 py-1 rounded inline-flex mb-3 dark:px-0">
              <span>●</span>
              <span>Vamos Trabalhar Juntos</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase dark:text-white text-zinc-950 mb-6">
              Inicie um Contato
            </h2>
            <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed mb-6">
              Disponível para oportunidades como desenvolvedor, projetos de sistemas web, automações e soluções de TI. Fique à vontade para entrar em contato diretamente.
            </p>

            {/* Quick Email Copy Box */}
            <div className="p-4 rounded-xl dark:bg-[#141417] bg-white border dark:border-white/10 border-black/10 flex items-center justify-between gap-4 shadow-sm mb-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center text-zinc-900 dark:text-[#ccff00] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-mono dark:text-zinc-500 text-zinc-500 uppercase">E-mail Profissional</p>
                  <p className="text-xs font-mono dark:text-white text-zinc-900 truncate" title={emailAddress}>
                    {emailAddress}
                  </p>
                </div>
              </div>

              <Magnetic strength={0.3}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg dark:bg-white/10 bg-black/5 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono dark:text-white text-zinc-800 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#ccff00]" />
                      <span className="text-emerald-600 dark:text-[#ccff00]">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </Magnetic>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl dark:bg-[#141417] bg-white border dark:border-white/10 border-black/10 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 border border-emerald-500/20">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-mono dark:text-zinc-500 text-zinc-500 uppercase">WhatsApp Direto</p>
                  <p className="text-xs font-mono dark:text-white text-zinc-900 truncate">+55 19 99465-8855</p>
                </div>
              </div>

              <Magnetic strength={0.3}>
                <a
                  href="https://wa.me/5519994658855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-mono text-white flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
                >
                  <span>Chamar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-6 border-t dark:border-white/10 border-black/10">
            <p className="text-xs font-mono dark:text-zinc-500 text-zinc-500 uppercase tracking-wider">Canais & Redes Oficiais</p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'GitHub', url: 'https://github.com/41321-hash' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/guilherme-francisco-00626a368' },
                { name: 'Instagram', url: 'https://instagram.com/guilhermesantosfrancisco15' },
              ].map((social) => (
                <Magnetic key={social.name} strength={0.2}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono dark:text-zinc-300 text-zinc-800 hover:text-black dark:hover:text-[#ccff00] transition-colors py-1.5 px-3 rounded-lg dark:bg-white/[0.04] bg-black/[0.04] border dark:border-white/10 border-black/10 hover:border-black/30 dark:hover:border-[#ccff00]/40"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#ccff00]" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        {/* Right Direct Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="dark:bg-[#141417] bg-white p-8 md:p-10 rounded-2xl border dark:border-white/10 border-black/10 shadow-xl dark:shadow-2xl relative overflow-hidden"
          >
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full dark:bg-[#ccff00]/10 bg-emerald-100 border dark:border-[#ccff00]/30 border-emerald-300 flex items-center justify-center mx-auto text-emerald-600 dark:text-[#ccff00]">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold dark:text-white text-zinc-950">Mensagem Enviada!</h3>
                <p className="text-sm dark:text-zinc-400 text-zinc-600 max-w-md mx-auto">
                  Obrigado pelo contato. Responderei no prazo de 24 horas úteis no e-mail informado ({formData.email || 'seu e-mail'}).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false)
                    setFormData({ name: '', email: '', service: 'ambos', message: '' })
                  }}
                  className="mt-4 text-xs font-mono text-zinc-950 dark:text-[#ccff00] underline uppercase tracking-wider cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider dark:text-zinc-400 text-zinc-700 block">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full dark:bg-[#0b0b0d] bg-zinc-50 border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-sm dark:text-white text-zinc-950 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-[#ccff00] transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider dark:text-zinc-400 text-zinc-700 block">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full dark:bg-[#0b0b0d] bg-zinc-50 border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-sm dark:text-white text-zinc-950 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-[#ccff00] transition-colors"
                    />
                  </div>
                </div>

                {/* Service type selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider dark:text-zinc-400 text-zinc-700 block">
                    Tipo de Projeto / Interesse
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'web', label: 'Aplicações Web' },
                      { id: 'dev', label: 'Desenvolvimento TI' },
                      { id: 'outros', label: 'Outros Serviços' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: item.id })}
                        className={`py-2 px-3 rounded-lg text-xs font-mono border transition-all text-center cursor-pointer ${
                          formData.service === item.id
                            ? 'dark:bg-[#ccff00]/10 bg-black text-white dark:border-[#ccff00] dark:text-[#ccff00] font-semibold'
                            : 'dark:bg-[#0b0b0d] bg-zinc-50 dark:border-white/5 border-black/5 dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider dark:text-zinc-400 text-zinc-700 block">
                    Detalhes do Projeto *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre os objetivos, escopo e prazos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full dark:bg-[#0b0b0d] bg-zinc-50 border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-sm dark:text-white text-zinc-950 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-[#ccff00] transition-colors resize-none"
                  />
                </div>

                {/* Submit button with Magnetic effect */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs dark:text-zinc-500 text-zinc-500 font-mono">
                    <MessageSquare className="w-3.5 h-3.5 text-zinc-800 dark:text-[#ccff00]" />
                    <span>Resposta em até 24h</span>
                  </div>

                  <Magnetic strength={0.3}>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-display font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-[#d8ff33] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all cursor-pointer"
                    >
                      <span>Enviar Mensagem</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </Magnetic>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
