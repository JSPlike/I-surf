import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import './Home.css'

const IconButton = ({img, name}) => {
  return (
    <article className="icon">
    <img src={img} alt="icon"></img>
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
      <button onClick={()=>{this.props.handler('Install application.')}}><IconButton img={AppStore} name="App Store"></IconButton></button>
      <IconButton img={Calendar} name="Calendar"></IconButton>
      <IconButton img={Clock} name="Clock"></IconButton>
      <IconButton img={Settings} name="Settings"></IconButton>
      </section>
    );
  }
}

export default Home