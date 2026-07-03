import type { ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'amber' | 'outline' | 'ghost'

interface ButtonProps {
  variant?: Variant
  href?: string
  onClick?: () => void
  children: ReactNode
  id?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({
  variant = 'amber',
  href,
  onClick,
  children,
  id,
  target,
  rel,
  type = 'button',
  className = '',
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} id={id} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} id={id} onClick={onClick}>
      {children}
    </button>
  )
}
