import './card-item';

class CardList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.setAttribute('class', 'explore');
    this.innerHTML = `
      <h2 class="explore__title">Explore Restaurant</h2>
      <div class="explore__card"></div>
    `;
    this._restaurants.forEach((restaurant) => {
      const itemElement = document.createElement('card-item');
      itemElement.restaurant = restaurant;
      this.querySelector('.explore__card').appendChild(itemElement);
    });
  }
}

customElements.define('card-list', CardList);

