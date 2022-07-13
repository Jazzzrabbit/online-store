import ICard from '../model/interface';

export function sortByNameHigh(cardsArr: Array<ICard>): Array<ICard> {
  console.log('Sorted by name A-Z');
  const arr: Array<ICard> = JSON.parse(JSON.stringify(cardsArr));
  return arr.sort((obj1, obj2) => obj1.name > obj2.name ? 1 : -1);
}

export function sortByNameLow(cardsArr: Array<ICard>): Array<ICard> {
  console.log('Sorted by name Z-A');
  const arr: Array<ICard> = JSON.parse(JSON.stringify(cardsArr));
  return arr.sort((obj1, obj2) => obj1.name < obj2.name ? 1 : -1);
}

export function sortByYearHigh(cardsArr: Array<ICard>): Array<ICard> {
  console.log('Sorted by year high');
  const arr: Array<ICard> = JSON.parse(JSON.stringify(cardsArr));
  return arr.sort((obj1, obj2) => obj2.year - obj1.year);
}

export function sortByYearLow(cardsArr: Array<ICard>): Array<ICard> {
  console.log('Sorted by year low');
  const arr: Array<ICard> = JSON.parse(JSON.stringify(cardsArr));
  return arr.sort((obj1, obj2) => obj1.year - obj2.year);
}