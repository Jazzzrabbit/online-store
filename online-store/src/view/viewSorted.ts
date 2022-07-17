import { sortByNameHigh, sortByNameLow, sortByYearHigh, sortByYearLow } from '../components/sortFunctions';
import cardsOnScreen from '../controller/cardsOnScreen';
import viewCards from './viewCards';


export default function viewSorted(): void {
  const select = document.getElementById('select') as HTMLInputElement;
  
  select.addEventListener('click', () => {
    switch (select.value) {
      case ('option1'): {
        viewCards(sortByNameHigh(cardsOnScreen()));   
        break;
      }
      case ('option2'): {
        viewCards(sortByNameLow(cardsOnScreen()));
        break;
      }
      case ('option3'): {
        viewCards(sortByYearHigh(cardsOnScreen()));
        break;
      }
      case ('option4'): {
        viewCards(sortByYearLow(cardsOnScreen()));
        break;
      }
    }
  }); 
}

