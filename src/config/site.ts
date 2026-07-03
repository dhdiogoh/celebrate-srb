/* ═══════════════════════════════════════════
   src/config/site.ts
   Constantes globais do site.
   Troque aqui quando o domínio for definido.
═══════════════════════════════════════════ */

export const SITE = {
  /** URL base do site — trocar quando o domínio for definido */
  BASE_URL: import.meta.env.VITE_BASE_URL ?? 'https://celebrate.com.br',

  /** Número de WhatsApp (formato internacional sem +) */
  WHATSAPP_NUMBER: import.meta.env.VITE_WA_NUMBER ?? '5591993318434',

  /** Handle do Instagram */
  INSTAGRAM_HANDLE: '@celebratesrb',
  INSTAGRAM_URL: 'https://www.instagram.com/celebratesrb',

  /** Google Maps */
  MAPS_URL: 'https://www.google.com/maps/search/?api=1&query=Celebrate+by+SRB%2C+Tv.+Alm.+Wandenkolk%2C+666%2C+Nazar%C3%A9%2C+Bel%C3%A9m+-+PA%2C+66055-030',

  /** Site name para OG */
  SITE_NAME: 'Celebrate by Sushi Ruy Barbosa',
} as const
