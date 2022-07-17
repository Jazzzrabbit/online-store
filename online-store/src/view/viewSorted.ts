import ICard from '../model/interface';
import { sortByNameHigh, sortByNameLow, sortByYearHigh, sortByYearLow } from '../components/sortFunctions';
import cardsOnScreen from '../controller/cardsOnScreen';
import viewCards from './viewCards';

export default function viewSorted(): void {
  const select = document.getElementById('select') as HTMLInputElement;
  
  select.addEventListener('click', () => {
    const visibleCards: ICard[] = cardsOnScreen();
    const sortedByNameHighCards: ICard[] = sortByNameHigh(visibleCards);
    const sortedByNameLowCards: ICard[] = sortByNameLow(visibleCards);
    const sortedByYearHighCards: ICard[] = sortByYearHigh(visibleCards);
    const sortedByYearLowCards: ICard[] = sortByYearLow(visibleCards);

    switch (select.value) {
      case ('option1'): {
        viewCards(sortedByNameHighCards);
        break;
      }
      case ('option2'): {
        viewCards(sortedByNameLowCards);
        break;
      }
      case ('option3'): {
        viewCards(sortedByYearHighCards);
        break;
      }
      case ('option4'): {
        viewCards(sortedByYearLowCards);
        break;
      }
    }
  }); 
}

