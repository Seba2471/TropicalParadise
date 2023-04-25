const navWrapper = document.querySelector('.nav__wrapper');
const navBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
  navWrapper.classList.toggle('nav--active');

  const hideNav = () => {
    navWrapper.classList.remove('nav--active');
  };

  navItems.forEach((x) => x.addEventListener('click', hideNav));

  handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
  let delayTime = 0;
  navItems.forEach((x) => {
    x.classList.toggle('nav-items-animation');
    x.style.animationDelay = '.' + delayTime + 's';
    delayTime++;
  });
};

navBtn.addEventListener('click', handleNav);
