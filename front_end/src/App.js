import React from 'react';
//import frame from './handwithphone.png';
// import back from './IMG_iOS.PNG';
// import backgroud_ios from './ios_background.png';

import AppStore from './App Store.png'

import './App.css';

const IconButton = (name, children) => {
  return (
    <article className="icon">
      {/* <img src={AppStore} alt="icon"></img> */}
      <h4>{name}</h4>
      {/* {children} */}
    </article>
  );
};


function App() {
  return (
    <section className="background_ios">
      <IconButton name="App Store"></IconButton>
    </section>
  );
}


export default App;
