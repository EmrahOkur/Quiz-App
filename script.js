let questions=[
    {
    "question":"Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Justin Bieber",
    "right_answer": 3
    },

    {
        "question":"Für was steht HTML?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "Hyper Markup question",
        "answer_3": "Markup language",
        "answer_4": "Hyper language",
        "right_answer": 1
        },

        {
         "question":"Was heißt CSS abgekürzt?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Modestyle",
        "answer_4": "Kosmetik Produkt",
        "right_answer": 2
        },

        {
        "question":"Welche der folgenden Zuweisungen ist syntaktisch nicht korrekt?",
        "answer_1": "var a = _$;",
        "answer_2": "var a = $0;",
        "answer_3": "var a = !!0;",
        "answer_4": "var a = &_0;",
        "right_answer": 4
        },
        
        {
        "question":"Wie heißt der Erfinder von JavaScript?",
        "answer_1": "Douglas Crockford",
        "answer_2": "John Resig",
        "answer_3": "Chuck Norris",
        "answer_4": "Steve Jobs",
        "right_answer": 2
        },

        {
        "question":"Welche der folgenden Sprachen hatte keinen Einfluss auf JS?",
        "answer_1": "Self",
        "answer_2": "Scheme",
        "answer_3": "Java",
        "answer_4": "Prolog",
        "right_answer": 4
        },

        {
        "question":"Wie lautete der Mädchenname von JavaScript kurz nach ihrer Geburt?",
        "answer_1": "Micha",
        "answer_2": "Mocha",
        "answer_3": "Mecha",
        "answer_4": "Mucha",
        "right_answer": 2
        },

        {
        "question":"Wer passt hier nicht in die Reihe?",
        "answer_1": "ActionScript",
        "answer_2": "LiveScript",
        "answer_3": "JavaScript",
        "answer_4": "AppleScript",
        "right_answer": 4
        },

        {
        "question":"Welcher der folgenden Werte ist nicht falsy?",
        "answer_1": "NaN",
        "answer_2": "null",
        "answer_3": "undefined",
        "answer_4": "{}",
        "right_answer": 4
        },

        {
        "question":"Was ist true?",
        "answer_1": "0 == undefined",
        "answer_2": "0 == null",
        "answer_3": "0 >= undefined",
        "answer_4": "0 >= null",
        "right_answer": 4
        },



];

let rightQuestions=0;
let currentQuestion=0;
let audioSuccess=new Audio('sound/right.mp3');
let audioFalse=new Audio('sound/false.mp3');



function init(){
    document.getElementById('allQuestions').innerHTML=questions.length;

    showQuestion();
}

function showQuestion(){

    if (gameIsOver()){
        showEndscreen();
    }else{
        updateProgressBar();
        updateNewQuestion();
    }
}

function gameIsOver(){
    return currentQuestion>= questions.length;
}


function answer(selection){
    let question=questions[currentQuestion];
    let SelectedQuestionNumber=selection.slice(-1);

    let idOfRightAnswer=`answer_${question['right_answer']}`;


    if (SelectedQuestionNumber==question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audioSuccess.play();
        rightQuestions++;
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioFalse.play();
    }
    document.getElementById('nextButton').disabled=false;


}
function nextQuestion(){
    currentQuestion++;
    document.getElementById('nextButton').disabled=true;
    
    resetAnswerButton();
    showQuestion();
}

function resetAnswerButton(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById('headerImage').src='./img/quiz.jpg';
    document.getElementById('questionBody').style='';
    document.getElementById('endScreen').style='display:none';
    rightQuestions=0;
    currentQuestion=0;
    init();



}

function showEndscreen(){
    document.getElementById('endScreen').style='';
    document.getElementById('questionBody').style='display:none';
    document.getElementById('amountOfQuestions').innerHTML=questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML=rightQuestions;
    document.getElementById('headerImage').src='./img/trophy.png';
}

function updateNewQuestion(){
    let question=questions[currentQuestion];

    document.getElementById('questionNumber').innerHTML=currentQuestion+1;
    document.getElementById('questionText').innerHTML=question['question'];
    document.getElementById('answer_1').innerHTML=question['answer_1'];
    document.getElementById('answer_2').innerHTML=question['answer_2'];
    document.getElementById('answer_3').innerHTML=question['answer_3'];
    document.getElementById('answer_4').innerHTML=question['answer_4'];
}

function updateProgressBar(){
    let percent=(currentQuestion+1)/questions.length;
    percent=Math.round(percent*100);
    document.getElementById('progressBar').innerHTML=`${percent}%`;
    document.getElementById('progressBar').style=`width:${percent}%`;
}