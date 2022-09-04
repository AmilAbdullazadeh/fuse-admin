// Internet Explorer 11 requires polyfills and partially supported by this project.
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-muli';
import './i18n';
import './react-chartjs-2-defaults';
import './styles/index.css';
import App from 'app/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
