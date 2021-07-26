const Discord = require('discord.js');  
const { embedColor } = require('../../config.json');

module.exports = {
    name: "announce",
    description: "Announce using this command!",
    options: [
        {
            name: "channel",
            type: "CHANNEL",
            description: "Channel where you want to announce!",
            required: true
        },
        {
            name: "title",
            type: "STRING",
            description: "Title of the announcement!",
            required: true
        },
        {
            name: "message",
            type: "STRING",
            description: "The message you want to deliver!",
            required: true
        }
    ],
    async execute(interaction, client, args) {
        if (!interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD)) {
           return interaction.reply({
               content: "Sorry but you don't have enough permissions to use this command!",
               ephemeral: true
           })
        }

        let channel = interaction.guild.channels.cache.get(args[0].value);
        let title = args[1].value
        let message = args[2].value

        if (!channel) {
            return interaction.reply({
                content: "Sorry but I am not able to find the channel you mentioned in this server.",
                ephemeral: true
            })
        };

        let embed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setTitle(title)
        .setDescription(message)
        .setFooter(`Announced by: ${interaction.member.user.tag}`, interaction.member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

        await interaction.reply({ 
            content: "Message Successfully sent!",
            ephemeral: true
        })
        return channel.send({ embeds: [embed] })
    }
}