let handler = async (m, { conn }) => {
  let teks = `*_PriceList Diamond FreeFire_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰
    
5 💎 = Rp 1.100
20 💎 = Rp 3.300
50 💎 = Rp 7.300
70 💎 = Rp 9.200
100 💎 = Rp 14.500
140 💎 = Rp 18.400
210 💎 = Rp 27.500
355 💎 = Rp 46.000
720 💎 = Rp 90.000
2000 💎 = Rp 255.000
7290 💎 = Rp 915.000
🗿MM= Rp 27.777
🦏MB = Rp 138.888

*FORMAT ORDER :*
User id :
Nickname :
Nominal Order :
Sertakan Bukti pembayaran

⏳ *_PROSES 1-10 MENIT_*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*`.trim()
  m.reply(teks)
}

handler.command = /^(fsff)$/i

module.exports = handler