import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import EventPractice3 from './EventPractice3';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import EventPractice4 from './EventPractice4';
import EventPractice4_1 from './EventPractice4_1';
import EventPractice5 from './EventPractice5';
import EventPractice7 from './EventPractice7';
import IterationSample from './IterationSample';
import EventPractice6 from './EventPractice6';
import FormInput from './FormInput';
import LifeCycleSample from './LifeCycleSample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Counter />
    <Say />
    <EventPractice />
    <EventPractice2 />
    <EventPractice3 />
    <ValidationSample />
    <ScrollBox />
    <EventPractice4 />
    <EventPractice4_1 />
    <EventPractice5 />
    <EventPractice6 />
    <EventPractice7 />
    <IterationSample />
    <FormInput />
    <LifeCycleSample /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
