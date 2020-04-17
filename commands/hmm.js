
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://porngif.top';

/*                    RETURN A RANDOM HMM ;-)                            */

function execute(client, message, args){
  
  rp(url)
      .then(function(html){

        console.log('start url hmm')
        const counterTwo = $('div > img',html).length
        console.log(counterTwo)
        const rootLinkTwo = 'http://porngif.top/';
        //console.log(html);

        const boobsUrlTwo = [];

        for (let i = 0; i < counterTwo; i++) {
          if($('div > img', html)[i].attribs.src !== undefined){
            // najdi hmmm  
            if($('div > img', html)[i].attribs.src.includes('.gif')){
              boobsUrlTwo.push(rootLinkTwo + $('div > img', html)[i].attribs.src); 
            }
          }
         }

         message.channel.send(boobsUrlTwo[getRandomInt(boobsUrlTwo.length-1)]);// zasraly pole a jeho pocitani... vis jak :D
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