import gradio as gr
import numpy as np
import joblib
import random
from question import questions_bank

# Load model and scaler
model = joblib.load("student_category_model.pkl")
scaler = joblib.load("scaler.pkl")

# Step 1: Randomly select 5 questions per section
def get_quiz():
    selected = {}
    for section, questions in questions_bank.items():
        selected[section] = random.sample(questions, 5)
    return selected

# Step 2: Quiz data and inputs
quiz_data = get_quiz()
quiz_inputs = []
all_questions = []

for section, questions in quiz_data.items():
    for q in questions:
        quiz_inputs.append(
            gr.Radio(
                choices=q['options'],
                label=f"[{section.upper()}] {q['question']}",
                type="value"
            )
        )
        all_questions.append((section, q))

# Step 3: Evaluation function
def evaluate_quiz(*answers):
    scores = {
        "Maths and Statistics": 0,
        "Logical and Analytical Thinking": 0,
        "Trial and Error": 0,
        "Research": 0,
        "Brainstorming": 0,
    }

    judgments = []
    for idx, (section, q) in enumerate(all_questions):
        user_answer = answers[idx]
        correct = q['answer']

        if user_answer == correct:
            scores[section] += 1
            judgments.append(f"<span style='color:green;'>✅ Correct</span>")
        else:
            judgments.append(f"<span style='color:red;'>❌ Incorrect. Correct answer: <b>{correct}</b></span>")

    # Percentages for each section
    percentages = [
        (scores["Maths and Statistics"] / 5) * 100,
        (scores["Logical and Analytical Thinking"] / 5) * 100,
        (scores["Trial and Error"] / 5) * 100,
        (scores["Research"] / 5) * 100,
        (scores["Brainstorming"] / 5) * 100
    ]

    features = np.array([percentages])
    scaled = scaler.transform(features)
    prediction = model.predict(scaled)[0]

    


    # Final result and feedback with styling
    final_result = f"""
    <div style='font-size:22px; font-weight:bold; color:#1a73e8;'>
        🎯 Your Category is {prediction}. A Customized Course Structure now awaits you.
    </div>
    """
    button_to_site = f"""
<br><button 
onclick="
    window.localStorage.setItem('predictedCategory', '{prediction}');
    window.location.href = 'http://127.0.0.1:5500/achievers/indexafterquiz.html?category={prediction}';
" 
style="font-size:16px; padding:10px 20px; background-color:#1a73e8; color:white; border:none; border-radius:5px; cursor:pointer;">
Take Recommended Course
</button>
"""

    detailed_feedback = "<br><br>".join([ 
    f"<b>Q{idx+1}</b>: {judgments[idx]}" for idx in range(len(judgments))
    ])

    return f"<div style='font-size:18px;'>📋 <b>Your report is here 👇</b><br><br>{final_result}{button_to_site}<br><br>{detailed_feedback}</div>"

# Step 4: Interface with styled placeholder
interface = gr.Interface(
    fn=evaluate_quiz,
    inputs=quiz_inputs,
    outputs=gr.HTML(value="<div style='font-size:18px;'>📝 <b>Detailed report will be shown here 👇 after successful submission of the quiz.</b></div>"),
    title="Take this Quiz",
    flagging_mode="never",
)

interface.launch()
