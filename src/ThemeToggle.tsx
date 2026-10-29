import { useState } from 'react'

const storageKey = 'theme'

function readIsDark() {
  return document.documentElement.classList.contains('dark')
}

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle('dark', isDark)
  localStorage.setItem(storageKey, isDark ? 'dark' : 'light')
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(readIsDark)

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    applyTheme(next)
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 text-sm text-[var(--text)]">
      <span className="text-[var(--accent)]">{isDark ? 'Dark' : 'Light'}</span>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Dark mode"
        onClick={toggleTheme}
        className="flex h-8 w-14 items-center rounded-full border border-[var(--border)] bg-[var(--accent)] p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] aria-checked:bg-[var(--accent)]"
      >
        <span
          aria-hidden="true"
          className={`size-6 rounded-full bg-white shadow transition-transform ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </button>
    </div>
  )
}
