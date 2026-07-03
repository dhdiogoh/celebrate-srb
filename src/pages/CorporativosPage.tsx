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
import Marcas from '@/components/sections/Marcas'
import PinScrollSection from '@/components/ui/PinScrollSection'
import CTAFinal from '@/components/sections/CTAFinal'
import Endereco from '@/components/sections/Endereco'
import SEO from '@/components/ui/SEO'
import { seoCorporativos } from '@/data/seo'
import { inclusoHome } from '@/data/incluso'
import { marcas } from '@/data/marcas'
import { introCorporativos } from '@/data/intro'
import { WA_MESSAGES } from '@/utils/whatsapp'
import {
  pinScrollAmbienteCorp,
  pinScrollGaleriaCorp,
} from '@/data/pinScrolls'
import { IMAGES } from '@/config/imagens'

const corpLinks = [
  { label: 'Tipos', href: '#tipos' },
  { label: 'O que inclui', href: '#incluso' },
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
        <Hero variant="corporativos" />
        <Intro {...introCorporativos} image={IMAGES.corporativos.intro} />
        <Tipos />
        <Incluso
          cards={inclusoHome}
          title="Infraestrutura completa para o seu evento"
          subtitle="Sem contratar fornecedores externos. Tudo incluso com padrão SRB."
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
        <ComoFunciona />

        {/* Galeria — Pin Scroll */}
        <section id="galeria-corp" style={{ background: 'var(--dark2)' }} aria-label="Galeria de eventos corporativos">
          <div className="container" style={{ paddingBlock: 'var(--section-pad-md)' }}>
            <PinScrollSection
              sectionId="galeria-corp"
              stickyId="galeria-corp-sticky"
              fillId="galeria-corp-fill"
              stepPrefix="gc-step-"
              fotoPrefix="gc-foto-"
              steps={pinScrollGaleriaCorp}
              images={IMAGES.corporativos.galeria as unknown as string[]}
              scrollMultiplier={3}
            />
          </div>
        </section>

        <Feedbacks />
        <Marcas
          marcas={marcas}
          title="Marcas que confiam no Celebrate"
          subtitle="Mais de 30 marcas nacionais e internacionais já realizaram seus eventos aqui."
        />
        <CTAFinal
          tagline="Vamos trabalhar juntos."
          h2="Seu evento precisa de uma\ncasa à altura."
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
