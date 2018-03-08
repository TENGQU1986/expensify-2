import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987} />);
  expect(wrapper).toMatchSnapshot();
});

// import React from 'react';
// import { ExpensesSummary } from '../../components/ExpensesSummary';
// import { shallow } from 'enzyme';
//
// test('should render ExpensesSummary correctly with 1 expenses', () => {
//   const wrapper = shallow(<ExpensesSummary expenseCount={1} ExpensesTotal={235} />);
//   expect(wrapper).toMatchSnapshot();
// });
//
// test('should render ExpensesSummary correctly with multiple expenses', () => {
//   const wrapper = shallow(<ExpensesSummary expensesCount={23} ExpensesTotal={2342349892834798}/>);
//   expect(wrapper).toMatchSnapshot();
// });
