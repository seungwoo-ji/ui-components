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
  #pageViewEl = document.querySelector('.pricing-card__views');
  #rangeInputEl = document.querySelector("input[type='range']");
  #priceEl = document.querySelector('.pricing-card__price');

  init() {
    this.#rangeInputEl.addEventListener('input', this.#updateProgressBar);
  }

  #updateProgressBar = () => {
    const percentage = (this.#rangeInputEl.value - 1) * 25;
    this.#rangeInputEl.style.setProperty('--progress', percentage);
    this.#updatePageViews();
    this.#updatePrice();
  };

  #updatePageViews = () => {
    this.#pageViewEl.textContent = `${
      priceByPageViews[this.#rangeInputEl.value - 1].views
    } pageviews`;
  };

  #updatePrice = () => {
    this.#priceEl.textContent = `$${priceByPageViews[
      this.#rangeInputEl.value - 1
    ].pricePerMonth.toFixed(2)}`;
  };
}

const app = new App();
app.init();
