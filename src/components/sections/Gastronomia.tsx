import { IMAGES } from '@/config/imagens'
import styles from './Gastronomia.module.css'

export default function Gastronomia() {
  return (
    <section className={styles.gastronomia} id="gastronomia">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.content} reveal`}>
            <h2 className={styles.h2}>15 anos de excelência no paladar paraense</h2>
            <p className={styles.text}>
              Ao longo dos últimos 15 anos, sempre nos esforçamos para trazer as principais inovações e tendências do mercado, inspirados pelos polos de gastronomia e mixologia ao redor do mundo.
            </p>
            <p className={styles.text}>
              Trabalhamos com ingredientes de alta qualidade, que são nossa marca registrada, juntamente com os drinks infusionados, exclusividade SRB.
            </p>
            <div className={styles.chefs}>
              <div className={styles.chefsLabel}>Chefs parceiros</div>
              <div className={styles.chefsNames}>
                Nao Hara · Pedro Frade · Marco de la Roche · Fabián Martinez<br />
                Kennedy Nascimento · Spencer Amereno
              </div>
            </div>
          </div>
          <div className={`${styles.imgWrap} reveal`}>
            {IMAGES.home.gastronomia ? (
              <img src={IMAGES.home.gastronomia} alt="Gastronomia Celebrate" loading="lazy" decoding="async" />
            ) : (
              <div className="photo-placeholder">foto · gastronomia</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
