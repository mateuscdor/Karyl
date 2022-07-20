let handler = async (m, { conn }) => {
  let teks = `*_PriceList Chip HDI_*
*_VIA ID - NICK_*
🔰 *FrihetStore* 🔰

100M 🪙 = Rp. 7.000
200M 🪙 = Rp. 13.000
300M 🪙 = Rp. 19.500
400M 🪙 = Rp. 26.000
500M 🪙 = Rp. 32.500
600M 🪙 = Rp. 39.000
700M 🪙 = Rp. 45.500
800M 🪙 = Rp. 52.000
900M 🪙 = Rp. 58.500
1B       🪙 = Rp. 62.500
3B+     🪙 = Rp. X62.000
8B+     🪙 = Rp. X61.500

NOTE :
~ MAX 2 ID SETIAP PEMBELIAN
~ SS BUKTI TF SESUAI NOMINAL JIKA KURANG TIDAK DI PROSES`.trim()
  m.reply(teks)
}

handler.command = /^(fshdi)$/i

module.exports = handler
