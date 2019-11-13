const Discord = require('discord.js);
const {prefix,token} = require('./config.json');
const client =new Discord.client

client.once('ready,',() =>
{
	console.log(token);
}
