import { motion } from 'framer-motion'
import { providers, type ProviderId } from '../data/providers'

interface Props {
  active: ProviderId
  onChange: (id: ProviderId) => void
}

export default function AISwitcher({ active, onChange }: Props) {
  return (
    <div className="glass inline-flex flex-wrap items-center justify-center gap-1 rounded-2xl p-1.5">
      {providers.map((p) => {
        const Icon = p.icon
        const isActive = p.id === active
        return (
          <button
            key={p.id}
            onClick={() => onChange(p.id)}
            className="relative rounded-xl px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            {isActive && (
              <motion.div
                layoutId="switcher-pill"
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <Icon size={16} strokeWidth={2} className={isActive ? 'text-white' : ''} />
              {p.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}
