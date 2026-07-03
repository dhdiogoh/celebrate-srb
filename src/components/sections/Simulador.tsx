import { useState } from 'react'
import { pacotes } from '@/data/pacotes'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import { formatBRL } from '@/utils/formatBRL'
import styles from './Simulador.module.css'

export default function Simulador() {
  const [pessoas, setPessoas] = useState(100)
  const [pacoteId, setPacoteId] = useState('coquetel')

  const pacoteSelecionado = pacotes.find((p) => p.id === pacoteId) ?? pacotes[0]
  const total = pessoas * pacoteSelecionado.pricePerPax
  const totalStr = formatBRL(total)

  const waUrl = buildWhatsAppUrl(
    `Olá! Tenho interesse em realizar um evento no Celebrate para ${pessoas} pessoas, no pacote ${pacoteSelecionado.name} (R$ ${pacoteSelecionado.pricePerPax}/pax). Estimativa total: ${totalStr}. Gostaria de solicitar um orçamento personalizado.`
  )

  return (
    <section className={styles.simulador} id="simulador">
      <div className="container">
        <div className={styles.wrap}>
          <h2 className={`${styles.h2} reveal`}>Quanto vai custar seu evento?</h2>
          <p className={`${styles.sub} reveal`}>
            Selecione o número de pessoas e o pacote desejado para ter uma estimativa e já falar com nossa equipe.
          </p>

          <div className={`${styles.card} reveal`}>
            <div className={styles.row}>
              {/* Slider de pessoas */}
              <div className={styles.field}>
                <label htmlFor="pessoas-slider">Número de pessoas</label>
                <div className={styles.pessoasVal} aria-live="polite">{pessoas} pessoas</div>
                <div className={styles.sliderWrap}>
                  <input
                    type="range"
                    id="pessoas-slider"
                    min={50}
                    max={160}
                    value={pessoas}
                    step={1}
                    className={styles.slider}
                    onChange={(e) => setPessoas(Number(e.target.value))}
                    aria-label={`Número de pessoas: ${pessoas}`}
                  />
                </div>
                <div className={styles.rangeLabels}>
                  <span>mín. 50</span>
                  <span>máx. 160</span>
                </div>
              </div>

              {/* Pacotes */}
              <div className={styles.field}>
                <label>Escolha o pacote</label>
                <div className={styles.pacotes}>
                  {pacotes.map((p) => (
                    <button
                      key={p.id}
                      className={`${styles.pacoteBtn}${p.id === pacoteId ? ` ${styles.pacoteBtnActive}` : ''}`}
                      onClick={() => setPacoteId(p.id)}
                      aria-pressed={p.id === pacoteId}
                    >
                      <span>{p.name}</span>
                      <span className={styles.pacotePrice}>R$ {p.pricePerPax}/pax</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.resultado}>
              <div>
                <div className={styles.totalLabel}>Estimativa total</div>
                <div className={styles.total} aria-live="polite">{totalStr}</div>
                <div className={styles.totalSub}>
                  {pacoteSelecionado.name} · {pessoas} pessoas · estimativa para {pessoas} pax
                </div>
              </div>
              <a
                href={waUrl}
                className={styles.ctaBtn}
                target="_blank"
                rel="noopener noreferrer"
                id="sim-wa-btn"
              >
                Solicitar proposta
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
