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
          card.classList.remove('hidden');
          card.classList.remove('very-hidden');   
        });
      } else {
        cards.forEach(card => {
          const cardColor = card.querySelector('.color')?.innerHTML.split(': ')[1] as string;
          const cardQuality = card.querySelector('.quality')?.innerHTML.split(': ')[1] as string;
          if (!checked.includes(cardColor) && !checked.includes(cardQuality)) {
            card.classList.add('hidden');  
            setTimeout(() => {
              card.classList.add('very-hidden');  
            }, 400);        
          } else {    
            card.classList.remove('hidden');  
            card.classList.remove('very-hidden');     
          }        
        });
      }   
    });
  }); 
}

