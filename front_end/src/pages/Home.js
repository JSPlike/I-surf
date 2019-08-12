import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import './Home.css'
import Modal from '@material-ui/core/Modal'

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
    this.state = {
      open : true
    }
  }

  handleOpen = () => {
      this.setState({
          open : true
      })
  };

  handleClose = () => {
      this.setState({
          open : false
      })
  }

  render(){
    return (
      <section className="background_ios">
        <Modal 
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}>
          <div className="paper">
              <div style={
                  {
                    color: 'white',
                    textAlign: 'center',
                  }
                }>
                <button onClick = {this.handleClose}>X</button>
                <div >Please access app store</div>
              </div>
            </div>
          
        </Modal>
      {/* App Store Button : 1st Step */}
      <button onClick={()=>{this.props.handler('Install application.')}}><IconButton img={AppStore} name="App Store"></IconButton></button>
      {/* Sample Icon1 */}
      <IconButton img={Calendar} name="Calendar"></IconButton>
      {/* Sample Icon2 */}
      <IconButton img={Clock} name="Clock"></IconButton>
      {/* Sample Icon3 */}
      <IconButton img={Settings} name="Settings"></IconButton>
      </section>
    );
  }
}

export default Home