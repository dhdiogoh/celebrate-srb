import { useGsapReveal } from '@/hooks/useGsapReveal'
import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Tipos from '@/components/sections/Tipos'
import Incluso from '@/components/sections/Incluso'
import Pacotes from '@/components/sections/Pacotes'
import ComoFunciona from '@/components/sections/ComoFunciona'
import Feedbacks from '@/components/sections/Feedbacks'
import GaleriaFotos from '@/components/sections/GaleriaFotos'
import VideoSection from '@/components/sections/VideoSection'
import PinScrollSection from '@/components/ui/PinScrollSection'
import LogoTicker from '@/components/ui/LogoTicker'
import CTAFinal from '@/components/sections/CTAFinal'
import Endereco from '@/components/sections/Endereco'
import SEO from '@/components/ui/SEO'
import { seoCorporativos } from '@/data/seo'
import { inclusoCorporativos } from '@/data/incluso'
import { marcas } from '@/data/marcas'
import { introCorporativos } from '@/data/intro'
import { WA_MESSAGES } from '@/utils/whatsapp'
import { pinScrollAmbienteCorp } from '@/data/pinScrolls'
import { IMAGES } from '@/config/imagens'

const corpLinks = [
  { label: 'Tipos', href: '#tipos' },
  { label: 'Incluso', href: '#incluso' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Depoimentos', href: '#feedbacks' },
]

export default function CorporativosPage() {
  useLenis()
  useGsapReveal()

  return (
    <>
      <SEO data={seoCorporativos} />
      <Navbar
        variant="corporativos"
        links={corpLinks}
        ctaLabel="Solicitar Proposta"
        ctaMessage={WA_MESSAGES.orcamentoCorporativo}
      />
      <main>
        <Hero variant="corporativos">
          <LogoTicker marcas={marcas} compact />
        </Hero>
        <Intro
          {...introCorporativos}
          image={IMAGES.corporativos.intro}
          images={[
            '/images/corporate/IMG_0392.webp',
            '/images/corporate/IMG_0421.webp',
            '/images/corporate/IMG_0484.webp',
            '/images/corporate/IMG_0520.webp',
          ]}
          caption="Imagens do evento Pampers & Always realizado no Celebrate"
          layout="side"
        />
        <Tipos />
        <Incluso
          cards={inclusoCorporativos}
          title="Infraestrutura completa. Pensada para eventos corporativos."
          subtitle="Espaço, tecnologia, gastronomia e equipe em um único endereço. Sem fornecedores externos. Sem surpresas."
        />

        {/* Ambiente — Pin Scroll */}
        <section id="ambiente-corp" style={{ background: 'var(--dark1)' }}>
          <div className="container" style={{ paddingBlock: 'var(--section-pad-md)' }}>
            <PinScrollSection
              sectionId="ambiente-corp"
              stickyId="ambiente-corp-sticky"
              fillId="ambiente-corp-fill"
              stepPrefix="ac-step-"
              fotoPrefix="ac-foto-"
              steps={pinScrollAmbienteCorp}
              images={IMAGES.corporativos.ambiente as unknown as string[]}
            />
          </div>
        </section>

        <Pacotes />

        <GaleriaFotos
          label="Galeria"
          title="Eventos que falam por si"
          images={[
            '/images/corporativos/galeria/IMG_0390--1-.webp',
            '/images/corporativos/galeria/IMG_0495.webp',
            '/images/corporativos/galeria/IMG_0518.webp',
            '/images/corporativos/galeria/IMG_7121.webp',
            '/images/corporativos/galeria/IMG_7124--1-.webp',
            '/images/corporativos/galeria/IMG_7739.webp',
            '/images/corporativos/galeria/PHOTO-2025-09-23-17-35-17--1-.webp',
            '/images/corporativos/galeria/PHOTO-2025-09-23-17-35-19-3.webp',
          ]}
        />

        <ComoFunciona />

        <VideoSection
          src="https://r7gebaatjirfgncj.public.blob.vercel-storage.com/Celebrate/Corporativos/MIDIA%20EXPERIENCIA%20DAY_HELLOO%20V2_3.MP4"
          label="Experiência real"
          title="Veja como os eventos ganham vida no Celebrate"
        />

        <Feedbacks />

        <CTAFinal
          tagline="Vamos trabalhar juntos."
          h2={`Seu evento precisa de\numa casa à altura.`}
          sub="Do briefing à execução, a equipe do Celebrate cuida de cada detalhe para que você e seus convidados vivam uma experiência inesquecível."
          ctaLabel="Solicitar proposta"
          ctaMessage={WA_MESSAGES.orcamentoCorporativo}
          showInstagram={false}
        />
        <Endereco />
      </main>
      <Footer />
    </>
  )
}
