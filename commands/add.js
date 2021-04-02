// The Adding command!
function addCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("Not enough maths! Try `!add 2 2`")
    return
  }
  let product = 0
  arguments.forEach((value) => {
    product = product + parseFloat(value)
  })
  receivedMessage.channel.send(arguments + " = " + product.toString())
}

module.exports = addCommand