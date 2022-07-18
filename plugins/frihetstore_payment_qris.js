let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, './src/frihetstore_qris.jpg', 'qris.jpg', '', m)
}

handler.command = /^(fsqris)$/i

module.exports = handler
