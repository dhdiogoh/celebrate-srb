import { Helmet } from 'react-helmet-async'
import type { SEOData } from '@/data/types'

interface SEOProps {
  data: SEOData
}

export default function SEO({ data }: SEOProps) {
  const { title, description, robots, canonical, og, twitter, jsonLd } = data

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title"       content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:image"       content={og.image} />
      <meta property="og:url"         content={og.url} />
      <meta property="og:type"        content={og.type} />
      <meta property="og:locale"      content={og.locale} />
      <meta property="og:site_name"   content={og.siteName} />

      {/* Twitter Cards */}
      <meta name="twitter:card"        content={twitter.card} />
      <meta name="twitter:title"       content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image"       content={twitter.image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  )
}
