'use strict';

function startQuest(countTry) {

  const getRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randNum = getRandomNum(1, 100);

  const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  const checkQuest = function (questContinue) {
    if (confirm(`${questContinue}отите сыграть еще?`)) {
      return startQuest(10);
    } else {
      return alert('Игра окончена');
    }
  };

  const testTry = function (moreLess) {
    countTry--;
    if (countTry === 0) {
      return checkQuest('К сожалению попытки закончились, х');
    }
    if (countTry > 0) {
      alert(`Загаданное число ${moreLess}, осталось ${countTry} попыток`);
      return testQuest();
    }
  };

  const testQuest = function () {
    console.log(randNum);
    const someNum = prompt('Угадай число от 1 до 100');
    if (someNum === null) {
      console.log(someNum);
      return alert('Игра окончена. Для повтора игры перезагрузите страницу');
    }
    if (!isNumber(someNum)) {
      alert('Введи число!');
      return testQuest();
    }
    if (someNum.trim() !== someNum) {
      alert('Введи число без пробелов!');
      return testQuest();
    }
    if (!(+someNum >= 1 && +someNum <= 100)) {
      alert('Введи число от 1 до 100!');
      return testQuest();
    }
    if (+someNum > randNum) {
      return testTry('меньше');
    }
    if (+someNum < randNum) {
      return testTry('больше');
    }
    if (+someNum === randNum) {
      console.log('Поздравляю, Вы угадали!');
      return checkQuest('Поздравляю, Вы угадали! Х');
    }
  };
  testQuest();
}

startQuest(10);

