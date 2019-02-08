'use strict';

let money, time, expenses = {};

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

for (let i = 0; i < 2; i++) {
    let expenditure, money;
    console.log(i);
    do {
        expenditure = prompt('Введите обязательную статью расходов в этом месяце?', '');
    } while (!expenditure);

    do {
        money = prompt('Во сколько обойдется?', '');
    } while (!money);

   expenses[expenditure] = money;
}


let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: chooseOptExpenses(),
    income: {},
    savings: false
};

function detectDayBudget(budget) {
    return budget / 30;
}

function detectLevel(moneyPerDay) {
    if (appData.moneyPerDay < 100) {
        return 'Низкий достаток';
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 1000) {
        return'Средний достаток';
    } else if (appData.moneyPerDay > 1000) {
        return 'Высокий достаток';
    } else {
        return 'Ошибка';
    }
}

function chooseOptExpenses() {
    let optionalExpenses = {};
    for (let i = 1; i < 4; i++) {
        let optExp = prompt('Статья необязательных расходов?', '');
        optionalExpenses[i] = optExp;
    }

    return optionalExpenses;
}

appData.moneyPerDay = detectDayBudget(appData.budget);


alert('Ваш ежедневный бюджет = ' + appData.moneyPerDay);
console.log(detectLevel(appData.moneyPerDay));




