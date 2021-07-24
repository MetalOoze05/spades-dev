module.exports = {
    name: 'guildMemberAdd',
    async execute(member, client) {
        let vChannel = await member.guild.channels.cache.get("868522454451114054");
        let greetChannel = await member.guild.channels.cache.get("833994798909227025");

        await vChannel.edit({ name: `Total Members: ${member.guild.memberCount.toString()}`});
        return greetChannel.send({ content: `Welcome to the server ${member}!` });
    }
}