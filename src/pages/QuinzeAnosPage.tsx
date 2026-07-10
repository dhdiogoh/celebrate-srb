import { useGsapReveal } from '@/hooks/useGsapReveal'
import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Incluso from '@/components/sections/Incluso'
import Pacotes from '@/components/sections/Pacotes'
import GaleriaFotos from '@/components/sections/GaleriaFotos'
import PinScrollSection from '@/components/ui/PinScrollSection'
import CTAFinal from '@/components/sections/CTAFinal'
import Endereco from '@/components/sections/Endereco'
import SEO from '@/components/ui/SEO'
import { seo15Anos } from '@/data/seo'
import { incluso15Anos } from '@/data/incluso'
import { intro15Anos } from '@/data/intro'
import { WA_MESSAGES } from '@/utils/whatsapp'
import { pacotes15Anos } from '@/data/pacotes'
import { pinScrollMomentos15Anos } from '@/data/pinScrolls'
import { IMAGES } from '@/config/imagens'

const quinzeLinks = [
  { label: 'Incluso', href: '#incluso' },
  { label: 'Cardápio', href: '#pacotes' },
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
        ctaLabel="Planejar a festa"
        ctaMessage={WA_MESSAGES.orcamento15anos}
      />
      <main>
        <Hero variant="quinze-anos" />
        <Intro {...intro15Anos} image={IMAGES.quinzeAnos.intro[0]} images={[...IMAGES.quinzeAnos.intro]} />

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
              scrollMultiplier={4}
              positions={{ 1: 'center 45%' }}
            />
          </div>
        </section>

        <Incluso
          cards={incluso15Anos}
          title="Tudo incluso para a festa dos sonhos"
          subtitle=""
          bgImage="/images/quinze-anos/IMG_3582.webp"
        />

        <Pacotes
          data={pacotes15Anos}
          title="Escolha o cardápio da festa dos sonhos"
          subtitle="Valores estimados para 100 pessoas. Solicite proposta para o número exato de convidados."
        />

        <GaleriaFotos
          label="Galeria"
          title="Festas que ficam para sempre"
          images={[
            '/images/quinze-anos/carousel/55d7ebe5-91c3-496d-a6c3-ca2f958a752d.webp',
            '/images/quinze-anos/carousel/7b5c4314-9eda-4423-a995-ec6eda1f1251.webp',
            '/images/quinze-anos/carousel/img-1629.webp',
            '/images/quinze-anos/carousel/img-3634.webp',
            '/images/quinze-anos/carousel/img-3688.webp',
            '/images/quinze-anos/carousel/img-3703.webp',
            '/images/quinze-anos/carousel/img-3927.webp',
            '/images/quinze-anos/carousel/img-3962.webp',
            '/images/quinze-anos/carousel/aa5acfdc-72a0-46e8-8197-52e0eef44b21.webp',
            '/images/quinze-anos/carousel/ce750080-f3b8-4fc6-a7c6-0aea6746dd77.webp',
            '/images/quinze-anos/carousel/ec95eaf9-fb1e-468e-9049-ae9d0caae059.webp',
          ]}
        />

        <CTAFinal
          tagline="O dia mais especial de quem faz 15 anos."
          h2={`Faça dos 15 anos uma\nmemória para sempre.`}
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
