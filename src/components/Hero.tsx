import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import type { Provider, ProviderId } from '../data/providers'
import AISwitcher from './AISwitcher'

interface Props {
  provider: Provider
  active: ProviderId
  onChange: (id: ProviderId) => void
}

export default function Hero({ provider, active, onChange }: Props) {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass mb-8 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/60"
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: provider.from }}
        />
        Новая эра разработки без кода вручную
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl leading-[1.1] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
      >
        Что такое <span className="text-gradient">Vibe Coding</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-white/60"
      >
        Ты описываешь идею словами — нейросеть превращает её в работающий код.
        Никакой рутины, никакого шаблонного бойлерплейта: только диалог,
        интуиция и мгновенный результат.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10"
      >
        <p className="mb-3 text-xs tracking-wide text-white/40 uppercase">
          Выбери свой стиль вайб-кодинга
        </p>
        <AISwitcher active={active} onChange={onChange} />
      </motion.div>

      <motion.a
        href="#simulator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-16 flex flex-col items-center gap-2 text-xs text-white/40 transition-colors hover:text-white/70"
      >
        Смотреть симулятор
        <ArrowDown size={16} className="animate-float" />
      </motion.a>
    </section>
  )
}
