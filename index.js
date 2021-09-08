var readlineSync = require("readline-sync");

var score = 0;

console.log("DO YOU KNOW Krishnakant QUIZ")

var userName = readlineSync.question("\nEnter your Name: ");

console.log("Welcome " + userName + " to Do you know Krishnakant Quiz :-)")

console.log("\n*There are total ten questions." + "\n*For each correct answer you will get +2 points." + "\n*For each wrong answer -1 point will be reduced."+"\n*There is +2 BONUS points for 3 consecutive correct answers.")
console.log("====================================\n")

var questions = [
  {
    question : "Where do I live?\n",
    answer : "Mumbai"
  },
  
  {
    question : "Who is my best friend?\n",
    answer : userName
  },

   {
    question : "What's my age?\n",
    answer : "20"
  },

  {
    question : "Which sport am I most interested in?\n",
    answer : "Football"
  },
  {
    question : "Who is my favourite footballer?\n",
    answer : "Leo Messi"
  },
  
  {
    question : "Which school did I attend?\n",
    answer : "Meridian"
  },
  
  {
    question : "What positon did I play in football while in school?\n",
    answer : "Goalkeeper"
  },
  {
    question : "What postion do I play now?\n",
    answer : "Left back/Defensive Midfielder"
  },
  {
    question : "In which College do I study?(short form)\n",
    answer : "MPSTME"
  },

  {
    question : "What is my favourite dish?\n",
    answer : "Chicken Biryani"
  },

]
var counter = 0; //to keep track of consecutive correct questions
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    counter++;
    if(counter!=3){
    console.log("\nYou are right\n")
    score = score + 2;
    console.log("Current Score : " + score)
    console.log("====================================\n")
    }else{
      counter=0;
      console.log("\nYou are right\nYou get +2 bonus for 3 consecutive correct answers!\n")
      score = score + 4;
      console.log("Current Score : " + score)
      console.log("====================================\n")
    }
  }
  else {
    counter=0;
    console.log("\nYou are Wrong\n")
    score = score - 1;
    console.log("Current Score : " + score)
    console.log("====================================\n")
  }
}

var j=1;
for(var i=0; i<questions.length; i++) {
  console.log("Question " + j++ + "\n----------")
  play(questions[i].question, questions[i].answer)
}

console.log("\nYour final score is " + score)

if(score === 20) {
  console.log("You know Aman very well :-D")
}