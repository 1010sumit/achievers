/*level intermediate 
for 14+ students */
const quizData = [
    {
    
        question:"Which word does NOT belong with the others?",
        a:"index",
        b:"chapter",    
        c:"glossary",    
        d:"book",    
        correct:"d",
        /* Book. Rest are all parts of a book.*/
    },
    {
        
        question:"CUP : LIP :: BIRD : ?",
        a:" GRASS",
        b:"FOREST",    
        c:"BEAK",    
        d:"BUSH",    
        correct:"c",
       /* BEAK. You drink out of a cup with your lips. Similarly, birds bite grass with their beak*/
    },
    {
        
        question:" A Tiebreaker is an additional contest carried out to establish a winner among tied contestants. Choose one situation from the options below that best represents a Tiebreaker.",
        a:"At halftime, the score is tied at 2-2 in a football match.",
        b:"Serena and Maria have each secured 1 set in the game.",    
        c:"The umpire tosses a coin to decide which team will have bat first.",    
        d:"RCB and KKR each finished at 140 all out.",    
        correct:"d",

    },
    {
        
        question:"Alert villagers nabbed a group of bandits armed with murderous weapons. Courses of action:I. The villagers should be provided sophisticated weapons. II. The villagers should be rewarded for their courage and unity.",
        a:"If only I follows",
        b:"If only II follows",    
        c:"If either I or II follows",    
        d:"If both I or II follows",    
        correct:"b",
    },
    {
        
        question:"Statement: Anger is energy, in a more proactive way and how to channelize it is in itself a skill.Assumptions: I. Anger need to be channelized. II. Only skillful people can channelize anger to energy.",
        a:"If only assumption I is implicit.",
        b:"If only assumption II is implicit.",    
        c:"if either I or II is implicit.",    
        d:"if both I and II are implicit.",    
        correct:"b",
    },
    {
        
        question:"There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?",
        a:"5",
        b:"4",    
        c:"6",    
        d:"3",    
        correct:"d",
        /*Three. Two ducks are in front of the last duck; the first duck has two ducks behind; one duck is between the other two*/
    },
    {
        
        question:"Susan and Lisa decided to play tennis against each other. They bet $1 on each game they played. Susan won three bets and Lisa won $5. How many games did they play?",
        a:"11",
        b:"8",    
        c:"9",    
        d:"10",    
        correct:"a",
        /*Eleven. Because Lisa lost three games to Susan, she had lost $3 ($1 per game). So, she had to win back that $3 with three more games, then win another five games to win $5.*/
    },
    {
        
        question:"If five cats can catch five mice in five minutes, how long will it take one cat to catch one mouse?",
        a:"25",
        b:"5",    
        c:"1",    
        d:"10",    
        correct:"b",
        /*Five minutes. Using the information we know, it would take one cat 25 minutes to catch all five mice (5x5=25). Then working backward and dividing 25 by five, we get five minutes for one cat to catch each mouse.*/
    },
    {
        
        question:"Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?",
        a:"7",
        b:"12",    
        c:"10",    
        d:"13",    
        correct:"c",
        /* Its an alternating addition and subtraction series. 3 is added in the first pattern, and then 2 is subtracted.*/
    },
    {
        
        question:"Pick the odd man out?",
        a:"just",
        b:"fair",    
        c:"equitable",    
        d:"biased",    
        correct:"d",
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