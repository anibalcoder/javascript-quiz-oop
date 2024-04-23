export class UI {
  /**
   * 
   * @param {string} title Texto de la pregunta.
   */
  showQuestion(title){
    const questionTitle = document.getElementById('question');
    questionTitle.innerText = title;
  }

  /**
   * 
   * @param {string[]} choices Opciones de la pregunta.
   * @param {function} callback Función que se ejecuta cuando se hace clic en una opción.
   */
  showChoices(choices, callback){
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    // Por cada iteración se pinta la pregunta y sus respectivas opciones.
    for(let i=0; i<choices.length; i++){
      const li = document.createElement('li');
      choicesContainer.appendChild(li);

      const button = document.createElement('button');
      button.classList.add('button');
      button.innerText = choices[i];
      li.appendChild(button);
    }

    // Elimina cualquier manejador de eventos anterior.
    choicesContainer.removeEventListener('click', this.handleClick);

    // Propiedad que contiene una función que define la lógica del evento.
    this.handleClick = function(e){
      if(e.target.classList.contains('button')){
        callback(e.target.innerText);
      }
    }

    // Agrega el nuevo manejador de eventos.
    choicesContainer.addEventListener('click', this.handleClick);
  }

  /**
   * 
   * @param {number} current Índice actual de la pregunta.
   * @param {number} total Total de preguntas.
   */
  showProgress(current, total){
    const progress = document.getElementById('progress');
    progress.innerText = `Question ${current} of ${total}`;
  }

  /**
   * 
   * @param {number} score Número de aciertos.
   */
  showScore(score){
    const quiz = document.getElementById('quiz');
    
    const quizEndHTML = `
    <h1 class="title">Result</h1>
    <h2>Your Score: ${score}</h2>
    `;

    quiz.innerHTML = quizEndHTML;
  }
}