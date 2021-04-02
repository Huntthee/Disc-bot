// The good ol math command, just multiplies atm. no calculator or anything.
function multCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("Not enough maths! Try `!mult 2 2`")
    return
  }
  let product = 1
  arguments.forEach((value) => {
    product = product * parseFloat(value)
  })
  receivedMessage.channel.send("And the total of " + arguments + " is! " + product.toString())
}

module.exports = multCommand