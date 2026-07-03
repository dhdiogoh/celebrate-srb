/* ═══════════════════════════════════════════
   src/config/imagens.ts
   Centralize todos os caminhos de imagem aqui.

   FASE 1 (atual): strings apontando para public/images/
     - String vazia '' → componente exibe photo-placeholder
     - Preencha com o caminho (/images/pasta/arquivo.webp) conforme
       as imagens forem adicionadas à pasta public/
   FASE 2 (Sanity): troque cada string por urlFor(doc.campo).url()
     Os componentes não precisam mudar — só este arquivo.

   Estrutura esperada em public/:
     public/images/shared/         mapa.webp, og-image.jpg
     public/images/home/           hero.webp, sobre.webp, gastronomia.webp,
                                   ambiente-01~03.webp, galeria-01~04.webp
     public/images/corporativos/   hero.webp, intro.webp,
                                   ambiente-01~03.webp, galeria-01~04.webp
     public/images/quinze-anos/    hero.webp, intro.webp,
                                   momentos-01~04.webp, configs-01~02.webp,
                                   galeria-01~04.webp, endereco.webp
═══════════════════════════════════════════ */

export const IMAGES = {
  shared: {
    mapa:    '/images/home/fachada-celebrate.webp',
    ogImage: '',
  },
  home: {
    hero:         '/images/home/IMG_0159.webp',
    sobre:        [
      '/images/home/IMG_0234.webp',
      '/images/home/IMG_0202.webp',
      '/images/home/IMG_0129.webp',
      '/images/home/IMG_0218.webp',
    ] as [string, string, string, string],
    gastronomia:  '/images/home/IMG_0806.webp',
    ambiente:     ['/images/home/IMG_0190.webp', '/images/home/IMG_0244.webp', '/images/home/IMG_0144.webp'] as [string, string, string],
    pacotes:      ['/images/home/coquetel-img.webp', '/images/home/camarao-com-pene.webp', '/images/home/file-com-cogumelos.webp', '/images/home/IMG_4790.webp'] as [string, string, string, string],
  },
  corporativos: {
    hero:    '',
    intro:   '',
    ambiente: ['', '', ''] as [string, string, string],
    galeria:  ['', '', '', ''] as [string, string, string, string],
  },
  quinzeAnos: {
    hero:     '',
    intro:    '',
    momentos: ['', '', '', ''] as [string, string, string, string],
    configs:  ['', ''] as [string, string],
    galeria:  ['', '', '', ''] as [string, string, string, string],
    endereco: '',
  },
} as const
