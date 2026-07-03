import { IMAGES } from '@/config/imagens'
import { SITE } from '@/config/site'
import styles from './Endereco.module.css'

interface EnderecoProps {
  imageSrc?: string
}

export default function Endereco({ imageSrc }: EnderecoProps) {
  const img = imageSrc ?? IMAGES.shared.mapa

  return (
    <section className={styles.endereco}>
      <div className={styles.imgWrap}>
        {img ? (
          <img src={img} alt="Celebrate - Localização em Belém" loading="lazy" decoding="async" />
        ) : (
          <div className="photo-placeholder">foto · fachada Celebrate</div>
        )}
      </div>
      <div className={styles.overlay} />
      <div className={`${styles.content} reveal`}>
        <div className={styles.label}>Onde nos encontrar</div>
        <h2 className={styles.title}>Umarizal, Belém</h2>
        <p className={styles.addr}>
          Tv. Alm. Wandenkolk, 666<br />
          Nazaré, Belém — PA<br />
          66055-030
        </p>
        <a
          href={SITE.MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Ver no Google Maps
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </section>
  )
}
