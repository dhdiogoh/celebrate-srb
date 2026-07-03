import type { SEOData } from './types'
import { SITE } from '@/config/site'

const OG_IMAGE = `${SITE.BASE_URL}/og-image.jpg`

const BASE_JSON_LD = {
  '@context': 'https://schema.org' as const,
  '@type': 'EventVenue' as const,
  name: 'Celebrate by Sushi Ruy Barbosa',
  url: SITE.BASE_URL,
  telephone: '+55 91 99331-8434',
  address: {
    '@type': 'PostalAddress' as const,
    streetAddress: 'Tv. Alm. Wandenkolk, 666',
    addressLocality: 'Belém',
    addressRegion: 'PA',
    postalCode: '66055-030',
    addressCountry: 'BR' as const,
  },
  geo: {
    '@type': 'GeoCoordinates' as const,
    latitude: -1.4551,
    longitude: -48.4880,
  },
  priceRange: 'R$$$',
  sameAs: [SITE.INSTAGRAM_URL],
}

export const seoHome: SEOData = {
  title: 'Celebrate — Espaço de Eventos Premium em Belém/PA',
  description:
    'Casa de eventos premium com gastronomia Sushi Ruy Barbosa. 202m², até 160 convidados, tudo incluso. Corporativo, 15 anos e casamentos em Belém.',
  robots: 'index, follow',
  canonical: `${SITE.BASE_URL}/`,
  og: {
    title: 'Celebrate — Espaço de Eventos Premium em Belém/PA',
    description:
      'Casa de eventos premium com gastronomia Sushi Ruy Barbosa. 202m², até 160 convidados, tudo incluso. Corporativo, 15 anos e casamentos em Belém.',
    image: OG_IMAGE,
    url: `${SITE.BASE_URL}/`,
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE.SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrate — Espaço de Eventos Premium em Belém/PA',
    description:
      'Casa de eventos premium com gastronomia Sushi Ruy Barbosa. 202m², até 160 convidados, tudo incluso.',
    image: OG_IMAGE,
  },
  jsonLd: {
    ...BASE_JSON_LD,
    description:
      'Espaço de eventos premium em Belém/PA com gastronomia assinada pelo Sushi Ruy Barbosa. 202m², até 160 convidados.',
  },
}

export const seoCorporativos: SEOData = {
  title: 'Eventos Corporativos em Belém | Celebrate by SRB',
  description:
    'Espaço para eventos corporativos com gastronomia SRB, som BOSE e equipe completa. De 50 a 160 pessoas. Pacotes a partir de R$ 194/pax em Belém.',
  robots: 'index, follow',
  canonical: `${SITE.BASE_URL}/eventos-corporativos`,
  og: {
    title: 'Eventos Corporativos em Belém | Celebrate by SRB',
    description:
      'Espaço para eventos corporativos com gastronomia SRB, som BOSE e equipe completa. De 50 a 160 pessoas. Pacotes a partir de R$ 194/pax em Belém.',
    image: OG_IMAGE,
    url: `${SITE.BASE_URL}/eventos-corporativos`,
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE.SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventos Corporativos em Belém | Celebrate by SRB',
    description:
      'Espaço para eventos corporativos com gastronomia SRB, som BOSE e equipe completa.',
    image: OG_IMAGE,
  },
  jsonLd: {
    ...BASE_JSON_LD,
    description:
      'Espaço para eventos corporativos premium em Belém/PA. Convenções, confraternizações, treinamentos e lançamentos com gastronomia SRB.',
  },
}

export const seo15Anos: SEOData = {
  title: 'Festa de 15 Anos em Belém | Celebrate by SRB',
  description:
    'Realize a festa de 15 anos dos seus sonhos no Celebrate. Camarim exclusivo, gastronomia Sushi Ruy Barbosa e espaço para até 160 convidados em Belém/PA.',
  robots: 'index, follow',
  canonical: `${SITE.BASE_URL}/15-anos`,
  og: {
    title: 'Festa de 15 Anos em Belém | Celebrate by SRB',
    description:
      'Realize a festa de 15 anos dos seus sonhos no Celebrate. Camarim exclusivo, gastronomia Sushi Ruy Barbosa e espaço para até 160 convidados em Belém/PA.',
    image: OG_IMAGE,
    url: `${SITE.BASE_URL}/15-anos`,
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE.SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Festa de 15 Anos em Belém | Celebrate by SRB',
    description:
      'Realize a festa de 15 anos dos seus sonhos no Celebrate. Camarim exclusivo e gastronomia SRB.',
    image: OG_IMAGE,
  },
  jsonLd: {
    ...BASE_JSON_LD,
    description:
      'Espaço premium para festas de 15 anos em Belém/PA. Camarim exclusivo, gastronomia Sushi Ruy Barbosa, pista de dança e palco.',
  },
}
