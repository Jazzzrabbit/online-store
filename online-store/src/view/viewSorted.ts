import ICard from '../model/interface';
import viewChosen from './viewChosen';
import { sortByNameHigh, sortByNameLow, sortByYearHigh, sortByYearLow } from '../components/sortFunctions';

export default function viewSorted(viewFunc: (cardsArr: Array<ICard>) => void): void {
  const select = document.getElementById('select') as HTMLInputElement;
  // const cards: NodeListOf<Element> = document.querySelectorAll('.card');
  // let arr: Array<ICard> = [];
  
  select.addEventListener('click', () => {
    switch (select.value) {
      case ('option1'): {
        // console.log(localStorage.cardsOnScreen);
        const list = document.querySelector('.card__list') as Element;
        console.log([...list.children]);
        console.log([...list.children].sort((a, b) => a.innerHTML < b.innerHTML ? 1 : -1));
        viewFunc(sortByNameHigh(JSON.parse(localStorage.cardsOnScreen)));
        viewChosen();
        break;
      }
      case ('option2'): {
        viewFunc(sortByNameLow(JSON.parse(localStorage.cardsOnScreen)));
        viewChosen();
        break;
      }
      case ('option3'): {
        viewFunc(sortByYearHigh(JSON.parse(localStorage.cardsOnScreen)));
        viewChosen();
        break;
      }
      case ('option4'): {
        viewFunc(sortByYearLow(JSON.parse(localStorage.cardsOnScreen)));
        viewChosen();
        break;
      }
    }
  }); 
}

