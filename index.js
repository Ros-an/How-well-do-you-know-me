var readlineSync = require('readline-sync');

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("right!");
    score+=1;
  }else {
    console.log("wrong!");
  }
  console.log("CurrentScore: ", score);
  console.log("----------------------");
}


var quizQuestion = [
  {
    question : "Where do I live?\n",
    answer: "Siliguri"
  },
  {
    question: "My favourite superhero would be?\n",
    answer: "Thor"
  },
  {
    question: "Where do I work?\n",
    answer: "fresher"
  }
];

function welcome() {
  var userName= readlineSync.question("Hi my name is Roshan, what's your name?\n");

console.log("Welcome "+userName+" to - DO YOU KNOW Roshan?");

}

function game(){
  
for(var i=0; i<quizQuestion.length ;i++){
  play(quizQuestion[i].question,quizQuestion[i].answer);
}

}


welcome();
game();

console.log("YOUR SCORED: ",score);
