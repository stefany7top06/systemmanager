import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'A System Manager transformou completamente nossa operação. Em 3 meses eliminamos planilhas e ganhamos visibilidade total do processo.',
    name: 'Rafael Mendes',
    role: 'Diretor de Operações',
    company: '',
    initials: 'RM',
    accent: '#a78bfa',
  },
  {
    quote:
      'Dashboard comercial que finalmente unificou todos os nossos dados. Nossa equipe toma decisões agora com KPIs em tempo real.',
    name: 'Camila Torres',
    role: 'CRO',
    company: '',
    initials: 'CT',
    accent: '#e879f9',
  },
  {
    quote:
      'O sistema de IA para atendimento reduziu o tempo de resposta em 60%. Nosso time foca agora só no que importa.',
    name: 'Bruno Almeida',
    role: 'Head de Suporte',
    company: '',
    initials: 'BA',
    accent: '#60a5fa',
  },
  {
    quote:
      'Parceria séria, entregam o que prometem. Nossa plataforma saiu do zero ao produtivo em menos de 90 dias.',
    name: 'Fernanda Lopes',
    role: 'CEO',
    company: '',
    initials: 'FL',
    accent: '#34d399',
  },
  {
    quote:
      'Automatizamos relatórios que antes levavam dias inteiros. Hoje temos resultado consolidado em segundos.',
    name: 'Diego Costa',
    role: 'CFO',
    company: '',
    initials: 'DC',
    accent: '#fbbf24',
  },
  {
    quote:
      'Time extremamente técnico e focado no negócio. Não entregaram só software, entregaram solução real ao nosso problema.',
    name: 'Juliana Ramos',
    role: 'COO',
    company: '',
    initials: 'JR',
    accent: '#f87171',
  },
  {
    quote:
      'Integração com nosso ERP que parecia impossível foi feita em semanas. Satisfação total com o resultado.',
    name: 'Lucas Pinto',
    role: 'CTO',
    company: '',
    initials: 'LP',
    accent: '#818cf8',
  },
  {
    quote:
      'O sistema deles virou o centro nervoso da nossa operação. Não consigo imaginar voltar ao que tínhamos antes.',
    name: 'Mariana Souza',
    role: 'Diretora Comercial',
    company: '',
    initials: 'MS',
    accent: '#fb923c',
  },
]

function TestimonialCard({ quote, name, role, company, initials, accent }) {
  return (
    <article
      className="testimonial-card"
      style={{ '--card-accent': accent }}
    >
      <Quote size={18} style={{ color: accent, opacity: 0.7, flexShrink: 0 }} />
      <p className="testimonial-quote">{quote}</p>
      <footer className="testimonial-footer">
        <div className="testimonial-avatar" style={{ background: `${accent}22`, borderColor: `${accent}55` }}>
          <span style={{ color: accent }}>{initials}</span>
        </div>
        <div>
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-meta">{role} · {company}</p>
        </div>
      </footer>
    </article>
  )
}

const doubled = [...testimonials, ...testimonials]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell pt-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="pill">Depoimentos</span>
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-copy">
            Empresas que confiam na System Manager para transformar operações com software sob medida.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <motion.div
          className="marquee-track"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        >
          {doubled.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
