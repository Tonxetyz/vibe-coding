import { motion } from 'framer-motion'
import { MessageCircle, Repeat, Rocket, Lightbulb } from 'lucide-react'
import type { Provider } from '../data/providers'

const principles = [
  {
    icon: Lightbulb,
    title: 'Формулируй идею',
    text: 'Не думай о синтаксисе — опиши, что должно получиться, своими словами.',
  },
  {
    icon: MessageCircle,
    title: 'Общайся с ИИ',
    text: 'Диалог заменяет документацию: уточняй, направляй, проси переделать.',
  },
  {
    icon: Rocket,
    title: 'Получай результат',
    text: 'Нейросеть пишет, запускает и показывает рабочий код за секунды.',
  },
  {
    icon: Repeat,
    title: 'Итерируй на лету',
    text: 'Не понравилось — скажи иначе. Правки происходят в реальном времени.',
  },
]

export default function Principles({ provider }: { provider: Provider }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Кодинг через <span className="text-gradient">ощущение</span>, а не синтаксис
        </h2>
        <p className="mt-4 text-white/60">
          Vibe coding — это подход к разработке, где идея и намерение важнее
          знания конкретного языка программирования. Ты держишь в голове
          продукт, а не точку с запятой.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="animate-float glass group rounded-2xl p-6 transition-shadow"
              style={{
                animationDelay: `${i * 0.6}s`,
              }}
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-shadow group-hover:shadow-[0_0_24px_-6px_var(--glow)]"
                style={{
                  background: `linear-gradient(135deg, ${provider.from}33, ${provider.to}33)`,
                  border: `1px solid ${provider.from}55`,
                  ['--glow' as string]: provider.from,
                }}
              >
                <Icon size={20} style={{ color: provider.from }} />
              </div>
              <h3 className="mb-2 font-medium text-white">{p.title}</h3>
              <p className="text-sm text-white/55">{p.text}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
