import * as noUiSlider from 'nouislider';

export default function createSlider() {
  const amountSlider: noUiSlider.target = document.getElementById('amountSlider') as HTMLElement;
  const yearSlider: noUiSlider.target = document.getElementById('yearSlider') as HTMLElement;

  noUiSlider.create(amountSlider, {
    start: [1, 8],
    connect: true,
    tooltips: true,
    step: 1,
    range: {
      'min': 1,
      'max': 8,
    },
    format: {
      to: function (value: number): number {
        return value;
      },
      from: function (value: string): number {
        return +value;
      },
    },
  });
  noUiSlider.create(yearSlider, {
    start: [2015, 2022],
    connect: true,
    tooltips: true,
    step: 1,
    range: {
      'min': 2015,
      'max': 2022,
    },
    format: {
      to: function (value: number): number {
        return value;
      },
      from: function (value: string): number {
        return +value;
      },
    },
  });

  function sortSlidedCards(values: (string | number)[]): void {
    const cards: Element[] = [...document.querySelectorAll('.card')];
    const [minValue, maxValue]: (string | number)[] = values;

    const slidedArr: Element[] = cards.filter(card => {
      const cardAmount: string = (card.querySelector('.amount')?.textContent as string).split(': ')[1];
      const cardYear: string = (card.querySelector('.year')?.textContent as string).split(': ')[1];
      return cardAmount >= minValue && cardAmount <= maxValue || cardYear >= minValue && cardYear <= maxValue;
    });

    cards.forEach(card => {
      if (!slidedArr.includes(card)) {
        card.classList.add('transformed');
        setTimeout(() => {
          card.classList.add('hidden');
        }, 400);
      } else {
        card.classList.remove('transformed');
        setTimeout(() => {
          card.classList.remove('hidden');
        }, 400);
      }
    });
  }

  amountSlider.noUiSlider?.on('change', sortSlidedCards);
  yearSlider.noUiSlider?.on('change', sortSlidedCards);
}

