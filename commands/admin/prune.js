module.exports = {
  name: "prune",
  description: "remove a certain number of posts",
  execute(client, message, args) {
    const amount = parseInt(args[0]) + 1;
  
    if (isNaN(amount)) {
      return message.channel.send('that doesn\'t seem to be a valid number.');
    } else if (amount < 2 || amount > 100) {
      return message.channel.send('you need to input a number between 1 and 99.');
    }
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send('there was an error trying to prune messages in this channel!');
    }
  );
}}