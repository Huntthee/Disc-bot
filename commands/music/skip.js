module.exports = {
  name: 'skip',
  description: 'skip a song',
  execute(client, message, server_queue) {
    
    if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel to use this command');
    if (!server_queue) {
      return message.channel.send(`There are no songs to skip! 😰`)
    }
    server_queue.connection.dispatcher.end();
    console.log(`song skipped`);
  }
}