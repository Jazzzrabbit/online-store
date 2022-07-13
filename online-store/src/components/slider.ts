import * as noUiSlider from 'nouislider';

export default function createSlider() {
  const slider: noUiSlider.target = document.getElementById('slider') as HTMLElement;
  const slider2: noUiSlider.target = document.getElementById('slider2') as HTMLElement;

  noUiSlider.create(slider, {
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
  noUiSlider.create(slider2, {
    start: [2000, 2022],
    connect: true,
    tooltips: true,
    step: 1,
    range: {
      'min': 2000,
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
} 