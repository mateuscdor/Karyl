let handler = async (m, { conn }) => {
	let gp = './src/gopay.jpg'
	conn.sendFile(m.chat, gp, 'gopay.jpg', '', m)
}

handler.command = /^(fsgp)$/i
module.exports = handler