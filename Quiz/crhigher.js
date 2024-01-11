/*level difficult
for adults
 --binary logic/Boolean logic based questions
 --Data Sufficiency based qestions
 --clock problems , relationship problems 


*/
const quizData = [{
    question: "Three persons A, B and C gave these statements : A said, either Freedom Party or Green Party won the elections.B said, Freedom Party won.C said, neither Freedom Party nor Green Party won the elections.Of these persons, only one person is wrong.Who won the elections?",
    a: "Green Party",
    b: "Freedom Party",
    c: "Insufficient Information",
    d: "Neither",
    
    correct: "b",
},
{
    question: "Find wrong number in series: 12, 25, 49, 99, 187, 395, 789",
    a: "789",
    b: "187",
    c: "99",
    d: "49",
    correct: "b",
    /*Question 2 Explanation: 
     12*2+1 =25
     25*2-1 = 49
     49*2+1 = 99
     395*2-1 = 789*/
},
{
    question: "The Japanese petroleum industry venturing into the west European markets faces tough competition from the Chinese.Courses of Action - I. Japan should search for other markets for its products.II. Japan should improve the quality of the petroleum products to compete with the Chinese in capturing these markets.",
    a: "Only I follows",
    b: "Only II follows",
    c: "Neither I nor II follow",
    d: "Both follows",
    correct: "b",
    /*Running away from the competition is not the solution in any case.
Hence, Japanese should compete with the Chinese and emerge successful.*/
},
{
    question: "Karan is 100 m North-West of Lalit. If Manoj is 100 m North-East of Lalit, then Manoj is in which direction of Karan?",
    a: "East",
    b: "West",
    c: "North",
    d: "South",
    correct: "a",
},
{
    question :"At what time between 9.13 and 10.12 will the hands of a watch be together?",
    a: "45 min past 9",
    b: "49(1/11) min past 9",
    c: "48 min past 9",
    d: "47 min past 9",
    correct: "b",
},
{
    question:"In a code language, 'mok dan sil' means 'big bad wrestler', 'fit kon dan' means 'wrestler is good', 'cold tir fit' means 'he is new'.Which word stands for 'is' in that language?",
    a:"Fit",
    b:"Kon",    
    c:"Dan",    
    d:"Tir",    
    correct:"a",
},
{
    question:"Choose the number which is different from others in the group",
    a:"6788",
    b:"6878",        
    c:"6482",     
    d:"9848",    
    correct:"c",
    /*In all other numbers, sum of digits is 29, while in option C, it is 20.
6 + 4 + 8 + 2 = 20
6 + 7 + 8 + 8 = 29
6 + 8 + 7 + 8 = 29
9 + 8 + 4 + 8 = 29 */
},
{
    question:"In the following question, various terms of an alphabet series are given with one or more missing terms as shown by (?). Choose the missing term out of the given alternatives. R, U, X, ?, D",
    a:"Z",
    b:"B",    
    c:"A",    
    d:"Y",    
    correct:"c",
    /*R __+3__ U __+3__ X __+3__ A __+3__ D */
},
{
    question:" Pointing to Raja, Rani said, “His mother’s brother is the father of my son Rajkumar”.How is Raja related to Rani?",
    a:"Niece ",
    b:"Nephew",    
    c:"Aunt",    
    d:"Sister",    
    correct:"b",
},
{
    question:"An accurate clock is started at noon. By 10 minutes past 3, the hour hand has turned through:",
    a:"90",
    b:"95",    
    c:"100",    
    d:"105",    
    correct:"b",
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