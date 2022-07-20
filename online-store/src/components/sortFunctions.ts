export function sortByNameHigh(): void {
  const cards: Element[] = [...document.querySelectorAll('.card')];
  const content = document.getElementById('content') as HTMLElement;

  const sorted: Element[] = cards.sort((card1, card2) => {
    return (card1.querySelector('.name')?.textContent as string) >
      (card2.querySelector('.name')?.textContent as string) ? 1 : -1;
  });

  content.innerHTML = '';
  content.append(...sorted);
}

export function sortByNameLow(): void {
  const cards: Element[] = [...document.querySelectorAll('.card')];
  const content = document.getElementById('content') as HTMLElement;

  const sorted: Element[] = cards.sort((card1, card2) => {
    return (card1.querySelector('.name')?.textContent as string) <
      (card2.querySelector('.name')?.textContent as string) ? 1 : -1;
  });

  content.innerHTML = '';
  content.append(...sorted);
}

export function sortByYearHigh(): void {
  const cards: Element[] = [...document.querySelectorAll('.card')];
  const content = document.getElementById('content') as HTMLElement;

  const sorted: Element[] = cards.sort((card1, card2) => {
    return +(card2.querySelector('.year')?.textContent as string).split(': ')[1] -
      +(card1.querySelector('.year')?.textContent as string).split(': ')[1];
  });

  content.innerHTML = '';
  content.append(...sorted);
}

export function sortByYearLow(): void {
  const cards: Element[] = [...document.querySelectorAll('.card')];
  const content = document.getElementById('content') as HTMLElement;

  const sorted: Element[] = cards.sort((card1, card2) => {
    return +(card1.querySelector('.year')?.textContent as string).split(': ')[1] -
      +(card2.querySelector('.year')?.textContent as string).split(': ')[1];
  });

  content.innerHTML = '';
  content.append(...sorted);
}