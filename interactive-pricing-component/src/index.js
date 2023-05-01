import './style.css';

const priceByPageViews = [
  { views: '10k', pricePerMonth: 8 },
  { views: '50k', pricePerMonth: 12 },
  { views: '100k', pricePerMonth: 16 },
  { views: '500k', pricePerMonth: 24 },
  { views: '1m', pricePerMonth: 36 },
];

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
