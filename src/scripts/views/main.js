import data from '../../DATA.json';

const menuHandler = () => {
  const navigationElement = document.querySelector('.app-bar__navigation');
  navigationElement.classList.toggle('active');
}

const main = () => {
  const appBarELement = document.querySelector('app-bar');
  const cardElement = document.querySelector('card-list');

  cardElement.restaurants = data.restaurants;
  appBarELement.menuEvent = menuHandler;
};

export default main;

