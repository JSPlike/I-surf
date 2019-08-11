import React, {Component} from 'react'

//Icon Images
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import Ferp from '../resources/KAYA.png';

import './HomeAfter.css'

const IconButton = ({img, name}) => {
  return (
    <article className="icon">
    <img src={img} alt="icon" name={name}></img>
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
      {/* This new Icon for activate App */}
      <button onClick={()=>{this.props.handler('Main view.')}} >
          <IconButton img={Ferp} name="KAYA"  /></button>
      </section>
    );
  }
}

export default HomeAfter