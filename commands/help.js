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
   
    cumming sun: !hrej !strilej, !foukninatupistalu a další neuvěřitelný fíčury ... STAY STONED`);
}


module.exports = {
    execute
}