import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const BASE = './public/images/logos/partners'
const files = fs.readdirSync(BASE).filter(f => /\.(webp|png|jpg|jpeg|svg)$/i.test(f))

const PAD = (s, n) => String(s).padEnd(n)
const rows = []

for (const file of files) {
  const fp = path.join(BASE, file)

  if (file.endsWith('.svg')) {
    rows.push({ file, hasAlpha: 'SVG', format: 'svg', channels: '-', corner: '-', center: '-', verdict: 'SVG (skip)' })
    continue
  }

  try {
    const buf = fs.readFileSync(fp)
    const meta = await sharp(buf).metadata()

    // Get raw RGBA pixels
    const { data, info } = await sharp(buf)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })

    const { width, height, channels } = info

    // Pixel at (0,0)
    const ci = 0
    const cornerR = data[ci], cornerG = data[ci+1], cornerB = data[ci+2], cornerA = data[ci+3]

    // Pixel at center top edge (width/2, 0)
    const ti = (Math.floor(width / 2)) * 4
    const topR = data[ti], topG = data[ti+1], topB = data[ti+2], topA = data[ti+3]

    const verdict = cornerA < 10 || topA < 10
      ? 'TRANSPARENTE'
      : (meta.hasAlpha ? 'FUNDO EMBUTIDO (alpha existe mas canto é opaco)' : 'FUNDO EMBUTIDO (sem alpha)')

    rows.push({
      file,
      hasAlpha: meta.hasAlpha,
      format: meta.format,
      channels: meta.channels,
      corner: `(${cornerR},${cornerG},${cornerB},${cornerA})`,
      center: `(${topR},${topG},${topB},${topA})`,
      verdict
    })
  } catch (e) {
    rows.push({ file, hasAlpha: 'ERR', format: 'ERR', channels: 'ERR', corner: e.message.slice(0,30), center: '-', verdict: 'ERRO' })
  }
}

console.log('\n' + PAD('ARQUIVO', 42) + PAD('hasAlpha', 10) + PAD('fmt', 6) + PAD('ch', 4) + PAD('CORNER (RGBA)', 24) + PAD('CENTER-TOP (RGBA)', 24) + 'VEREDITO')
console.log('─'.repeat(140))
for (const r of rows) {
  console.log(PAD(r.file, 42) + PAD(r.hasAlpha, 10) + PAD(r.format, 6) + PAD(r.channels, 4) + PAD(r.corner, 24) + PAD(r.center, 24) + r.verdict)
}
