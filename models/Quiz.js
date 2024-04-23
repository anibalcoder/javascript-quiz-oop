import { Question } from "./Question.js";

// @ts-check
export class Quiz{
  // Propiedades privadas que se inicializan en cero cada vez que se crea una instancia de la clase.
  #currentIndex = 0;
  #score = 0;

  /**
   * 
   * @param {Question[]} questions
   */
  constructor(questions){
    this.questions = questions;
  }

  get currentIndex(){
    return this.#currentIndex;
  }

  get score(){
    return this.#score;
  }

  /**
   * 
   * @returns {Question} Devuelve la pregunta actual.
   */
  getQuestionCurrent(){
    return this.questions[this.#currentIndex];
  }

  /**
   * 
   * @param {string} answer Captura el texto de una pregunta.
   */
  guess(answer){
    if(this.getQuestionCurrent().correctAnswer(answer)){
      this.#score++;
    }

    this.#currentIndex++;
  }

  finished(){
    return this.#currentIndex === this.questions.length;
  }
}