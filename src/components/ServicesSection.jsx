import { motion } from 'framer-motion'
import { Database, Globe2, LayoutDashboard, Network, Sparkles, Workflow } from 'lucide-react'

const services = [
  {
    icon: Globe2,
    title: 'Landing Pages e Sites',
    description: 'Páginas de alta conversão com performance, SEO e visual premium para posicionar sua marca.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards e Sistemas',
    description: 'Soluções web sob medida para operação, gestão e acompanhamento de KPIs em tempo real.',
  },
  {
    icon: Database,
    title: 'Banco de Dados e Arquitetura',
    description: 'Modelagem, otimização e governança de dados para suportar crescimento com segurança.',
  },
  {
    icon: Network,
    title: 'Integrações e APIs',
    description: 'Integramos ERPs, CRMs e plataformas externas com APIs resilientes e observabilidade.',
  },
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Fluxos inteligentes para reduzir retrabalho, acelerar operação e eliminar gargalos.',
  },
  {
    icon: Sparkles,
    title: 'IA Aplicada ao Negócio',
    description: 'Assistentes, classificação inteligente e análises para gerar vantagem competitiva.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="pill">Serviços</span>
          <h2 className="section-title">Tudo que sua empresa precisa para digitalizar e escalar</h2>
          <p className="section-copy">
            Entregamos de ponta a ponta: estratégia, design, desenvolvimento, dados, IA e manutenção evolutiva.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="glass-panel p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-500/20 border border-violet-300/25 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-violet-200" />
                </div>
                <h3 className="text-white font-heading text-2xl mb-2">{service.title}</h3>
                <p className="text-white/65 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
