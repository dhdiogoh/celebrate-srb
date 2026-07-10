import styles from './GaleriaFotos.module.css'

interface GaleriaFotosProps {
  images?: string[]
  label?: string
  title?: string
}

const PLACEHOLDER_COUNT = 8

export default function GaleriaFotos({ images, label = 'Galeria', title }: GaleriaFotosProps) {
  const items = images && images.length > 0 ? images : Array(PLACEHOLDER_COUNT).fill('')

  return (
    <section className={styles.galeria} id="galeria">
      {(label || title) && (
        <div className="container">
          <div className={`${styles.header} reveal`}>
            {label && <p className={styles.label}>{label}</p>}
            {title && <h2 className={styles.h2}>{title}</h2>}
          </div>
        </div>
      )}

      <div className={styles.strip}>
        <div className={styles.track}>
          {[...items, ...items].map((src, i) => (
            <div key={i} className={styles.item}>
              {src ? (
                <img src={src} alt={`Galeria ${(i % items.length) + 1}`} loading="lazy" decoding="async" />
              ) : (
                <div className={styles.placeholder} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
