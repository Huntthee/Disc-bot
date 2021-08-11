const queue = require('./queue');

module.exports = {
  name: 'stop',
  description: 'stop the current song',
  execute(client, message, args, Discord, commandName) {

    const server_queue = queue.get(message.guild.id);

    if (commandName === "stop") {
      if (!message.member.voice.channel) {
        return message.channel.send('You need to be in a voice channel to execute this command!');
      } else {
        server_queue.songs = [];
        server_queue.connection.dispatcher.end();
        message.channel.send(`🛑 Song stopped`);
      }
    }
  }
}