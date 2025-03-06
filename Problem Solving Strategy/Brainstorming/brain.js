/*level intermediate 
for 14+ students */
const quizData = [
    {
        question: "A company wants to launch an eco-friendly water bottle. What should be their FIRST step in brainstorming product ideas?",
        a: "Start manufacturing immediately",
        b: "Look at competitor products and analyze their strengths and weaknesses",
        c: "Set a fixed design and refuse to change it",
        d: "Ignore customer preferences and rely only on internal ideas",
        correct: "b",
        /* Understanding competitors helps identify market gaps and innovate effectively. */
    },
    {
        question: "You and your team need to design a new mobile app. Which of the following is the BEST way to generate ideas?",
        a: "Encourage every team member to suggest ideas, no matter how wild",
        b: "Only accept ideas that are already proven successful",
        c: "Let one person make all the decisions",
        d: "Follow an existing app’s design without adding any new features",
        correct: "a",
        /* Brainstorming is about generating a wide range of ideas without restrictions. */
    },
    {
        question: "A school wants to reduce plastic waste. What would be an effective brainstorming approach?",
        a: "Discuss various alternatives like reusable bottles, paper packaging, and incentives",
        b: "Ban all plastic immediately without considering feasibility",
        c: "Assume plastic cannot be replaced",
        d: "Ignore the issue and continue using plastic",
        correct: "a",
        /* Effective brainstorming involves exploring multiple solutions before making a decision. */
    },
    {
        question: "Your city is facing heavy traffic congestion. What is a creative brainstorming question to ask?",
        a: "How can we reduce traffic using smart technology and alternative transport?",
        b: "Why do people even need to travel?",
        c: "Can we make people buy more cars?",
        d: "Should we stop repairing roads?",
        correct: "a",
        /* Good brainstorming questions are open-ended and solution-oriented. */
    },
    {
        question: "A team is brainstorming solutions for food wastage. What should they AVOID?",
        a: "Dismissing ideas before discussing them",
        b: "Writing down all suggestions",
        c: "Exploring different perspectives",
        d: "Encouraging every team member to contribute",
        correct: "a",
        /* Prematurely rejecting ideas can limit creative problem-solving. */
    },
    {
        question: "Which technique can help organize brainstorming ideas effectively?",
        a: "Mind mapping",
        b: "Ignoring all unrelated ideas",
        c: "Repeating the same idea multiple times",
        d: "Waiting for only one perfect idea to emerge",
        correct: "a",
        /* Mind mapping visually connects related ideas, making them easier to refine. */
    },
    {
        question: "You are brainstorming ways to improve online learning. Which idea shows **divergent thinking**?",
        a: "Using AI-powered tutors to personalize learning",
        b: "Making online learning exactly like traditional classrooms",
        c: "Limiting learning to only textbooks",
        d: "Reducing online learning hours without adding value",
        correct: "a",
        /* Divergent thinking explores innovative and unconventional ideas. */
    },
    {
        question: "You need to brainstorm a new advertising campaign. What is the MOST effective strategy?",
        a: "Encourage a mix of logical and out-of-the-box ideas before refining them",
        b: "Only use previous ad ideas and avoid new suggestions",
        c: "Let one person dominate the discussion",
        d: "Stick to a single idea without exploring alternatives",
        correct: "a",
        /* Brainstorming thrives on diverse ideas before selecting the best one. */
    },
    {
        question: "A team is brainstorming ideas for a futuristic smart home. Which idea should they consider?",
        a: "Self-cleaning furniture using nanotechnology",
        b: "A door that does not open",
        c: "Making homes exactly as they are today",
        d: "Eliminating technology from homes",
        correct: "a",
        /* Smart brainstorming encourages futuristic and practical innovation. */
    },
    {
        question: "Which of the following is an essential rule for effective brainstorming?",
        a: "There are no bad ideas at the start",
        b: "Reject all crazy ideas immediately",
        c: "Only let experts contribute",
        d: "Discourage humor or creative thinking",
        correct: "a",
        /* The best brainstorming sessions allow free-flowing ideas without judgment. */
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
`
}
loadQuestion(index);