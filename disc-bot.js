// Some core modules
const Discord = require('discord.js');
const fs = require('fs');

// Configurations
const { prefix, token } = require('./config.json');

// Hook up to the server as a user
const client = new Discord.Client();
// Get event files
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
// Get command folders/files
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

// Sort through the event files and execute the required event
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	};
};


// Create an array of the command sub folders and sort through them.
for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
  };
};

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

client.login(token);