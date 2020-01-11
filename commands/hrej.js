const ytdl = require('ytdl-core');
const {google} = require('googleapis');

// initialize the Youtube API library
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyAKbqu6C2RR4AhzqAg-oe71pT_UPyUCqEA',
});

async function GetListYTB(searchInput) {
    console.log('zactek GetListYTB');
      let res = await youtube.search.list({
       part: 'id,snippet',
       q: searchInput,
       type: 'video',
       maxResults:10
     })
    //  .then(function(response) {
    //     // pockam si, nez to najdu
    //     console.log(JSON.stringify(response, null, 1));
    //     return JSON.stringify(response, null, 1);
    //   },
    //   function(err) { console.log("Execute error", err); });
    let kurwa = res;
    return JSON.stringify(res, null, 1);
   
};


async function execute(client, message, args){
   if(!message.member.voiceChannel) return message.channel.send("Připoj se k táboráku.");
   console.log(`kontrola chanu`);

   if(!args[0]) return  message.channel.send("Nic si nevložil máslo."); 
   console.log(`kontrola argumetnu`);

   let validate = await ytdl.validateURL(args[0])

   //if(!validate) return  message.channel.send("Nic nepřehraju....to není URL, SORRY JAKO.");
   //console.log(`valide argumetu: ${args[0]}`)

    let ytbAPIresponse = await GetListYTB(args[0]);
    console.log('ytbAPIresponse',ytbAPIresponse.response);
    
    const obj = JSON.parse(await GetListYTB(args[0]));
    console.log(obj.items);

    // Object.keys(ytbAPIresponse).forEach(e =>{
    //     field.push(ytbAPIresponse.items[0]);
    //     field2.push(e)
    //     counter++;
        
    //     console.log(ytbAPIresponse.items[0]);
    // });

    // console.log(field);
    // console.log(field2);

    

    // ytdl.getInfo(args[0], (err, info) => {
    //     if (err) throw err;
    //     let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    //         console.log('Formats with only audio: ' + audioFormats.length);
    //   });

   //let info = await ytdl.getInfo(args[0]);
   //console.log(`bagruju info z : ${info}`);

   let connection = await message.member.voiceChannel.join();
   console.log(`connection voice chanel ${args[0]}`);
   
   //connection.playOpusStream(await ytdl(args[0]));
   //connection.playStream(await ytdl(args[0], { filter: 'audioonly'}));
   message.member.voiceChannel.setTopic("Disko trisko","jedééém ať se práší za kočárem");
   //let dispetcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly'}));
   //console.log(dispetcher);

   //var minutes = Math.floor(info.player_response.videoDetails.lengthSeconds / 60);
   //var secs = info.player_response.videoDetails.lengthSeconds % 60;

   //message.channel.send(`Právě ti diskžokej: ${message.author} skladbu: ${info.title}`)
   message.channel.send(`Právě ti hraje diskžokej: ${message.author}`);   

   //zmizni

   //waait(message);
   

}


// ytsr.getFilters('github', function(err, filters) {
//     if(err) throw err;
//       filter = filters.get('Type').find(o => o.name === 'Video');
//     ytsr.getFilters(filter.ref, function(err, filters) {
//       if(err) throw err;
//         filter = filters.get('Duration').find(o => o.name.startsWith('Short'));
//         var options = {
//             limit: 5,
//             nextpageRef: filter.ref,
//         }
//         ytsr(null, options, function(err, searchResults) {
//             if(err) throw err;
//             dosth(searchResults);
//         });
//       });
//   });
  




module.exports = {
    execute
}




