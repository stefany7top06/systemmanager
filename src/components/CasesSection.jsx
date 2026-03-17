import { motion } from 'framer-motion'

const cases = [
  {
    title: 'Gestão de Reservas para Apartamentos',
    challenge:
      'A empresa gerenciava reservas, finanças, clientes e limpeza dos apartamentos em calendários físicos e controles dispersos, com alto risco de falhas e retrabalho.',
    result:
      'Criamos um dashboard central com uma área específica para cada apartamento e páginas dedicadas para cada dor operacional (reservas, finanças, limpeza e clientes), trazendo organização, rastreabilidade e decisões mais rápidas no dia a dia.',
  },
  {
    title: 'Organização Operacional para Escritório de Contabilidade',
    challenge:
      'O escritório tinha dificuldade para acompanhar obrigações mensais, status do que já havia sido feito, obrigações particulares por cliente, inadimplência e clientes sem movimento.',
    result:
      'Entregamos um sistema com painel de obrigações por cliente, status de execução, alertas de vencimento, controle de inadimplência e acompanhamento de clientes sem movimento, aumentando previsibilidade e controle da operação contábil.',
  },
  {
    title: 'Sistema de Livro Caixa e Relatórios Gerenciais',
    challenge: 'A empresa precisava organizar o livro caixa com movimentações, despesas e receitas em um único fluxo confiável.',
    result:
      'Desenvolvemos um sistema completo com saldo de transporte, saldo a transportar, relatório mensal, relatório anual, gráficos e impressão, consolidando a gestão financeira com mais clareza e segurança.',
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
            Empresas de logística, saúde, varejo e serviços confiam na System Manager para digitalizar operações.
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
