const queue = require('./queue');

module.exports = {
  name: 'skip',
  description: 'Skip the current song',
  execute(client, message, args, Discord, commandName) {
    const server_queue = queue.get(message.guild.id);

    if (commandName === "skip") {
      if (!message.member.voice.channel) {
        return message.channel.send('You need to be in a voice channel to execute this command!');
      } else if (!server_queue) {
        return message.channel.send(`There are no songs in queue 😔`);
      } else {
        server_queue.connection.dispatcher.end();
        message.channel.send(`⏭ Song Skipped`);
      };
    }
  }
}