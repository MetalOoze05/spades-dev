module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;
        if (!client.commands.has(interaction.commandName)) return;
    
        try {
            await client.commands.get(interaction.commandName).execute(interaction, client);
        } catch (err) {
            console.error(err);
            await interaction.reply({
                content: 'There was an error while executing this command! Please try again.', ephemeral: true
            })
        }
    }
}