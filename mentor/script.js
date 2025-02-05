// script.js
const mentorsData = [
    {
        id: 1,
        name: 'John Doe',
        details: 'Mental Development Expert',
        image: 'https://github.com/1010sumit/achievers/blob/main/images/adult.png?raw=true'
    },
    {
        id: 2,
        name: 'Jane Smith',
        details: 'Logical Thinking Specialist',
        image: 'https://github.com/1010sumit/achievers/blob/main/images/respect%20your%20teacher.png?raw=true'
    },
    {
        id: 3,
        name: 'Jane Smith',
        details: 'Analytical Thinking Coach',
        image: 'https://github.com/1010sumit/achievers/blob/main/images/adult.png?raw=true'
    },
    {
        id: 4,
        name: 'Jane Smith',
        details: 'Mathematical Thinking Facilitator',
        image: 'https://github.com/1010sumit/achievers/blob/main/images/youth1.png?raw=true'
    },
    {
        id: 5,
        name: 'Jane Smith',
        details: 'Creative and Critical Thinking Advocate',
        image: 'https://github.com/1010sumit/achievers/blob/main/images/9-16.png?raw=true'
    },
    // Add more mentors as needed
];

function createMentorCard(mentor) {
    const card = document.createElement('div');
    card.className = 'mentor-card';

    card.innerHTML = `
        <img src="${mentor.image}" alt="${mentor.name}" class="mentor-image">
        <h2 class="mentor-name">${mentor.name}</h2>
        <p class="mentor-details">${mentor.details}</p>
        <button class="appointment-button" onclick="openForm()">Book Appointment</button>
    `;

    return card;
}

function openForm() {
    document.getElementById("appointmentForm").style.display = "block";
    // document.body.style.filter = "blur(5px)";
  }
function closeForm() {
    document.getElementById("appointmentForm").style.display = "none";
    document.body.style.filter = "none";
  }


function displayMentors() {
    const container = document.getElementById('mentorCardsContainer');
    mentorsData.forEach(mentor => {
        const mentorCard = createMentorCard(mentor);
        container.appendChild(mentorCard);
    });
}


function sendMail() {
    // event.preventDefault();
    const name = document.getElementById("name").value;
    const issues = document.getElementById("issues").value;
    const meetingTime = document.getElementById("meeting-time").value;

    const subject = encodeURIComponent("New Appointment Request");
    const body = encodeURIComponent(`Name: ${name}\nKey Issues: ${issues}\nMeeting Time: ${meetingTime}`);

    
    // window.open(`mailto:adityapalande.167@gmail.com?subject=${subject}&body=${body}`);
    alert("Meeting Scheduled")
}

// Initialize the mentor cards
displayMentors();
