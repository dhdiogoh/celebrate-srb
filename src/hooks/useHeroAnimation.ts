import { useLayoutEffect } from 'react'
import gsap from 'gsap'

export type HeroVariant = 'home' | 'corporativos' | 'quinze-anos'

/**
 * Animação de entrada do hero.
 * Usa useLayoutEffect (antes do paint) + gsap.context() (cleanup seguro no StrictMode).
 * fromTo() define explicitamente os estados inicial E final — sem depender do CSS atual.
 */
export function useHeroAnimation(variant: HeroVariant = 'home') {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (variant === 'home') {
        // Zoom sutil no fundo
        gsap.from('.hero-img-wrap img', {
          scale: 1.08,
          duration: 2.4,
          ease: 'power3.out',
        })

        const tl = gsap.timeline({ delay: 0.3 })
        tl.fromTo('.hero-wordmark',
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' })
        tl.fromTo('.hero-sub',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        tl.fromTo('.hero-cta',
          { opacity: 0, y: 10, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        tl.fromTo('.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.8 }, '-=0.2')
      } else {
        const tl = gsap.timeline({ delay: 0.3 })
        tl.fromTo('.hero-badge',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        tl.fromTo('.hero-wordmark',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        tl.fromTo('.hero-title',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }, '-=0.5')
        tl.fromTo('.hero-sub',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        tl.fromTo('.hero-cta',
          { opacity: 0, y: 10, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        tl.fromTo('.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.8 }, '-=0.2')
      }
    })

    // ctx.revert() mata todos os tweens E reverte os inline styles que o GSAP setou.
    // Isso garante que no React StrictMode (double-invoke em dev) o segundo
    // useLayoutEffect encontre os elementos no estado original.
    return () => ctx.revert()
  }, [variant])
}
