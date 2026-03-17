import { motion } from 'framer-motion'

const cases = [
  {
    title: 'Plataforma de Operacao Logistica',
    challenge: 'Equipe sofria com planilhas e retrabalho operacional.',
    result: 'Reducao de 42% no tempo de processamento e visibilidade total da operacao.',
  },
  {
    title: 'Dashboard Comercial com Integracao ERP',
    challenge: 'Dados de vendas fragmentados em multiplos sistemas.',
    result: 'Unificacao de dados e tomada de decisao diaria baseada em KPI real.',
  },
  {
    title: 'Automacao com IA para Atendimento',
    challenge: 'Alto volume de demandas repetitivas no suporte.',
    result: 'Triagem inteligente e ganho de produtividade com respostas mais rapidas.',
  },
]

export default function CasesSection() {
  return (
    <section id="cases" className="section-shell pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="pill">Cases e clientes</span>
          <h2 className="section-title">Projetos que geram impacto no mundo real</h2>
          <p className="section-copy">
            Empresas de logistica, saude, varejo e servicos confiam na System Manager para digitalizar operacoes.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-3 gap-4 sm:gap-5">
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-panel p-6"
            >
              <h3 className="text-white font-heading text-2xl mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                <span className="text-violet-200">Desafio:</span> {item.challenge}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-violet-200">Resultado:</span> {item.result}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
