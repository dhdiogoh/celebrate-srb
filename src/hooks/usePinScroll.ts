import { useEffect, useRef, useCallback } from 'react'

export interface PinScrollOptions {
  sectionId: string
  stickyId: string
  fillId: string
  stepPrefix: string
  fotoPrefix: string
  total: number
  scrollMultiplier?: number
  onStepChange?: (idx: number) => void
  onEnter?: () => void
  onLeave?: () => void
}

export function usePinScroll(options: PinScrollOptions) {
  const { sectionId, stickyId, fillId, stepPrefix, fotoPrefix, total, scrollMultiplier } = options
  const mult = scrollMultiplier ?? (total <= 3 ? 2.5 : 3)

  // Stable refs for callbacks — updated on every render, no stale closures
  const onStepChangeRef = useRef(options.onStepChange)
  const onEnterRef      = useRef(options.onEnter)
  const onLeaveRef      = useRef(options.onLeave)
  onStepChangeRef.current = options.onStepChange
  onEnterRef.current      = options.onEnter
  onLeaveRef.current      = options.onLeave

  // ScrollTrigger ref — kept stable so scrollToStep never goes stale
  const stRef = useRef<import('gsap/ScrollTrigger').ScrollTrigger | null>(null)

  // Dispatches a custom event that useLenis picks up for smooth scrollTo
  const scrollToStep = useCallback((idx: number) => {
    const st = stRef.current
    if (!st) return
    const stepSize = (st.end - st.start) / total
    const targetY  = st.start + idx * stepSize + stepSize * 0.05
    const isMobile =
      window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window
    if (isMobile) {
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    } else {
      window.dispatchEvent(new CustomEvent('celebrate:scrollTo', { detail: { y: targetY } }))
    }
  }, [total])

  useEffect(() => {
    let st: import('gsap/ScrollTrigger').ScrollTrigger | null = null
    let destroyed = false

    async function init() {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')

        if (destroyed) return

        gsap.registerPlugin(ScrollTrigger)

        const stepEls = Array.from({ length: total }, (_, i) =>
          document.getElementById(`${stepPrefix}${i + 1}`),
        )
        const fotoEls = Array.from({ length: total }, (_, i) =>
          document.getElementById(`${fotoPrefix}${i + 1}`),
        )
        const fillEl = document.getElementById(fillId)

        stepEls.forEach((el, i) => {
          if (!el) return
          gsap.set(el, i === 0 ? { autoAlpha: 1, y: 0 } : { autoAlpha: 0, y: 0 })
        })
        fotoEls.forEach((el, i) => {
          if (!el) return
          gsap.set(el, i === 0 ? { autoAlpha: 1, scale: 1 } : { autoAlpha: 0, scale: 1 })
        })
        if (fillEl) fillEl.style.width = `${(1 / total) * 100}%`

        let current = 0

        function goTo(idx: number) {
          if (idx === current || destroyed) return
          const prevIdx = current
          current = idx

          const prevText = stepEls[prevIdx]
          const nextText = stepEls[idx]
          const prevFoto = fotoEls[prevIdx]
          const nextFoto = fotoEls[idx]

          ;[prevText, nextText, prevFoto, nextFoto].forEach(el => {
            if (el) gsap.killTweensOf(el)
          })

          if (prevText) gsap.to(prevText, { autoAlpha: 0, y: -8, duration: 0.22, ease: 'power2.in' })
          if (prevFoto) gsap.to(prevFoto, { autoAlpha: 0, duration: 0.22, ease: 'power2.in' })

          if (nextText) {
            gsap.fromTo(
              nextText,
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power2.out', delay: 0.18 },
            )
          }
          if (nextFoto) {
            gsap.fromTo(
              nextFoto,
              { autoAlpha: 0, scale: 1.04 },
              { autoAlpha: 1, scale: 1, duration: 0.52, ease: 'power2.out', delay: 0.14 },
            )
          }

          if (fillEl) fillEl.style.width = `${((idx + 1) / total) * 100}%`
        }

        st = ScrollTrigger.create({
          trigger: `#${sectionId}`,
          start: () => {
            const sectionEl = document.getElementById(sectionId)
            const stickyEl  = document.getElementById(stickyId)
            if (!sectionEl || !stickyEl) return 'top top'

            const navEl     = document.querySelector('nav') as HTMLElement | null
            const navBottom = navEl ? navEl.getBoundingClientRect().bottom : 60
            const stickyH   = stickyEl.offsetHeight
            const vh        = window.innerHeight
            const stickyOffset =
              stickyEl.getBoundingClientRect().top -
              sectionEl.getBoundingClientRect().top

            const targetSectionTop =
              navBottom + (vh - navBottom - stickyH) / 2 - stickyOffset

            return `top top+=${targetSectionTop}`
          },
          end: () => `+=${window.innerHeight * mult}`,
          pin: `#${stickyId}`,
          pinSpacing: true,
          onEnter:     () => onEnterRef.current?.(),
          onLeave:     () => onLeaveRef.current?.(),
          onEnterBack: () => onEnterRef.current?.(),
          onLeaveBack: () => onLeaveRef.current?.(),
          onUpdate(self) {
            const idx = Math.min(total - 1, Math.floor(self.progress * total))
            goTo(idx)
            onStepChangeRef.current?.(idx)
          },
        })

        stRef.current = st

      } catch (e) {
        console.warn('[usePinScroll] init error:', e)
      }
    }

    init()

    return () => {
      destroyed = true
      stRef.current = null
      st?.kill()
      st = null
    }
  }, [sectionId, stickyId, fillId, stepPrefix, fotoPrefix, total, mult])

  return { scrollToStep }
}
