const fs = require('fs');

/*                    RETURN A RANDOM QUOTE                                      */

function execute(client, message, args) 
{
    
    fs.readFile(`./quotes/quotes.json`, 'utf-8', function (err, content) 
    {
        if (err) 
        {
            console.error(err);
            return;
        }
        var quotes = JSON.parse(content);
        
        let randomIndex = getRandomInt(quotes.length);
        message.channel.send(`${quotes[randomIndex].quote}`);
        
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