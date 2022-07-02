function activateBurgerMenu(): void {
  const burger = document.querySelector('.burger') as HTMLElement;
  const menu = document.querySelector('.sources') as HTMLElement;
  const span = document.querySelector('span') as HTMLElement;
  
  burger.addEventListener('click', (): void => {
    menu.classList.toggle('sources--active');
    span.classList.toggle('span--active');
  });
}

export default activateBurgerMenu;