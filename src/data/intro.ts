/* ═══════════════════════════════════════════
   src/data/intro.ts
   Conteúdo da seção Intro para páginas internas.
   Ao migrar para Sanity, estes objetos viram queries GROQ.
═══════════════════════════════════════════ */
import type { IntroData } from './types'

export const introCorporativos: IntroData = {
  label: 'O espaço',
  title: 'Um ambiente projetado para o mais alto padrão',
  text: 'O Celebrate reúne em um único endereço tudo que o seu evento corporativo precisa: 202m² de espaço sofisticado, gastronomia assinada pelo Sushi Ruy Barbosa, tecnologia de ponta e uma equipe dedicada a cada detalhe. Sem contratar fornecedores externos. Sem surpresas.',
  imageAlt: 'Espaço corporativo Celebrate',
  stats: [
    { value: '202m²', label: 'de espaço completo' },
    { value: '160',   label: 'convidados (máx.)' },
    { value: '15',    label: 'anos de expertise SRB' },
    { value: '30+',   label: 'marcas atendidas' },
  ],
}

export const intro15Anos: IntroData = {
  label: 'O espaço',
  title: 'O palco perfeito para a noite mais importante',
  text: 'O Celebrate foi criado para transformar a festa dos 15 anos num evento que todos vão guardar para sempre. Espaço com até 160 convidados, camarim exclusivo para os últimos preparativos, pista de dança, palco e toda a gastronomia do Sushi Ruy Barbosa inclusa.',
  imageAlt: 'Espaço Celebrate 15 anos',
  stats: [
    { value: '160',  label: 'convidados (máx.)' },
    { value: '202m²', label: 'de espaço celebrado' },
    { value: '1',    label: 'camarim exclusivo' },
    { value: '5h',   label: 'de festa completa' },
  ],
}
