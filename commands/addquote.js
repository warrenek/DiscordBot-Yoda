const config = require("../config.json");
const fs = require('fs');
const pathQuote = './quotes/quotes.json'

/*                    ADD QUOTE                                      */

function execute(client, message, args) 
{
    _addJsonQuote (args, message.user);
}


async function _addJsonQuote(args, user) 
{
    var quote = args.join(' ');

    let userQuote = 
    {
        quote,
        user,
        date: new Date()
    }

     fs.readFile(pathQuote, 'utf-8', function (err, content) 
     {
       if (err) 
       {
           console.error(err);
           return;
       }
       var quotes = JSON.parse(content);
       quotes.push(userQuote);
      
       fs.writeFile(pathQuote, JSON.stringify(quotes), 'utf8', () => 
       {
           console.log('INFO: Vytvářím soubor pro hlášky.');
       });

    });


  
}

module.exports = 
{
    execute
}