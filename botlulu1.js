// Require the discord.js library
const Discord = require('discord.js');

// Create a new client instance
const client = new Discord.Client();

// When the client is ready, run this code
// This event will only trigger once after logging in
client.once('ready', () => {
    console.log('Ready!');
});

// Listen for messages
client.on('message', message => {
    // Ignore messages sent by the bot
    if (message.author.bot) return;

    // Check if the message contains 'Luci', 'Lucie', or 'Lucy'
    if (message.content.match(/luc(i|ie|y)/gi)) {
        // Respond with a message
        message.channel.send("IT'S Luciole!!!! not `" + message.content + "`");
    }
});

// Log in to Discord with your bot token
client.login(process.env.DISCORD_TOKEN);
