const quizDB=[
    {
        question: "Q1: What is the full form of HTML",
        a : 'Hello to my Land',
        b : 'Hey Txt markup language',
        c : 'HyperText Markup Language',
        d : 'HyperText Markup Lang',
        ans : 'ans3'
    },
    {
        question: "Q2: What is the full form of CSS",
        a : 'Cascading Style Sheets',
        b : 'Color Style Short',
        c : 'Cascoding Style Sheet',
        d : 'Cascading Super Sheets',
        ans: 'ans1'
    },
    {
        question: "Q3: What is the full form of HTTPS",
        a : 'Hypertext Transer Product',
        b : 'Hypertext Test Product',
        c : 'Hey Text Transfer Protocol',
        d : 'HyperText Transfer Protocol',
        ans : 'ans4'
    },
    {
        question: "Q4: What is the full form of JS",
        a : 'JavaSuper',
        b : 'JavaScripting',
        c : 'JavaScript',
        d : 'Java Language',
        ans : 'ans3'
    },
];
 const question = document.querySelector(".question");
 const option1 = document.querySelector("#option1");
 const option2 = document.querySelector("#option2");
 const option3 = document.querySelector("#option3");
 const option4 = document.querySelector("#option4");
 const submit = document.querySelector("#submit");
 const answers = document.querySelectorAll('.answer');

 const showScores = document.querySelector("#showScore");
 

let questionCount = 0;
let score = 0 ;
const loadQuestion = ()=>{
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

 loadQuestion();


 getCheckAnswer = ()=>{
    let answer;
    answers.forEach(curAnsEle=>{
        if(curAnsEle.checked){
            answer = curAnsEle.id;

        }
        
    });
    return answer;
 };


 const deselectAll = ()=>{
    answers.forEach(curAnsEle =>curAnsEle.checked =false)
 };

submit.addEventListener('click',()=>{
    const checkAnswer = getCheckAnswer();
    if(checkAnswer == quizDB[questionCount].ans){
        score++;
        
    }
    questionCount++;

    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScores.innerHTML =`
        <h3>Your scored ${score}/${quizDB.length}✌️</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScores.classList.remove("scoreArea");
    }
});


 