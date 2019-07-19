import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppStoreScreen from './AppStore';
import CalendarScreen from './Calendar';
import InputScreen from './Input';
import GraphScreen from './Graph';

import * as serviceWorker from './serviceWorker';

import AppStore from './resources/App Store.png'
import Calendar from './resources/Calendar Official.png'
import Clock from './resources/Clock.png'
import Settings from './resources/Settings.png'

const IconButton = ({img, name}) => {
    // consolenpm s.log(children);
  return (
    <article className="icon">
      <img src={img} alt="icon" onClick={goAppStoreScreen}></img>
      <h4>{name}</h4>
    </article>
  );
};

const goAppStoreScreen = () => {
    console.log("onClick");
}

const AppList = () => {

  return (
    <section className="background_ios">
      <IconButton img={AppStore} name="App Store" canClick="Y"></IconButton>
      <IconButton img={Calendar} name="Calendar"></IconButton>
      <IconButton img={Clock} name="Clock"></IconButton>
      <IconButton img={Settings} name="Settings"></IconButton>
    </section>
  );
}

ReactDOM.render(<GraphScreen />, document.getElementById('root'));
// ReactDOM.render(<InputScreen />, document.getElementById('root'));
// ReactDOM.render(<CalendarScreen />, document.getElementById('root'));
// ReactDOM.render(<AppList />, document.getElementById('root'));
// ReactDOM.render(<AppStoreScreen />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
