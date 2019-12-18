const ytdl = require('ytdl-core');

async function execute(client, message, args) 
{
   if(!message.member.voiceChannel) return message.channel.send("Připoj se k táboráku.");
   //console.log(`kontrola chanu`);

   if(!args[0]) return  message.channel.send("Nic si nevložil máslo."); 
   //console.log(`kontrola argumetnu`);

   let validate = await ytdl.validateURL(args[0])

   if(!validate) return  message.channel.send("Nic nepřehraju....to není URL, SORRY JAKO.");
   console.log(`valide argumetu: ${args[0]}`)

   //let info = await ytdl.getInfo(args[0]);
   //console.log(`bagruju info z : ${info}`);

   let connection = await message.member.voiceChannel.join();
   console.log(`connection voice chanel ${connection}`);
   
   connection.playOpusStream(await ytdl(url));
   //let dispetcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly'}));
   //console.log(dispetcher);

   var minutes = Math.floor(info.player_response.videoDetails.lengthSeconds / 60);
   var secs = info.player_response.videoDetails.lengthSeconds % 60;

   //message.channel.send(`Právě ti diskžokej: ${message.author} skladbu: ${info.title}`)
   message.channel.send(`Právě ti diskžokej: ${message.author}`)

}


module.exports = {
    execute
}