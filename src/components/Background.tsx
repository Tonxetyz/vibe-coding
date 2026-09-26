import { motion } from 'framer-motion'
import type { Provider } from '../data/providers'

export default function Background({ provider }: { provider: Provider }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#08090d]">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <motion.div
        className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full blur-[120px]"
        animate={{
          backgroundColor: provider.from,
          x: [0, 40, -20, 0],
          y: [0, 30, -10, 0],
        }}
        transition={{
          backgroundColor: { duration: 0.8 },
          x: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ opacity: 0.28 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-[28rem] w-[28rem] rounded-full blur-[120px]"
        animate={{
          backgroundColor: provider.to,
          x: [0, -30, 20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          backgroundColor: { duration: 0.8 },
          x: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ opacity: 0.22 }}
      />
    </div>
  )
}
