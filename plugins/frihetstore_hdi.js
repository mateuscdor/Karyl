let handler = async (m, { conn }) => {
  let teks = `*_PriceList Chip HDI_*
*_VIA ID - NICK_*
🔰 *FrihetStore* 🔰

100M 🪙 = Rp. 7.000
200M 🪙 = Rp. 14.000
300M 🪙 = Rp. 20.000
400M 🪙 = Rp. 27.000
500M 🪙 = Rp. 33.000
600M 🪙 = Rp. 40.000
700M 🪙 = Rp. 46.000
800M 🪙 = Rp. 53.000
900M 🪙 = Rp. 59.500
1B       🪙 = Rp. 63.000
5B+     🪙 = Rp. X62.000

NOTE :
~ MAX 2 ID SETIAP PEMBELIAN
~ SS BUKTI TF SESUAI NOMINAL JIKA KURANG TIDAK DI PROSES`.trim()
  m.reply(teks)
}

handler.command = /^(fshdi)$/i

module.exports = handler
