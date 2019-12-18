const fs = require('fs');


function execute(client, message, args) 
{
  let count =666;

  fs.readFile(`./quotes/quotes.json`, 'utf-8', function (err, content) 
  {
    if (err) 
    {
        console.error(err);
        return;
    }
    var quotes = JSON.parse(content);
    if(quotes.length>4)
    {message.channel.send(`Právě teď naše sbírka poezie čítá: ${quotes.length} glos....`);}
    else
    {message.channel.send(`Právě teď naše sbírka poezie čítá: ${quotes.length} glosy....`);}
  });
}



module.exports = {
    execute
}

