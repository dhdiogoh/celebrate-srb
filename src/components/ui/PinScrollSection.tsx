import { useRef } from 'react'
import { usePinScroll } from '@/hooks/usePinScroll'
import type { PinScrollStep, IconName } from '@/data/types'
import Icon from '@/components/ui/Icon'
import styles from './PinScrollSection.module.css'

interface PinScrollSectionProps {
  sectionId: string
  stickyId: string
  fillId: string
  stepPrefix: string
  fotoPrefix: string
  steps: PinScrollStep[]
  images: string[]
  scrollMultiplier?: number
  dotIcons?: IconName[]
  positions?: Record<number, string>
}

export default function PinScrollSection({
  sectionId,
  stickyId,
  fillId,
  stepPrefix,
  fotoPrefix,
  steps,
  images,
  scrollMultiplier,
  dotIcons,
  positions,
}: PinScrollSectionProps) {
  const navRef  = useRef<HTMLElement | null>(null)
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([])

  const { scrollToStep } = usePinScroll({
    sectionId,
    stickyId,
    fillId,
    stepPrefix,
    fotoPrefix,
    total: steps.length,
    scrollMultiplier,
    onStepChange: dotIcons ? (idx) => {
      dotRefs.current.forEach((btn, i) => {
        if (btn) btn.dataset.active = String(i === idx)
      })
      if (idx === steps.length - 1 && navRef.current) {
        navRef.current.dataset.unlocked = 'true'
      }
    } : undefined,
    onEnter: dotIcons ? () => { if (navRef.current) navRef.current.dataset.visible = 'true'  } : undefined,
    onLeave: dotIcons ? () => { if (navRef.current) navRef.current.dataset.visible = 'false' } : undefined,
  })

  return (
    <div id={`${sectionId}-pin-wrap`} className={styles.pinWrap}>
      <div className={styles.sticky} id={stickyId}>

        {/* ── Lado esquerdo: progress bar + steps ── */}
        <div className={styles.stickyText}>

          {/* Progress bar — fora do container absoluto dos steps */}
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              id={fillId}
              style={{ width: `${(1 / steps.length) * 100}%` }}
            />
          </div>

          {/* Steps — posicionados absolutamente dentro de stepsWrap,
              que começa DEPOIS da progress bar no fluxo */}
          <div className={styles.stepsWrap}>
            {steps.map((step, i) => (
              <div
                key={i}
                className={styles.step}
                id={`${stepPrefix}${i + 1}`}
                style={i === 0 ? undefined : { visibility: 'hidden', opacity: 0 }}
              >
                <span className={styles.stepNum}>{step.num}</span>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Lado direito: fotos ── */}
        <div className={styles.fotos}>
          {images.map((src, i) => (
            <div
              key={i}
              className={styles.foto}
              id={`${fotoPrefix}${i + 1}`}
              style={i === 0 ? undefined : { visibility: 'hidden', opacity: 0 }}
            >
              {src ? (
                <img src={src} alt={steps[i]?.imageAlt ?? ''} loading="lazy" decoding="async" style={positions?.[i] ? { objectPosition: positions[i] } : undefined} />
              ) : (
                <div className="photo-placeholder">{steps[i]?.imageAlt}</div>
              )}
            </div>
          ))}
        </div>

      </div>

      {dotIcons && (
        <nav
          ref={navRef}
          className={styles.dotsNav}
          data-visible="false"
          data-unlocked="false"
          aria-label="Navegar entre pins"
        >
          <div className={styles.dotsTrack} aria-hidden="true" />
          {steps.map((step, i) => (
            <button
              key={i}
              ref={(el) => { dotRefs.current[i] = el }}
              className={styles.dotBtn}
              data-active={String(i === 0)}
              onClick={() => scrollToStep(i)}
              data-label={step.imageAlt}
              aria-label={`Ir para ${step.title}`}
            >
              <Icon name={dotIcons[i]} size={13} />
            </button>
          ))}
        </nav>
      )}

    </div>
  )
}
