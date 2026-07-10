/* ═══════════════════════════════════════════
   src/data/types.ts
   Interfaces TypeScript — espelho dos schemas Sanity.
   Ao migrar para Sanity, estes tipos viram os schemas .ts do Studio.
═══════════════════════════════════════════ */

// ─── Ícones ─────────────────────────────────────────────────────────────────

/** Identificadores semânticos de ícone → componente <Icon /> */
export type IconName =
  | 'briefcase'
  | 'star'
  | 'heart'
  | 'phone'
  | 'coffee'
  | 'users'
  | 'ring'
  | 'home'
  | 'book'
  | 'trending-up'
  | 'award'
  | 'user-minus'
  | 'monitor'
  | 'volume2'
  | 'user'
  | 'team'
  | 'clock'
  | 'space'

// ─── Conteúdo compartilhado ──────────────────────────────────────────────────

export interface PinScrollStep {
  num: string       // "01 / 03"
  title: string
  desc: string
  imageKey: string  // chave em IMAGES (resolve via prop do componente)
  imageAlt: string
}

export interface InclusoCard {
  icon: IconName
  title: string
  desc: string
}

export interface Segmento {
  icon: IconName
  name: string
}

/** Alias semântico — mesma shape de Segmento mas contexto corporativo */
export type Tipo = Segmento

export interface Marca {
  name: string
  logo?: string
  scale?: number
}

export interface Stat {
  value: string   // "202m²"
  label: string   // "de espaço completo"
}

export interface IntroData {
  label: string
  title: string
  text: string
  imageAlt: string
  stats: Stat[]
}

// ─── Pacotes ─────────────────────────────────────────────────────────────────

export interface Pacote {
  id: string          // "coquetel" | "basic" | "splendor" | "opulence"
  name: string        // "Coquetel"
  indicacao: string   // "Ideal para eventos rápidos, treinamentos e encontros leves"
  tipo: string        // "Serviço volante"
  pricePerPax: number // 194
  priceSub: string    // "por pessoa · estimado 100 pax"
  items: string[]
  isDestaque: boolean
}

// ─── Feedbacks ───────────────────────────────────────────────────────────────

export interface Feedback {
  text: string
  from: string        // "Financial Times"
  logo?: string       // caminho para a logo da empresa
  logoScale?: number              // alarga/estreita via maxWidth (default 1)
  scale?: number                  // peso visual via transform: scale() (default 1)
  logoVariant?: 'line' | 'solid'  // 'line' = traço/texto; 'solid' = bloco de cor
}

// ─── Como Funciona ───────────────────────────────────────────────────────────

export interface ComoStep {
  num: string         // "01"
  title: string
  desc: string
}

// ─── Configurações do espaço (15 anos) ───────────────────────────────────────

export interface ConfigCard {
  imageIndex: number  // índice em IMAGES.quinzeAnos.configs
  imageAlt: string
  tag: string         // "Jantar & Celebração"
  title: string       // "Até 160 convidados"
  desc: string
}

// ─── Grupo SRB ───────────────────────────────────────────────────────────────

export interface GrupoNumero {
  value: string       // "15"
  label: string       // "anos de mercado"
}

// ─── SEO ─────────────────────────────────────────────────────────────────────

export interface OpenGraph {
  title: string
  description: string
  image: string       // URL absoluta 1200×630
  url: string         // URL absoluta da página
  type: 'website'
  locale: 'pt_BR'
  siteName: string
}

export interface TwitterCard {
  card: 'summary_large_image'
  title: string
  description: string
  image: string
}

export interface JsonLdAddress {
  '@type': 'PostalAddress'
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: 'BR'
}

export interface JsonLdLocalBusiness {
  '@context': 'https://schema.org'
  '@type': 'EventVenue'
  name: string
  description: string
  url: string
  telephone: string
  address: JsonLdAddress
  geo: {
    '@type': 'GeoCoordinates'
    latitude: number
    longitude: number
  }
  priceRange: string
  sameAs: string[]
}

export interface SEOData {
  title: string           // 50–60 chars
  description: string     // 150–160 chars
  robots: string          // "index, follow"
  canonical: string       // URL absoluta
  og: OpenGraph
  twitter: TwitterCard
  jsonLd: JsonLdLocalBusiness
}
