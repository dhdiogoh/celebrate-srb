import { tiposCorporativos } from '@/data/segmentos'
import Icon from '@/components/ui/Icon'
import styles from './Tipos.module.css'

export default function Tipos() {
  return (
    <section className={styles.tipos}>
      <div className="container">
        <h2 className={`${styles.h2} reveal`}>Ideal para qualquer formato de evento</h2>
        <div className={styles.grid}>
          {tiposCorporativos.map((tipo) => (
            <div key={tipo.name} className={`${styles.item} reveal`}>
              <div className={styles.icon} aria-hidden="true">
                <Icon name={tipo.icon} size={22} />
              </div>
              <div className={styles.name}>{tipo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
