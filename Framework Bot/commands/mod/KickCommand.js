const commando = require('discord.js-commando');

module.exports = class KickCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'kick', 
            group: 'mod',
            memberName: 'kick',
            description: 'Kicks a user from the guild.',
            userPermissions: [
                'KICK_MEMBERS'
            ],
            clientPermissions: [
                'KICK_MEMBERS'
            ],
            argsType: 'single'
        })
    }
    async run(commandoMsg, args){
        console.log(args)
    }
}