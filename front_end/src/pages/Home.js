import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import history from './history'
import {getIdNum} from '../api/axios'
import './Home.css'

const IconButton = ({img, name}) => {
  return (
    <article className="icon">
    <img src={img} alt="icon"></img>
    <h4>{name}</h4>
    </article>
  );
}

function goAppStoreScreen() {
  getIdNum().then(function(result){
    console.log(result)
    if (result%2 === 0){
      history.push('/appStoreA')
      window.location.reload()
    }
    else{
      history.push('/appStoreB')
      window.location.reload()
    }
  })
}

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      Afirst : 0
    }
  }

  render(){
    return (
      <section className="background_ios">
      <button onTouch={()=>{goAppStoreScreen()}} onClick={()=>{goAppStoreScreen()}}><IconButton img={AppStore} name="App Store"></IconButton></button>
      <IconButton img={Calendar} name="Calendar" canClick="N"></IconButton>
      <IconButton img={Clock} name="Clock" canClick="N"></IconButton>
      <IconButton img={Settings} name="Settings" canClick="N"></IconButton>
      </section>
    );
  }
}

export default Home