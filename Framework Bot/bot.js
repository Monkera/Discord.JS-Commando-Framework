const commando = require('discord.js-commando');
const path = require('path');
const config= require(path.join(__dbname, 'config', 'config.json'))
const client = new commando.CommandoClient({
owner:'791094167127326752',
commandPrefix: '-'

});

client.login(config.token)

client.registry.registerGroups([
    ['mod', 'mod commands'],
    ['misc', 'misc commands']
]).registerDefaults()
.registerCommandsIn(path.join(__dbname, 'commands'));

client.on('ready', () =>{
   console.log("Bot has logged in.")

})