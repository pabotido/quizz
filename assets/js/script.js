let questions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let autoNextTimer = null;

const optionLetters = ['A', 'B', 'C', 'D'];
const autoNextDelay = 10000;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loadQuizButton').addEventListener('click', loadQuiz);
  document.getElementById('formatGuideButton').addEventListener('click', toggleFormatGuide);
  document.getElementById('prevButton').addEventListener('click', prevQuestion);
  document.getElementById('nextButton').addEventListener('click', nextQuestion);
  document.getElementById('finishButton').addEventListener('click', finishQuiz);
});

function toggleFormatGuide() {
  const guide = document.getElementById('formatGuide');
  guide.hidden = !guide.hidden;
}

function loadQuiz() {
  const file = document.getElementById('fileInput').files[0];
  if (!file) {
    alert('Vui lòng chọn file .docx');
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    mammoth.extractRawText({ arrayBuffer: event.target.result })
      .then((result) => {
        parseQuestions(result.value);
        startQuiz();
      })
      .catch((err) => alert('Lỗi đọc file: ' + err));
  };
  reader.readAsArrayBuffer(file);
}

function parseQuestions(text) {
  questions = [];
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
  let currentQ = null;

  for (const line of lines) {
    if (/^Câu \d+[:.]/i.test(line) || /^\d+\./.test(line)) {
      if (currentQ) questions.push(currentQ);
      currentQ = { question: line, options: [], correct: null, shuffledOptions: null };
      continue;
    }

    if (!currentQ) continue;

    if (/^[A-D][.:]/i.test(line)) {
      const isCorrect = line.includes('*');
      const optionText = line.replace(/^[A-D][.:]\s*/i, '').replace(/\*/g, '').trim();
      currentQ.options.push(optionText);

      if (isCorrect) {
        currentQ.correct = optionText;
      }
      continue;
    }

    if (/^Đáp án[:\s]/i.test(line)) {
      const answer = line.split(':').pop().trim();
      const answerIndex = optionLetters.indexOf(answer.toUpperCase());

      if (answerIndex !== -1 && currentQ.options[answerIndex]) {
        currentQ.correct = currentQ.options[answerIndex];
      }
    }
  }

  if (currentQ) questions.push(currentQ);
}

function startQuiz() {
  if (questions.length === 0) {
    alert('Không tìm thấy câu hỏi nào!');
    return;
  }

  questions = shuffle(questions);
  currentQuestion = 0;
  score = 0;
  userAnswers = new Array(questions.length).fill(null);
  clearAutoNextTimer();

  document.getElementById('quizContainer').hidden = false;
  document.getElementById('score').innerHTML = '';
  showQuestion();
}

function showQuestion() {
  clearAutoNextTimer();

  const question = questions[currentQuestion];
  document.getElementById('questionNumber').textContent = `Câu ${currentQuestion + 1}/${questions.length}`;
  document.getElementById('questionText').textContent = getQuestionTitle(question.question);

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  if (!question.shuffledOptions) {
    question.shuffledOptions = shuffle(question.options);
  }

  question.shuffledOptions.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-button';
    button.textContent = option;

    if (userAnswers[currentQuestion] !== null) {
      button.disabled = true;

      if (userAnswers[currentQuestion] === option) {
        button.classList.add(option === question.correct ? 'correct' : 'wrong');
      }
    } else {
      button.addEventListener('click', () => selectAnswer(option, button));
    }

    optionsDiv.appendChild(button);
  });

  document.getElementById('feedback').innerHTML = '';
}

function selectAnswer(selected, selectedButton) {
  const question = questions[currentQuestion];
  if (userAnswers[currentQuestion] !== null) return;

  userAnswers[currentQuestion] = selected;

  if (selected === question.correct) {
    score++;
    selectedButton.classList.add('correct');
  } else {
    selectedButton.classList.add('wrong');
  }

  document.querySelectorAll('#options button').forEach((button) => {
    button.disabled = true;
  });

  autoNextTimer = setTimeout(nextQuestion, autoNextDelay);
}

function nextQuestion() {
  clearAutoNextTimer();

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  clearAutoNextTimer();

  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function finishQuiz() {
  clearAutoNextTimer();

  const resultHTML = `<h2>Kết quả: ${score}/${questions.length}</h2>`;
  document.getElementById('score').innerHTML = resultHTML;
  alert(`Hoàn thành! Điểm của bạn: ${score}/${questions.length}`);
}

function getQuestionTitle(questionText) {
  return questionText.replace(/^(Câu\s*)?\d+[:.]\s*/i, '').trim();
}

function clearAutoNextTimer() {
  if (autoNextTimer) {
    clearTimeout(autoNextTimer);
    autoNextTimer = null;
  }
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}
