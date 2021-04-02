// Roll the Die! Refactored from my Twitch D20 bot.
function roll20Command(arguments, receivedMessage) { 
  const sides = 20;
  const roll = Math.floor(Math.random() * sides) + 1;

  if (roll == 20) {
    receivedMessage.channel.send(`DAMN SON!, You rolled a ${roll}!`)
  } else if (roll == 1) {
    receivedMessage.channel.send(`HA!, Sucker. You just rolled a ${roll}`)
  } else if (roll== 5){
    receivedMessage.channel.send(`You just rolled a ${roll}. Doc disliked that....`)
  }else {
    receivedMessage.channel.send(`You rolled a ${roll}`)
  }
}

module.exports = roll20Command