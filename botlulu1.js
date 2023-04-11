// Require the discord.js library
const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code
// This event will only trigger once after logging in
client.once('ready', () => {
  console.log('Ready!');
  const channel = client.channels.cache.find(channel => channel.name === 'bot-lulu');
  if (channel) {
    channel.send('Reboot');
  } else {
    console.log('Could not find bot-lulu channel.');
  }
});

// Listen for messages
client.on('messageCreate', message => {
  // Ignore messages sent by the bot
  if (message.author.bot) return;

  // Check if the message contains any sad emoji
  const sadEmojis = ['😔', '😢', '😭', '😞', '😟', '🙁', '☹️', '🥺', '😦'];
  if (sadEmojis.some(emoji => message.content.includes(emoji))) {
    message.channel.send("Don't be sad, I'm here for you :pleading_face:");
    return;
  }

  // Check if the message contains 'I'm', 'I', 'Im', or 'I am' followed by 'sad', 'depressed', 'crying', or 'cry' using regex
  const regex = /^.*(i'm|i|im|i am).*\b(sad|depressed|crying|cry)\b.*$/i;
  if (regex.test(message.content)) {
    message.channel.send("Don't be sad, I'm here for you :pleading_face:");
    return;
  }

  // Check if the message contains 'Luci', 'Lucie', or 'Lucy' using regex
  const luciRegex = /^.*(luci|lucie|lucy)\b.*$/i;
  if (luciRegex.test(message.content)) {
    // Respond with a message
    message.channel.send("It's Luciole! not `" + message.content + "`");
    return;
  }
    // Check if the message contains 'Luci', 'Lucie', or 'Lucy' using regex
  const eloiRegex = /^.*(eloi|elo|eloy)\b.*$/i;
  if (eloiRegex.test(message.content)) {
    // Respond with a message
    message.channel.send("It's Eloicul! not `" + message.content + "`");
    return;
  }

  // Log the message with no trigger detected
  console.log(`No trigger in #${message.channel.name}: ${message.content}`);
});

// Log in to Discord with your bot token
client.login(process.env.DISCORD_TOKEN);
