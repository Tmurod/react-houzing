import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root/root';
import RootContext from './context';
import "./root.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import 'antd/dist/antd.css';
// import 'ant-design-vue/dist/antd.css';
// import 'antd/dist/reset.css';

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