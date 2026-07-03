import { Link } from 'react-router-dom'
import { useFooterReveal } from '@/hooks/useGsapReveal'
import { SITE } from '@/config/site'
import styles from './Footer.module.css'

export default function Footer() {
  useFooterReveal()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.wordmark} footer-wordmark`}>
        <span className={`${styles.wordmarkInner} footer-wordmark-inner`}>CELEBRATE</span>
      </div>

      <div className={styles.info}>
        <div>
          <img src="/images/logos/logo-celebrate-hero-gem.png" alt="Celebrate" className={styles.footerLogo} />
        </div>

        <div className={styles.contacts}>
          <div className={styles.contactItem}>
            <a href={`https://wa.me/${SITE.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              +55 (91) 99331-8434
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href={SITE.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              {SITE.INSTAGRAM_HANDLE}
            </a>
          </div>
          <div className={styles.contactItem}>
            Trav. Alm. Wandenkolk, 666 — Umarizal, Belém/PA
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Celebrate by Sushi Ruy Barbosa. Todos os direitos reservados.
        </span>
        <nav className={styles.subLinks} aria-label="Links do rodapé">
          <Link to="/">Home</Link>
          <Link to="/eventos-corporativos">Corporativo</Link>
          <Link to="/15-anos">15 Anos</Link>
        </nav>
      </div>
    </footer>
  )
}
