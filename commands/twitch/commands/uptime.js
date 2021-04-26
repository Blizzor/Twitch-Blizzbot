const fetch = require("node-fetch")
exports.help = true
/**
 * @name uptime
 * @module TwitchCommands
 * @param {TwitchClient} client
 * @param {string} target
 * @param {ChatUserstate} context
 * @param {string} msg
 * @param {boolean} self
 */
exports.run = async (client, target, context, msg, self) => {
    let uptimerequest = await fetch(`https://decapi.me/twitch/uptime/${target.slice(1)}`, {})
    let uptime = (await uptimerequest.text())
        .replace("days", "Tagen").replace("day", "Tag")
        .replace("hours", "Stunden").replace("hour", "Stunde")
        .replace("minutes", "Minuten").replace("minute", "Minute")
        .replace("seconds", "Sekunden").replace("second", "Sekunde")
    if (uptime == `${target.slice(1)} is offline`) {
        client.say(target, `${target.slice(1)} ist offline.`)
    } else {
        client.say(target, `${target.slice(1)} ist seit ${uptime} live. blizzo2Logo `)
    }
}

