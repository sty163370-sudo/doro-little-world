/** 点击 DORO，或角落那张小纸条时，从这里随机抽一句。 */
export const doroQuotes = [
  '你好你好，被你找到啦 ♡',
  '软软的一天也算数。',
  '先喝口水，再忙啦。',
  '啵。就这句。',
  '写代码中，请勿打扰（开玩笑的）',
  '慢慢来，也是在往前。',
  '今天的颜色是樱花粉。',
  '今天也要好好生活呀！',

]

export function pickQuote(current: string) {
  const pool = doroQuotes.filter((quote) => quote !== current)
  const source = pool.length > 0 ? pool : doroQuotes
  return source[Math.floor(Math.random() * source.length)] ?? ''
}
