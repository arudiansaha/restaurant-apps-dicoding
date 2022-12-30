class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.setAttribute('class', 'hero');
    this.innerHTML = `
      <img src="./images/heros/hero-image_2.jpg" alt="" class="hero__image">
      <h2 class="hero__title">Velit dolores et ex sed et ut eum commodi. Sint et dignissimos id</h2>
    `;
  }
}

customElements.define('hero-image', HeroImage);

