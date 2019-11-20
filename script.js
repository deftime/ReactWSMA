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


appData.budgPerDay = appData.budget / 30;
alert(`Ваш бюджет на день - ${parseInt(budgPerDay)}`);
