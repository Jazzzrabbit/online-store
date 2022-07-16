import * as noUiSlider from 'nouislider';
import viewCards from '../view/viewCards';
import ICard from '../model/interface';
import cardsOnScreen from '../controller/cardsOnScreen';

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
      to: function (value) {
        return value;
      },
      from: function (value) {
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
      to: function (value) {
        return value;
      },
      from: function (value) {
        return +value;
      },
    },
  });

  amountSlider.noUiSlider?.on('change', values => {
    const cards: ICard[] = cardsOnScreen();
    const slidedArr: Array<ICard> = cards.filter(card => card.amount >= values[0] && card.amount <= values[1]);
    viewCards(slidedArr);
  });

  yearSlider.noUiSlider?.on('change', values => {
    const cards: ICard[] = cardsOnScreen();
    const slidedArr: Array<ICard> = cards.filter(card => card.year >= values[0] && card.year <= values[1]);
    viewCards(slidedArr);
  });
}

