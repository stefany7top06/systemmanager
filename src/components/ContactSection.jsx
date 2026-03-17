import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/5519989113165?text=Ol%C3%A1%20System%20Manager,%20quero%20uma%20proposta%20para%20meu%20projeto.'

export default function ContactSection() {
  return (
    <section id="contato" className="section-shell pt-8 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-7 sm:p-10"
        >
          <span className="pill">Vamos conversar</span>
          <h2 className="section-title text-left mt-5">Fale com a System Manager e acelere seu próximo projeto</h2>
          <p className="section-copy text-left max-w-2xl mx-0">
            Envie sua necessidade e retornamos com estratégia, escopo e proposta técnica personalizada.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-violet-500 hover:bg-violet-400 text-white font-semibold transition-colors"
            >
              Chamar no WhatsApp
              <MessageCircle size={16} />
            </a>
            <a
              href="mailto:contato@systemmanager.com.br"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              contato@systemmanager.com.br
              <Mail size={16} />
            </a>
          </div>

          <form className="mt-8 grid sm:grid-cols-2 gap-3">
            <input className="input-field" type="text" placeholder="Nome" aria-label="Nome" />
            <input className="input-field" type="email" placeholder="E-mail" aria-label="E-mail" />
            <input className="input-field sm:col-span-2" type="text" placeholder="Empresa" aria-label="Empresa" />
            <textarea className="input-field sm:col-span-2 min-h-28 resize-y" placeholder="Conte sobre o projeto" aria-label="Mensagem" />
            <button type="button" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-white text-black hover:bg-violet-100 transition-colors font-semibold">
              Enviar briefing
              <ArrowRight size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
