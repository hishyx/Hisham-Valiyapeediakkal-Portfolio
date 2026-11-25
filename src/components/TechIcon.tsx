type Props = {
  name: string
  size?: number
}

/**
 * Crisp monochrome-friendly vector icons for verified technologies.
 * Avoids external icon CDNs and keeps bundle size minimal.
 */
export function TechIcon({ name, size = 14 }: Props) {
  const key = name.toLowerCase()

  if (key.includes('javascript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#f7df1e" />
        <path d="M10.8 17.4c0 1.4-.8 2.1-2.1 2.1-.9 0-1.6-.4-2-1.1l1.2-.8c.2.4.5.6.9.6.4 0 .6-.2.6-.8v-4.6h1.4v4.6zm3.8 2.1c-1.3 0-2.2-.6-2.7-1.4l1.1-.8c.4.6.9.9 1.6.9.7 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.2-1l-.5-.2c-1.1-.4-1.8-1-1.8-2.1 0-1.1.9-1.9 2.2-1.9 1 0 1.7.3 2.2 1.1l-1.1.7c-.3-.4-.6-.6-1-.6-.5 0-.8.3-.8.6 0 .4.3.6 1.1.9l.5.2c1.3.5 2 1.1 2 2.2 0 1.3-1 2.1-2.7 2.1z" fill="#101010" />
      </svg>
    )
  }

  if (key.includes('typescript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178c6" />
        <path d="M11.2 12.1H8.9v6.6H7.2v-6.6H4.9v-1.4h6.3v1.4zm4.4 6.8c-1.4 0-2.4-.5-3-1.2l1-1.1c.5.5 1.1.9 1.9.9.8 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.4-1.1l-.6-.2c-1.2-.4-2-1-2-2.2 0-1.2 1-2.1 2.5-2.1 1.1 0 1.9.3 2.5 1l-.9 1.1c-.5-.4-1-.6-1.6-.6-.6 0-1 .3-1 .7 0 .5.4.7 1.3 1l.6.2c1.4.5 2.1 1.1 2.1 2.3 0 1.3-1 2.1-2.7 2.1z" fill="#fff" />
      </svg>
    )
  }

  if (key === 'sql') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="2.8" />
        <path d="M5 6v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" />
        <path d="M5 12v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" />
      </svg>
    )
  }

  if (key.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.4 20 7v10l-8 4.6L4 17V7l8-4.6z" stroke="#6cc24a" strokeWidth="1.8" fill="rgba(108,194,74,.14)" />
        <path d="M9.5 14.8V9.2l5 5.6V9.2" stroke="#8ce06c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (key.includes('express')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 15c1.5 1.8 4.5 1.8 6-.5-1.5-2.5-5.5-2.2-6 .5h6" />
        <path d="M13 10l6 7M19 10l-6 7" />
      </svg>
    )
  }

  if (key.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="#61dafb" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61dafb" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61dafb" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61dafb" strokeWidth="1.4" transform="rotate(120 12 12)" />
      </svg>
    )
  }

  if (key === 'html' || key === 'html5') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 3h16l-1.5 15.8L12 21l-6.5-2.2L4 3z" stroke="#e34f26" strokeWidth="1.7" fill="rgba(227,79,38,.14)" />
        <path d="M8.5 8h7l-.3 3H9l.2 2.5h5.6l-.4 3.4-2.4.7-2.4-.7-.2-1.8" stroke="#f06529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (key === 'css' || key === 'css3') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 3h16l-1.5 15.8L12 21l-6.5-2.2L4 3z" stroke="#2965f1" strokeWidth="1.7" fill="rgba(41,101,241,.14)" />
        <path d="M8.5 8h7l-.5 3H9.5m5.5 0-.4 5-2.6.8-2.6-.8-.1-1.5" stroke="#5b8def" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (key.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 6c-2.6 0-4.2 1.3-4.8 3.9 1-1.3 2.1-1.8 3.4-1.4.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.5 2.2 2.6 0 4.2-1.3 4.8-3.9-1 1.3-2.1 1.8-3.4 1.4-.8-.2-1.3-.7-1.9-1.3C15.5 7.2 14.4 6 12 6zm-5 6c-2.6 0-4.2 1.3-4.8 3.9 1-1.3 2.1-1.8 3.4-1.4.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.5 2.2 2.6 0 4.2-1.3 4.8-3.9-1 1.3-2.1 1.8-3.4 1.4-.8-.2-1.3-.7-1.9-1.3-1-1-2.1-2.2-4.5-2.2z" fill="#38bdf8" />
      </svg>
    )
  }

  if (key.includes('mongodb')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5c2.8 3.2 4.8 6.4 4.8 10 0 3.3-1.8 5.9-4.3 7.1V21.5h-1v-1.9C9 18.4 7.2 15.8 7.2 12.5c0-3.6 2-6.8 4.8-10z" fill="rgba(71,162,72,.22)" stroke="#47a248" strokeWidth="1.6" />
        <path d="M12 7.5v12" stroke="#6ec96f" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    )
  }

  if (key.includes('mongoose')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.5 16.5V7.5l4.2 5.2L12 8.2l3.3 4.5 4.2-5.2v9" stroke="#e05252" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (key.includes('postgres')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.5 8.5C7.5 5.7 9.6 4 12 4s4.5 1.7 4.5 4.5c0 2.5-.8 4.8-1.5 6.8-.5 1.5-.4 3.2-1.5 3.7-1.1.4-1.5-.8-1.5-2.2V13" stroke="#60a5fa" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7.5 8.5c-2-.4-3.5.9-3.5 3 0 2 1.2 3.3 2.8 3.3M16.5 8.5c2-.4 3.5.9 3.5 3 0 2-1.2 3.3-2.8 3.3" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="10.2" cy="8.2" r=".9" fill="#93c5fd" />
        <circle cx="13.8" cy="8.2" r=".9" fill="#93c5fd" />
      </svg>
    )
  }

  if (key.includes('prisma')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12.6 3.2 4.8 16.4l7 4.4 7.4-2.5L12.6 3.2z" stroke="#e5e7eb" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12.6 3.2 11.8 20.8" stroke="#9ca3af" strokeWidth="1.4" />
      </svg>
    )
  }

  if (key.includes('redis')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4.5 20 8l-8 3.5L4 8l8-3.5z" fill="rgba(220,56,45,.25)" stroke="#ef4444" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 12l8 3.5 8-3.5M4 16l8 3.5 8-3.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (key.includes('bullmq')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="6.5" width="5" height="11" rx="1.2" />
        <rect x="10" y="6.5" width="5" height="11" rx="1.2" />
        <path d="M17.5 9.5 21 12l-3.5 2.5" />
      </svg>
    )
  }

  if (key === 'git') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="7" cy="6.5" r="2.2" stroke="#f05032" strokeWidth="1.7" />
        <circle cx="7" cy="17.5" r="2.2" stroke="#f05032" strokeWidth="1.7" />
        <circle cx="17" cy="12" r="2.2" stroke="#f05032" strokeWidth="1.7" />
        <path d="M7 8.7v6.6M9 7.8l6 3" stroke="#f05032" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    )
  }

  if (key.includes('github')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.3a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.3z" />
      </svg>
    )
  }

  if (key.includes('aws')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6.5 14.5h10.8a3.2 3.2 0 0 0 .4-6.4A4.8 4.8 0 0 0 8.5 7a3.8 3.8 0 0 0-2 7.5z" stroke="#f59e0b" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M5 18c4.5 2.2 9.5 2.2 14 0" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  if (key.includes('nginx')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.6 20 7.2v9.6l-8 4.6-8-4.6V7.2l8-4.6z" stroke="#22c55e" strokeWidth="1.7" fill="rgba(34,197,94,.12)" />
        <path d="M9.2 15.2V8.8l5.6 6.4V8.8" stroke="#4ade80" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (key.includes('postman')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="#ff6c37" strokeWidth="1.7" fill="rgba(255,108,55,.15)" />
        <path d="M9 15l6.2-6.2M11 8.8h4.2V13" stroke="#ff8a5c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (key.includes('linux')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.5 18.5c-1.5 0-2.5-1.2-2.2-2.8l1-4.8C7.6 6.8 9.4 4 12 4s4.4 2.8 4.7 6.9l1 4.8c.3 1.6-.7 2.8-2.2 2.8" />
        <path d="M9 19.5c1 .6 2 .6 3 0 1 .6 2 .6 3 0" />
        <circle cx="10.4" cy="8.5" r=".7" fill="currentColor" />
        <circle cx="13.6" cy="8.5" r=".7" fill="currentColor" />
      </svg>
    )
  }

  if (key.includes('rest api')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 7 4 12l4 5M16 7l4 5-4 5M13.5 5.5l-3 13" />
      </svg>
    )
  }

  if (key.includes('asynchronous')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 8h13l-2.5-2.5M20 16H7l2.5 2.5" />
      </svg>
    )
  }

  // Architecture / generic technical icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1.2" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" />
      <rect x="9" y="14" width="6" height="6" rx="1.2" />
      <path d="M7 10v2h10v-2M12 12v2" />
    </svg>
  )
}
