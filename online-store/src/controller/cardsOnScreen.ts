import ICard from '../model/interface';

export default function cardsOnScreen(): ICard[] {
  const visibleCards: NodeListOf<Element> = document.querySelectorAll('.visible');
  const arr: string[] = [];
  const output: ICard[] = [];

  visibleCards.forEach(card => {
    const list = card.querySelectorAll('.list__item');

    list.forEach(item => {
      arr.push(item.innerHTML);
    });
  });

  const tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('name') && i !== 0) {
      tempArr.push('}');
      tempArr.push('{');
    }
    if (arr[i - 1]?.includes('popular')) {
      tempArr.push('}');

    }
    tempArr.push(arr[i]);
  }

  tempArr.unshift('{');
  tempArr.push('}');
  let str = JSON.stringify(tempArr);

  str = str.replace(/"/g, '');
  str = str.replace(/,name/g, '"name"');
  str = str.replace(/amount/g, '"amount"');
  str = str.replace(/color/g, '"color"');
  str = str.replace(/quality/g, '"quality"');
  str = str.replace(/year/g, '"year"');
  str = str.replace(/price/g, '"price"');
  str = str.replace(/blue/g, '"blue"');
  str = str.replace(/red/g, '"red"');
  str = str.replace(/green/g, '"green"');
  str = str.replace(/Useful/g, '"Useful"');
  str = str.replace(/Perfect/g, '"Perfect"');
  str = str.replace(/Shiny/g, '"Shiny"');
  str = str.replace(/Pretty/g, '"Pretty"');
  str = str.replace(/Beautiful/g, '"Beautiful"');
  str = str.replace(/Awesome/g, '"Awesome"');
  str = str.replace(/Lovely/g, '"Lovely"');
  str = str.replace(/Flawless/g, '"Flawless"');
  str = str.replace(/Good/g, '"Good"');
  str = str.replace(/Nice/g, '"Nice"');
  str = str.replace(/low/g, '"low"');
  str = str.replace(/high/g, '"high"');
  str = str.replace(/medium/g, '"medium"');
  str = str.replace(/ /g, '');
  str = str.replace(/},/g, '}, ');
  str = str.replace(/\[|]/g, '');
  str = str.replace(/},/g, '}');
  str = str.replace(/,}/g, '}');

  const newArr: string[] = str.split(' ');

  for (let i = 0; i < newArr.length; i++) {
    output.push(JSON.parse(newArr[i]));
  }
  return output;
}