const ytdl = require('ytdl-core');
const {google} = require('googleapis');

// initialize the Youtube API library
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyAKbqu6C2RR4AhzqAg-oe71pT_UPyUCqEA',
});

async function GetListYTB(searchInput) {
    console.log(`zactek GetListYTB:${searchInput}`);
      return youtube.search.list({
       part: 'id,snippet',
       q: searchInput,
       type: 'video',
       maxResults:10,
       order:'viewCount'
     })   
};


async function execute(client, message, args){
   if(!message.member.voiceChannel) return message.channel.send("Připoj se k slečinkám!"); 
   console.log(`kontrola chanu`);

   if(!args[0]) return  message.channel.send("Nic si nevložil máslo."); 
   console.log(`kontrola argumetnu`);

    let ytbAPIresponse = await GetListYTB(args.join(' '));
    let ytbPref = 'https://www.youtube.com/watch?v='+'';
    arr = [];
    
    console.log(`tu ${ytbAPIresponse.data.items.find(c=>c.id.videoId).toString()}`);

    ytbAPIresponse.data.items.forEach(function(item, index, array) {
        arr.push(ytbPref + item.id.videoId + ';' + item.snippet.title + ' ' + item.snippet.description);
        console.log(ytbPref + item.id.videoId);       
        })

        if(arr.length==0){
        return  message.channel.send("Nic sem nenašel ..znovu a lépe.");
        }

    console.log('nalezeno:' + arr.length);
        // vezmu prni nejsledovanejsi link
    let urlLink = arr[0].split(';')[0];
    let urlTitle = arr[0].split(';')[1];

    //oznameni :)
    

    console.log(urlLink, urlTitle);

    let validate = await ytdl.validateURL(urlLink)

    if(!validate) return  message.channel.send("Nic nepřehraju....to není URL, SORRY JAKO.");
    console.log(`validace argumetu: ${urlLink}`)


   let connection = await message.member.voiceChannel.join();
   console.log(`connection voice chanel ${connection}`);
   
  
   message.channel.send(args.join(' ') + ' Mother fuckers, son of a bitches and other assholes', {
    tts: true
   }).then(connection.playStream(await ytdl(urlLink, { filter: 'audioandvideo'})));
   
   message.member.voiceChannel.setTopic("Disko trisko","jedééém ať se práší za kočárem");
   //let dispetcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly'}));
   //console.log(dispetcher);

   
   message.channel.send(`Právě diskžokej: ${message.author} skladbu: ${urlTitle} hraje ti. [${urlLink.substring(0, 50)+'...'}]`);   

}

module.exports = {
    execute
}





