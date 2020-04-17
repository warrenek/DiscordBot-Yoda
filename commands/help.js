function execute(client, message, args) 
{
    message.channel.send(
        `Návod pro obsluhu bota Yody: 

    !addquote [glosa] 
    #přidá hlášku; 
    ---------------------------------------------------------------------------------------------------------            
    !quote 
    #vrátí náhodnej sranec co tu kdy někdo vyplodil a oběžoval se u toho obtěžovat našeho Yodu
    ---------------------------------------------------------------------------------------------------------            
    !quotestat
    #vrátí naprosto skoro přesnej počet přidaných vogonských poezií

    !kozy
    #vrátí (občas) nějaké to ženské ňadro 

    !ass
    #vrátí zadek
    
    !hmm
    #vrátí hmm ;)
   
    cumming sun: neuvěřitelný fíčury ... STAY STONED`);
}


module.exports = {
    execute
}