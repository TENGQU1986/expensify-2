export default (expenses) => {
  return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
};

// import expenses from '../fixtures/expenses';
//
// export default (expenses) => {
//   return expenses.map((expense) => expense.amount).reduce((sum, value) => {
//     return sum + value;
//   }, 0)
// };
