
// Sample questions
const questions = [
    {
      question: " Who was the biological mother of Krishna?",
      options: [
        "Yashoda",
        "Kunthi",
        "Gandhari",
        "Devaki"
      ],
      answer: "Devaki"
    },
    {
        question: "What is the name of Arjuna’s bow?",
        options: [
          "Gandhiva",
          "Sharanga",
          "Mahendra",
          "Vijaya"
        ],
        answer: "Gandhiva"
      },
      {
        question: "What is the name of Bheeshma’s mother?",
        options: [
          "Parvati devi",
          "Sita devi",
          "Ganga devi",
          "Kunti devi"
        ],
        answer: "Ganga devi"
      },
      {
        question: " Who is the mother of the Kauravas?",
        options: [
          "Kunthi",
          "Draupati",
          "Gandhari",
          "Dushalla"
        ],
        answer: "Gandhari"
      },
      {
        question: "Who is the charioteer of Arjuna?",
        options: [
          "Rama",
          "Bheeshma",
          "Shantanu",
          "Krishna"
        ],
        answer: "Krishna"
      },
      {
        question: "Who is the son of Arjuna and Subhadra?",
        options: [
          "Abhimanyu",
          "Uttar",
          "Dronacharya",
          "Karna"
        ],
        answer: "Abhimanyu"
      },
      {
        question: "Who is wife of abhimanyu?",
        options: [
          "Amba",
          "Ambika",
          "Dushalla",
          "Uttara"
        ],
        answer: "Uttara"
      },
      {
        question: "Who is king pandu's second wife",
        options: [
          "Madri",
          "Kunthe",
          "Subhadra",
          "Amba"
        ],
        answer: "Madri"
      },
      {
        question: "How many brothers make pandavas",
        options: [
          "100",
          "3",
          "5",
          "2"
        ],
        answer: "5"
      },
      {
        question: " Who is the sister of Krishna?",
        options: [
          "Shukula",
          "Dushala",
          "Draupati",
          "Subhadra"
        ],
        answer: "Subhadra"
      }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // DOM elements
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const finalScreen = document.getElementById("final-screen");
  const questionElement = document.getElementById("question");
  const scoreElement = document.getElementById("score");
  const finalScoreElement = document.getElementById("final-score");
  const options = document.querySelectorAll(".option");
  
  // Start Quiz
  function startQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    loadQuestion();
  }
  
  // Load question
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    options.forEach((btn, index) => {
      btn.textContent = q.options[index];
      btn.disabled = false;
      btn.style.backgroundColor = "#282c34";
    });
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
  }
  
  // Check answer
  function checkAnswer(button) {
    const selected = button.textContent;
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      score++;
      button.style.backgroundColor = "#4CAF50"; // green
    } else {
      button.style.backgroundColor = "#e74c3c"; // red
      options.forEach(btn => {
        if (btn.textContent === correct) {
          btn.style.backgroundColor = "#4CAF50";
        }
      });
    }
  
    options.forEach(btn => btn.disabled = true);
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
  }
  
  // Next question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      quizScreen.style.display = "none";
      finalScreen.style.display = "block";
      finalScoreElement.textContent = `Your final score: ${score}/${questions.length}`;
    }
  }
  
  // Restart
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    finalScreen.style.display = "none";
    startScreen.style.display = "block";
  }
  
