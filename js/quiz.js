
  
// select all elements
const start = document.getElementById("startGame");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qVideos = document.getElementById("qVideos");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Which sign is this?",
        imgSrc: "https://youtu.be/OW3CdpmD3w4",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "Which sign is this?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "Which sign is this?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
];

// //  for loop -video QUIZ OPTIONS
// const quizQues = [
//     ['how are you?','images/VIDEO01.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['happy','images/VIDEO02.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['yes','images/VIDEO03.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['ok','images/VIDEO04.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['ok2','images/VIDEO05.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['day','images/VIDEO06.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['quiet','images/VIDEO07.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['gfb','images/VIDEO08.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['yes2','images/VIDEO09.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['how are you?2','images/VIDEO10.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['ok3','images/VIDEO11.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//     ['feeling','images/VIDEO12.jpg', 'https://youtu.be/OW3CdpmD3w4'],
//   ]
// const qVids = $('#qVideos')
  
// for (const entry of quizQues) {
//     const entryElem = $(`<div id="qVideo">
//         <a href="${entry[2]}"></a>
//     </div>`)
//     qVids.append(entryElem)
//  }



// const vids = $('.videos')

// for (const entry of dictionary) {
//     const entryElem = $(`<div class="video" style="background-image: url(${entry[0]})">
//         <a class="venobox" data-autoplay="true" data-vbtype="video" href="${entry[1]}" data-gall="myGallery">
//         <i class="fas fa-play-circle"></i></a>
//     </div>`)
//     vids.append(entryElem)
//  }

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qVideos.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

start.addEventListener("click",startQuiz);
// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#41BC8E";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#EF444C";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "images/5.png":
              (scorePerCent >= 60) ? "images/4.png" :
              (scorePerCent >= 40) ? "images/3.png" :
              (scorePerCent >= 20) ? "images/2.png" :
              "images/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}