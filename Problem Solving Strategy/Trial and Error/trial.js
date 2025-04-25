/*level intermediate 
for 14+ students */
const quizData = [
    {
        question: "You are trying to crack a 4-digit lock but don't know the code. What is the best way to solve it using trial and error?",
        a: "Guess random numbers until it opens",
        b: "Try combinations systematically from 0000 to 9999",
        c: "Wait for someone else to open it",
        d: "Give up after a few failed attempts",
        correct: "b",
        /* Systematic trial and error ensures every possibility is tested methodically. */
    },
    {
        question: "A chef is experimenting with a new recipe but is unsure about the right amount of salt. How should they use trial and error?",
        a: "Add a random amount of salt and hope it works",
        b: "Add a small amount, taste, and adjust gradually",
        c: "Avoid adding salt altogether",
        d: "Ask someone else to decide",
        correct: "b",
        /* Incremental adjustments help refine the result through trial and error. */
    },
    {
        question: "A student is trying to solve a difficult math problem but keeps getting the wrong answer. What is the best approach?",
        a: "Try different methods until they find the correct one",
        b: "Keep repeating the same method hoping for a different result",
        c: "Skip the problem and move on",
        d: "Copy someone else's answer",
        correct: "a",
        /* Trying different approaches is the essence of trial and error learning. */
    },
    {
        question: "An engineer is designing a bridge but the initial structure fails in a stress test. How should they proceed?",
        a: "Keep using the same design",
        b: "Test small changes and improve the design step by step",
        c: "Abandon the project entirely",
        d: "Blame the construction workers",
        correct: "b",
        /* Trial and error involves modifying and testing solutions until success is achieved. */
    },
    {
        question: "You are assembling a new piece of furniture without instructions. What is the most effective trial and error strategy?",
        a: "Try fitting different pieces together logically",
        b: "Throw away extra screws and force pieces together",
        c: "Leave the furniture half-assembled",
        d: "Wait for someone else to build it",
        correct: "a",
        /* Testing different piece arrangements systematically leads to a correct solution. */
    },
    {
        question: "A programmer is debugging their code but it keeps crashing. What should they do?",
        a: "Modify one part at a time and test the result",
        b: "Change random lines of code without testing",
        c: "Delete the entire program and restart",
        d: "Ignore the error and submit the code",
        correct: "a",
        /* Effective trial and error debugging involves isolating and testing small changes. */
    },
    {
        question: "A child is trying to balance on a skateboard for the first time. What is the best way to learn through trial and error?",
        a: "Keep practicing different stances until they find one that works",
        b: "Give up after falling once",
        c: "Wait until someone tells them the perfect technique",
        d: "Never try again after one failure",
        correct: "a",
        /* Learning balance through multiple attempts and adjustments is trial and error in action. */
    },
    {
        question: "A musician is learning to play a song by ear. How should they use trial and error?",
        a: "Play random notes until something sounds right",
        b: "Try different notes and adjust based on what sounds correct",
        c: "Give up if the first attempt is incorrect",
        d: "Only play the song if they already know all the notes",
        correct: "b",
        /* Adjusting notes based on auditory feedback is an example of trial and error learning. */
    },
    {
        question: "A gamer is stuck on a puzzle in a video game. How should they use trial and error to solve it?",
        a: "Try different solutions, analyze mistakes, and refine their approach",
        b: "Keep doing the same thing even if it doesn't work",
        c: "Quit the game",
        d: "Look up the answer immediately without attempting",
        correct: "a",
        /* Experimenting with different solutions until finding the correct one is key to trial and error. */
    },
    {
        question: "A scientist is trying to develop a new material, but their first experiments fail. What should they do?",
        a: "Modify the formula slightly and test again",
        b: "Give up and say it's impossible",
        c: "Stick to the failed formula",
        d: "Throw away all materials and restart from scratch",
        correct: "a",
        /* Scientific discoveries often require repeated adjustments through trial and error. */
    }
    ];

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
    <div class="col">
        <button class="btn"><a href="../../foundational.html">Go To Course</a></button>
    </div>
`
let task = JSON.parse(localStorage.getItem("completedTasks")) || [];
task.push({ name: "Trial & Error Quiz", score: correct });
localStorage.setItem("completedTasks", JSON.stringify(task));
}
loadQuestion(index);