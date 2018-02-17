//Higher order component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthertication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAutheticated ? <WrappedComponent {...props} /> : <p>login to view</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthertication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAutheticated={false} info="There are the details"/>, document.getElementById('app'));
