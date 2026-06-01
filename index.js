const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// 1. Keeps the web hosting port alive so Render doesn't crash
app.get('/', (req, res) => res.send('Bot is awake!'));
app.listen(process.env.PORT || 3000);

// 2. Your Minecraft Bot logic
function createBot() {
    const bot = mineflayer.createBot({
        host: 'YOUR_MAGMANODE_IP', // Put your server IP here
        port: 25565,               // Change if your port is different
        username: 'MagmaBot247',
        version: '1.20.1'          // Change to match your server version
    });

    bot.on('spawn', () => console.log('Bot logged in!'));
    bot.on('end', () => setTimeout(createBot, 10000)); // Auto-reconnect
    bot.on('error', (err) => console.log(err));
}
createBot();
