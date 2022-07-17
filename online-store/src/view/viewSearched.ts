export default function viewSearched(): void {
  const search = document.querySelector('.header__search') as HTMLInputElement;
  const cards: NodeListOf<Element> = document.querySelectorAll('.card');
  
  search.addEventListener('input', e => {
    const inputValue: string = (e.target as HTMLInputElement).value.toLocaleLowerCase();
    
    cards.forEach(card => {
      if (!(card.querySelector('.list__item')?.textContent as string)
        .split(': ')[1].toLocaleLowerCase().includes(inputValue)) {
        card.classList.add('transformed');
        setTimeout(() => {
          card.classList.add('hidden');
        }, 400);
      } else {
        card.classList.remove('transformed');
        setTimeout(() => {
          card.classList.remove('hidden');
        }, 400);
      }
    });
  });
}