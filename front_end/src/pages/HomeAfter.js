import React, { Component } from 'react'

//Icon Images
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import Ferp from '../resources/KAYA.png';
import Modal from '@material-ui/core/Modal'
import './HomeAfter.css'

const IconButton = ({ img, name }) => {
  return (
    <article className="icon">
      <img src={img} alt="icon" name={name}></img>
      <h4>{name}</h4>
    </article>
  );
}

class HomeAfter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <section className="background_ios">


        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          <div>
            <button onClick={this.handleClose}>X</button>
            <div>Please open the app</div></div>
        </Modal>

        <IconButton img={AppStore} name="App Store" />
        <IconButton img={Calendar} name="Calendar" />
        <IconButton img={Clock} name="Clock" />
        <IconButton img={Settings} name="Settings" />
        {/* This new Icon for activate App */}
        <button onClick={() => { this.props.handler('Kaya.') }} >
          <IconButton img={Ferp} name="KAYA" /></button>

      </section>
    );
  }
}

export default HomeAfter