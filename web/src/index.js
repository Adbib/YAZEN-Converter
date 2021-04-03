import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import All from './Pages/All'
import { BrowserRouter } from "react-router-dom";
import ContextConfig from './Pages/Context/ContextConfig';
ReactDOM.render(
    <BrowserRouter>
    <ContextConfig>
        <All/>
    </ContextConfig>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
