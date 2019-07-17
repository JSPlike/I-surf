import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import history from './history'

const goAppStoreScreen = () => {
  console.log("onClick");
  history.push('/appStore')
  window.location.reload()
}

const IconButton = ({img, name}) => {
  return (
    <article className="icon">
    <img src={img} alt="icon" onClick={goAppStoreScreen}></img>
    <h4>{name}</h4>
    </article>
  );
}

class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <section className="background_ios">
      <IconButton img={AppStore} name="App Store" canClick="Y"></IconButton>
      <IconButton img={Calendar} name="Calendar" canClick="N"></IconButton>
      <IconButton img={Clock} name="Clock" canClick="N"></IconButton>
      <IconButton img={Settings} name="Settings" canClick="N"></IconButton>
      </section>
    );
  }
}

export default Home