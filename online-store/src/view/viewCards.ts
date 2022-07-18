import ICard from '../model/interface';

export default function viewCards(cardArr: Array<ICard>): void {
  const main = document.getElementById('content') as HTMLElement;
  main.innerHTML = '';

  for (let i = 0; i < cardArr.length; i++) {
    const div: HTMLDivElement = document.createElement('div');
    const img: HTMLImageElement = document.createElement('img');
    const ul: HTMLUListElement = document.createElement('ul');
    const button: HTMLDivElement = document.createElement('div');
    const spanLeft: HTMLSpanElement = document.createElement('span');
    const spanRight: HTMLSpanElement = document.createElement('span');
    
    div.classList.add('card', 'visible');
    img.classList.add('card__img');
    ul.classList.add('card__list');
    button.classList.add('card__button');
    spanLeft.classList.add('card__leftButton', 'card__span');
    spanRight.classList.add('card__rightButton', 'card__span');
    
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
    div.appendChild(button);
    button.appendChild(spanLeft);
    button.appendChild(spanRight);

    spanLeft.innerText = '-';
    spanRight.innerText = '+';
    
    const fields: string[] = ['name', 'amount', 'color', 'quality', 'year', 'price'];

    for (let k = 0; k < fields.length; k++) {
      const li: HTMLLIElement = document.createElement('li');
      li.classList.add('list__item');
      if (fields[k] === 'name') li.classList.add('name');
      if (fields[k] === 'amount') li.classList.add('amount');
      if (fields[k] === 'color') li.classList.add('color');
      if (fields[k] === 'quality') li.classList.add('quality');
      if (fields[k] === 'year') li.classList.add('year');
      ul.appendChild(li);
      const text: string | number | boolean = cardArr[i][fields[k] as keyof ICard];
      li.innerText = `${fields[k]}: ${text}`;
    }
  }
}