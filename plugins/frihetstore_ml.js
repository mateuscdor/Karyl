let handler = async (m, { conn }) => {
  let teks = `*_PriceList Diamond ML A_*
*_Via ID - Legal 100%_*
ð° *FrihetStore* ð°

86     ð = Rp 19.700
172   ð = Rp 39.400 
257   ð = Rp 59.100 
344   ð = Rp 78.800
429   ð = Rp 98.500
514   ð = Rp 118.200
600   ð = Rp 137.900
706   ð = Rp 157.600 
878   ð = Rp 197.000 
963   ð = Rp 216.700 
1050 ð = Rp 236.400
1220 ð = Rp 275.000
1412 ð = Rp 315.000 
2195 ð =Rp 472.000
3688 ð = Rp 788.000 
5532 ð = Rp 1.181.000 
9288 ð = Rp 1.970.000 
â­SL/TW  Rp 115.000

MISI 100 DMâ
140 ð = Rp. 34.000
172 ð = Rp. 39.400
MISI 250 DM â
284 ð = Rp. 67.000
344 ð = Rp. 78.800
MISI 500 DMâ
569 ð = Rp. 135.000
600 ð = Rp. 137.900

â³ *_PROSES 1-10 MENIT. MAX 24 JAM_*
â ï¸ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*`.trim()
  m.reply(teks)
}

handler.command = /^(fsml)$/i

module.exports = handler
