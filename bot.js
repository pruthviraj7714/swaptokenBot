const { config } = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');

config();

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = "Welcome to the SPL Token Swap Bot!🔄 Effortlessly swap your tokens in seconds!Whether you're looking to exchange, track rates, or manage your tokens, we've got you covered.🚀 Start your first swap now and enjoy secure, fast, and seamless transactions!";
  
  bot.sendMessage(chatId, message);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `You said: ${msg.text}`);
});
