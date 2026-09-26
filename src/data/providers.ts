import { Bot, Cpu, Sparkles, Terminal, Wand2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ProviderId = 'claude' | 'cursor' | 'chatgpt' | 'copilot' | 'gemini'

export interface Provider {
  id: ProviderId
  name: string
  icon: LucideIcon
  from: string
  to: string
}

export const providers: Provider[] = [
  { id: 'claude', name: 'Claude', icon: Sparkles, from: '#D97757', to: '#C2694B' },
  { id: 'cursor', name: 'Cursor', icon: Terminal, from: '#3B82F6', to: '#60A5FA' },
  { id: 'chatgpt', name: 'ChatGPT', icon: Bot, from: '#10A37F', to: '#34D399' },
  { id: 'copilot', name: 'Copilot', icon: Cpu, from: '#8957E5', to: '#6E40C9' },
  { id: 'gemini', name: 'Gemini', icon: Wand2, from: '#4F86F7', to: '#B24592' },
]
