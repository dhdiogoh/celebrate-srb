import { segmentos } from '@/data/segmentos'
import Icon from '@/components/ui/Icon'
import styles from './Segmentos.module.css'

export default function Segmentos() {
  return (
    <section className={styles.segmentos}>
      <div className="container">
        <h2 className={`${styles.h2} reveal`}>Cada momento merece o padrão SRB</h2>
        <div className={styles.grid}>
          {segmentos.map((seg) => (
            <div key={seg.name} className={`${styles.item} reveal`}>
              <div className={styles.icon} aria-hidden="true">
                <Icon name={seg.icon} size={22} />
              </div>
              <div className={styles.name}>{seg.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
