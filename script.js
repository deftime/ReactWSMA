let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

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

// let pointEx = prompt('Стаття расходов?', '');
appData.expenses[prompt('Стаття расходов?', '')] = prompt('Во сколько обойдется?', '');

alert(`Ваш бюджет на день - ${parseInt(money / 30)}`);
