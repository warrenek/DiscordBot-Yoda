const Discord = require("discord.js");
const client = new Discord.Client();
const Commands = require("./commands/cmds-router");
const AutoReactions = require("./autoreactions");
const MuteCheck = require("./muteCheck");


const config = require("./config.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    // Call the command handler (./commands/cmds-router.js)
    await Commands.handleMessage(client, message, config.prefix);

    await AutoReactions.checkIfBotHaveToReact(message);
});

client.on('guildMemberAdd', (user) => {
    MuteCheck.checkIfUserHasMute(client, user);
});


client.login(config.token);