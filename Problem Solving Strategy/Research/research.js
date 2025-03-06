/*level intermediate 
for 14+ students */
const quizData = [
    {
        question: "What is the FIRST step in conducting research?",
        a: "Collecting data",
        b: "Identifying the research question",
        c: "Analyzing results",
        d: "Publishing findings",
        correct: "b",
        /* Research starts with defining a clear and specific research question or problem. */
    },
    {
        question: "Which source is considered the MOST reliable for academic research?",
        a: "Wikipedia",
        b: "A peer-reviewed journal",
        c: "A personal blog",
        d: "A random social media post",
        correct: "b",
        /* Peer-reviewed journals contain rigorously reviewed and validated research. */
    },
    {
        question: "Which of the following is NOT a primary source?",
        a: "A diary entry from 1850",
        b: "An interview transcript",
        c: "A news article summarizing a research study",
        d: "An original scientific experiment report",
        correct: "c",
        /* Summarized news articles are secondary sources, not primary ones. */
    },
    {
        question: "What is the purpose of a literature review in research?",
        a: "To summarize key findings of previous studies",
        b: "To prove your research is better than others",
        c: "To increase word count in a research paper",
        d: "To avoid conducting experiments",
        correct: "a",
        /* Literature reviews help understand past research and identify gaps in knowledge. */
    },
    {
        question: "Which research method is BEST suited for studying human behavior in natural settings?",
        a: "Experimental research",
        b: "Case study",
        c: "Observational research",
        d: "Survey research",
        correct: "c",
        /* Observational research allows studying behavior without direct intervention. */
    },
    {
        question: "What is the main purpose of citing sources in research?",
        a: "To make the paper look more professional",
        b: "To give credit to original authors and avoid plagiarism",
        c: "To impress the reader with references",
        d: "To add unnecessary details",
        correct: "b",
        /* Proper citations ensure academic integrity and acknowledge original contributions. */
    },
    {
        question: "A scientist is testing a new drug’s effectiveness. What is the BEST way to minimize bias?",
        a: "Use a small sample of close friends",
        b: "Conduct a blind or double-blind study",
        c: "Let participants decide which group they want to be in",
        d: "Ignore external factors",
        correct: "b",
        /* Blind and double-blind studies prevent biases from influencing results. */
    },
    {
        question: "What is a common problem with internet-based research?",
        a: "There is no useful information online",
        b: "All sources are equally trustworthy",
        c: "Information can be outdated or inaccurate",
        d: "Internet research takes too long",
        correct: "c",
        /* Online information must be carefully verified for credibility and accuracy. */
    },
    {
        question: "Which of these is an example of qualitative research?",
        a: "A survey measuring how many people own a car",
        b: "A statistical analysis of disease rates",
        c: "An in-depth interview about personal experiences",
        d: "A chart showing population growth",
        correct: "c",
        /* Qualitative research focuses on descriptive, non-numerical data like interviews. */
    },
    {
        question: "A researcher is studying the effects of sleep on memory. What is the independent variable?",
        a: "The amount of sleep participants get",
        b: "The memory test results",
        c: "The age of participants",
        d: "The type of memory being tested",
        correct: "a",
        /* The independent variable is what is changed (amount of sleep) to observe its effect. */
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