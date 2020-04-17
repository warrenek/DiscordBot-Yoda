const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://instantfap.com/gifs';

/*                    RETURN A RANDOM fajn obrazek ;-)                            */

function execute(client, message, args){
  
  
  rp(url)
    .then(function(html){
      //success!

      console.log('start')
      //const counter = $('div > img',html).length
      console.log(html)
      
      const rootLink = 'http://instantfap.com/';
      const boobsUrl = [];



    //    for (let i = 0; i < counter; i++) {
        
    //     if($('div > img', html)[i].attribs.src !== undefined){
          
    //       // najdi kozy  
    //       if($('div > img', html)[i].attribs.src.includes('prsa')){
    //         boobsUrl.push(rootLink + $('div > img', html)[i].attribs.src); 
    //       }
    //       // najdi zadky  
    //       //if($('div > img', html)[i].attribs.alt.includes('zadečky')){
    //       //  assUrl.push($('div > img', html)[i].attribs.src); 
    //       //}
    //     }
    //    }

   

    //    message.channel.send(`Našel sem ${boobsUrl.length} koziček...`);
    //    message.channel.send(boobsUrl[getRandomInt(boobsUrl.length-1)]);// zasraly pole a jeho pocitani... vis jak :D

    })
    .catch(function(err){
      console.log(err)
      message.channel.send(`Nějake se ti to posralo bobře ${err}`);
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