export class Question{
  #answer;
  /**
   * 
   * @param {string} text texto de la pregunta.
   * @param {string[]} choices Opciones de la pregunta
   * @private
   * @param {string} answer Respuesta de la pregunta
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.#answer = answer;
  }

  get answer() {
    return this.#answer;
  }

  /**
   * 
   * @param {string} answer Texto para adivinar la respuesta.
   * @returns {boolean} devuelve verdadero es la respuesta es correcta.
   */
  correctAnswer(answer){
    return this.#answer === answer;
  }
}