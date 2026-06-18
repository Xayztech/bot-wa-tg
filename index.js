#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const { createInterface } = require('readline');

// ASCII Art RGB Neon
const printAsciiArt = () => {
  const ascii = `
${'═'.repeat(60)}
${chalk.cyanBright('╔════════════════════════════════════════════════════════╗')}
${chalk.magentaBright('║')}                                                            ${chalk.magentaBright('║')}
${chalk.cyanBright('║')}  ${chalk.rgb(0, 255, 255).bold('██████')}  ${chalk.rgb(255, 0, 255).bold('███████')}  ${chalk.rgb(0, 255, 127).bold('██████')}  ${chalk.rgb(255, 255, 0).bold('████')}     ${chalk.magentaBright('║')}
${chalk.cyanBright('║')}  ${chalk.rgb(0, 255, 255).bold('██  ██')}  ${chalk.rgb(255, 0, 255).bold('██')}      ${chalk.rgb(0, 255, 127).bold('██')}     ${chalk.rgb(255, 255, 0).bold('██')}     ${chalk.magentaBright('║')}
${chalk.cyanBright('║')}  ${chalk.rgb(0, 255, 255).bold('██████')}  ${chalk.rgb(255, 0, 255).bold('██████')}  ${chalk.rgb(0, 255, 127).bold('██')}     ${chalk.rgb(255, 255, 0).bold('██')}     ${chalk.magentaBright('║')}
${chalk.cyanBright('║')}  ${chalk.rgb(0, 255, 255).bold('██')}      ${chalk.rgb(255, 0, 255).bold('██')}      ${chalk.rgb(0, 255, 127).bold('██')}     ${chalk.rgb(255, 255, 0).bold('██')}     ${chalk.magentaBright('║')}
${chalk.cyanBright('║')}  ${chalk.rgb(0, 255, 255).bold('██')}      ${chalk.rgb(255, 0, 255).bold('███████')}  ${chalk.rgb(0, 255, 127).bold('██████')}  ${chalk.rgb(255, 255, 0).bold('████████')}  ${chalk.magentaBright('║')}
${chalk.magentaBright('║')}                                                            ${chalk.magentaBright('║')}
${chalk.cyanBright('╠════════════════════════════════════════════════════════╣')}
${chalk.magentaBright('║')}      ${chalk.yellow.bold('Dev: Xayz')}  ${chalk.greenBright('│')} ${chalk.rgb(255, 0, 255).bold('Ultra Modern Bot')}          ${chalk.magentaBright('║')}
${chalk.cyanBright('╚════════════════════════════════════════════════════════╝')}
${'═'.repeat(60)}
  `;
  console.clear();
  console.log(ascii);
};

const showMenu = () => {
  console.log(chalk.cyanBright('\\n╔════════════════════════════════════════╗'));
  console.log(chalk.cyanBright('║') + chalk.yellow.bold('       PILIH MODE BOT               ') + chalk.cyanBright('║'));
  console.log(chalk.cyanBright('╠════════════════════════════════════════╣'));
  console.log(chalk.magentaBright('║ [1] WhatsApp Bot                        ║'));
  console.log(chalk.magentaBright('║ [2] Telegram Bot                        ║'));
  console.log(chalk.magentaBright('║ [3] WhatsApp + Telegram (All in One)    ║'));
  console.log(chalk.cyanBright('╚════════════════════════════════════════╝\\n'));
};

const askQuestion = (question) => {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(chalk.cyan.bold(question), (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const initializeBot = async () => {
  printAsciiArt();
  
  console.log(chalk.greenBright('✓ Bot WhatsApp + Telegram v1.0.0'));
  console.log(chalk.yellowBright('✓ Node.js 24 - CJS Mode'));
  console.log(chalk.magentaBright('✓ Premium Features Enabled\\n'));

  showMenu();

  const choice = await askQuestion('Pilih mode [1/2/3]: ');
  const ownerNum = await askQuestion('Masukkan nomor owner (cth: 628xxxx): ');
  const botName = await askQuestion('Masukkan nama bot (default: Xayz Bot): ') || 'Xayz Bot';
  const prefix = await askQuestion('Masukkan prefix (default: .): ') || '.';

  if (!['1', '2', '3'].includes(choice)) {
    console.log(chalk.red('\\n❌ Pilihan tidak valid!'));
    process.exit(1);
  }

  config.whatsapp.ownerNumber = ownerNum;
  config.whatsapp.ownerName = 'Owner';
  config.whatsapp.botName = botName;
  config.whatsapp.prefix = prefix;
  config.telegram.ownerName = 'Owner';
  config.telegram.botName = botName;

  console.log(chalk.cyanBright('\\n════════════════════════════════════════'));
  console.log(chalk.greenBright('✓ Konfigurasi berhasil diset'));
  console.log(chalk.cyanBright('════════════════════════════════════════\\n'));

  if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data', { recursive: true });
  }

  if (choice === '1') {
    console.log(chalk.magentaBright('🚀 Memulai WhatsApp Bot...\\n'));
    require('./src/whatsapp/whatsapp');
  } else if (choice === '2') {
    console.log(chalk.magentaBright('🚀 Memulai Telegram Bot...\\n'));
    require('./src/telegram/telegram');
  } else if (choice === '3') {
    console.log(chalk.magentaBright('🚀 Memulai WhatsApp + Telegram Bot...\\n'));
    require('./src/whatsapp/whatsapp');
    require('./src/telegram/telegram');
  }
};

process.on('uncaughtException', (err) => {
  console.error(chalk.red('\\n❌ ERROR:'), err.message);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(chalk.red('\\n❌ Unhandled Rejection:'), reason);
});

initializeBot().catch(err => {
  console.error(chalk.red('❌ Gagal menjalankan bot:'), err);
  process.exit(1);
});
