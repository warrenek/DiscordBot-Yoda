const config = require("./config.json");
const fs = require('fs');

function checkIfUserHasMute(client, user) {
    fs.readdir('./muted_users', function (err, filenames) {
        if (err) {
            console.error(err);
            return;
        }

        filenames.forEach(function (filename) {
            let userJsonFile = `${user.id}.json`;

            if (filename === userJsonFile) {
                console.log('INFO: Připojil se hráč, který má mít mute.')
                
                fs.readFile(`./muted_users/${userJsonFile}`, 'utf-8', function (err, content) {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    var userMuteInfo = JSON.parse(content);

                    client.channels.get(config.mute.info_channel).send(`Na server se připojil uživatel ${user.user.username}#${user.user.discriminator}(${user.id}), který dostal mute s důvodem: ${userMuteInfo.reason}. Mute mu bylo automaticky vráceno.`);

                    user.addRole(config.mute.role);
                });
            }
        });
    });
}

module.exports = {
    checkIfUserHasMute
}