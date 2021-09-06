const Discord = require("discord.js")


// Create a discord embed for listing the available commands and other useful information.
module.exports = {
  name: 'music',
  description: 'an embed to help guide users with the music commands',
  execute(client, message, args) {
    const musicEmbed = new Discord.MessageEmbed()
    .setColor('#ffd703')
    .setAuthor('Rob Otto', 'https://i.imgur.com/RmxTBoQ.png', 'https://github.com/Huntthee/')
    .setThumbnail('https://i.imgur.com/hjKUSlD.png')

    .setTitle('YouTube music player')
    .setDescription('Create a playlist of songs to listen to in a voice channel! Check out the commands below to get started.')

    .addFields(
      {
        name: 'Play/Add a Song!',
        value: `Type **?play** followed by either a URL or the artist and song name such as **?play ac/dc thunderstruck**. Use it again to add more songs to the playlist.`
      },
      {
        name: 'Skip the current song',
        value: `Type **?skip** to skip the currently playing song and begin playing the next in queue.`
      },
      {
        name: 'Stop the music',
        value: `Type **?stop** to end the music. Rob Otto will stop playing and the playlist will be erased.`
      }
    )
    
    .setFooter('Happy listening!', 'https://i.imgur.com/RmxTBoQ.png')
    .setTimestamp();

    if (args.length == 0) {
      message.channel.send(musicEmbed)
        
    } else {
      message.channel.send('It looks like you need help with ' + args + ' but I\'m not sure what that means. Try `?help` to see what you can do.')
    }
  }
}