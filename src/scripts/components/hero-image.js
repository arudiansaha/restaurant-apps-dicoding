class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.setAttribute('class', 'hero');
    this.innerHTML = `
      <img src="./images/heros/hero-image_2.jpg" alt="" class="hero__image" loading="lazy">
    `;
  }
}

customElements.define('hero-image', HeroImage);

