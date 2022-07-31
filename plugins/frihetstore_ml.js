let handler = async (m, { conn }) => {
  let teks = `*_PriceList Diamond ML A_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰

86     💎 = Rp 19.700
172   💎 = Rp 39.400 
257   💎 = Rp 59.100 
344   💎 = Rp 78.800
429   💎 = Rp 98.500
514   💎 = Rp 118.200
600   💎 = Rp 137.900
706   💎 = Rp 157.600 
878   💎 = Rp 197.000 
963   💎 = Rp 216.700 
1050 💎 = Rp 236.400
1220 💎 = Rp 275.000
1412 💎 = Rp 315.000 
2195 💎 =Rp 472.000
3688 💎 = Rp 788.000 
5532 💎 = Rp 1.181.000 
9288 💎 = Rp 1.970.000 
⭐SL/TW  Rp 115.000

MISI 100 DM✅
140 💎 = Rp. 34.000
172 💎 = Rp. 39.400
MISI 250 DM ✅
284 💎 = Rp. 67.000
344 💎 = Rp. 78.800
MISI 500 DM✅
569 💎 = Rp. 135.000
600 💎 = Rp. 137.900

⏳ *_PROSES 1-10 MENIT. MAX 24 JAM_*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*`.trim()
  m.reply(teks)
}

handler.command = /^(fsml)$/i

module.exports = handler
