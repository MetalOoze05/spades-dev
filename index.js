const config = require('./config.json');
const Discord = require('discord.js');
const chalk = require('chalk');

const client = new Discord.Client({
    intents: new Discord.Intents(Discord.Intents.All),
    fetchAllMembers: false
});

require('dotenv').config()
require('./handler/command')(client)
require('./handler/event')(client)

client.login(process.env.token);
