import { useGsapReveal } from '@/hooks/useGsapReveal'
import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Incluso from '@/components/sections/Incluso'
import Configs from '@/components/sections/Configs'
import PinScrollSection from '@/components/ui/PinScrollSection'
import CTAFinal from '@/components/sections/CTAFinal'
import Endereco from '@/components/sections/Endereco'
import SEO from '@/components/ui/SEO'
import { seo15Anos } from '@/data/seo'
import { incluso15Anos } from '@/data/incluso'
import { intro15Anos } from '@/data/intro'
import { WA_MESSAGES } from '@/utils/whatsapp'
import {
  pinScrollMomentos15Anos,
  pinScrollGaleria15Anos,
} from '@/data/pinScrolls'
import { IMAGES } from '@/config/imagens'

const quinzeLinks = [
  { label: 'O que inclui', href: '#incluso' },
  { label: 'Configurações', href: '#configs' },
  { label: 'Galeria', href: '#galeria-qa' },
  { label: 'Endereço', href: '#endereco' },
]

export default function QuinzeAnosPage() {
  useLenis()
  useGsapReveal()

  return (
    <>
      <SEO data={seo15Anos} />
      <Navbar
        variant="quinze-anos"
        links={quinzeLinks}
        ctaLabel="Planejar minha festa"
        ctaMessage={WA_MESSAGES.orcamento15anos}
      />
      <main>
        <Hero variant="quinze-anos" />
        <Intro {...intro15Anos} image={IMAGES.quinzeAnos.intro} />

        {/* Momentos — Pin Scroll */}
        <section id="momentos-qa" style={{ background: 'var(--dark1)' }}>
          <div className="container" style={{ paddingBlock: 'var(--section-pad-md)' }}>
            <PinScrollSection
              sectionId="momentos-qa"
              stickyId="momentos-qa-sticky"
              fillId="momentos-qa-fill"
              stepPrefix="mq-step-"
              fotoPrefix="mq-foto-"
              steps={pinScrollMomentos15Anos}
              images={IMAGES.quinzeAnos.momentos as unknown as string[]}
              scrollMultiplier={3}
            />
          </div>
        </section>

        <Incluso
          cards={incluso15Anos}
          title="Tudo incluso para a festa dos sonhos"
          subtitle="Sem se preocupar com fornecedores. Você chega, o Celebrate cuida de tudo."
        />

        <Configs />

        {/* Galeria — Pin Scroll */}
        <section id="galeria-qa" style={{ background: 'var(--dark2)' }} aria-label="Galeria de festas de 15 anos">
          <div className="container" style={{ paddingBlock: 'var(--section-pad-md)' }}>
            <PinScrollSection
              sectionId="galeria-qa"
              stickyId="galeria-qa-sticky"
              fillId="galeria-qa-fill"
              stepPrefix="gq-step-"
              fotoPrefix="gq-foto-"
              steps={pinScrollGaleria15Anos}
              images={IMAGES.quinzeAnos.galeria as unknown as string[]}
              scrollMultiplier={3}
            />
          </div>
        </section>

        <CTAFinal
          tagline="O dia mais especial da vida dela."
          h2="Faça dos 15 anos uma\nmemória para sempre."
          sub="O Celebrate foi criado para transformar este momento único em uma experiência inesquecível. Com o padrão Sushi Ruy Barbosa em cada detalhe."
          ctaLabel="Planejar a festa"
          ctaMessage={WA_MESSAGES.orcamento15anos}
          showInstagram
        />
        <Endereco />
      </main>
      <Footer />
    </>
  )
}
