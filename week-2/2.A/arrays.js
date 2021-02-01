const triviaQuestions = [
    {question: 'What does PEMPDAS stand for?', answer: 'Parentheses, Exponents, Multiplication and Division'},
    {question: 'Where are platypus found?', answer:'Australia'},
    {question: 'Which two U.S. states don’t observe Daylight Saving Time?', answer :'Arizona and Hawaii'},
    {question: 'What is the loudest animal on Earth?', answer: 'The Sperm Whale'},
    {question: 'How many hearts does an octopus have?', answer: 'Three'}
];

const randomIdx = Math.round(Math.random() * (triviaQuestions.length - 1));
const question = window.prompt(triviaQuestions[randomIdx].question);
window.alert('You answered ' + question + '. The correct answer is ' + triviaQuestions[randomIdx].answer + ".")