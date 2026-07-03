import type { IntroData } from '@/data/intro'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './Intro.module.css'

interface IntroProps extends IntroData {
  image: string
}

export default function Intro({ label, title, text, image, imageAlt, stats }: IntroProps) {
  return (
    <section className={styles.intro} id="intro">
      <div className="container">
        <div className={`${styles.imgWrap} reveal`}>
          {image ? (
            <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
          ) : (
            <div className="photo-placeholder">{imageAlt}</div>
          )}
        </div>

        <div className={styles.bottom}>
          <div className={`${styles.content} reveal`}>
            <SectionLabel>{label}</SectionLabel>
            <h2 className={styles.h2}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>

          <ul className={styles.stats} aria-label="Números do espaço">
            {stats.map((s) => (
              <li key={s.value} className={`${styles.stat} reveal`}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
