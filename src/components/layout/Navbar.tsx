import { Link, useLocation } from 'react-router-dom'
import { buildWhatsAppUrl, WA_MESSAGES } from '@/utils/whatsapp'
import styles from './Navbar.module.css'

type NavVariant = 'home' | 'corporativos' | 'quinze-anos'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  variant?: NavVariant
  links?: NavLink[]
  ctaLabel?: string
  ctaMessage?: string
}

const defaultLinks: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Gastronomia', href: '#gastronomia' },
  { label: 'Pacotes', href: '#pacotes-home' },
  { label: 'Simulador', href: '#simulador' },
]

const audienceLinks = [
  { label: 'Corporativos', to: '/eventos-corporativos' },
  { label: '15 Anos', to: '/15-anos' },
]

const NAVBAR_OFFSET = 80

function scrollToAnchor(href: string) {
  if (!href.startsWith('#')) return
  const el = document.getElementById(href.slice(1))
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
  const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window
  if (isMobile) {
    window.scrollTo({ top: y, behavior: 'smooth' })
  } else {
    window.dispatchEvent(new CustomEvent('celebrate:scrollTo', { detail: { y } }))
  }
}

export default function Navbar({
  variant = 'home',
  links = defaultLinks,
  ctaLabel = 'Solicitar Orçamento',
  ctaMessage = WA_MESSAGES.orcamentoGeral,
}: NavbarProps) {
  const waUrl = buildWhatsAppUrl(ctaMessage)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // suppress unused warning — variant kept for future use (e.g. theming)
  void variant

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isHome) return
    e.preventDefault()
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.dispatchEvent(new CustomEvent('celebrate:scrollTo', { detail: { y: 0 } }))
    }
  }

  return (
    <nav className={styles.navbar} aria-label="Navegação principal">
      <Link to="/" className={styles.navLogo} aria-label="Celebrate — ir para a Home" onClick={handleLogoClick}>
        <img src="/images/logos/logo-celebrate-2.webp" alt="Celebrate" className={styles.navLogoImg} />
      </Link>

      {links.length > 0 && (
        <ul className={styles.navLinks} role="list">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={e => { e.preventDefault(); scrollToAnchor(link.href) }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <span className={styles.navSep} aria-hidden="true" />

      <ul className={styles.navAudience} role="list">
        {audienceLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className={`${styles.navAudienceLink}${pathname === link.to ? ` ${styles.navAudienceActive}` : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <a href={waUrl} className={styles.navCta} target="_blank" rel="noopener noreferrer">
        {ctaLabel}
      </a>
    </nav>
  )
}
