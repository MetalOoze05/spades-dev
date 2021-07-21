const config = require('./config.json');
const discord = require('discord.js');
const chalk = require('chalk');

const client = new discord.Client({
    intents: new discord.Intents(discord.Intents.All)
});

client.on('ready', () => {
    console.log(chalk.magenta(`Logged in as ${client.user.username}`))
    client.user.setActivity("Spades#5300", { type: 'WATCHING' })
});

client.login(config.token);
