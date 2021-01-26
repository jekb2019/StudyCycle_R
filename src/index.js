import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';
import TimerService from './service/timerService';
import SoundBox from './service/soundBox';

// Time settings in seconds
const focusTime = localStorage.getItem('focusTimeSettingStored') || 1 * 60 * 60;
const breakTime = localStorage.getItem('breakTimeSettingStored') || 10 * 60;
const goalCycle = localStorage.getItem('goalCycleSettingStored') || 3;
const fastForwardTime = 3 * 60;
const fastBackwardTime = 3 * 60;

// To-be-injected objects from service layer
const timerService = new TimerService(focusTime, breakTime, goalCycle);
const soundBox = new SoundBox();

ReactDOM.render(
  <React.StrictMode>
    <App timerService={timerService} soundBox={soundBox} fastForwardTime={fastForwardTime} fastBackwardTime={fastBackwardTime}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
