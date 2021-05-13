const { calcWatchtime } = require("../../modules/functions")
const { MessageEmbed, CommandInteraction } = require("discord.js")

/**
 * @name uwtime
 * @module DiscordCommands
 * @param {DiscordClient} client
 * @param {CommandInteraction} interaction
 */
exports.run = (client, interaction) => {
    let channel = client.config.watchtimechannel;
    let user = interaction.options.find((option) => option.name == "nutzer").value
    var watchtime = client.clients.twitch.db.getWatchtime(channel, user)
    if (!watchtime) return interaction.reply("Diesen Nutzer kenne ich nicht.")

    var embed = new MessageEmbed()
        .setColor(0xdfb82d).setThumbnail(url = "https://blizzor.de/Twitchbot/blizzbot.png")
        .setTitle("Watchtime")
        .addField("Nutzername", user)
        .addField("Watchtime", calcWatchtime(watchtime))

    interaction.reply(embed);
}
exports.name = "watchtime";
exports.description = "Frage die Watchtime eines Nutzers ab";
exports.options = [{
    name: "nutzer",
    type: "STRING",
    description: "Der Nutzername, für den du die Watchtime abfragen möchtest",
    required: true
}]