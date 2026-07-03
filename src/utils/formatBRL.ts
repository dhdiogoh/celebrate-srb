/* ═══════════════════════════════════════════
   src/utils/formatBRL.ts
   Formatação monetária brasileira.
═══════════════════════════════════════════ */

/**
 * Formata um número como moeda BRL.
 * @example formatBRL(19400) → "R$ 19.400"
 */
export function formatBRL(value: number): string {
  return 'R$ ' + value.toLocaleString('pt-BR')
}
