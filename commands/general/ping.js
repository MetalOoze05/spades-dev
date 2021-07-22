const Discord = require('discord.js');
const { embedColor } = require('../../config.json')

module.exports = {
    name: "ping",
    description: "Sends you the latency of the bot!",
    async execute(interaction, client) {
        
        let Date1 = Date.now()
        await interaction.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setDescription("Please wait...")
            ], ephemeral: true
        })
        let Date2 = Date.now()

        return interaction.editReply({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(embedColor)
                .addFields(
                    {
                        name: "API Latency",
                        value: client.ws.ping + "ms",
                        inline: true
                    }, 
                    {
                        name: "Message Latency",
                        value: Date2 - Date1 + "ms",
                        inline: true
                    }
                )
            ], ephemeral: true
        })

    }
}