import { useState } from 'react'
import { usePinScroll } from '@/hooks/usePinScroll'
import { pacotes } from '@/data/pacotes'
import { IMAGES } from '@/config/imagens'
import { formatBRL } from '@/utils/formatBRL'
import Icon from '@/components/ui/Icon'
import type { IconName } from '@/data/types'
import styles from './PacotesPinScroll.module.css'

const DOT_ICONS: IconName[] = ['coffee', 'users', 'star', 'award']

const SECTION_ID  = 'pacotes-home'
const STICKY_ID   = 'pacotes-home-sticky'
const FILL_ID     = 'pacotes-home-fill'
const STEP_PREFIX = 'ph-step-'
const FOTO_PREFIX = 'ph-foto-'

export default function PacotesPinScroll() {
  const [activeDot, setActiveDot]       = useState(0)
  const [sectionActive, setSectionActive] = useState(false)
  const [dotsUnlocked, setDotsUnlocked]  = useState(false)

  const { scrollToStep } = usePinScroll({
    sectionId: SECTION_ID,
    stickyId: STICKY_ID,
    fillId: FILL_ID,
    stepPrefix: STEP_PREFIX,
    fotoPrefix: FOTO_PREFIX,
    total: pacotes.length,
    scrollMultiplier: 3,
    onStepChange: (idx) => {
      setActiveDot(idx)
      if (idx === pacotes.length - 1) setDotsUnlocked(true)
    },
    onEnter: () => setSectionActive(true),
    onLeave: () => setSectionActive(false),
  })

  return (
    <section id={SECTION_ID} className={styles.section} aria-label="Pacotes de buffet">
      <div className="container" style={{ paddingBlock: 'var(--section-pad-md)' }}>
        <div className={styles.pinWrap}>
          <div className={styles.sticky} id={STICKY_ID}>

            {/* ── Texto: progress bar + steps ── */}
            <div className={styles.stickyText}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  id={FILL_ID}
                  style={{ width: `${(1 / pacotes.length) * 100}%` }}
                />
              </div>

              <div className={styles.stepsWrap}>
                {pacotes.map((p, i) => (
                  <div
                    key={p.id}
                    className={styles.step}
                    id={`${STEP_PREFIX}${i + 1}`}
                    style={i === 0 ? undefined : { visibility: 'hidden', opacity: 0 }}
                  >
                    <div className={styles.stepHead}>
                      <span className={styles.stepNum}>{`0${i + 1} / 0${pacotes.length}`}</span>
                      {p.isDestaque && <span className={styles.tag}>Mais completo</span>}
                    </div>

                    <h2 className={styles.name}>{p.name}</h2>
                    <p className={styles.indicacao}>{p.indicacao}</p>
                    <div className={styles.tipo}>{p.tipo}</div>

                    <div className={styles.priceRow}>
                      <span className={styles.price}>{formatBRL(p.pricePerPax)}</span>
                      <span className={styles.priceUnit}>/pessoa</span>
                    </div>
                    <div className={styles.priceSub}>{p.priceSub}</div>

                    <ul className={styles.items} aria-label={`Itens do pacote ${p.name}`}>
                      {p.items.map(item => (
                        <li key={item} className={styles.item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Fotos ── */}
            <div className={styles.fotos}>
              {pacotes.map((p, i) => (
                <div
                  key={p.id}
                  className={styles.foto}
                  id={`${FOTO_PREFIX}${i + 1}`}
                  style={i === 0 ? undefined : { visibility: 'hidden', opacity: 0 }}
                >
                  {IMAGES.home.pacotes[i] ? (
                    <img src={IMAGES.home.pacotes[i]} alt={`Pacote ${p.name}`} loading="lazy" decoding="async" />
                  ) : (
                    <div className="photo-placeholder">foto · pacote {p.name}</div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      {/* ── Floating dots nav ── */}
      <nav
        className={`${styles.dotsNav}${sectionActive && dotsUnlocked ? ` ${styles.dotsNavVisible}` : ''}`}
        aria-label="Navegar entre pacotes"
      >
        <div className={styles.dotsTrack} aria-hidden="true" />
        {pacotes.map((p, i) => (
          <button
            key={p.id}
            className={`${styles.dotBtn}${activeDot === i ? ` ${styles.dotBtnActive}` : ''}`}
            onClick={() => scrollToStep(i)}
            data-label={p.name}
            aria-label={`Ir para pacote ${p.name}`}
          >
            <Icon name={DOT_ICONS[i]} size={13} />
          </button>
        ))}
      </nav>

    </section>
  )
}
