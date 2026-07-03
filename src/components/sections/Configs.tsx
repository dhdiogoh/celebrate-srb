import { configCards } from '@/data/configs'
import { IMAGES } from '@/config/imagens'
import styles from './Configs.module.css'

export default function Configs() {
  return (
    <section className={styles.configs}>
      <div className="container">
        <h2 className={`${styles.h2} reveal`}>Duas configurações para a festa perfeita</h2>
        <div className={styles.grid}>
          {configCards.map((card) => (
            <div key={card.tag} className={`${styles.card} reveal`}>
              <div className={styles.imgWrap}>
                {IMAGES.quinzeAnos.configs[card.imageIndex] ? (
                  <img
                    src={IMAGES.quinzeAnos.configs[card.imageIndex]}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="photo-placeholder">{card.imageAlt}</div>
                )}
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tag}>{card.tag}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
