import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title" >Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__actions" >
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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
