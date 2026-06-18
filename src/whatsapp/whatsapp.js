const chalk = require('chalk');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, isJidGroup } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
const config = require('../../config');
const waCommands = require('./commands');
const waHandlers = require('./handlers');

let pairingCode;
let sock;

const initWhatsApp = async () => {
  try {
    console.log(chalk.cyanBright('\n🔄 Initializing WhatsApp Bot...\\n'));

    const { state, saveCreds } = await useMultiFileAuthState(path.join('./data', config.whatsapp.sessionName));

    sock = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      connectTimeoutMs: 60000,
      defaultQueryTimeoutMs: 0,
      keepAliveIntervalMs: 10000,
      emitOwnEvents: true,
      browser: ['Xayz Bot', 'Chrome', '120.0.0.0'],
      generateHighQualityLinkPreview: true
    });

    // Pairing Code Handler
    if (!state.creds?.registered) {
      console.log(chalk.yellowBright('\n📱 Requesting Pairing Code...\\n'));
      
      try {
        pairingCode = await sock.requestPairingCode(config.whatsapp.ownerNumber);
        console.log(chalk.greenBright(`✅ Pairing Code: ${chalk.cyan.bold(pairingCode)}`));
        console.log(chalk.yellowBright('⏰ Pairing Code Valid for: 3 minutes\\n'));
      } catch (err) {
        console.log(chalk.red('❌ Failed to get pairing code. Try again.'));
      }
    }

    // Connection Update Handler
    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        console.log(chalk.yellowBright('\n📲 Scan QR Code:\\n'));
        qrcode.generate(qr, { small: true });
      }

      if (connection === 'open') {
        console.log(chalk.greenBright('\n✅ WhatsApp Connected!'));
        console.log(chalk.cyanBright(`Bot Name: ${config.whatsapp.botName}`));
        console.log(chalk.cyanBright(`Prefix: ${config.whatsapp.prefix}\\n`));
      } else if (connection === 'close') {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        
        if (shouldReconnect) {
          console.log(chalk.yellowBright('🔄 Reconnecting...'));
          setTimeout(() => initWhatsApp(), config.whatsapp.reconnectInterval);
        } else {
          console.log(chalk.red('❌ Connection closed. Please login again.'));
        }
      }
    });

    // Creds Update Handler
    sock.ev.on('creds.update', saveCreds);

    // Messages Handler
    sock.ev.on('messages.upsert', async (m) => {
      if (!m.messages) return;

      for (const msg of m.messages) {
        if (!msg.message) continue;

        try {
          await waHandlers.handleMessage(sock, msg, config);
        } catch (err) {
          console.error(chalk.red('Message handler error:'), err.message);
        }
      }
    });

    // Group Updates
    sock.ev.on('groups.update', (update) => {
      console.log(chalk.blueBright('📢 Group Update:'), update);
    });

  } catch (err) {
    console.error(chalk.red('❌ WhatsApp Error:'), err.message);
    setTimeout(() => initWhatsApp(), 5000);
  }
};

module.exports = { initWhatsApp, getSocket: () => sock };

initWhatsApp();
