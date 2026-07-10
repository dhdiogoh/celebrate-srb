import type { Marca } from '@/data/types'
import styles from './LogoTicker.module.css'

interface LogoTickerProps {
  marcas: Marca[]
  compact?: boolean
}

export default function LogoTicker({ marcas, compact }: LogoTickerProps) {
  const items = [...marcas, ...marcas]

  return (
    <div className={`${styles.wrap}${compact ? ` ${styles.wrapCompact}` : ''}`}>
      <div className={styles.track}>
        {items.map((m, i) => (
          <div key={i} className={styles.item}>
            {m.logo
              ? <img
                  src={m.logo}
                  alt={m.name}
                  className={styles.logo}
                  style={m.scale && m.scale !== 1 ? { transform: `scale(${m.scale})` } : undefined}
                />
              : <span className={styles.name}>{m.name}</span>
            }
          </div>
        ))}
      </div>
    </div>
  )
}
