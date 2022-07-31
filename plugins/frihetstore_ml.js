let handler = async (m, { conn }) => {
  let teks = `*_PriceList Diamond ML A_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰

86 💎 = Rp 19.000
172 💎 =Rp 38.000 
257 💎 = Rp 57.000 
344 💎 = Rp 76.000
429 💎 = Rp 95.000
514 💎 = Rp 114.000
600 💎 = Rp 133.000
706 💎 = Rp 153.000 
878 💎 = Rp 191.000 
963 💎 = Rp 210.000 
1050 💎 = Rp 230.000 
1412 💎 = Rp 306.000 
2195 💎 =Rp 457.000
3688 💎 = Rp 762.000 
5532 💎 = Rp 1.143.000 
9288 💎 = Rp 1.905.000 
⭐SL/TW  Rp 115.000

MISI 100 DM✅ 
140 💎 = Rp. 34.000
172 💎 = Rp. 37.700
MISI 250 DM ✅
284 💎 = Rp. 67.000
344 💎 = Rp. 75.500
MISI 500 DM✅
569 💎 = Rp. 135.000
600 💎 = Rp. 132.000

⏳ *_PROSES 1-10 MENIT. MAX 24 JAM_*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*`.trim()
  m.reply(teks)
}

handler.command = /^(fsml)$/i

module.exports = handler
