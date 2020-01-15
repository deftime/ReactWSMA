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
  savings: false
}

// chooseExp();
// detectDayBudget();
// checkSavings();
optExp();




function start() {
  while (isNaN(money) || money == '' || money == null || money == undefined) {
    money = +prompt('Ваш бюджет на месяц?', '');
  };
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

function chooseExp() {
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
}

function detectDayBudget() {
  appData.budgPerDay = appData.budget / 30;
  alert(`Ваш бюджет на день - ${parseInt(appData.budgPerDay)}`);
}

function checkSavings() {
  if (confirm('У вас появились накопления?')) {
    appData.savings = true;
    let save = +prompt('Сколько?');
    let perc = +prompt('Под какой процент?');

    appData.monthIncome = save/100/12*perc;
    alert(`Доход с депозита - ${appData.monthIncome}`);
  }
}

function optExp() {
  let i = 1;
  do {
    appData.optionalExpenses[i] = prompt('Стаття НЕобязательных расходов?', '');
    i++;
  } while (confirm('Еще?'));
}
