module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.guild) return false;
        if (!interaction.isCommand()) return;
        if (!client.commands.has(interaction.commandName)) return;
    
        let args;
        if (!interaction.options._hoistedOptions) {
            args = undefined
        } else {
            args = interaction.options._hoistedOptions
        }

        //console.log(interaction.options._options)
        try {
            await client.commands.get(interaction.commandName).execute(interaction, client, args);
        } catch (err) {
            console.error(err);
            await interaction.reply({
                content: 'There was an error while executing this command! Please try again.', ephemeral: true
            })
        }
    }
}