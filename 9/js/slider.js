const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 1000,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('slide', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

valueElement.addEventListener('input', function () {
  if (!valueElement.value) {
    sliderElement.noUiSlider.set([0, null]);
  } else {
    sliderElement.noUiSlider.set([this.value, null]);
  }
});
