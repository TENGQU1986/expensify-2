import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Edit the item whose id is {props.match.params.id};
    </div>
  );
};

export default EditExpensePage;
