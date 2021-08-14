const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'presenceUpdate',
    async execute(oldPresence, newPresence, client) {
        if (oldPresence.user.id !== "832259067673051157") return;
        if (oldPresence.status = newPresence.status) return;

        if (newPresence.status == "offline") {
            let guild = await client.guilds.cache.get("833994798897561640")
            let channel = await guild.channels.cache.get("875770080804368454")

            let msg = await channel.send({ embeds: [
                new MessageEmbed()
                .setColor("RED")
                .setAuthor("!! Spades Offline !!")
                .setDescription("An Error has occured and Spades went offline! The developers are working to find out what has happened and will be fixing it soon.\n\nDuring the Downtime, neither the staff nor developers will be able to tell you when it will be fixed in your server. Please follow the updates posted in this channel.\n\nDowntime Started: " + new Date())
                .setFooter(`ID: `)
            ]})
            return msg.edit({ embeds: [
                new MessageEmbed()
                .setColor("RED")
                .setAuthor("!! Spades Offline !!")
                .setDescription("An Error has occured and Spades went offline! The developers are working to find out what has happened and will be fixing it soon.\n\nDuring the Downtime, neither the staff nor developers will be able to tell you when it will be fixed in your server. Please follow the updates posted in this channel.\n\nDowntime Started: " + new Date())
                .setFooter(`ID: ${msg.id}`)
            ]})
        }
    }

}