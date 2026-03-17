import { motion } from 'framer-motion'
import { MousePointerClick } from 'lucide-react'
import CardSwap from './CardSwap'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Design Systems'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'REST APIs', 'Arquitetura limpa'],
  },
  {
    title: 'Dados e Infra',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker', 'CI/CD'],
  },
  {
    title: 'Inteligência Artificial',
    items: ['LLM Integrations', 'RAG', 'Automação IA', 'Agentes', 'Analytics'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="pill">Skills e Stack</span>
          <h2 className="section-title">Tecnologia moderna aplicada ao seu contexto real</h2>
          <p className="section-copy">
            Combinamos arquitetura, produto e execução para construir software confiável e fácil de evoluir.
          </p>
        </motion.div>

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[680px] h-[420px] sm:h-[460px]"
          >
            <CardSwap
              cards={skillGroups}
              width="100%"
              height="100%"
              cardDistance={26}
              verticalDistance={34}
              delay={4200}
              pauseOnHover={false}
              skewAmount={3}
              easing="elastic"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-6 flex flex-col items-center gap-4 text-center"
          >
            <p className="max-w-md text-sm text-white/55">
              Clique em qualquer card e revele a próxima camada da nossa stack.
            </p>

            <motion.div
              animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[0.72rem] uppercase tracking-[0.14em] text-violet-200/90 backdrop-blur-md"
            >
              <MousePointerClick size={14} />
              Deslize para descobrir mais
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
