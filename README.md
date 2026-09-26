# Vibe Coding

Лендинг про вайб-кодинг: герой-секция, переключатель ИИ-моделей, симулятор кода и блок принципов.

## Стек

React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion.

## Запуск

```bash
npm install
npm run dev
```

## Структура

```text
src/
├── components/
│   ├── Hero.tsx           # герой-секция
│   ├── AISwitcher.tsx     # переключатель моделей
│   ├── CodeSimulator.tsx  # анимированный "печатающийся" код
│   ├── Principles.tsx     # принципы вайб-кодинга
│   └── Footer.tsx
└── data/providers.ts      # данные ИИ-провайдеров
```

## Сборка и линт

```bash
npm run build
npm run lint
```
