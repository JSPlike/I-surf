import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import Ferp from '../resources/Calendar - Blank.png';
import './HomeAfter.css'

const IconButton = ({img, name}) => {
  return (
    <article className="icon">
    <img src={img} alt="icon"></img>
    <h4>{name}</h4>
    </article>
  );
  }

class HomeAfter extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <section className="background_ios">
      <IconButton img={AppStore} name="App Store"/>
      <IconButton img={Calendar} name="Calendar"/>
      <IconButton img={Clock} name="Clock"/>
      <IconButton img={Settings} name="Settings"/>
      <button onClick={()=>{this.props.handler('Main view.')}}><IconButton img={Ferp} name="Ferp"></IconButton></button>
      </section>
    );
  }
}

export default HomeAfter