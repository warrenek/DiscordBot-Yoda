
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://porngif.top/index.php?k=ass';

/*                    RETURN A RANDOM ZADEK ;-)                            */

function execute(client, message, args){
  
  rp(url)
      .then(function(html){

        console.log('start url ass')
        const counterTwo = $('div > img',html).length
        console.log(counterTwo)

        const rootLinkTwo = 'http://porngif.top/';

        const boobsUrlTwo = [];

        for (let i = 0; i < counterTwo; i++) {
        
          if($('div > img', html)[i].attribs.src !== undefined){
            
            // najdi zadek  
            if($('div > img', html)[i].attribs.src.includes('.gif')){
              boobsUrlTwo.push(rootLinkTwo + $('div > img', html)[i].attribs.src); 
            }
          }
         }

         message.channel.send(`Našel sem ${boobsUrlTwo.length} prdelek... `);
         var finale = boobsUrlTwo[getRandomInt(boobsUrlTwo.length-1)].replace(/\s/g, '%20'); // zasraly pole a jeho pocitani... vis jak :D
         message.channel.send(finale);
         console.log(`pocet gifu 2:${boobsUrlTwo.length}`);
         console.log(`pole 2: ${boobsUrlTwo}`)

      })
      .catch(function(err){
        console.log(err)
        message.channel.send(`Nějak se ti to posralo bobře ${err}`);
      }); 
 }

function getRandomInt(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}
  
  

module.exports = 
{
    execute
}