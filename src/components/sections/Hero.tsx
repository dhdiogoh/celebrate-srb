import { useHeroAnimation } from '@/hooks/useHeroAnimation'
import { buildWhatsAppUrl, WA_MESSAGES } from '@/utils/whatsapp'
import ScrollLine from '@/components/ui/ScrollLine'
import { IMAGES } from '@/config/imagens'
import styles from './Hero.module.css'

type HeroVariant = 'home' | 'corporativos' | 'quinze-anos'

interface HeroProps {
  variant?: HeroVariant
  children?: React.ReactNode
}

const heroConfig = {
  home: {
    imageSrc: IMAGES.home.hero,
    imageAlt: 'Celebrate by Sushi Ruy Barbosa',
    ctaHref: buildWhatsAppUrl(WA_MESSAGES.orcamentoGeral),
    ctaLabel: 'Solicitar Orçamento',
  },
  corporativos: {
    imageSrc: IMAGES.corporativos.hero,
    imageAlt: 'Eventos Corporativos Celebrate',
    ctaHref: buildWhatsAppUrl(WA_MESSAGES.orcamentoCorporativo),
    ctaLabel: 'Solicitar Proposta',
  },
  'quinze-anos': {
    imageSrc: IMAGES.quinzeAnos.hero,
    imageAlt: 'Festa de 15 Anos no Celebrate',
    ctaHref: buildWhatsAppUrl(WA_MESSAGES.orcamento15anos),
    ctaLabel: 'Planejar a festa',
  },
}

export default function Hero({ variant = 'home', children }: HeroProps) {
  useHeroAnimation(variant)

  const cfg = heroConfig[variant]

  return (
    <section className={styles.hero} data-variant={variant}>
      {/* hero-img-wrap é o selector global que o useHeroAnimation usa para o zoom */}
      <div className={`${styles.imgWrap} hero-img-wrap`}>
        {(cfg.imageSrc as string) ? (
          <img
            src={cfg.imageSrc}
            alt={cfg.imageAlt}
            fetchPriority="high"
            decoding="async"
          />
        ) : (
          <div className="photo-placeholder">{cfg.imageAlt}</div>
        )}
      </div>
      <div className={styles.overlay} />

      <div className={`${styles.content}${children ? ` ${styles.contentWithTicker}` : ''}`}>
        {variant === 'home' ? (
          <>
            {/* h1 semântico com a logo real — hero-wordmark para a animação GSAP */}
            <h1 className={`${styles.logoWrap} hero-wordmark`}>
              <img
                src="/images/logos/logo-celebrate-hero-gem.png"
                alt="Celebrate by Sushi Ruy Barbosa"
                className={styles.logo}
                fetchPriority="high"
                decoding="async"
              />
            </h1>
            <p className={`${styles.sub} hero-sub`}>
              A excelência que você conhece<br />com a praticidade que você procura.
            </p>
          </>
        ) : variant === 'corporativos' ? (
          <>
            <div className={`${styles.logoWrap} hero-wordmark`}>
              <img
                src="/images/logos/logo-celebrate-hero-gem.png"
                alt="Celebrate by Sushi Ruy Barbosa"
                className={`${styles.logo} ${styles.logoSmall}`}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <h1 className={`${styles.title} hero-title`}>
              Corporativos
            </h1>
            <p className={`${styles.sub} hero-sub`}>
              Estrutura completa, atendimento premium e gastronomia assinada pelo Sushi Ruy Barbosa para o evento da sua empresa.
            </p>
          </>
        ) : (
          <>
            <div className={`${styles.badgeScript} hero-badge`}>Uma noite que ninguém vai esquecer</div>
            <div className={`${styles.wordmarkSmall} hero-wordmark`}>Celebrate</div>
            <h1 className={`${styles.title} hero-title`}>15 Anos</h1>
            <p className={`${styles.sub} hero-sub`}>
              Viva o momento. Deixe a gente cuidar de tudo com o padrão Sushi Ruy Barbosa.
            </p>
          </>
        )}

        <a href={cfg.ctaHref} className={`${styles.cta} hero-cta`} target="_blank" rel="noopener noreferrer">
          {cfg.ctaLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>

      {children && (
        <div className={styles.heroBottom}>
          <p className={styles.heroTickerLabel}>Marcas que confiam no Celebrate</p>
          {children}
        </div>
      )}

      <ScrollLine />
    </section>
  )
}
