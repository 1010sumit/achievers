/*level intermediate 
for 14+ students */
const quizData = [
    {
        question: "A scientist wants to test whether a new drug improves memory. What should be the null hypothesis?",
        a: "The drug improves memory",
        b: "The drug has no effect on memory",
        c: "The drug worsens memory",
        d: "The drug is more effective than all existing drugs",
        correct: "b",
        /* The null hypothesis assumes no effect or no difference, which in this case means the drug does not improve memory. */
    },
    {
        question: "If the p-value in a hypothesis test is 0.03 and the significance level is 0.05, what should be concluded?",
        a: "Reject the null hypothesis",
        b: "Accept the null hypothesis",
        c: "Increase the sample size",
        d: "The test is invalid",
        correct: "a",
        /* Since the p-value (0.03) is less than the significance level (0.05), we reject the null hypothesis. */
    },
    {
        question: "Which type of error occurs when the null hypothesis is rejected even though it is true?",
        a: "Type I Error",
        b: "Type II Error",
        c: "Sampling Error",
        d: "Measurement Error",
        correct: "a",
        /* A Type I error occurs when a true null hypothesis is incorrectly rejected. */
    },
    {
        question: "You hypothesize that students who study in the morning score higher than those who study at night. What would be the alternative hypothesis?",
        a: "There is no difference in scores between morning and night study groups",
        b: "Students who study in the morning score higher than those who study at night",
        c: "Students who study at night score higher than those who study in the morning",
        d: "Studying does not impact scores",
        correct: "b",
        /* The alternative hypothesis states the expected effect: morning students perform better. */
    },
    {
        question: "Which of the following is the correct definition of the null hypothesis (H₀)?",
        a: "It represents the researcher's claim about the effect",
        b: "It assumes there is no effect or no difference",
        c: "It always predicts a significant difference",
        d: "It must always be true",
        correct: "b",
        /* The null hypothesis assumes no effect or no relationship between variables. */
    },
    {
        question: "A researcher wants to test if a new fertilizer increases plant growth. What would be the dependent variable in this hypothesis test?",
        a: "The amount of fertilizer used",
        b: "The type of plant",
        c: "The plant growth (height or biomass)",
        d: "The soil type",
        correct: "c",
        /* The dependent variable is what is being measured—in this case, plant growth. */
    },
    {
        question: "Which statistical test would be most appropriate to compare the means of two independent groups?",
        a: "Chi-square test",
        b: "ANOVA",
        c: "t-test",
        d: "Regression analysis",
        correct: "c",
        /* A t-test is used to compare the means of two independent groups. */
    },
    {
        question: "What does a p-value represent in hypothesis testing?",
        a: "The probability of the alternative hypothesis being true",
        b: "The probability of obtaining the observed results if the null hypothesis is true",
        c: "The percentage of data points that are outliers",
        d: "The probability of making a calculation error",
        correct: "b",
        /* The p-value helps determine whether we reject the null hypothesis based on the likelihood of observing the given data under H₀. */
    },
    {
        question: "A company tests if a new sales strategy increases revenue. They reject the null hypothesis at a 5% significance level. What does this mean?",
        a: "The new strategy definitely increases revenue",
        b: "There is enough evidence to suggest the new strategy increases revenue",
        c: "The company made an error in their calculations",
        d: "The null hypothesis is 100% false",
        correct: "b",
        /* Rejecting the null at a 5% significance level means there is strong enough evidence, but not absolute certainty. */
    },
    {
        question: "Which statement is TRUE about hypothesis testing?",
        a: "A hypothesis can be proven true with 100% certainty",
        b: "A hypothesis is tested based on probability and evidence",
        c: "A larger sample size always leads to a correct conclusion",
        d: "If a hypothesis is rejected, it means it was incorrect",
        correct: "b",
        /* Hypothesis testing is based on statistical probability, not absolute proof. */
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