const Discord = require("discord.js")

module.exports = {
  name: 'help',
  description: 'A helpful embed!',
  execute(message, args) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#ffd703')
    .setAuthor('Rob Otto', 'https://i.imgur.com/RmxTBoQ.png', 'https://github.com/Huntthee/')
    .setThumbnail('https://i.imgur.com/hjKUSlD.png')

    .setTitle('Check out the base code here!')
    .setURL('https://github.com/Huntthee/Disc-bot/')
    .setDescription('A helpful little bot capable of all sorts of tricks! Discord and Rental site to come, Keep an eye out for updates!')

    .addFields(
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
      },
      {
        name: '?prune',
        value: 'To delete a set number of comments'
      },
      {
        name: '?kick',
        value: 'Mod capabilities coming soon!'
      }
    )
    // .setImage('https://i.imgur.com/wSTFkRM.png')
    
    .setFooter('And more to come!', 'https://i.imgur.com/RmxTBoQ.png')
    .setTimestamp();

    if (args.length == 0) {
      message.channel.send(helpEmbed)
        
    } else {
      message.channel.send('It looks like you need help with ' + args + ' but I\'m not sure what that means. Try `?help` to see what you can do.')
    }
  }
}
// Basic help command! nothing attached to it right now. 
