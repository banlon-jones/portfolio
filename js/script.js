const hamburgerBtn = document.querySelector('.hamburger-btn');
const header = document.querySelector('#app-header');
const menuItems = document.querySelectorAll('.menu-item');
hamburgerBtn.addEventListener('click', () => {
  header.classList.toggle('container');
  document.querySelector('.close-btn').classList.toggle('close');
  document.querySelector('.logo').style.visibility = 'hidden';
  document.querySelector('.menu').classList.toggle('menu-a');
  menuItems.forEach((item) => item.classList.toggle('menu-item-a'));
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    header.classList.toggle('container');
    document.querySelector('.close-btn').classList.remove('close');
    document.querySelector('.logo').style.visibility = 'visible';
    document.querySelector('.menu').classList.remove('menu-a');
    menuItems.forEach((item) => item.classList.remove('menu-item-a'));
  });
});
