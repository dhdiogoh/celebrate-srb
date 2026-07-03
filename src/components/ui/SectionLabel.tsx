import type { ReactNode } from 'react'
import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  children: ReactNode
  /** 'amber' (padrão, fundo escuro) | 'mid' (fundo claro) */
  color?: 'amber' | 'mid'
  className?: string
}

export default function SectionLabel({ children, color = 'amber', className = '' }: SectionLabelProps) {
  return (
    <span className={`${styles.label} ${styles[color]} ${className}`}>
      {children}
    </span>
  )
}
