// Some core modules
const Discord = require('discord.js')
const fs = require('fs');

// Configurations
const { prefix, token } = require('./config.json')

// Hook up to the server as a user
const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


// When the bot connects to the server.
client.on('ready', () => {
  console.log("Connected as " + client.user.tag)
  // set its activity.
  client.user.setActivity("Little Helper, try ?help")

  // Drop a list of the channels in console.
  client.guilds.cache.forEach((guild) => {
    console.log(guild.name, guild.id)
    guild.channels.cache.forEach((channel) => {
      console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
    })
  })
})


// This code block will sort through messages listening for comments starting with the set prefix, then filter through the commands directory and match the term
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);

  if (!client.commands.has(commandName)) return;
  
  if (command.args && !args.length) {
    return message.channel.reply(`You didn't provide any arguments`)
  }

  try {
    command.execute(message, args)
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
})

// The Greeter
client.on('guildMemberAdd', async member => {
  if (member.guild.id !== "748276590089076886") return

  let channel = client.channels.cache.get('748276590089076889')

  channel.send(`Hey there <@!${member.id}>! Welcome to the Discord server!`)
  
  console.log(`Member ID: ${member.id}, Member: ${member}`)
})

client.login(token)