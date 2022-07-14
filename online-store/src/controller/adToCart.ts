import { cards } from '../model/card';

export default function adToCart(): void {
  const spanBtns: NodeListOf<Element> = document.querySelectorAll('.card__span');
  const cartSpan = document.querySelector('.header__shopcart') as Element;
  const shopCart = cartSpan.firstElementChild as Element;

  spanBtns.forEach(btn => {
    btn.addEventListener('click', e => {     
      const list: NodeListOf<Element> | undefined = (e.target as Element)
        .parentNode?.parentNode?.querySelectorAll('.list__item'); 
      const rightBtn = (e.target as Element).classList.contains('card__rightButton'); 
      let counter = 1;
      let initialAmount = 0;
      
      if (list) {
        list.forEach(item => {
          const itemText: (string | number)[] = item.innerHTML.split(': ');
          let name: string | number = '';
          if (itemText[0] === 'name') {
            name = itemText[1];
            cards.map(card => card.name === name ? initialAmount = card.amount : null);
          }
          
          if (rightBtn) {
            if (itemText[0] === 'amount' && itemText[1] > 0 && Number(shopCart.innerHTML) < 20) {
              counter = Number(itemText[1]) - counter;
              item.innerHTML = itemText[0] + ': ' + counter;
              shopCart.innerHTML = String(Number(shopCart.innerHTML) + 1);
              ((e.target as Element).parentElement?.parentNode as HTMLElement).classList.add('added');
            } 
            if (itemText[0] === 'amount' && itemText[1] > 0 && Number(shopCart.innerHTML) === 20) {
              alert('Your cart is full now. No more slots, sorry.');
            }
          } else {
            if (itemText[0] === 'amount' && initialAmount > itemText[1]) {
              counter += Number(itemText[1]);
              item.innerHTML = itemText[0] + ': ' + counter;
              shopCart.innerHTML = String(Number(shopCart.innerHTML) - 1);

              if (Number(itemText[1]) === initialAmount - 1) {
                ((e.target as Element).parentElement?.parentNode as HTMLElement).classList.remove('added');
              }
            }
          }
        });
      }
    });
  });
}