# 🤖 Xayz Bot - WhatsApp + Telegram

> **Ultra Modern | Premium | Gaming | Elegan | Mempesona | VIP**

[![Node.js](https://img.shields.io/badge/Node.js-24+-green?style=flat-square)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Author](https://img.shields.io/badge/Author-Dev%3A%20Xayz-brightgreen?style=flat-square)](https://github.com/Xayztech)

## ✨ Fitur Utama

### 🔥 Bot Features
- ✅ **Mode Selektif**: WhatsApp, Telegram, atau keduanya
- ✅ **Pairing Code WhatsApp**: Unlimited time connection
- ✅ **Custom Prefix**: Dapat disesuaikan sesuai keinginan
- ✅ **Auto Reply**: Status, kontak, dan custom reply
- ✅ **Modern UI**: Carousel (WA), Button Interactive (TG)
- ✅ **Thumbnail Support**: Gambar, GIF, MP4 dengan autoplay

### 📥 Downloader Features
- ✅ **YouTube**: Video, Music, Shorts, Posts/Slide
- ✅ **TikTok**: Video, Image/Slide
- ✅ **Instagram**: Video, Photo/Slide
- ✅ **Dan lainnya**: Scribd, X, Pinterest, Snapchat, dll
- ✅ **Auto Compression**: HD otomatis untuk WA & TG
- ✅ **Graphics Display**: Grafik kualitas & ukuran file

### 🤖 AI Features
- ✅ **Auto AI Reply**: Reply pesan tanpa command
- ✅ **Gemini AI**: 6 API keys dengan safety disabled
- ✅ **ChatGPT**: 6 API keys dengan konfigurasi custom
- ✅ **Auto Key Rotation**: Otomatis ganti key saat limit
- ✅ **Support File**: Semua jenis file didukung
- ✅ **LaTeX/KaTeX**: Support untuk math formatting
- ✅ **AI Watermark**: Pesan dilabeli sebagai AI

## 📋 Persyaratan

- **Node.js** 24 atau lebih tinggi
- **npm** atau **yarn**
- **Telegram Bot Token** (dari BotFather)
- **Gemini API Keys** (opsional)
- **OpenAI API Keys** (opsional)

## 🚀 Instalasi & Konfigurasi

### 1. Clone Repository
\`\`\`bash
git clone https://github.com/Xayztech/bot-wa-tg.git
cd bot-wa-tg
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Setup Environment
\`\`\`bash
cp .env.example .env
# Edit .env dengan credential Anda
\`\`\`

### 4. Jalankan Bot
\`\`\`bash
npm start
\`\`\`

Atau untuk development:
\`\`\`bash
npm run dev
\`\`\`

## ⚙️ Konfigurasi

Semua konfigurasi ada di \`config.js\`.

## 📱 Cara Menggunakan

### WhatsApp
\`\`\`
Prefix: . (atau sesuai konfigurasi)

.yt link          - Download YouTube
.tt link          - Download TikTok
.ig link          - Download Instagram
.search kata      - Search media
.ai pertanyaan    - Tanya ke AI
\`\`\`

### Telegram
\`\`\`
Prefix: / (atau sesuai konfigurasi)

/yt link          - Download YouTube
/tt link          - Download TikTok
/ig link          - Download Instagram
/search kata      - Search media
/ai pertanyaan    - Tanya ke AI
\`\`\`

## 📂 Struktur Folder

\`\`\`
bot-wa-tg/
├── src/
│   ├── whatsapp/
│   ├── telegram/
│   ├── ai/
│   ├── downloader/
│   └── utils/
├── data/
├── config.js
├── index.js
├── package.json
└── README.md
\`\`\`

## 🔐 Keamanan

- ❌ Jangan share \`.env\` file
- ❌ Jangan push API keys ke repository
- ✅ Gunakan \`.gitignore\` untuk file sensitive

## 👨‍💻 Developer

**Dev: Xayz** - [@Xayztech](https://github.com/Xayztech)

---

**Made with ❤️ by Xayz Dev**
