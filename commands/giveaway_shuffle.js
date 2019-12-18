function execute(client, message, args) {
    message.delete();

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('na tento příkaz nemáš dostatečné oprávnění.');

    var randomMember = getRandomMember(message.channel.members);

    client.channels.get(message.channel.id).send(`@everyone Náhodně vybraným člověkem je <@${randomMember.user.id}>`);
}

function getRandomMember(members) {
    var member = members.random(1)[0];

    if(member.user.bot)
        member = getRandomMember(members);

    return member;
}

module.exports = {
    execute
}