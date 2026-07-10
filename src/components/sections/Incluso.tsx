import type { InclusoCard } from '@/data/types'
import Icon from '@/components/ui/Icon'
import styles from './Incluso.module.css'

interface InclusoProps {
  cards: InclusoCard[]
  title?: string
  subtitle?: string
  bgImage?: string
}

export default function Incluso({
  cards,
  title = 'Você chega. O evento já está pronto.',
  subtitle = 'Tudo incluso com padrão SRB. Sem precisar contratar buffet, garçons, limpeza, som ou equipe externa.',
  bgImage,
}: InclusoProps) {
  return (
    <section
      className={styles.incluso}
      id="incluso"
      style={bgImage ? { '--bg-img': `url(${bgImage})` } as React.CSSProperties : undefined}
    >
      <div className="container">
        <div className={styles.top}>
          <div>
            <h2 className={`${styles.h2} reveal`}>
              {title.split('. ').map((line, i, arr) => (
                <span key={i} className={styles.h2Line}>
                  {line}{i < arr.length - 1 ? '.' : ''}
                </span>
              ))}
            </h2>
          </div>
          {subtitle && <p className={`${styles.sub} reveal`}>{subtitle}</p>}
        </div>

        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.title} className={`${styles.card} reveal`}>
              <div className={styles.cardIcon} aria-hidden="true">
                <Icon name={card.icon} size={16} />
              </div>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDesc}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
