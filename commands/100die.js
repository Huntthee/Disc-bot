// Roll the D100!
function roll100Command(arguments, receivedMessage) { 
  const sides = 100;
  const roll = Math.floor(Math.random() * sides) + 1;

  if (roll == 100) {
    receivedMessage.channel.send(`You rolled a ${roll}!. You probably cheated.`)
  } else if (roll == 1) {
    receivedMessage.channel.send(`Not very lucky are you?. You just rolled a ${roll}`)
  } else if (roll== 69){
    receivedMessage.channel.send(`You just rolled a ${roll}. Hehe, nice.`)
  } else if (roll==42){
    receivedMessage.channel.send(`You just rolled a ${roll}. The meaning of life is at your grasp.`)
  } else {
    receivedMessage.channel.send(`You rolled a ${roll}`)
  }
}

module.exports = roll100Command