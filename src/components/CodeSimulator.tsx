import { AnimatePresence, motion } from 'framer-motion'
import { Bell, Moon, Sparkles, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Provider } from '../data/providers'

interface Scene {
  prompt: string
  code: string[]
  preview: (provider: Provider) => React.ReactNode
}

const scenes: Scene[] = [
  {
    prompt: 'Сделай неоновую кнопку с эффектом свечения при наведении',
    code: [
      'function GlowButton() {',
      '  return (',
      '    <button className="glow-btn">',
      '      Нажми меня ✨',
      '    </button>',
      '  );',
      '}',
    ],
    preview: (provider) => (
      <motion.button
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="rounded-xl px-6 py-3 font-medium text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${provider.from}, ${provider.to})`,
          boxShadow: `0 0 40px -8px ${provider.from}`,
        }}
      >
        <Sparkles size={16} className="mr-2 inline" />
        Нажми меня
      </motion.button>
    ),
  },
  {
    prompt: 'Добавь карточку профиля с аватаром и онлайн-статусом',
    code: [
      'function ProfileCard() {',
      '  return (',
      '    <div className="profile-card">',
      '      <Avatar online />',
      '      <h3>Аня Кодер</h3>',
      '      <p>Vibe Coding enthusiast</p>',
      '    </div>',
      '  );',
      '}',
    ],
    preview: (provider) => (
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass flex items-center gap-3 rounded-xl px-5 py-4"
      >
        <div className="relative">
          <div
            className="h-11 w-11 rounded-full"
            style={{ background: `linear-gradient(135deg, ${provider.from}, ${provider.to})` }}
          />
          <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-[#0c0d12] bg-emerald-400" />
        </div>
        <div className="text-left">
          <p className="text-sm font-medium text-white">Аня Кодер</p>
          <p className="text-xs text-white/50">Vibe Coding enthusiast</p>
        </div>
      </motion.div>
    ),
  },
  {
    prompt: 'Создай переключатель темной и светлой темы',
    code: [
      'function ThemeToggle() {',
      '  const [dark, setDark] = useState(true);',
      '  return (',
      '    <Switch checked={dark} onChange={setDark} />',
      '  );',
      '}',
    ],
    preview: (provider) => (
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass flex items-center gap-4 rounded-xl px-5 py-4"
      >
        <Sun size={16} className="text-white/50" />
        <div
          className="relative h-6 w-11 rounded-full"
          style={{ background: `linear-gradient(135deg, ${provider.from}, ${provider.to})` }}
        >
          <motion.div
            className="absolute top-0.5 h-5 w-5 rounded-full bg-white"
            animate={{ left: 22 }}
          />
        </div>
        <Moon size={16} className="text-white" />
        <Bell size={14} className="ml-2 text-white/30" />
      </motion.div>
    ),
  },
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function highlight(line: string) {
  const tokens = line.split(
    /(".*?"|\/\/.*|<\/?[A-Za-z][\w.]*|\b(?:function|return|const|useState)\b)/g,
  )
  return tokens.map((token, i) => {
    let cls = 'text-white/80'
    if (/^".*"$/.test(token)) cls = 'text-emerald-300'
    else if (/^\/\//.test(token)) cls = 'text-white/30'
    else if (/^<\/?[A-Za-z]/.test(token)) cls = 'text-sky-300'
    else if (/^(function|return|const|useState)$/.test(token)) cls = 'text-fuchsia-300'
    return (
      <span key={i} className={cls}>
        {token}
      </span>
    )
  })
}

export default function CodeSimulator({ provider }: { provider: Provider }) {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [promptTyped, setPromptTyped] = useState('')
  const [codeLines, setCodeLines] = useState<string[]>([])
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    let cancelled = false
    const scene = scenes[sceneIndex]

    async function run() {
      setPromptTyped('')
      setCodeLines([])
      setShowPreview(false)

      for (let i = 1; i <= scene.prompt.length; i++) {
        if (cancelled) return
        setPromptTyped(scene.prompt.slice(0, i))
        await sleep(22)
      }

      await sleep(500)

      for (const line of scene.code) {
        if (cancelled) return
        for (let i = 1; i <= line.length; i++) {
          if (cancelled) return
          setCodeLines((prev) => [...prev.slice(0, -1), line.slice(0, i)])
          await sleep(9)
        }
        setCodeLines((prev) => [...prev, ''])
        await sleep(40)
      }

      await sleep(300)
      if (cancelled) return
      setShowPreview(true)

      await sleep(2600)
      if (cancelled) return
      setSceneIndex((prev) => (prev + 1) % scenes.length)
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [sceneIndex])

  const scene = scenes[sceneIndex]

  return (
    <div className="glass grid gap-px overflow-hidden rounded-2xl md:grid-cols-2">
      <div className="bg-black/30 p-6">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-white/40">prompt.txt</span>
        </div>
        <p className="font-mono-code mb-6 text-sm text-white/90">
          <span className="text-white/30">&gt; </span>
          {promptTyped}
          <span className="animate-blink">▍</span>
        </p>
        <div className="font-mono-code space-y-1 text-[13px] leading-relaxed">
          {codeLines.map((line, i) => (
            <div key={i}>
              {highlight(line)}
              {i === codeLines.length - 1 && <span className="animate-blink">▍</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-h-[280px] items-center justify-center bg-[#0c0d12] p-6">
        <AnimatePresence mode="wait">
          {showPreview ? (
            <motion.div
              key={sceneIndex}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center justify-center"
            >
              {scene.preview(provider)}
            </motion.div>
          ) : (
            <p className="text-xs text-white/25">Живой предпросмотр появится здесь…</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
