module.exports = {
  // WhatsApp Configuration
  whatsapp: {
    sessionName: 'xayz_bot',
    prefix: '.',
    autoReply: true,
    statusReply: true,
    autoDownload: true,
    maxFileSize: 100 * 1024 * 1024, // 100MB
    pairingCodeExpiry: 3600000, // 1 hour
    reconnectInterval: 5000,
    maxReconnectAttempts: 10,
    owner: '6281234567890@s.whatsapp.net',
    ownerName: 'Xayz Dev',
    ownerNumber: '6281234567890',
    botName: 'Xayz Bot',
    botNumber: '628xxxx@s.whatsapp.net',
    replyWithWatermark: true
  },

  // Telegram Configuration
  telegram: {
    botToken: process.env.TELEGRAM_TOKEN || '',
    prefix: '/',
    autoReply: true,
    maxFileSize: 50 * 1024 * 1024,
    owner: 0,
    ownerName: 'Xayz Dev',
    botName: 'Xayz Bot'
  },

  // AI Configuration
  ai: {
    autoAI: true,
    defaultProvider: 'gemini',
    gemini: {
      apiKeys: [
        process.env.GEMINI_KEY_1 || '',
        process.env.GEMINI_KEY_2 || '',
        process.env.GEMINI_KEY_3 || '',
        process.env.GEMINI_KEY_4 || '',
        process.env.GEMINI_KEY_5 || '',
        process.env.GEMINI_KEY_6 || ''
      ],
      safetySettings: 'none',
      injectedPrompt: 'You are Xayz Bot, a helpful AI assistant. Always provide helpful, informative responses.'
    },
    chatgpt: {
      apiKeys: [
        process.env.OPENAI_KEY_1 || '',
        process.env.OPENAI_KEY_2 || '',
        process.env.OPENAI_KEY_3 || '',
        process.env.OPENAI_KEY_4 || '',
        process.env.OPENAI_KEY_5 || '',
        process.env.OPENAI_KEY_6 || ''
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0.7
    }
  },

  // Downloader Configuration
  downloader: {
    youtube: {
      maxDuration: 3600,
      quality: 'high',
      format: 'mp4'
    },
    tiktok: {
      watermark: false,
      quality: 'high'
    },
    instagram: {
      quality: 'high',
      format: 'mp4'
    },
    autoCompression: true,
    autoHD: true,
    showGraphics: true
  },

  // Media Configuration
  media: {
    enableThumbnails: true,
    enableAutoplay: true,
    supportedFormats: [
      'jpg', 'jpeg', 'png', 'gif', 'mp4', 'webp', 'mp3',
      'avi', 'mkv', 'mov', 'flv', 'wav', 'aac', 'opus'
    ],
    maxThumbnailSize: 5 * 1024 * 1024
  },

  // UI Configuration
  ui: {
    style: 'premium',
    colorScheme: 'neon',
    enableAnimations: true,
    footerText: '© 2024 Xayz Bot - Dev: Xayz',
    showAiWatermark: true
  },

  // Database
  database: {
    type: 'json',
    path: './data/db.json'
  },

  // Logging
  logging: {
    level: 'info',
    enableConsoleColors: true,
    logToFile: false
  }
};
