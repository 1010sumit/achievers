/*level intermediate 
for 14+ students */
const quizData = [
    {
        question: "Which shape does NOT belong in the sequence?",
        a: "Square",
        b: "Circle",
        c: "Triangle",
        d: "Pentagon",
        correct: "b",
        /* Circle. The rest have straight edges. */
    },
    {
        question: "If A is B’s father but B is not A’s son, what is the relation?",
        a: "Daughter",
        b: "Mother",
        c: "Sister",
        d: "Brother",
        correct: "a",
        /* Daughter. B is A’s child but not a son, so B must be a daughter. */
    },
    {
        question: "What is missing in the pattern? 3, 6, 12, 24, __, 96",
        a: "36",
        b: "48",
        c: "42",
        d: "60",
        correct: "b",
        /* 48. Each number doubles the previous one. */
    },
    {
        question: "Which word is the opposite of ‘genuine’?",
        a: "Fake",
        b: "Honest",
        c: "Authentic",
        d: "Pure",
        correct: "a",
    },
    {
        question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
        a: "7.5°",
        b: "22.5°",
        c: "37.5°",
        d: "45°",
        correct: "c",
        /* 37.5°. The formula is |(30*H - 5.5*M)| */
    },
    {
        question: "What is the next term in the sequence: 2, 6, 12, 20, 30, __?",
        a: "36",
        b: "40",
        c: "42",
        d: "48",
        correct: "c",
        /* 42. The pattern is +4, +6, +8, +10, +12 */
    },
    {
        question: "What is the missing letter? B, E, H, K, __, Q",
        a: "L",
        b: "M",
        c: "N",
        d: "O",
        correct: "d",
        /* O. The sequence follows every third letter in the alphabet. */
    },
    {
        question: "Which one is NOT a prime number?",
        a: "13",
        b: "19",
        c: "21",
        d: "23",
        correct: "c",
        /* 21 is divisible by 3 and 7. */
    },
    {
        question: "Which is the odd one out?",
        a: "Mercury",
        b: "Earth",
        c: "Venus",
        d: "Mars",
        correct: "b",
        /* Earth. The rest do not have a natural satellite. */
    },
    {
        question: "If TOMORROW is coded as ‘MLNLLOQQ’, how is TODAY coded?",
        a: "MQJYX",
        b: "GLWML",
        c: "PKJXL",
        d: "NKJYL",
        correct: "d",
        /* Each letter is replaced with its reverse alphabetical counterpart. */
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
task.push({ name: "Critical Thinking Quiz", score: correct });
localStorage.setItem("completedTasks", JSON.stringify(task));
}

loadQuestion(index);