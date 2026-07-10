import { useState, useRef } from 'react'
import styles from './VideoSection.module.css'

interface VideoSectionProps {
  src: string
  label?: string
  title?: string
  subtitle?: string
}

export default function VideoSection({ src, label, title, subtitle }: VideoSectionProps) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

  return (
    <section className={styles.section}>
      {(label || title || subtitle) && (
        <div className="container">
          <div className={`${styles.header} reveal`}>
            {label && <p className={styles.label}>{label}</p>}
            {title && <h2 className={styles.h2}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </div>
      )}

      <div className="container">
        <div className={`${styles.videoWrap} reveal`}>
          <video
            ref={videoRef}
            src={src}
            controls={playing}
            playsInline
            preload="metadata"
            className={styles.video}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button className={styles.playBtn} onClick={handlePlay} aria-label="Reproduzir vídeo">
              <span className={styles.playIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
