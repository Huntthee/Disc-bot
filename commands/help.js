const Discord = require("discord.js")

// Basic help command! nothing attached to it right now. 
function helpCommand(arguments, receivedMessage) {
  const helpEmbed = new Discord.MessageEmbed()
  .setColor('#ffd703')
  .setAuthor('Rob Otto', 'https://i.imgur.com/RmxTBoQ.png', 'https://github.com/Huntthee/')
  .setThumbnail('https://i.imgur.com/hjKUSlD.png')

	.setTitle('Check out the base code here!')
	.setURL('https://github.com/Huntthee/Disc-bot/')
	.setDescription('A helpful little bot capable of all sorts of tricks! Discord and Rental site to come, Keep an eye out for updates!')

	.addFields(
    {
      name: 'The Music Player',
      value: 'Hop into a Voice channel and create a playlist from Youtube or Vimeo videos!'
    },
    {
      name: '?play <URL>',
      value: 'Will add songs to your queue, add as many as you\'d like!'
    },
    {
      name: '?skip',
      value: 'Will skip the currently playing song'
    },
    {
      name: '?stop',
      value: 'Will end the current playlist and boot the bot from the voice channel'
    },
    {
      name: 'Other Commands Available',
      value: '---'
    },
    {
      name: '?d20 and ?d100',
      value: 'Roll the dice and test your luck!'
    },
    {
      name: '?joke',
      value: 'To get some terrible Chuck Norris jokes'
    },
    {
      name: '?quote',
      value: 'For some wonderful quotes supplied by contributor FlameScion'
    },
    {
      name: '?mult and ?add',
      value: 'To Multiply or Add two numbers'
    }
  )
	// .setImage('https://i.imgur.com/wSTFkRM.png')
	
	.setFooter('And more to come!', 'https://i.imgur.com/RmxTBoQ.png')
  .setTimestamp();

  if (arguments.length == 0) {
    receivedMessage.channel.send(helpEmbed)
      
  } else {
    receivedMessage.channel.send("It looks like you need help with " + arguments + " but I'm not sure what that means. Try `?help` to see what you can do.")
  }
}



module.exports = helpCommand