import ICard from '../model/interface';

export default function viewCards(cardArr: Array<ICard>): void {
  const main = document.getElementById('content') as HTMLElement;
  main.innerHTML = '';

  for (let i = 0; i < cardArr.length; i++) {
    const div: HTMLDivElement = document.createElement('div');
    const img: HTMLPictureElement = document.createElement('img');
    const ul: HTMLUListElement = document.createElement('ul');
    
    div.classList.add('card');
    img.classList.add('card__img');
    ul.classList.add('card__list');

    if (cardArr[i].color === 'red') {
      img.classList.add('red-box');
    }
    if (cardArr[i].color === 'blue') {
      img.classList.add('blue-box');
    }
    if (cardArr[i].color === 'green') {
      img.classList.add('green-box');
    }
    
    main.appendChild(div);
    div.appendChild(img);
    div.appendChild(ul);
    
    for (let k = 0; k < 6; k++) {
      const fields: string[] = ['name', 'amount', 'color', 'quality', 'year', 'price'];
      const li: HTMLLIElement = document.createElement('li');
      li.classList.add('list__item');
      if (fields[k] === 'color') li.classList.add('color');
      if (fields[k] === 'quality') li.classList.add('quality');
      ul.appendChild(li);
      const text: string | number = cardArr[i][fields[k] as keyof ICard];
      li.innerHTML = `${fields[k]}: ${text}`;
    }
  }
}