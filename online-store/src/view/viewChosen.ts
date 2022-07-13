import ICard from '../model/interface';
import viewCards from './viewCards';
import { cards } from '../components/card';

export function viewChosen(cardsArr: Array<ICard>): void {
  let arr: Array<ICard> = JSON.parse(JSON.stringify(cardsArr));
  let prevItems: Array<ICard> = [];
  const checkboxes: NodeListOf<Element> = document.querySelectorAll('.checkbox');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (e) => {
      const id = ((e.target as Element).id);
      const checked = document.getElementById(id) as HTMLInputElement;
      const classQ: boolean = checked.classList.contains('quality');
      const classC: boolean = checked.classList.contains('color');
      localStorage.cardsOnScreen = JSON.stringify(cards);

      if (checked.checked && classQ || checked.checked && classC) {
        arr = JSON.parse(localStorage.cardsOnScreen).filter((item: { quality: string; color: string; }) => 
          item.quality === id || item.color === id);
          
        prevItems = JSON.parse(localStorage.cardsOnScreen).filter((item: { quality: string; color: string; }) => 
          item.quality !== id || item.color !== id);
        localStorage.cardsOnScreen = JSON.stringify(arr);
        viewCards(JSON.parse(localStorage.cardsOnScreen));
      } else {
        // localStorage.clear();
        localStorage.cardsOnScreen = JSON.stringify(prevItems);
        
        viewCards(JSON.parse(localStorage.cardsOnScreen));
      }
    });
  }); 
}