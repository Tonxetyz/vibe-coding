import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Background from './components/Background'
import CodeSimulator from './components/CodeSimulator'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Principles from './components/Principles'
import { providers, type ProviderId } from './data/providers'

export default function App() {
  const [active, setActive] = useState<ProviderId>('claude')
  const provider = providers.find((p) => p.id === active)!

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-from', provider.from)
    document.documentElement.style.setProperty('--accent-to', provider.to)
  }, [provider])

  return (
    <div className="relative min-h-screen">
      <Background provider={provider} />

      <Hero provider={provider} active={active} onChange={setActive} />

      <section id="simulator" className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center text-xs tracking-wide text-white/40 uppercase">
            Симулятор вайб-кодинга
          </p>
          <h2 className="mb-10 text-center text-3xl font-semibold text-white sm:text-4xl">
            Идея → диалог → <span className="text-gradient">готовый код</span>
          </h2>
          <CodeSimulator provider={provider} />
        </motion.div>
      </section>

      <Principles provider={provider} />
      <Footer />
    </div>
  )
}
