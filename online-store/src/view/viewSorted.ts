import ICard from '../model/interface';
import viewChosen from './viewChosen';
import { sortByNameHigh, sortByNameLow, sortByYearHigh, sortByYearLow } from '../components/sortFunctions';

export default function viewSorted(viewFunc: (cardsArr: Array<ICard>) => void): void {
  const select = document.getElementById('select') as HTMLInputElement;
  
  select.addEventListener('click', () => {
    switch (select.value) {
      case ('option1'): {
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

