import styles from './GrupoSRB.module.css'

const numeros = [
  { value: '15', label: 'anos de mercado' },
  { value: '7',  label: 'prêmios regionais' },
  { value: '3',  label: 'unidades em Belém' },
]

export default function GrupoSRB() {
  return (
    <section className={styles.grupo}>
      <div className="container">
        <div className={styles.grid}>
          <div className="reveal">
            <div className="section-label" style={{ color: 'var(--mid)' }}>Grupo SRB</div>
            <h2 className={styles.h2}>Do balcão de sushi ao salão de eventos</h2>
            <p className={styles.text}>
              O Grupo SRB nasceu na Sushi Ruy Barbosa Matriz, no polo de arquitetura e design da cidade, e hoje soma a unidade do Boulevard Shopping e o SRB Togo. Por trás de cada prato está um centro de distribuição próprio, onde os insumos são tratados e verificados antes de chegar às lojas. O Celebrate é esse mesmo padrão chegando agora ao segmento de eventos.
            </p>
          </div>
          <div className={`${styles.numeros} reveal`}>
            {numeros.map((n) => (
              <div key={n.label} className={styles.numero}>
                <div className={styles.numeroVal}>{n.value}</div>
                <div className={styles.numeroLabel}>{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
