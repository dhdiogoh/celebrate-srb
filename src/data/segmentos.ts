import type { Segmento, Tipo } from './types'

/** Segmentos da Home (8 tipos de evento) */
export const segmentos: Segmento[] = [
  { icon: 'briefcase',    name: 'Corporativo' },
  { icon: 'star',         name: '15 Anos' },
  { icon: 'heart',        name: 'Casamentos' },
  { icon: 'phone',        name: 'Aniversários' },
  { icon: 'coffee',       name: 'Chás' },
  { icon: 'users',        name: 'Confraternizações' },
  { icon: 'ring',         name: 'Noivado' },
  { icon: 'home',         name: 'Batizado' },
]

/** Tipos de Evento Corporativo (9 tipos) */
export const tiposCorporativos: Tipo[] = [
  { icon: 'briefcase',    name: 'Convenções' },
  { icon: 'users',        name: 'Confraternizações' },
  { icon: 'book',         name: 'Treinamentos' },
  { icon: 'trending-up',  name: 'Lançamentos' },
  { icon: 'phone',        name: 'Reuniões Executivas' },
  { icon: 'coffee',       name: 'Coquetéis' },
  { icon: 'award',        name: 'Premiações' },
  { icon: 'user-minus',   name: 'Networking' },
  { icon: 'monitor',      name: 'Videoconferências' },
]
