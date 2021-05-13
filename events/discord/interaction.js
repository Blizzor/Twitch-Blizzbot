const { DiscordClient } = require("../../modules/discordclient");

/**
 * 
 * @param {DiscordClient} client 
 * @param {interaction} interaction 
 */
exports.event = (client, interaction) => {
    if (!interaction.isCommand()) return;
    var command = client.slashCommands.get(interaction.commandName);
    if (!command) return console.log(`Unknown slas command ${interaction.commandName} received.`);
    command.run(client, interaction);
}