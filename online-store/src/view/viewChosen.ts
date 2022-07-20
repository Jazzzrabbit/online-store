function toggleCardsClass(card: Element): void {
  card.classList.remove('transformed');
  card.classList.add('visible');  
  card.classList.remove('hidden'); 
}

export default function viewChosen(): void {
  const checkboxes: NodeListOf<Element> = document.querySelectorAll('.checkbox');
  const cards: NodeListOf<Element> = document.querySelectorAll('.card');
  let checked: string[] = [];
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (e) => {
      const id: string = ((e.target as Element).id);
      if (e.target) {
        if (!checked.includes(id)) {
          checked.push(id);
        } else {
          checked = checked.filter(item => item !== id);
        }
      }
      
      if (checked.length === 0) {
        cards.forEach(card => {
          toggleCardsClass(card);
        });
      } else {
        cards.forEach(card => {
          const cardColor: string = (card.querySelector('.color')?.textContent as string).split(': ')[1];
          const cardQuality: string = (card.querySelector('.quality')?.textContent as string).split(': ')[1];
          if (!checked.includes(cardColor) && !checked.includes(cardQuality)) {
            card.classList.add('transformed');  
            card.classList.remove('visible'); 
            setTimeout(() => {
              card.classList.add('hidden');  
            }, 400);        
          } else {    
            toggleCardsClass(card);
          }        
        });
      }  
    });
  }); 
}

