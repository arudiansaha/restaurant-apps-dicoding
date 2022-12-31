class CardItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      name,
      description,
      pictureId,
      city,
      rating,
    } = this._restaurant;

    this.setAttribute('class', 'card');
    this.innerHTML = `
      <div class="card__cover">
        <img src="${pictureId}" alt="">
        <div class="card__review">
          <p class="card__label">${city}</p>
          <div class="card__rating"></div>
        </div>
      </div>
      <div class="card__description">
        <h3 class="card__name">${name}</h3>
        <p class="card__text">${description}</p>
      </div>
    `;

    const ratingElement = this.querySelector('.card__rating');
    const scoreClass = rating < 2 ? 'bad' : rating < 3.5 ? 'mid' : 'good';
    ratingElement.classList.add(scoreClass);
    const ratingColor = window.getComputedStyle(ratingElement).backgroundColor;
    const gradient = `background: conic-gradient(${ratingColor} (100 / ${rating}), transparent 0 100%)`;
    ratingElement.setAttribute('style', gradient);
    ratingElement.innerHTML = `<span>${rating}</span>`;
  }
}

customElements.define('card-item', CardItem);

