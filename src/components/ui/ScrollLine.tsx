import styles from './ScrollLine.module.css'

export default function ScrollLine() {
  return (
    <div className={`${styles.wrap} hero-scroll`} aria-hidden="true">
      <div className={styles.line} />
    </div>
  )
}
