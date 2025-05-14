const config = require('./settings');

function handleCommand(command, sock, msg) {
  const sender = msg.key.remoteJid;

  switch (command) {
    case 'ping':
      sock.sendMessage(sender, { text: 'pong!' }, { quoted: msg });
      break;

    case 'botname':
      sock.sendMessage(sender, { text: `Bot Name: ${config.botName}` }, { quoted: msg });
      break;

    case 'owner':
      sock.sendMessage(sender, { text: `Owner: ${config.ownerName}` }, { quoted: msg });
      break;

    default:
      sock.sendMessage(sender, { text: `Unknown command: ${command}` }, { quoted: msg });
  }
}

module.exports = handleCommand;


---
