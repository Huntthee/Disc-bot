// Some core modules
const Discord = require('discord.js')
const ytdl = require("ytdl-core")

// Require all the commands
const helpCommand = require('./commands/help')
const jokeCommand = require('./commands/jokes')
const quoteCommand = require('./commands/quotes')
const sizeCommand = require('./commands/size')
const multCommand = require('./commands/mult')
const addCommand = require('./commands/add')
const rollCommand = require('./commands/dice')
const execute = require('./commands/execute')

// Music Player listener prefix
const prefix = "?"

// Allow for the creation of a music queue
const queue = new Map()

// Hook up to the server as a user
const client = new Discord.Client()

// When the bot connects to the server.
client.on('ready', () => {
  console.log("Connected as " + client.user.tag)
  // set its activity. Will currently see as "Playing God"
  client.user.setActivity("God")

  // Drop a list of the channels in console.
  client.guilds.cache.forEach((guild) => {
    console.log(guild.name)
    guild.channels.cache.forEach((channel) => {
      console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
    })
    // Coding Text Channel ID: 782832103913029672
  })

  // Join whichever channel you want your bot in.
  let generalChannel = client.channels.cache.get("782832103913029672")
  const attachment = new Discord.MessageAttachment("assets/truth.png")
  // generalChannel.send(attachment)
  // generalChannel.send("Im a real boy!")

})

/* This block will return messages/images/emotes anytime a message is detected in channel.
Leave it on to detect ! commands from the users */
client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) {
    return
  }

  // Parrot every post made in the channel, bad idea.

  // receivedMessage.channel.send("Message received, " + receivedMessage.author.toString() + ": " + receivedMessage.content)

  // Post an emoji every time someone posts.. also bad idea.

  //receivedMessage.react("")

  // Get a list of the custom emoji ids!

  /* receivedMessage.guild.emojis.cache.forEach(customEmoji => {
    console.log(`${customEmoji.name} ${customEmoji.id}`)
  }) */

  // Slap a custom reaction emote on every post.

  // let customEmoji = receivedMessage.guild.emojis.cache.get("754432775414611969")
  // receivedMessage.react(customEmoji)

  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage)
  }
})

// Set up the structure for building chat commands and assigning the !word
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

  } else if (primaryCommand == "roll") {
    rollCommand(arguments, receivedMessage)

  } else if (primaryCommand == "quote") {
    quoteCommand(arguments, receivedMessage)

    // ADD MORE COMMANDS HERE with more else if 

  } else {
    receivedMessage.channel.send("Unknown command. Try `!help`")
  }
}

// ****** The Music Player!! ****** //

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    message.channel.send("You need to enter a valid command!");
  }
});

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

// ******                    ****** //

client.login("")