const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://porngif.cz/index.php?k=tits';

/*                    RETURN A RANDOM KOZY ;-)                            */

function execute(client, message, args){
  
  
  rp(url)
    .then(function(html){
      //success!

      console.log('start')
      const counter = $('div > img',html).length
      console.log(counter)
      
      const rootLink = 'http://porngif.cz/';
      const boobsUrl = [];
      const boobsUrlFinale = [];
      const temp = [];
      const assUrl = [];

       for (let i = 0; i < counter; i++) {
        
        if($('div > img', html)[i].attribs.src !== undefined){
          
          // najdi kozy  
          if($('div > img', html)[i].attribs.src.includes('prsa')){
            boobsUrl.push(rootLink + $('div > img', html)[i].attribs.src); 
          }
          // najdi zadky  
          //if($('div > img', html)[i].attribs.alt.includes('zadečky')){
          //  assUrl.push($('div > img', html)[i].attribs.src); 
          //}
        }
       }

      // tohle si tu zatim necham...protoze neverim, ze tam jsou jenom 3 gify
      //  console.log(`pole: ${boobsUrl}`)
      //  boobsUrl.forEach(element => {
      //   if(element.includes('.gif')) {
      //     boobsUrlFinale.push(rootLink+element)
      //   }
      //  });

       message.channel.send(`Našel sem ${boobsUrl.length} koziček...`);
       message.channel.send(boobsUrl[getRandomInt(boobsUrl.length-1)]);// zasraly pole a jeho pocitani... vis jak :D

      //message.channel.send(`Našel sem  : ${boobsUrl.length} koz ${assUrl.length} zadků, tady mate aspon něco `, { file:[rootLink+boobs]});
      console.log(`pocet gifu:${boobsUrl.length}`);
      console.log(`pole: ${boobsUrl}`)
    })
    .catch(function(err){
      console.log(err)
      message.channel.send(`Nějake se ti to posralo bobře ${err}`);
    });
   
    // let randomIndex = getRandomInt(quotes.length);
  
    
  
}

function getRandomInt(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}
  
  

module.exports = 
{
    execute
}