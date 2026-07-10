import { useState, useCallback, useRef, useEffect } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './GaleriaSlider.module.css'

interface GaleriaSliderProps {
  images: string[]
  label?: string
  title?: string
  positions?: Record<number, string>
}

export default function GaleriaSlider({ images, label, title, positions }: GaleriaSliderProps) {
  const [current, setCurrent] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const thumbsRef = useRef<HTMLDivElement>(null)

  const resetTimer = useCallback(() => setResetKey(k => k + 1), [])

  const prev = useCallback(() => {
    setCurrent(i => (i - 1 + images.length) % images.length)
    resetTimer()
  }, [images.length, resetTimer])

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % images.length)
    resetTimer()
  }, [images.length, resetTimer])

  // Autoplay — pauses when modal is open or on hover
  useEffect(() => {
    if (paused || isOpen) return
    const id = setInterval(() => setCurrent(i => (i + 1) % images.length), 4500)
    return () => clearInterval(id)
  }, [paused, isOpen, images.length, resetKey])

  // Scroll active thumbnail into view inside modal
  useEffect(() => {
    const container = thumbsRef.current
    if (!container) return
    const active = container.querySelector<HTMLElement>('[data-active="true"]')
    if (active) active.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' })
  }, [current])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <section
        className={styles.section}
        id="galeria-home"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="container">
          {(label || title) && (
            <div className={`${styles.header} reveal`}>
              {label && <SectionLabel>{label}</SectionLabel>}
              {title && <h2 className={styles.h2}>{title}</h2>}
            </div>
          )}

          <div className={`${styles.slide} reveal`}>
            <div className={styles.slideImgWrap} key={current}>
              <img
                src={images[current]}
                alt={`Galeria ${current + 1}`}
                className={styles.slideImg}
                style={positions?.[current] ? { objectPosition: positions[current] } : undefined}
                loading="eager"
                decoding="async"
              />
            </div>

            <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Foto anterior">‹</button>
            <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Próxima foto">›</button>

            <button
              className={styles.expandBtn}
              onClick={() => setIsOpen(true)}
              aria-label="Expandir galeria"
            >
              <ExpandIcon />
            </button>

            <div className={styles.counter}>{current + 1} / {images.length}</div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
        >
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Fechar">
              ✕
            </button>

            <div className={styles.modalInner}>
              {/* Imagem principal */}
              <div className={styles.modalMain}>
                <div className={styles.modalImgWrap} key={current}>
                  <img
                    src={images[current]}
                    alt={`Galeria ${current + 1}`}
                    className={styles.modalImg}
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Foto anterior">‹</button>
                <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Próxima foto">›</button>
                <div className={styles.counter}>{current + 1} / {images.length}</div>
              </div>

              {/* Grade de miniaturas */}
              <div className={styles.thumbs} ref={thumbsRef}>
                {images.map((src, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb}${i === current ? ` ${styles.thumbActive}` : ''}`}
                    onClick={() => { setCurrent(i); resetTimer() }}
                    data-active={i === current}
                    aria-label={`Ver foto ${i + 1}`}
                  >
                    <img src={src} alt="" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ExpandIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  )
}
