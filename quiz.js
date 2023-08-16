// This will be the quiz section

const questions = [
    {
        question: "Which rapper's album Certified Lover Boy sparked a mix of excitement and memes on social media?",
        answers: [
            {text:"Drake", correct:true},
            {text:"Kanye West", correct:false},
            {text:"J. Cole", correct: false},
            {text:"Jay-Z", correct:false},
        ]
    },
    {
        question: "Which female artist released a surprise album titled folklore that marked a departure from her previous pop sound?",
        answers: [
            {text:"Katy Perry", correct:false},
            {text:"Lady Gaga", correct:false},
            {text:"Rihanna", correct:false},
            {text:"Taylor Swift", correct:true},
        ]
    },
    {
        question: "From which borough of New York City fifth the Wu-Tang Clan originate?",
        answers: [
            {text:"Queens", correct:false},
            {text:"The Bronx", correct:false},
            {text:"Brooklyn", correct:false},
            {text:"Staten Island", correct:true},
        ]
    },
    {
        question: "Which controversial rapper and producer is known for albums like The College Dropout and”My Beautiful Dark Twisted Fantasy, ?",
        answers: [
            {text:"Jay-Z", correct:false},
            {text:"Eminem", correct:false},
            {text:"Kendrick Lamar", correct:false},
            {text:"Kanye West", correct:true},
        ]
    },
    {
        question: "What is the title of Adele's highly anticipated comeback single?",
        answers: [
            {text:"Hello Again", correct:false},
            {text:"Rolling in the Deep", correct:false},
            {text:"Easy on Me", correct:true},
            {text:"Someone Like You", correct:false},
        ]
    },
    {
        question: "Which artist, known for hits like Blinding Lights and Starboy, is often associated with the stage name The Weeknd?",
        answers: [
            {text:"Abel Alemu", correct:false},
            {text:"Abel Tadesse", correct:false},
            {text:"Abel Harris", correct:false},
            {text:"Abel Tesfaye", correct:true},
        ]
    },
    {
        question: "What was the real name of the rapper commonly known as 50 Cent?",
        answers: [
            {text:"Curtis Jackson", correct:true},
            {text:"Calvin Broadus", correct:false},
            {text:"Christopher Wallace", correct:false},
            {text:"Tupac Shakur", correct:false},
        ]
    },
    {
        question: " Who is the lead singer of the iconic band U2, known for hits like With or Without You and Where the Streets Have No Name?",
        answers: [
            {text:"Sting", correct:false},
            {text:"Bono", correct:true},
            {text:"Chris Martin", correct:false},
            {text:"Mick Jagger", correct:false},
        ]
    },
    {
        question: "OK Computer and Kid A are critically acclaimed albums released by which groundbreaking rock band?",
        answers: [
            {text:"Radiohead", correct:true},
            {text:"Blur", correct:false},
            {text:"Oasis", correct:false},
            {text:"Coldplay", correct:false},
        ]
    },
    {
        question: "Daft Punk, the influential electronic music duo known for hits like Get Lucky and One More Time, originates from which country?",
        answers: [
            {text:"Germany", correct:false},
            {text:"France", correct:true},
            {text:"United States", correct:false},
            {text:"United Kingdom", correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("getAnswer"); 
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0; 

function startQuiz() {
    currentQuestionIndex = 0;
    questionElement.innerText = "";
    answersElement.innerHTML = "";
    nextButton.disabled = true;
    showQuestion();
}

function showQuestion() {
    const questionObj = questions[currentQuestionIndex];
    questionElement.innerText = questionObj.question;

    answersElement.innerHTML = ""; // Clear existing answer buttons

    questionObj.answers.forEach(answer => {
        console.log(answer)
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct==false){
            button.classList.add("wrong-answer")
            button.addEventListener('click', function(){
                button.classList.toggle('active')
            })
        }
        button.addEventListener("click", () => clickedAnswer(answer.correct));
        answersElement.appendChild(button);
    });
}

function clickedAnswer(isCorrect) {
    if (isCorrect) {
        nextButton.disabled = false;
    }
    else 
     nextButton.disabled = true;
        }
        
    


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = "Quiz completed!";
        answersElement.innerHTML = "";
        nextButton.disabled = true;
    }
}

startQuiz();
