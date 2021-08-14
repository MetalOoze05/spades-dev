const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "online",
    description: "Spades is now Online!",
    options: [
        {
            name: "id",
            type: "STRING",
            description: "The downtime message's ID!",
            required: true
        },
        {
            name: "message",
            type: "STRING",
            description: "The message you want to deliver about the downtime!",
            required: true
        },
    ],
    async execute(interaction, client, args) {
        if (!interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD)) {
            return interaction.reply({
                content: "Sorry but you don't have enough permissions to use this command!",
                ephemeral: true
            })
        }
        
        let message_to_send = args[1].value;

        let embed = new Discord.MessageEmbed()
        .setColor("#5cdb95")
        .setAuthor("!! Spades Online !!")
        .setDescription(message_to_send)
        .setFooter(interaction.member.user.tag, interaction.member.user.displayAvatarURL({ dynamic: true }))

        let downtime_message_channel = await client.guilds.cache.get("833994798897561640").channels.cache.get("875770080804368454")

        return downtime_message_channel.send({ embeds: [embed]});
    }
}