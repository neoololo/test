'use strict';

let money, time, expenses = {};

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

// for (let i = 0; i < 2; i++) {
//    let expenditure = prompt('Введите обязательную статью расходов в этом месяце?', '');
//    let money = prompt('Во сколько обойдется?', '');
//    expenses[expenditure] = money;
// }

let i = 0;
// while(i < 2) {
//     let expenditure = prompt('Введите обязательную статью расходов в этом месяце?', '');
//     let money = prompt('Во сколько обойдется? ' + expenditure, '');
//     expenses[expenditure] = money;
//     i++;
// }

do {
    let expenditure = prompt('Введите обязательную статью расходов в этом месяце?', '');
    let money = prompt('Во сколько обойдется? ' + expenditure, '');
    expenses[expenditure] = money;
    i++;
} while (i < 2)

let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: {},
    income: {},
    savings: false
};

console.log(appData);
alert(appData.budget / 30);