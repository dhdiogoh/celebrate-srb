import type { Feedback } from './types'

const L = '/images/logos/partners/'

export const feedbacks: Feedback[] = [
  {
    text: '"A comida estava fantástica e, no geral, todos ficaram realmente muito satisfeitos com tudo."',
    from: 'Financial Times',
    logo: L + 'financial-times-logo.webp',
    logoVariant: 'solid',
    scale: 0.85,
  },
  {
    text: '"Toda atenção da equipe, sempre disposta a nos auxiliar da melhor forma. Parabéns à equipe! Já estamos ansiosos pelos próximos eventos."',
    from: 'Juliana Martins Dermatologia',
    logo: L + 'juliana-martins-dermato.webp',
    scale: 0.8,
  },
  {
    text: '"A qualidade do espaço e a excelência no serviço foram uma peça muito importante para o destaque da festa. Todos os colaboradores foram simpáticos e prestativos."',
    from: 'Juliana Vilas Boas Clínica',
    logo: L + 'juliana-vilas-boas-png.webp',
    logoScale: 1.95,
  },
  {
    text: '"A organização e a coordenação do evento foram dignas de parabéns. Ficamos muito satisfeitos com a experiência."',
    from: 'SINDICARPA',
    logo: L + 'sindicar-png.webp',
    logoScale: 2.34,
  },
  {
    text: '"Ficou lindo o evento na casa de vocês, obrigada pelo serviço!"',
    from: 'P&G',
    logo: L + 'Procter_&_Gamble_logo.svg.webp',
    logoVariant: 'solid',
    scale: 0.75,
  },
  {
    text: '"Equipe super prestativa e tudo muito bom, comidas e ambiente. Muito obrigado!"',
    from: 'Supergiro Distribuidora',
    logo: L + 'supergiro-logo-png.webp',
  },
]
