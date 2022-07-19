const menuIcon = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-close');
const header = document.querySelector('header');
const navigationBar = document.querySelector('nav');
const navs = document.querySelectorAll('nav a');

menuIcon.addEventListener('click', () => {
  header.style.height = '100vh';
  header.style.background = 'url("images/Group_98.svg") no-repeat, url("images/Group_50.svg") no-repeat 80% 10%, url("images/Group_50.svg") no-repeat 20% 80%, url("images/Mask_Group.svg") no-repeat 0% 100%';
  header.style.backgroundSize = '35.5%, 15%, 15%, 100%';
  header.style.display = 'flex';
  header.style.flexDirection = 'column';

  menuIcon.style.display = 'none';
  menuClose.style.display = 'inline';
  menuClose.style.float = 'right';
  menuClose.style.transform = 'scale(1.6)';

  navigationBar.style.visibility = 'visible';
  navigationBar.style.flexDirection = 'column';
  navigationBar.style.display = 'flex';
});

menuClose.addEventListener('click', () => {
  header.style.height = '100px';
  header.style.background = 'url("images/image_geometry_1.svg") no-repeat';
  header.style.backgroundSize = '35.5%';

  menuClose.style.display = 'none';
  menuIcon.style.float = 'right';
  menuIcon.style.display = 'inline';

  navigationBar.style.display = 'none';
});

navs.forEach((nav) => {
  nav.addEventListener('click', () => {
    header.style.height = '100px';
    header.style.background = 'url("images/image_geometry_1.svg") no-repeat';
    header.style.backgroundSize = '35.5%';

    menuClose.style.display = 'none';
    menuIcon.style.float = 'right';
    menuIcon.style.display = 'inline';

    navigationBar.style.display = 'none';
  });
});