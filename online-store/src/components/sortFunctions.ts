export function sortByNameHigh(): void {
  const cards: Element[] = [...document.querySelectorAll('.card')];
  const content = document.getElementById('content') as HTMLElement;

  const sorted = cards.sort((card1, card2) => {
    return (card1.querySelector('.name')?.innerHTML as string) >
      (card2.querySelector('.name')?.innerHTML as string) ? 1 : -1;
  });

  content.innerHTML = '';

  for (const card of sorted) {
    content.appendChild(card);
  }
}

export function sortByNameLow(): void {
  const cards: Element[] = [...document.querySelectorAll('.card')];
  const content = document.getElementById('content') as HTMLElement;

  const sorted = cards.sort((card1, card2) => {
    return (card1.querySelector('.name')?.innerHTML as string) <
      (card2.querySelector('.name')?.innerHTML as string) ? 1 : -1;
  });

  content.innerHTML = '';

  for (const card of sorted) {
    content.appendChild(card);
  }
}

export function sortByYearHigh(): void {
  const cards: Element[] = [...document.querySelectorAll('.card')];
  const content = document.getElementById('content') as HTMLElement;

  const sorted = cards.sort((card1, card2) => {
    return +(card2.querySelector('.year')?.innerHTML as string).split(': ')[1] -
      +(card1.querySelector('.year')?.innerHTML as string).split(': ')[1];
  });

  content.innerHTML = '';

  for (const card of sorted) {
    content.appendChild(card);
  }
}

export function sortByYearLow(): void {
  const cards: Element[] = [...document.querySelectorAll('.card')];
  const content = document.getElementById('content') as HTMLElement;

  const sorted = cards.sort((card1, card2) => {
    return +(card1.querySelector('.year')?.innerHTML as string).split(': ')[1] -
      +(card2.querySelector('.year')?.innerHTML as string).split(': ')[1];
  });

  content.innerHTML = '';

  for (const card of sorted) {
    content.appendChild(card);
  }
}