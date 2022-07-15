export default function viewSearched(): void {
  const search = document.querySelector('.header__search') as HTMLInputElement;
  const cards = document.querySelectorAll('.card');
  
  search.addEventListener('input', e => {
    const inputValue = (e.target as HTMLInputElement).value.toLocaleLowerCase();
    
    cards.forEach(card => {
      if (!card.querySelector('.list__item')?.innerHTML.split(': ')[1].toLocaleLowerCase().includes(inputValue)) {
        card.classList.add('hidden');
        setTimeout(() => {
          card.classList.add('very-hidden');
        }, 400);
      } else {
        card.classList.remove('hidden');
        card.classList.remove('very-hidden');
      }
    });
  });
}