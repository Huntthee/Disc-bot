// UNDER CONSTRUCTION!!!

const Discord = require('discord.js');
const fetch = require('node-fetch'); 
 
module.exports = {
  name: "trivia",
  description: "A little trivia API",
  async execute(client, message) {

    // Fetch the trivia object
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium');
    const trivia = await response.json();

    // Unpack the API object to get the necessary information for creating the quiz
    let quiz = trivia.results[0];
    let question = quiz.question;
    let answer = quiz.correct_answer;
    let wrongAnswers = quiz.incorrect_answers;

    const triviaEmbed = new Discord.MessageEmbed()
    .setColor('#ffd703')
    .setAuthor('Rob Otto', 'https://i.imgur.com/RmxTBoQ.png', 'https://github.com/Huntthee/')
    .setThumbnail('https://i.imgur.com/hjKUSlD.png')

    .setTitle('Trivia Time!')
    .setDescription('Do you know the answer to the question below?')

    .addFields(
      {
        name: `Rob Otto wants to know..`,
        value: question
      }
    )


    // check what kind of question is being asked
    if (quiz.type == 'boolean') {

      // Ask the question
      message.channel.send(triviaEmbed);

      // DM the answer to the trivia host
      message.author.send(`The correct answer is ${answer}.`);

    } else if (quiz.type == 'multiple') {

      // Again ask the question
      message.channel.send(triviaEmbed);

      // List the potential answers for the players
      message.channel.send(`- ${answer}`);
      for (let i = 0; i < wrongAnswers.length; i++) {
        message.channel.send(`- ${wrongAnswers[i]}`);
      }

      // And DM the correct answer to the host
      message.author.send(`The correct answer is ${answer}.`)
    }
  }
}