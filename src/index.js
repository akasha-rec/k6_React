import React from 'react'; //import ~ : 모듈형 프로그램
import ReactDOM from 'react-dom/client';
// css도 module처럼 import
import './index.css';
// App.js > module이자 component. 사용할 때는 tag처럼 = 사용자 정의 태그
import App from './App'; //./App.js를 불러올 것이다.
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root에다가 App을 갖다 끼운다. component = function > return 되는 게 박힌다. > html tag
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
