let money;
let time;

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {

  },
  optionalExpenses: {

  },
  income: [],
  savings: false,
  chooseExp: function() {
    for (let i = 0; i < 2; i++) {
      let ex = prompt('Стаття расходов?', '');
      let how = prompt('Во сколько обойдется?', '');
      if (ex != '' && how != '' && ex != null && how != null && ex.length < 10 ) {
        appData.expenses[ex] = how;
      } else {
        alert('Data is invalid!');
        i--;
        continue;
      }
    }
  },
  detectDayBudget: function() {
    appData.budgPerDay = appData.budget / 30;
    alert(`Ваш бюджет на день - ${parseInt(appData.budgPerDay)}`);
  },
  checkSavings: function() {
    if (confirm('У вас появились накопления?')) {
      appData.savings = true;
      let save = +prompt('Сколько?');
      let perc = +prompt('Под какой процент?');

      appData.monthIncome = save/100/12*perc;
      alert(`Доход с депозита - ${appData.monthIncome}`);
    }
  },
  optExp: function() {
    let i = 1;
    do {
      appData.optionalExpenses[i] = prompt('Стаття НЕобязательных расходов?', '');
      i++;
    } while (confirm('Еще?'));
  },
  chooseIncome: function() {
    let inc;
    while (inc == undefined || inc == '' || inc == null) {
      inc = prompt('What make add income? (use comma for separate)', '');
    }
    appData.income = inc.split(', ');
    do {
      appData.income.push(prompt('May be more?', ''));
    } while (confirm('Anyone else?'));
    appData.income.sort();
    console.log(`Variations of income:`);
    appData.income.forEach(function(item, i, mass) {
      console.log(`${i}:${item}`);
    })
  },
  all: function() {
    console.log('Our program contain below data:')
    for (let key in appData) {
      console.log(`${key} - ${appData[key]}`);
    }
  }
}

function start() {
  while (isNaN(money) || money == '' || money == null || money == undefined) {
    money = +prompt('Ваш бюджет на месяц?', '');
  };
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
