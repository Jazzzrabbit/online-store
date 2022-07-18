import { sortByNameHigh, sortByNameLow, sortByYearHigh, sortByYearLow } from '../components/sortFunctions';

export default function viewSorted(): void {
  const select = document.getElementById('select') as HTMLInputElement;

  select.addEventListener('click', () => {
    switch (select.value) {
      case ('option1'): {
        sortByNameHigh(); 
        break;
      }
      case ('option2'): {
        sortByNameLow();
        break;
      }
      case ('option3'): {
        sortByYearHigh();
        break;
      }
      case ('option4'): {
        sortByYearLow();
        break;
      }
    }
  });
}

