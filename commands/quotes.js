//A bunch of random quotes by your loyal destructor, Nic (a.k.a. FlameScion)
const quoteRando = [
  {
    quote: "I don't wanna be horny anymore, I just wanna be happy...."
  },
  {
    quote: "Damn you humans! Get off my virtual yard."
  },
  {
    quote: "Cthuwu is a lewd deity, living in the bottom of Hornysmouth."
  },
  {
    quote: "Remember to stay hydrated. Water may not need you, but you need water."
  },
  {
    quote: "A nice, crispy churro is as close as you'll get to heaven in life."
  },
  {
    quote: "FlameScion rules, and I am not biased at all whatsoever."
  },
  {
    quote: "Hello there."
  },
  {
    quote: "NEEEEEEEEEEEERRRRRD."
  },
  {
    quote: "My code was nice, clean and well organized. But then a certain argentine douche came and made a mess"
  },
  {
    quote: " 'I spent so much time thinking if I could, I never stopped to think if I should'-FlameScion, trying to get this FUCKING COMMAND working "
  },
  {
    quote: "Does this unit have a soul?"
  },
  {
    quote: "What is a man? A MISERABLE LITTLE PILE OF SECRETS!"
  },
  {
    quote: `It's dangerous to go alone. Take this spoon.` 
  },
  {
    quote: "IT'S TIME TO D-D-D-D-D-D-D-D-DUEEEL!"
  },
  {
    quote: "There was some code here. Now it's gone"
  },
  {
    quote: "Doc did it"
  }
]



// Flames' extremely volatile quote
function quoteCommand(arguments, recievedMessage){
  recievedMessage.channel.send(`${quoteRando[Math.floor(Math.random() * quoteRando.length)].quote}`)
}

module.exports = quoteCommand