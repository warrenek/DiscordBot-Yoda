const fs = require('fs');
const config = require("../config.json");

function execute(client, message, args) {
    message.delete(0)
    .then(() => console.log(`Smazal jsem příkaz mute od ${message.author.username}`))
    .catch(() => console.error(`Nepodařilo se mi smazat příkaz mute od ${message.author.username}`));

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('na tento příkaz nemáš dostatečné oprávnění.');

    let reason = args.slice(1).join(' ');
    if(!reason) return message.author.createDM().then((t) => t.send('Když někomu chceš dát mute tak by bylo fajn kdybys uvedl důvod... :-)'));

    let user = message.mentions.users.first();

    if(!user) return message.author.createDM().then((t) => t.send('Uživatel nenalezen... :-('));

    client.channels.get(config.mute.info_channel).send(`${message.author} dal mute uživateli ${user.tag}(${user.id}) a jako důvod uvedl: ${args.slice(1).join(' ')}.`);
    
    message.guild.members.get(user.id).addRole(config.mute.role);

    _createJsonForMutedUser(user.id, message.author.id, reason);
}

async function _createJsonForMutedUser(userId, mutedBy, reason) {
    let mutedUser = {
        mutedBy,
        mutedAt: new Date(),
        reason
    }

    fs.writeFile(`./muted_users/${userId}.json`, JSON.stringify(mutedUser), 'utf8', () => {
        console.log('INFO: Vytvářím soubor pro uživatele, který dostal mute.');
    });
}

module.exports = {
    execute
}