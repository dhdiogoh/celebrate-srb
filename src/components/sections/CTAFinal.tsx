import { buildWhatsAppUrl, WA_MESSAGES } from '@/utils/whatsapp'
import { SITE } from '@/config/site'
import styles from './CTAFinal.module.css'

interface CTAFinalProps {
  tagline?: string
  h2?: string
  sub?: string
  ctaLabel?: string
  ctaMessage?: string
  showInstagram?: boolean
}

export default function CTAFinal({
  tagline = "Let's Celebrate.",
  h2 = 'Viva o evento.\nNão a organização.',
  sub = 'O grande diferencial do Celebrate é que você não precisa se preocupar com nada. Está tudo incluso, com padrão SRB.',
  ctaLabel = 'Falar pelo WhatsApp',
  ctaMessage = WA_MESSAGES.orcamentoGeral,
  showInstagram = true,
}: CTAFinalProps) {
  const waUrl = buildWhatsAppUrl(ctaMessage)

  return (
    <section className={styles.ctaFinal}>
      <div className="container">
        <div className={styles.inner}>
          <div className={`${styles.tagline} reveal`}>{tagline}</div>
          <h2 className={`${styles.h2} reveal`}>
            {h2.split('\n').map((line, i) => (
              <span key={i}>{line}{i < h2.split('\n').length - 1 && <br />}</span>
            ))}
          </h2>
          <p className={`${styles.sub} reveal`}>{sub}</p>
          <div className={`${styles.btns} reveal`}>
            <a href={waUrl} className={styles.btnWa} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            {showInstagram && (
              <a href={SITE.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
                {SITE.INSTAGRAM_HANDLE}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
