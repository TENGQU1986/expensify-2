import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
      <ExpenseListItem />
    </div>
  );
};

export default ExpenseDashboardPage;
