import { feedbacks } from '@/data/feedbacks'
import styles from './Feedbacks.module.css'

export default function Feedbacks() {
  return (
    <section className={styles.feedbacks}>
      <div className="container">
        <h2 className={`${styles.h2} reveal`}>O que dizem nossos clientes</h2>
        <div className={styles.grid}>
          {feedbacks.map((fb, i) => (
            <div key={i} className={`${styles.card} reveal`}>
              {fb.logo && (
                <div className={styles.logoWrap}>
                  <img
                    src={fb.logo}
                    alt={fb.from}
                    className={`${styles.logo} ${fb.logoVariant === 'solid' ? styles.logoSolid : styles.logoLine}`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      ...(fb.logoScale ? { maxWidth: `${140 * fb.logoScale}px` } : {}),
                      ...(fb.scale    ? { transform: `scale(${fb.scale})`, transformOrigin: 'left center' } : {}),
                    }}
                  />
                </div>
              )}
              <p className={styles.text}>{fb.text}</p>
              <div className={styles.from}>{fb.from}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
