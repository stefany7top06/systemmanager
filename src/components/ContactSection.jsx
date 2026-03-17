import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const whatsappUrl = 'https://wa.me/5519989113165?text=Ol%C3%A1%20System%20Manager,%20quero%20uma%20proposta%20para%20meu%20projeto.'
const contactEmail = 'contato@systemmanager.com.br'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEmailClick = async (event) => {
    event.preventDefault()
    const subject = 'Contato via site - System Manager'
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`

    // Fallback para facilitar contato caso o cliente de e-mail não abra automaticamente.
    try {
      await navigator.clipboard.writeText(contactEmail)
      setFeedback('E-mail copiado para a área de transferência.')
    } catch {
      setFeedback('Se o e-mail não abrir, copie manualmente: contato@systemmanager.com.br')
    }
  }

  const handleSubmitBriefing = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setFeedback('Preencha Nome, E-mail e Mensagem para enviar o briefing.')
      return
    }

    const briefing = [
      'Olá, System Manager! Quero enviar um briefing.',
      '',
      `Nome: ${formData.name}`,
      `E-mail: ${formData.email}`,
      `Empresa: ${formData.company || 'Não informada'}`,
      `Mensagem: ${formData.message}`,
    ].join('\n')

    window.open(`https://wa.me/5519989113165?text=${encodeURIComponent(briefing)}`, '_blank', 'noopener,noreferrer')
    setFeedback('Briefing preparado e enviado para o WhatsApp.')
  }

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
              href={`mailto:${contactEmail}`}
              onClick={handleEmailClick}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              {contactEmail}
              <Mail size={16} />
            </a>
          </div>

          <form className="mt-8 grid sm:grid-cols-2 gap-3" onSubmit={handleSubmitBriefing}>
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Nome"
              aria-label="Nome"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="E-mail"
              aria-label="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="input-field sm:col-span-2"
              type="text"
              name="company"
              placeholder="Empresa"
              aria-label="Empresa"
              value={formData.company}
              onChange={handleChange}
            />
            <textarea
              className="input-field sm:col-span-2 min-h-28 resize-y"
              name="message"
              placeholder="Conte sobre o projeto"
              aria-label="Mensagem"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-white text-black hover:bg-violet-100 transition-colors font-semibold">
              Enviar briefing
              <ArrowRight size={16} />
            </button>
            {feedback && (
              <p className="sm:col-span-2 text-sm text-violet-200/90">{feedback}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
