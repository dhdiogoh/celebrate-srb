/* ═══════════════════════════════════════════
   src/utils/whatsapp.ts
   Geração de links WhatsApp tipados.
═══════════════════════════════════════════ */
import { SITE } from '@/config/site'

/**
 * Gera URL de WhatsApp com mensagem pré-preenchida.
 * @param message - mensagem em texto puro (será encodada automaticamente)
 * @param phone   - número no formato internacional sem + (padrão: SITE.WHATSAPP_NUMBER)
 */
export function buildWhatsAppUrl(message: string, phone = SITE.WHATSAPP_NUMBER): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/** Mensagens pré-definidas por contexto */
export const WA_MESSAGES = {
  orcamentoGeral:
    'Olá! Gostaria de solicitar um orçamento para o Celebrate.',

  orcamentoCorporativo:
    'Olá! Gostaria de solicitar um orçamento para evento corporativo no Celebrate.',

  orcamento15anos:
    'Olá! Gostaria de planejar uma festa de 15 anos no Celebrate.',

  simulador: (pacote: string, pessoas: number, total: string) =>
    `Olá! Tenho interesse em realizar um evento no Celebrate para ${pessoas} pessoas, no pacote ${pacote}. Estimativa total: ${total}. Gostaria de solicitar um orçamento personalizado.`,
} as const
