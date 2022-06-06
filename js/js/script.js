let title = prompt("Как называется ваш проект?");
let screensType = prompt("Какие типы экранов нужно разработать?");
let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?").replace(/[\s.,%]/g, ''));
let rollback = 15;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let firstService = prompt('Какой дополнительный тип услуги нужен?');
let firstServicePrice = parseInt(prompt("Сколько это будет стоить?").replace(/[\s.,%]/g, ''));
let secondService = prompt('Какой дополнительный тип услуги нужен?');
let secondServicePrice = parseInt(prompt("Сколько это будет стоить?").replace(/[\s.,%]/g, ''));


let fullPrice = screenPrice + firstServicePrice + secondServicePrice;


servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);

switch (true) {
    case (fullPrice >= 30000):
        console.log("Даем скидку в 10 %");
        break;
    case (fullPrice >= 15000 && fullPrice < 30000):
        console.log("Даем скидку в 5 %");
        break;
    case (fullPrice > 0 && fullPrice < 15000):
        console.log("Скидка не предусмотрена");
        break;
    case (fullPrice <= 0):
        console.log("Что то пошло не так");
        break;
    default:
        break;
}