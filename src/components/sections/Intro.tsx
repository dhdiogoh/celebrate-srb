import { useState, useEffect, useCallback } from 'react'
import type { IntroData } from '@/data/types'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './Intro.module.css'

interface IntroProps extends IntroData {
  image: string
  images?: string[]
  caption?: string
  imagePosition?: 'top' | 'bottom'
  layout?: 'default' | 'side'
}

export default function Intro({ label, title, text, image, imageAlt, stats, images, caption, imagePosition = 'top', layout = 'default' }: IntroProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const hasCarousel = images && images.length > 1

  const resetTimer = useCallback(() => setResetKey(k => k + 1), [])

  const next = useCallback(() => {
    if (!images) return
    setCurrent(i => (i + 1) % images.length)
    resetTimer()
  }, [images, resetTimer])

  const prev = useCallback(() => {
    if (!images) return
    setCurrent(i => (i - 1 + images.length) % images.length)
    resetTimer()
  }, [images, resetTimer])

  const goTo = useCallback((index: number) => {
    setCurrent(index)
    resetTimer()
  }, [resetTimer])

  useEffect(() => {
    if (!hasCarousel || paused) return
    const id = setInterval(() => {
      setCurrent(i => (i + 1) % images!.length)
    }, 4000)
    return () => clearInterval(id)
  }, [hasCarousel, paused, images, resetKey])

  const carouselInner = (wrapClass: string) => (
    <div
      className={`${wrapClass} reveal`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {hasCarousel ? (
        <>
          {images!.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={caption ?? imageAlt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={`${styles.carouselImg}${i === current ? ` ${styles.carouselImgActive}` : ''}`}
            />
          ))}
          <button className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`} onClick={prev} aria-label="Slide anterior">‹</button>
          <button className={`${styles.carouselBtn} ${styles.carouselBtnNext}`} onClick={next} aria-label="Próximo slide">›</button>
          <div className={styles.carouselDots} role="tablist">
            {images!.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot}${i === current ? ` ${styles.dotActive}` : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                role="tab"
                aria-selected={i === current}
              />
            ))}
          </div>
        </>
      ) : image ? (
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      ) : (
        <div className="photo-placeholder">{imageAlt}</div>
      )}
    </div>
  )

  const imageBlock = (
    <>
      {carouselInner(`${styles.imgWrap}${imagePosition === 'bottom' ? ` ${styles.imgWrapBottom}` : ''}`)}
      {caption && hasCarousel && (
        <p className={`${styles.carouselCaption} reveal`}>{caption}</p>
      )}
    </>
  )

  if (layout === 'side') {
    return (
      <section className={styles.intro} id="intro">
        <div className="container">
          <div className={styles.layoutSide}>
            <div className={styles.layoutSideLeft}>
              <div className={`${styles.content} reveal`}>
                <SectionLabel>{label}</SectionLabel>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.text}>{text}</p>
              </div>
              <ul className={styles.stats} aria-label="Números do espaço">
                {stats.map((s) => (
                  <li key={s.value} className={`${styles.stat} reveal`}>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.layoutSideRight}>
              {carouselInner(styles.imgWrapSide)}
              {caption && hasCarousel && (
                <p className={`${styles.carouselCaption} reveal`}>{caption}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.intro} id="intro">
      <div className="container">
        {imagePosition === 'top' && imageBlock}

        <div className={styles.bottom}>
          <div className={`${styles.content} reveal`}>
            <SectionLabel>{label}</SectionLabel>
            <h2 className={styles.h2}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>

          <ul className={styles.stats} aria-label="Números do espaço">
            {stats.map((s) => (
              <li key={s.value} className={`${styles.stat} reveal`}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {imagePosition === 'bottom' && imageBlock}
      </div>
    </section>
  )
}
