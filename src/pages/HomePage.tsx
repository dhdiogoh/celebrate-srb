import { useGsapReveal } from '@/hooks/useGsapReveal'
import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Sobre from '@/components/sections/Sobre'
import Segmentos from '@/components/sections/Segmentos'
import Incluso from '@/components/sections/Incluso'
import Gastronomia from '@/components/sections/Gastronomia'
import PinScrollSection from '@/components/ui/PinScrollSection'
import PacotesPinScroll from '@/components/sections/PacotesPinScroll'
import Simulador from '@/components/sections/Simulador'
import Marcas from '@/components/sections/Marcas'
import CTAFinal from '@/components/sections/CTAFinal'
import Endereco from '@/components/sections/Endereco'
import SEO from '@/components/ui/SEO'
import { seoHome } from '@/data/seo'
import { inclusoHome } from '@/data/incluso'
import { marcas } from '@/data/marcas'
import { pinScrollAmbienteHome } from '@/data/pinScrolls'
import { IMAGES } from '@/config/imagens'

export default function HomePage() {
  useLenis()
  useGsapReveal()

  return (
    <>
      <SEO data={seoHome} />
      <Navbar variant="home" />
      <main>
        <Hero variant="home" />
        <Sobre />
        <Segmentos />
        <Incluso cards={inclusoHome} />
        <Gastronomia />

        {/* Ambiente — Pin Scroll */}
        <section id="ambiente-home" style={{ background: 'var(--dark1)' }}>
          <div className="container" style={{ paddingBlock: 'var(--section-pad-md)' }}>
            <PinScrollSection
              sectionId="ambiente-home"
              stickyId="ambiente-home-sticky"
              fillId="ambiente-home-fill"
              stepPrefix="ah-step-"
              fotoPrefix="ah-foto-"
              steps={pinScrollAmbienteHome}
              images={IMAGES.home.ambiente as unknown as string[]}
              dotIcons={['space', 'coffee', 'volume2']}
            />
          </div>
        </section>

        {/* Pacotes — Pin Scroll (fundo claro) */}
        <PacotesPinScroll />

        <Simulador />
        <Marcas marcas={marcas} showCorpLink />
<CTAFinal />
        <Endereco />
      </main>
      <Footer />
    </>
  )
}
