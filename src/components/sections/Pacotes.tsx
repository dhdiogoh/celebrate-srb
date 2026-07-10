import { pacotes as defaultPacotes } from '@/data/pacotes'
import type { Pacote } from '@/data/types'
import styles from './Pacotes.module.css'

interface PacotesProps {
  data?: Pacote[]
  title?: string
  subtitle?: string
  showPrices?: boolean
}

export default function Pacotes({
  data = defaultPacotes,
  title = 'Escolha o pacote ideal para seu evento',
  subtitle = 'Valores estimados para 100 pessoas. Solicite proposta para o número exato de convidados.',
  showPrices = true,
}: PacotesProps) {
  return (
    <section className={styles.pacotes} id="pacotes">
      <div className="container">
        <div className={styles.top}>
          <h2 className={`${styles.h2} reveal`}>{title}</h2>
          <p className={`${styles.sub} reveal`}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {data.map((p) => (
            <div
              key={p.id}
              className={`${styles.card}${p.isDestaque ? ` ${styles.destaque}` : ''} reveal`}
            >
              {p.isDestaque && <span className={styles.destaqueTag}>MAIS COMPLETO</span>}
              <div className={styles.name}>{p.name}</div>
              <div className={styles.tipo}>{p.tipo}</div>
              {showPrices && (
                <>
                  <div className={styles.price}>R$ {p.pricePerPax}</div>
                  <div className={styles.priceSub}>{p.priceSub}</div>
                </>
              )}
              <div className={styles.divider} />
              <ul className={styles.items} aria-label={`Itens do pacote ${p.name}`}>
                {p.items.map((item) => (
                  <li key={item} className={styles.item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
