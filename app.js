var quiz = [
{
	question: "Who is Pharah's mother?",
	choices: ["Mercy","Ana","Torbjorn","Diva"],
	// Using 1-4 for index because the value of buttons are 1-4
	correctAnswer: "2"
},
{
	question: "Which of these characters is not a support?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["Tracer","Lucio","Symmetra","Mercy"],
	correctAnswer: "1"
},
{
	question: "What is the name of Reinhardt's ultimate ability?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["Rip-tire","Sound-barrier","Pulse Bomb","Earthshatter"],
	correctAnswer: "4"
},
{
	question: "Who is the brother of Genji?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["Soldier76","Hanzo","Roadhog","Bastion"],
	correctAnswer: "2"
},
{
	question: "Which of these heroes has no soul?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["Reaper","Mei","Junkrat","Zarya"],
	correctAnswer: "2"
},
{
	question: "What does Hanzo say when he uses his ultimate?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["Ryuu-ga, Wa-ga-te-ki-wo, Ku-ra-u","Ryujin no ken wo kurae","Simple Geometry","Go to sleep now"],
	correctAnswer: "1"
},
{
	question: "What is Winston's favorite food?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["Bananas","Peanut Butter","Pickles","Cheeseburgers"],
	correctAnswer: "2"
},
{
	question: "Who is the voice actor for Mcree?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["Anjali Bhimani","Darin De Paul","Jonny Cruz","Matthew Mercer"],
	correctAnswer: "4"
},
{
	question: "Which of these places is known as the 'City of Harmony'?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["King's Row","Hanamura","Numbani","Eichenwalde"],
	correctAnswer: "3"
},
{
	question: "Which of these heroes has a clip size less than 10?",
	// Using 1-4 for index because the value of buttons are 1-4
	choices: ["Sombra","Tracer","Junkrat","Ana"],
	correctAnswer: "3"
},


]

var currentQuestion = 0;
var score = 0;
var totalQuestions = quiz.length;

var container = $('.container');
var introduction = $('.introduction');
var quizCont = $('.quiz');
var questionElement = $('.question');
var option1 = $('#option1');
var option2 = $('#option2');
var option3 = $('#option3');
var option4 = $('#option4');
var nextButton = $('.next');
var resultCont = $('.results');
var restartButton = $('.reset');
var finalScore = $('.final-score');
var feedback = $('.feedback');
var submitButton = $('.submit');



$(function() {
	

	function loadQuiz (quizIndex) {
		var q = quiz[quizIndex];
		questionElement.text((quizIndex + 1) + '/' + totalQuestions +': ' + q.question);
		option1.text(q.choices[0]);
		option2.text(q.choices[1]);
		option3.text(q.choices[2]);
		option4.text(q.choices[3]);

	};

	function nextQuestion() {

		$('input[type=radio]:checked').prop('checked', false);
		feedback.text('');
		toggleButtons();

		currentQuestion++;

		if(currentQuestion == totalQuestions - 1) {
		nextButton.text('Results!');
		}

		if(currentQuestion == totalQuestions) {
		quizCont.hide();
		resultCont.toggleClass('hidden');
		finalScore.text('You got ' + score + ' out of ' + totalQuestions + ' questions right!');
		return;

	}

		loadQuiz(currentQuestion);

	}

	function submitAnswer() {
		var selectedOption = $('input[type=radio]:checked');
		var answer = selectedOption.val();
		var index = quiz[currentQuestion];

		if(selectedOption.length == 0) {
			feedback.text("Please select an answer!");
		}
		else if(index.correctAnswer == answer) {
		score += 1;
		feedback.text('Correct! You have correctly answered ' + score + ' out of ' + totalQuestions + ' questions so far!');
		toggleButtons();

		}
		else {
		feedback.text('Incorrect. The correct answer was ' + index.choices[+index.correctAnswer-1] + "!");
		toggleButtons();
		}

		
		

	}

	function toggleButtons () {
		submitButton.toggleClass('hidden');
		nextButton.toggleClass('hidden');
	}



	$('.start-quiz').on('click', function(event) {
		introduction.hide();
		$('.quiz').removeClass('hidden');
		loadQuiz(currentQuestion);
	});

	$('.next').on('click', function(event) {
		nextQuestion();
	});

	$('.submit').on('click', function(event) {
		submitAnswer();
	});



	$('.reset').on('click', function(event) {

		score = 0;
		currentQuestion = 0;
		loadQuiz(currentQuestion);
		resultCont.toggleClass('hidden');
		nextButton.text('Next');
		quizCont.show();

	});


});