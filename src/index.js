import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root/root';
import RootContext from './context';

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