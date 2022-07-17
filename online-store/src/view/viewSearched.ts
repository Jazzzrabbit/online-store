export default function viewSearched(): void {
  const search = document.querySelector('.header__search') as HTMLInputElement;
  const cards: NodeListOf<Element> = document.querySelectorAll('.card');
  const empty = document.querySelector('.empty-page') as Element;

  search.addEventListener('input', e => {
    const inputValue: string = (e.target as HTMLInputElement).value.toLocaleLowerCase();
  
    cards.forEach(card => {
      if (!(card.querySelector('.list__item')?.textContent as string)
        .split(': ')[1].toLocaleLowerCase().includes(inputValue)) {
        card.classList.add('transformed');
        card.classList.remove('visible');
        setTimeout(() => {
          card.classList.add('hidden');
        }, 400);
      } else {
        card.classList.remove('transformed');
        card.classList.add('visible');
        setTimeout(() => {
          card.classList.remove('hidden');
        }, 400);
      }
    });

    const visibleCards: NodeListOf<Element> = document.querySelectorAll('.visible');

    if (visibleCards.length === 0) {
      setTimeout(() => {
        empty.classList.remove('hidden');
      }, 400);
    } else empty.classList.add('hidden');
  });
}