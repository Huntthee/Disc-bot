// Some core modules
const Discord = require('discord.js')

// Require all the ! commands
const helpCommand = require('./commands/help')
const jokeCommand = require('./commands/jokes')
const quoteCommand = require('./commands/quotes')
const multCommand = require('./commands/mult')
const addCommand = require('./commands/add')
const roll20Command = require('./commands/20die')
const roll100Command = require('./commands/100die')
const stop = require('./commands/stop')
const skip = require('./commands/skip')
const execute = require('./commands/play')
const config = require('./config.json')

// Hook up to the server as a user
const client = new Discord.Client()

const queue = new Map()

// When the bot connects to the server.
client.on('ready', () => {
  console.log("Connected as " + client.user.tag)
  // set its activity. Will currently see as "Little Helper, try ?help"
  client.user.setActivity("Little Helper, try ?help")

  // Drop a list of the channels in console.
  client.guilds.cache.forEach((guild) => {
    console.log(guild.name, guild.id)
    guild.channels.cache.forEach((channel) => {
      console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
    })
  })
})

/* This block will return messages/images/emotes anytime a message is detected in channel.
Leave it on to detect the set prefix for commands from the users */
client.on('message', async receivedMessage => {
  if (receivedMessage.author == client.user) {
    return
  }
  if (receivedMessage.content.startsWith(config.prefix)) {
    processCommand(receivedMessage)
  }
})

// The Greeter
client.on('guildMemberAdd', async member => {
  if (member.guild.id !== "748276590089076886") return

  var channel = client.channels.cache.get('748276590089076889')

  channel.send(`Hey there <@!${member.id}>! Welcome to my Discord server!`)
  
  console.log(`Member ID: ${member.id}, Member: ${member}`)
})

// Set up the structure for building chat commands and assigning commands to the prefix
function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  let arguments = splitCommand.slice(1)

  const serverQueue = queue.get(receivedMessage.guild.id);

  // The list of Commands grows!
  if (primaryCommand == "help") {
    helpCommand(arguments, receivedMessage)

  } else if (primaryCommand == "mult") {
    multCommand(arguments, receivedMessage)

  } else if (primaryCommand == "size") {
    sizeCommand(arguments, receivedMessage)

  } else if (primaryCommand == "joke") {
    jokeCommand(arguments, receivedMessage)

  } else if (primaryCommand == "add") {
    addCommand(arguments, receivedMessage)

  } else if (primaryCommand == "d20") {
    roll20Command(arguments, receivedMessage)

  } else if (primaryCommand == "d100") {
    roll100Command(arguments, receivedMessage)

  } else if (primaryCommand == "quote") {
    quoteCommand(arguments, receivedMessage)

  } else if (primaryCommand == "play") {
    execute(receivedMessage, serverQueue)

  } else if (primaryCommand == "skip") {
    skip(receivedMessage, serverQueue)

  } else if (primaryCommand == "stop") {
    stop(receivedMessage, serverQueue)

  // ADD MORE COMMANDS HERE with more else if 

  } else {
    receivedMessage.reply("Hmm, that didn't seem to work. Try `?help` to get a list of commands.")
  }
}

client.login(config.token)