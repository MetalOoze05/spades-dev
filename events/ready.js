const chalk = require('chalk');

module.exports = {
    name: 'ready',
    execute(client) {
        console.log(chalk.magenta(`Logged in as ${client.user.username}`))
        client.user.setActivity("Spades#5300", { type: 'WATCHING' })

        client.guilds.cache.forEach(async (g) => {
            await client.guilds.cache.get(g.id).commands.set(client.arrayOfSlashCommands)
        })
        console.log(chalk.magentaBright("Successfully registered Slash Commands."))
        
    }
}