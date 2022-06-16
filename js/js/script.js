'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  rollback: 15,
  adaptive: true,
  fullPrice: 0,
  service1: '',
  service2: '',
  servicePercentPrice: 0,
  isNumber: function (num) {
    num = appData.isNullTrim(num);
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isNullTrim: function (arg) {
    if (arg !== null) {
      return arg.trim();
    } else {
      return arg;
    }
  },
  asking: function () {
    do {
      appData.title = prompt('Как называется ваш проект?');
      appData.title = appData.isNullTrim(appData.title);
    } while (appData.title === "" || appData.title === null);

    do {
      appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
      appData.screens = appData.isNullTrim(appData.screens);
    } while (appData.screens === "" || appData.screens === null);

    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?', '12000');
    } while (!appData.isNumber(appData.screenPrice));

    appData.screenPrice = +appData.screenPrice;
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  getAllServicePrices: function () {
    let sum = 0;
    let servicePrice = 0;
    for (let i = 1; i <= 2; i++) {
      if (i === 1) {
        do {
          appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
          appData.service1 = appData.isNullTrim(appData.service1);
        } while (appData.service1 === "" || appData.service1 === null);
      } else if (i === 2) {
        do {
          appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
          appData.service2 = appData.isNullTrim(appData.service2);
        } while (appData.service2 === "" || appData.service2 === null);
      }
      do {
        servicePrice = prompt('Сколько это будет стоить?', (i * 1000));
      } while (!appData.isNumber(servicePrice));
      sum += +servicePrice;
    }
    return sum;
  },
  getFullPrice: function (someScreenPrice, allServPrice) {
    return someScreenPrice + allServPrice;
  },
  getTitle: function (correctTitle) {
    return correctTitle[
      0
    ].toUpperCase() + correctTitle.toLowerCase().slice(1);
  },
  getServicePercentPrices: function (someFullPrice, someRollBack) {
    return "Стоимость за вычетом процента отката посреднику: " + Math.ceil(someFullPrice - (someFullPrice * (someRollBack / 100)).toFixed(2));
  },
  showTypeOf: function (param) {
    return param + " " + typeof param;
  },
  getRollbackMessage: function (price) {
    if (price > 30000) {
      return 'Даем скидку в 10%';
    } else if (price > 15000 && price <= 30000) {
      return 'Даем скидку в 5%';
    } else if (price >= 0 && price <= 15000) {
      return 'Скидка не предусмотрена';
    } else if (price < 0) {
      return 'Что то пошло не так';
    }
  },
  start: function () {
    appData.asking();
    appData.title = appData.getTitle(appData.title);
    appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.getAllServicePrices());
    appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.logger();
  },
  logger: function () {
    for (let item in appData) {
      console.log(item, appData[item]);
    }
  },
};

appData.start();
