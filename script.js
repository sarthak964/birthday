// Function to show the surprise message and play music
// Function to show the surprise message and play music
function showSurprise() {
    const surpriseMessage = document.getElementById('surprise');
    surpriseMessage.classList.remove('hidden');
    const music = document.getElementById('birthdayMusic');
    music.play();
  }
  
  // Function to redirect to the slideshow page
  function redirectToSlideshow() {
    document.getElementById('birthdayCard').style.display = 'none';
    document.getElementById('slideshowPage').style.display = 'block';
    document.body.style.backgroundImage = "url('bg.png')";
  }
  
  // Function to show the quiz container and update the body background
  function showQuiz() {
    // Hide the slideshow page
    document.getElementById('slideshowPage').style.display = 'none';
  
    // Display the quiz container
    document.getElementById('quizContainer').style.display = 'block';
  
    // Update the body background properties
    document.body.style.backgroundImage = "url('quiz.avif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }
  
  // Quiz Logic
  const quizSlide = document.getElementById('quiz-slide');
  const startBtn = document.getElementById('start-btn');
  
  let currentQuestion = 0;
  let score = 0;
  
  const questions = [
    {
      question: "Our First meet was on?",
      options: ["24 Nov", "24 Oct", "24 Sep", "24 Dec"],
      answer: "24 Oct"
    },
    {
      question: "What was the first nickname,I gave you?",
      options: ["Dumbo", "OG", "Donald Duck(Dudu)", "PuchKi"],
      answer: "Donald Duck(Dudu)"
    },
    {
      question: "How Much weight diff we have?",
      options: ["2kgs", "4kgs", "0 kgs", "3kgs"],
      answer: "2kgs"
    },
    {
      question: "What is our dream vacation spot?",
      options: ["Italy", "Maldives", "Switzerland", "London"],
      answer: "London"
    },
    {
      question: "How many years you are younger than me?",
      options: ["2 years", "1 year", "3 years", "1.5 years"],
      answer: "2 years"
    }
  ];
  
  // Start the quiz when the start button is clicked
  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'; // Hide the start button
    showQuestion(); // Show the first question
  });
  
  // Function to display the current question
  function showQuestion() {
    if (currentQuestion >= questions.length) {
      showResult();
      return;
    }
  
    const question = questions[currentQuestion];
    quizSlide.innerHTML = `
      <h2>Question ${currentQuestion + 1}</h2>
      <p>${question.question}</p>
      ${question.options.map(option => 
        `<button class="option-btn">${option}</button>`
      ).join('')}
    `;
  
    // Add event listeners to the option buttons
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
      button.addEventListener('click', () => handleAnswer(button, question.answer));
    });
  }
  
  // Function to handle the user's answer
  function handleAnswer(button, correctAnswer) {
    if (button.textContent === correctAnswer) {
      score++;
      button.style.backgroundColor = '#4caf50'; // Green for correct answer
    } else {
      button.style.backgroundColor = '#f44336'; // Red for incorrect answer
    }
    setTimeout(() => {
      currentQuestion++;
      showQuestion();
    }, 1000);
  }
  
  // Function to display the quiz result
  function showResult() {
    let message = '';
    if (score === questions.length) {
      message = "Guddie,You Remember Everything! 😍🎉";
    } else if (score >= questions.length / 2) {
      message = "Guddie,You Remember almost Everything! 😊";
    } else {
      message = "Umm... maybe I know us better than you ! 😜";
    }
    
  
    quizSlide.innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>You scored ${score} out of ${questions.length}</p>
      <p>${message}</p>
      <button id="restart-btn">One last thing</button>
    `;
  
    // Add event listener to the restart button
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.addEventListener('click', restartQuiz);
  }
  
  // Function to restart the quiz and redirect to the scrapbook container
  function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('scrapbookContainer').style.display = 'block';  // Show scrapbook container
    document.body.style.backgroundImage = "url('wallpaper.jpg')";  // Update background image
  
    // Dynamically update the scrapbook container's CSS for responsiveness
    updateScrapbookContainer();
  }
  
  // Function to update the scrapbook container's CSS for responsiveness
  function updateScrapbookContainer() {
    const scrapbookContainer = document.getElementById('scrapbookContainer');
    const videoContainer = document.querySelector('.video-container');
    const playButton = document.getElementById('play-button');
  
    // Adjust styles based on screen width
    if (window.innerWidth <= 768) {
      // For smaller screens (tablets and below)
      scrapbookContainer.style.maxWidth = '90%';
      videoContainer.style.paddingTop = '177.78%'; // Adjust for 9:16 aspect ratio
      playButton.style.width = '100%'; // Full width button for smaller screens
    } else {
      scrapbookContainer.style.maxWidth = '800px'; // Default width for larger screens
      videoContainer.style.paddingTop = '56.25%'; // 16:9 aspect ratio
      playButton.style.width = 'auto'; // Reset button width
    }
  }
  
  // Play Scrapbook video when the button is clicked
  document.getElementById('play-button').addEventListener('click', function() {
    const video = document.getElementById('scrapbook-video');
    video.play();
  });
  