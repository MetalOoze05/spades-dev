const fs = require('fs');
const chalk = require('chalk');
const Discord = require('discord.js');

module.exports = (client) => {
    client.commands = new Discord.Collection();
    client.arrayOfSlashCommands = [];
    fs.readdirSync("commands/").forEach((dir) => {
        const commandFiles = fs.readdirSync(`commands/${dir}/`).filter((file) => file.endsWith(".js"));

        for (const file of commandFiles) {
            const command = require(`../commands/${dir}/${file}`)
            if (command.name) {
                client.commands.set(command.name, command);
                client.arrayOfSlashCommands.push(command);
            } else {
                continue;
            }
        }
    })

    console.log(chalk.magentaBright("Successfully loaded Commands."))
}