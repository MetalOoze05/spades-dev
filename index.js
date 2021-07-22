const config = require('./config.json');
const Discord = require('discord.js');
const chalk = require('chalk');

const client = new Discord.Client({
    intents: new Discord.Intents(Discord.Intents.All),
    fetchAllMembers: false
});

require('./handler/command')(client)
require('./handler/event')(client)

client.login(config.token);
