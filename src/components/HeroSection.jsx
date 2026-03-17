import { motion } from 'framer-motion'
import { ArrowRight, Bot, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import TubesBackground from './TubesBackground'
import GhostCursor from './GhostCursor'
import TypingAnimation from './TypingAnimation'

function MobileHeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.32),transparent_46%),radial-gradient(circle_at_80%_10%,rgba(217,70,239,0.24),transparent_44%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.22),transparent_50%),linear-gradient(160deg,#05020f_0%,#120726_55%,#04010a_100%)]">
      <div className="absolute -top-24 -left-12 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 -right-10 w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-float-medium" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-15" />
    </div>
  )
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => setIsMobile(window.matchMedia('(max-width: 900px)').matches)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const content = (
    <div className="relative z-10 min-h-[100svh] flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-500/10 text-violet-200 px-4 py-2 text-xs sm:text-sm tracking-[0.12em] uppercase mb-6">
            <Sparkles size={14} />
            Engenharia de software, dados e IA
          </div>

          <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight">
            Construímos sistemas web que <span className="text-gradient"><TypingAnimation /></span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            Da landing page ao dashboard corporativo, da arquitetura de banco de dados a automações com IA: entregamos software completo, robusto e pronto para crescer com sua empresa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-violet-500 hover:bg-violet-400 text-white font-semibold transition-colors"
            >
              Solicitar proposta
              <ArrowRight size={16} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Ver cases
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {[
              ['50+', 'Projetos entregues'],
              ['99.9%', 'Uptime em operação'],
              ['24/7', 'Monitoramento'],
              ['Full Stack', 'Web, dados e IA'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-black/35 backdrop-blur-md px-4 py-4">
                <p className="text-violet-200 font-heading text-xl sm:text-2xl">{value}</p>
                <p className="text-white/60 text-xs sm:text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm text-white/50 flex items-center gap-2">
            <Bot size={14} className="text-violet-300" />
            AI-ready stack com foco em performance, segurança e resultado de negócio
          </p>
        </motion.div>
      </div>
    </div>
  )

  return (
    <section id="top" className="relative min-h-[100svh]">
      {isMobile ? (
        <div className="relative min-h-[100svh]">
          <MobileHeroBackdrop />
          {content}
        </div>
      ) : (
        <TubesBackground className="min-h-[100svh]">
          <GhostCursor
            color="#b79cff"
            brightness={0.95}
            trailLength={20}
            inertia={0.42}
            grainIntensity={0.045}
            bloomStrength={0.28}
            bloomRadius={0.58}
            bloomThreshold={0}
            fadeDelayMs={220}
            fadeDurationMs={1000}
            zIndex={6}
          />
          {content}
        </TubesBackground>
      )}
    </section>
  )
}
