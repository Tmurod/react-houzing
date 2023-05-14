import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root/root';
import RootContext from './context';
import "./root.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <React.StrictMode> */}
    <RootContext>
      <Root />
    </RootContext>
    {/* </React.StrictMode> */}
  </div>
);