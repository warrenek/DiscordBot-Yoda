const config = require("./config.json");

async function checkIfBotHaveToReact(message) {
    if (message.author.bot)
        return;

    if (config.auto_reactions.channels.includes(message.channel.id)) {
        // Message is in channel where bot have to use automatic reactions
        message.react(message.guild.emojis.find(emoji => emoji.name === config.auto_reactions.positive_reaction))
            .then(() => message.react(message.guild.emojis.find(emoji => emoji.name === config.auto_reactions.negative_reaction)))
            .catch(() => console.error('CHYBA: Chyba při přidávání reakcí'));
    }
}

module.exports = {
    checkIfBotHaveToReact
}