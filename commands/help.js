// Basic help command! nothing attached to it right now. 
function helpCommand(arguments, receivedMessage) {
  if (arguments.length == 0) {
    receivedMessage.channel.send("Hey there! Try `!help commands` to see what you can do.")
  
  } else if (arguments == "commands"){
    receivedMessage.channel.send("The commands you can use so far are `!mult, !add, !size, and !d20` (to roll a D20) or `!d100` (for 1-100!)\n\n Are you brave enough to try `!joke` for some terrible Chuck Norris jokes? or `!quote` for some wonderful quotes supplied by FlameScion!\n\nYou can also use jump into a voice channel and use `?play <URL>` to add songs to a playlist, `?skip` to skip through them, and `?stop` to well, stop.")

  } else {
    receivedMessage.channel.send("It looks like you need help with " + arguments + " but I'm not sure what that means. Try `!help commands` to see what you can do.")
  }
}

module.exports = helpCommand