// @ts-check
import { questions } from "./data/questions.js"
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 * 
 * @param {Quiz} quiz instancia de la clase Quiz.
 * @param {UI} ui intancia de la clase UI.
 */
function renderPage(quiz, ui) {
  if(quiz.finished()){
    ui.showScore(quiz.score);
  }else {
    ui.showQuestion(quiz.getQuestionCurrent().text);

    ui.showChoices(quiz.getQuestionCurrent().choices, question => {
      quiz.guess(question);
      renderPage(quiz, ui);
    });

    ui.showProgress(quiz.currentIndex + 1 , quiz.questions.length);
  }
}

(function main(){
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
})();