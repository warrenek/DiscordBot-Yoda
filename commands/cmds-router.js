const fs = require('fs');

let commandsList = new Map();

fs.readdir("./commands", (err, files) => {
    files.forEach(file => {
        if (file === 'cmds-router.js')
            return;

        let commandName = file.split(".")[0];
        let importedCommandsParams = require(`./${file}`);

        commandsList.set(commandName, importedCommandsParams);

    });
});

async function handleMessage(client, message, prefix) {
    if (message.author.bot)
        return;

    if (message.content.indexOf(prefix) !== 0)
        return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    commandsList.forEach(async function(value, key) {
        if(key !== cmd)
            return;

        value.execute(client, message, args);

    })
}

module.exports = {
    handleMessage
}