//Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}

getRandomIntInclusive(1, 10);


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomFloat(min, max, digits) {
  if ((min >= 0) && (min <= max)) {
    return +(Math.random() * (max - min + 1) + min).toFixed(digits);
  }
  return false;
}

getRandomFloat(1, 3, 2);
