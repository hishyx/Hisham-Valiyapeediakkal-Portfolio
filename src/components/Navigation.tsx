import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Home', '#top'], ['Projects', '#work'], ['Skills', '#skills'], ['About', '#about'], ['Education', '#education'], ['Contact', '#contact'],
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return <header className="site-nav">
    <a className="nav-name" href="#top" onClick={close}>Hisham <span>Valiyapeediakkal</span></a>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
      <a className="nav-resume" href="/Hisham_Valiyapeediakkal_Resume.pdf" target="_blank" rel="noreferrer" onClick={close}>Resume <span aria-hidden="true">↗</span></a>
    </nav>
    <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>
}
