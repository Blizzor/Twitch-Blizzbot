const { MessageEmbed } = require("discord.js")
const { calcWatchtime } = require("../../modules/functions")

/**
 * @name top10
 * @param {DiscordClient} client 
 * @param {CommandInteraction} interaction 
 * @param {string[]} args 
 */
exports.adminOnly = false
exports.run = (client, interaction) => {
    let channel = client.config.watchtimechannel;
    const embed = new MessageEmbed()
        .setTitle("Watchtime")
        .setColor(0xdfb82d)
        .setDescription(channel)
    const watchtime = client.clients.twitch.db.watchtimeList(channel, 10)
    for (const user in watchtime) {
        embed.addField(watchtime[user].user, calcWatchtime(watchtime[user].watchtime), false)
    }
    interaction.reply(embed)
}
exports.name = "top10";
exports.description = "Die top 10 der Watchtime";
exports.options = []