let handler = async (m, { conn }) => {
  let teks = `*_PriceList Diamond ML A_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰

86 💎 = Rp 18.850
172 💎 =Rp 37.700 
257 💎 = Rp 56.500 
344 💎 = Rp 75.500
429 💎 = Rp 94.300
514 💎 = Rp 113.000
600 💎 = Rp 132.000
706 💎 = Rp 151.000 
878 💎 = Rp 188.500 
963 💎 = Rp 208.000 
1050 💎 = Rp 226.500
1220 💎 = Rp 264.000
1412 💎 = Rp 302.000 
2195 💎 =Rp 453.000
3688 💎 = Rp 755.000 
5532 💎 = Rp 1.131.000 
9288 💎 = Rp 1.885.000 
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
