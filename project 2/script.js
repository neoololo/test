'use strict';

let money, time;

function start() {
    do {
        money = prompt('Ваш бюджет на месяц?', '');
    } while (money === null || !money.trim() || isNaN(money));
    money = +money;

    do {
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    } while(time === null || !time.trim());
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let expenditure, money;
            console.log(i);
            do {
                expenditure = prompt('Введите обязательную статью расходов в этом месяце?', '');
            } while (!expenditure);
        
            do {
                money = prompt('Во сколько обойдется?', '');
            } while (!money);
           appData.expenses[expenditure] = money;
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий достаток');
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 1000) {
            console.log('Средний достаток');
        } else if (appData.moneyPerDay > 1000) {
            console.log('Высокий достаток');
        } else {
            console.log('Ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = prompt('Какова сумма накоплений?', ''), 
                percent = prompt('Под какой процент?', '');
    
            appData.monthIncome = save/100/12*percent;
            console.log('Доход в месяц ' + appData.monthIncome);
        } 
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let optExp = prompt('Статья необязательных расходов?', '');
            appData[i] = optExp;
        }
    },
    chooseIncome: function() {
        let incomes = prompt('Перечислите источники дохода (через запятую)', '');
        appData.income = incomes.split(', ');
        appData.income.sort();
        
        appData.income.forEach(function(element, index) {
            console.log(index + 1 + ': ' + element);
        });
    }

};

for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}





