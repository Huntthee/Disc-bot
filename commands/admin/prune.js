module.exports = {
  name: "prune",
  description: "remove a certain number of posts",
  guildOnly: true,
  execute(client, message, args) {
    const amount = parseInt(args[0]) + 1;
    const channel = message.channel;
    const permissions = channel.permissionsFor(message.client.user);
    
    // User must be admin to prune
    if (!permissions.has('ADMINISTRATOR')) {
      return message.reply('You do not have permission to delete messages!');
    };

    // Enter a valid number of posts to remove
    if (isNaN(amount)) {
      return message.channel.send('that doesn\'t seem to be a valid number.');
    } else if (amount < 2 || amount > 100) {
      return message.channel.send('you need to input a number between 1 and 99.');
    };

    // Remove the chosen number of posts
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      return message.channel.send('there was an error trying to prune messages in this channel!');
    }
  );
}}