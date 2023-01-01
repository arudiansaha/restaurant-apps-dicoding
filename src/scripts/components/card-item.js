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
      <a href="#">
        <div class="card__cover">
          <img src="${pictureId}" alt="" loading="lazy">
          <div class="card__review">
            <p class="card__label">${city}</p>
            <div aria-label="Restaurant rating ${rating}" class="card__rating"></div>
          </div>
        </div>
        <div class="card__description">
          <h3 class="card__name">${name}</h3>
          <p class="card__text">${description}</p>
        </div>
      </a>
    `;

    const ratingElement = this.querySelector('.card__rating');
    const percentage = (rating / 5.0) * 100;

    const ratingClass = (rating < 2)
      ? 'bad' 
      : (rating < 3.5) 
        ? 'mid' 
        : 'good';

    /* window.getComputedStyle didn't work, and this alt way for now :) */
    const color = (ratingClass === 'bad')
      ? '#e74c3c'
      : (ratingClass === 'mid')
        ? '#f1c40f' 
        : '#27ae60'; 

    ratingElement.classList.add(ratingClass);
    ratingElement.setAttribute('style', `background: conic-gradient(${color} ${percentage}%, #ad9f92 0 100%)`);
    ratingElement.innerHTML = `<p>${rating}</p>`;
  }
}

customElements.define('card-item', CardItem);

