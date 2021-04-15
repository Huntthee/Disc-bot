module.exports = {
  name: "args-info",
  description: "args practice",
  args: true,
  execute(message, args) {
    if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		return message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  }
}