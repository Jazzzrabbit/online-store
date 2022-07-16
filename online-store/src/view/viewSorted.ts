import ICard from '../model/interface';
import { sortByNameHigh, sortByNameLow, sortByYearHigh, sortByYearLow } from '../components/sortFunctions';
import cardsOnScreen from '../controller/cardsOnScreen';


export default function viewSorted(viewFunc: (cardsArr: Array<ICard>) => void): void {
  const select = document.getElementById('select') as HTMLInputElement;
  
  select.addEventListener('click', () => {
    switch (select.value) {
      case ('option1'): {
        viewFunc(sortByNameHigh(cardsOnScreen()));
        break;
      }
      case ('option2'): {
        viewFunc(sortByNameLow(cardsOnScreen()));
        break;
      }
      case ('option3'): {
        viewFunc(sortByYearHigh(cardsOnScreen()));
        break;
      }
      case ('option4'): {
        viewFunc(sortByYearLow(cardsOnScreen()));
        break;
      }
    }
  }); 
}

