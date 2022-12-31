class AppBar extends HTMLElement {
  set menuEvent(event) {
    this._menuEvent = event;
    this.render();
  }

  render() {
    this.setAttribute('class', 'app-bar');
    this.innerHTML = `
      <h1 class="app-bar__title">Hunger Apps</h1>
      <button aria-label="Navigation Button" class="app-bar__menu">
        <svg width=32 height=32 fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <nav class="app-bar__navigation">
        <ul class="app-bar__list">
          <li class="app-bar__item"><a href="/">Home</a></li>
          <li class="app-bar__item"><a href="#">Favorite</a></li>
          <li class="app-bar__item"><a href="/">About Us</a></li>
        </ul>
      </nav>
    `;

    this.querySelector('.app-bar__menu').addEventListener('click', this._menuEvent);
  }
}

customElements.define('app-bar', AppBar);

