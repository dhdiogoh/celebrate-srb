import { useEffect } from 'react'

/**
 * Aplica animação de reveal (opacity + translateY → 0) em todos os
 * elementos .reveal dentro do container ref.
 * Faz cleanup dos ScrollTriggers no unmount.
 */
export function useGsapReveal(containerRef?: React.RefObject<HTMLElement>) {
  useEffect(() => {
    let triggers: import('gsap/ScrollTrigger').ScrollTrigger[] = []

    async function init() {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)

        const scope = containerRef?.current ?? document
        const elements = scope.querySelectorAll('.reveal')

        elements.forEach((el) => {
          const st = gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }).scrollTrigger

          if (st) triggers.push(st)
        })
      } catch (e) {
        console.warn('[useGsapReveal] init error:', e)
      }
    }

    init()

    return () => {
      triggers.forEach((t) => t.kill())
      triggers = []
    }
  }, [])
}

/**
 * Animação de reveal do footer wordmark (clip vertical).
 */
export function useFooterReveal() {
  useEffect(() => {
    async function init() {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)

        const inner = document.querySelector('.footer-wordmark-inner')
        if (!inner) return

        gsap.to(inner, {
          y: 0,
          duration: 1.2,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: '.footer-wordmark',
            start: 'top 90%',
            once: true,
          },
        })
      } catch (e) {
        console.warn('[useFooterReveal] init error:', e)
      }
    }

    init()
  }, [])
}
