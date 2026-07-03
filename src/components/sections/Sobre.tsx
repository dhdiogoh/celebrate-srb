import { useRef, useState, useLayoutEffect, useCallback } from 'react'
import gsap from 'gsap'
import { IMAGES } from '@/config/imagens'
import styles from './Sobre.module.css'

const SLIDES       = IMAGES.home.sobre   // readonly [string, string, string, string]
const TOTAL        = SLIDES.length
const AUTO_DELAY   = 4.5                 // segundos entre trocas automáticas
const KB_DURATION  = 12                  // Ken Burns: zoom lento (em segundos)

/** object-position por slide — ajuste fino de enquadramento */
const POSITIONS: string[] = [
  'center 40%',   // IMG_0234
  'center 85%',   // IMG_0202 — mostrar cadeiras (parte baixa)
  'center 70%',   // IMG_0129
  'center 90%',   // IMG_0218
]

export default function Sobre() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const slideRefs  = useRef<(HTMLDivElement | null)[]>([])
  const currentRef = useRef(0)
  const timerRef   = useRef<gsap.core.Tween | null>(null)
  const scheduleRef = useRef<(() => void) | null>(null)
  const [dot, setDot] = useState(0)

  const goTo = useCallback((next: number, dir: 1 | -1 = 1) => {
    const cur   = currentRef.current
    if (next === cur) return
    const curEl  = slideRefs.current[cur]
    const nextEl = slideRefs.current[next]
    if (!curEl || !nextEl) return

    const curImg  = curEl.querySelector<HTMLImageElement>('img')
    const nextImg = nextEl.querySelector<HTMLImageElement>('img')

    if (curImg)  gsap.killTweensOf(curImg)
    gsap.killTweensOf(curEl)
    gsap.killTweensOf(nextEl)

    // Sai: empurra para o lado + encolhe + some
    gsap.to(curEl, {
      x: dir * -90, scale: 0.93, autoAlpha: 0,
      duration: 0.55, ease: 'power2.in',
    })

    // Entra: vem do lado oposto, expande até o lugar
    gsap.fromTo(
      nextEl,
      { x: dir * 90, scale: 1.06, autoAlpha: 0 },
      {
        x: 0, scale: 1, autoAlpha: 1,
        duration: 0.7, ease: 'power3.out', delay: 0.12,
        onComplete() {
          // Ken Burns no slide recém-ativo
          if (nextImg) gsap.fromTo(nextImg, { scale: 1 }, { scale: 1.08, duration: KB_DURATION, ease: 'none' })
        },
      },
    )

    currentRef.current = next
    setDot(next)
  }, [])

  useLayoutEffect(() => {
    // ── Inicializa estados GSAP ──────────────────────────────────────
    slideRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === 0) {
        gsap.set(el, { autoAlpha: 1, scale: 1, x: 0 })
        const img = el.querySelector<HTMLImageElement>('img')
        if (img) gsap.fromTo(img, { scale: 1 }, { scale: 1.08, duration: KB_DURATION, ease: 'none' })
      } else {
        gsap.set(el, { autoAlpha: 0, scale: 1, x: 0 })
      }
    })

    // ── schedule: (re)inicia o timer de auto-play ────────────────────
    function schedule() {
      timerRef.current?.kill()
      timerRef.current = gsap.delayedCall(AUTO_DELAY, () => {
        goTo((currentRef.current + 1) % TOTAL, 1)
        schedule()
      })
    }
    scheduleRef.current = schedule

    // ── IntersectionObserver: só ativa quando a seção está visível ───
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          schedule()            // (re)inicia ao entrar na viewport
        } else {
          timerRef.current?.kill() // pausa ao sair
        }
      }
    }, { threshold: 0.15 })

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
      timerRef.current?.kill()
      slideRefs.current.forEach(el => {
        if (!el) return
        gsap.killTweensOf(el)
        const img = el.querySelector('img')
        if (img) gsap.killTweensOf(img)
      })
    }
  }, [goTo])

  function handlePrev() {
    timerRef.current?.kill()
    goTo((currentRef.current - 1 + TOTAL) % TOTAL, -1)
    scheduleRef.current?.()
  }

  function handleNext() {
    timerRef.current?.kill()
    goTo((currentRef.current + 1) % TOTAL, 1)
    scheduleRef.current?.()
  }

  function handleDot(i: number) {
    timerRef.current?.kill()
    goTo(i, i > currentRef.current ? 1 : -1)
    scheduleRef.current?.()
  }

  return (
    <section className={styles.sobre} id="sobre" ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>

          {/* ── Slider ──────────────────────────────────────────────── */}
          <div className={`${styles.sliderWrap} reveal`}>
            <div className={styles.slides}>
              {[...SLIDES].map((src, i) => (
                <div
                  key={i}
                  className={styles.slide}
                  ref={(el) => { slideRefs.current[i] = el }}
                >
                  <img
                    src={src}
                    alt={`Celebrate — espaço de eventos ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{ objectPosition: POSITIONS[i] }}
                  />
                </div>
              ))}
            </div>

            {/* Setas */}
            <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={handlePrev} aria-label="Imagem anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={handleNext} aria-label="Próxima imagem">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className={styles.dots} aria-hidden="true">
              {[...SLIDES].map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot}${dot === i ? ` ${styles.dotActive}` : ''}`}
                  onClick={() => handleDot(i)}
                  aria-label={`Ir para imagem ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Texto ────────────────────────────────────────────────── */}
          <div className={`${styles.content} reveal`}>
            <h2 className={styles.h2}>Transformamos momentos em memórias inesquecíveis</h2>
            <p className={styles.text}>
              O Celebrate surgiu da demanda dos nossos clientes em terem a experiência Sushi Ruy Barbosa na sua celebração. Buscamos as principais referências do mercado para aprimorar o ramo de eventos.
            </p>
            <p className={styles.text}>
              O conceito foi pensado nos mínimos detalhes para oferecer o que temos de melhor: gastronomia, serviços, atendimento, infraestrutura e ambiente, tudo de alto padrão.
            </p>
            <div className={styles.tagline}>Let's Celebrate.</div>
          </div>

        </div>
      </div>
    </section>
  )
}
