import { useEffect } from 'react'

/**
 * Inicializa Lenis smooth scroll apenas no desktop.
 * Faz cleanup completo no unmount (importante para React Router).
 */
export function useLenis() {
  useEffect(() => {
    const isMobile =
      window.matchMedia('(max-width: 768px)').matches ||
      'ontouchstart' in window

    if (isMobile) return

    let lenis: import('lenis').default | null = null

    async function init() {
      try {
        const { default: Lenis } = await import('lenis')
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time: number) => {
          lenis?.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        // Allow any component to trigger a smooth scroll via custom event
        const handleScrollTo = (e: Event) => {
          const y = (e as CustomEvent<{ y: number }>).detail.y
          lenis?.scrollTo(y, { duration: 1.5, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
        }
        window.addEventListener('celebrate:scrollTo', handleScrollTo)

        // Store cleanup so the outer return can call it
        ;(init as { cleanup?: () => void }).cleanup = () => {
          window.removeEventListener('celebrate:scrollTo', handleScrollTo)
        }
      } catch (e) {
        console.warn('[useLenis] init error:', e)
      }
    }

    init()

    return () => {
      ;(init as { cleanup?: () => void }).cleanup?.()
      lenis?.destroy()
      lenis = null
    }
  }, [])
}
