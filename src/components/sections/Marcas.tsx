import type { Marca } from '@/data/types'
import LogoTicker from '@/components/ui/LogoTicker'
import styles from './Marcas.module.css'

interface MarcasProps {
  marcas: Marca[]
  title?: string
  subtitle?: string
  showCorpLink?: boolean
}

export default function Marcas({
  marcas,
  title = 'Empresas e marcas que confiam no Celebrate',
  subtitle = 'Mais de 30 marcas nacionais e internacionais já realizaram seus eventos no Celebrate.',
  showCorpLink = false,
}: MarcasProps) {
  return (
    <section className={styles.marcas}>
      <div className="container">
        <h2 className={`${styles.h2} reveal`}>{title}</h2>
        <p className={`${styles.sub} reveal`}>{subtitle}</p>
      </div>

      <div className="reveal">
        <LogoTicker marcas={marcas} />
      </div>

      {showCorpLink && (
        <div className={styles.corpLinkWrap}>
          <a href="/eventos-corporativos" className={`${styles.corpLink} reveal`}>
            Saiba mais sobre Eventos Corporativos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      )}
    </section>
  )
}
