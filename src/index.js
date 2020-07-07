import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DATA = [
  {id:"list-1" , name: "Tono", address: "Jalan Kuburan 1", phone: "00000000"},
  {id:"list-2", name: "Toni", address: "Jalan Kuburan 2", phone: "00000001"},
  {id:"list-3", name: "Tino", address: "Jalan Kuburan 3", phone: "00000002"},
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

