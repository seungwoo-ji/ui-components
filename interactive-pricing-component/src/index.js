import './style.css';

class App {
  // HTML elements
  rangeInputEl = document.querySelector("input[type='range']");

  init() {
    this.rangeInputEl.addEventListener('input', this.#updateProgressBar);
  }

  #updateProgressBar(event) {
    const percentage = (event.target.value - 1) * 25;
    event.target.style.setProperty('--progress', percentage);
  }
}

const app = new App();
app.init();
