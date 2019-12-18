function execute(client, message, args) {
    message.reply(`Testovací příkaz byl přijat s následujícími argumenty: ${args.length > 0 ? args : 'žádné argumenty'}`)
}

module.exports = {
    execute
}