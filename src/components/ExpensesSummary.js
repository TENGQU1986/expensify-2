import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

// import React from 'react';
// import { connect } from 'react-redux';
// import numeral from 'numeral';
// // import ExpensesTotal from '../selectors/expenses-total';
//
// export class ExpensesSummary extends React.Component {
//   render(props) {
//     return (
//       <div>Viewing {this.props.expenseCount} expenses totalling {this.props.ExpensesTotal}</div>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     expenseCount: state.expenses.length
//   }
// };
//
// export default connect(mapStateToProps)(ExpensesSummary);
