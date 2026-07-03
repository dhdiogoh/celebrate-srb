import { comoFunciona } from '@/data/comoFunciona'
import styles from './ComoFunciona.module.css'

export default function ComoFunciona() {
  return (
    <section className={styles.como}>
      <div className="container">
        <div className={styles.grid}>
          <div className="reveal">
            <h2 className={styles.h2}>Como funciona?</h2>
            <p className={styles.sub}>Simples assim: você escolhe, a gente cuida de tudo.</p>
          </div>
          <div className={`${styles.steps} reveal`}>
            {comoFunciona.map((step, i) => (
              <div key={step.num} className={`${styles.step}${i === comoFunciona.length - 1 ? ` ${styles.stepLast}` : ''}`}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <div className={styles.stepDesc}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
