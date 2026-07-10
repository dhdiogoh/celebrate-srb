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
import GaleriaSlider from '@/components/sections/GaleriaSlider'
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

        <GaleriaSlider
          label="Galeria"
          title="Um espaço construído para impressionar"
          images={[
            '/images/home/galeria/IMG_0126.webp',
            '/images/home/galeria/IMG_0198--1-.webp',
            '/images/home/galeria/IMG_0204.webp',
            '/images/home/galeria/IMG_0212.webp',
            '/images/home/galeria/IMG_0216.webp',
            '/images/home/galeria/IMG_0222.webp',
            '/images/home/galeria/IMG_0242.webp',
            '/images/home/galeria/IMG_7739.webp',
            '/images/home/galeria/3c1bb826-83f5-4e42-a722-ed06a2374b58.webp',
            '/images/home/galeria/457415b2-6bc9-4dd6-b4e3-295248d41445.webp',
            '/images/home/galeria/8c30b7f0-4817-4508-b3d2-3bbed410e24c.webp',
            '/images/home/galeria/dae09a7d-8346-4368-acd4-45b5d8983056.webp',
            '/images/home/galeria/ff5ccb68-30ad-40d9-89bb-19678f36913a.webp',
            '/images/home/galeria/IMG_0171.webp',
            '/images/home/galeria/IMG_0177.webp',
          ]}
          positions={{
            3: 'center 65%',
            4: 'center 55%',
            9: 'center 62%',
            10: 'center 34%',
          }}
        />

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
