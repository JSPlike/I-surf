import React, {Component} from 'react';
import {sendSurveyResult} from '../api/axios'

class Survey extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected_1 : '',
            selected_2 : '',
            selected_3 : ''
        }
        this.handleOption_1 = this.handleOption_1.bind(this)
        this.handleOption_2 = this.handleOption_2.bind(this)
        this.handleOption_3 = this.handleOption_3.bind(this)
    }

    handleOption_1(changeEvent){
        this.setState({
            selected_1 : changeEvent.target.value
        })
    }
    handleOption_2(changeEvent){
        this.setState({
            selected_2 : changeEvent.target.value
        })
    }
    handleOption_3(changeEvent){
        this.setState({
            selected_3 : changeEvent.target.value
        })
    }

    submit(){
        sendSurveyResult(this.state)
    }

    render(){
        return(
            <div>
            <form>
                <div>Question number 1</div>
                <div className="radio">
                <label>
                    <input type="radio" value="Option1" checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_1}/>
                    Option 1
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value="Option2" checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_1}/>
                    Option 2
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value="Option3" checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Option 3
                    </label>
                </div>
            </form>
             <form>
             <div>Question number 2</div>
             <div className="radio">
             <label>
                 <input type="radio" value="Option1" checked={this.state.selected_2 === "Option1"} onChange={this.handleOption_2}/>
                 Option 1
             </label>
             </div>
             <div className="radio">
             <label>
                 <input type="radio" value="Option2" checked={this.state.selected_2 === "Option2"} onChange={this.handleOption_2}/>
                 Option 2
             </label>
             </div>
             <div className="radio">
             <label>
                 <input type="radio" value="Option3" checked={this.state.selected_2 === "Option3"} onChange={this.handleOption_2}/>
                 Option 3
                 </label>
             </div>
         </form>
         <form>
                <div>Question number 3</div>
                <div className="radio">
                <label>
                    <input type="radio" value="Option1" checked={this.state.selected_3 === "Option1"} onChange={this.handleOption_3}/>
                    Option 1
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value="Option2" checked={this.state.selected_3 === "Option2"} onChange={this.handleOption_3}/>
                    Option 2
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value="Option3" checked={this.state.selected_3 === "Option3"} onChange={this.handleOption_3}/>
                    Option 3
                    </label>
                </div>
            </form>
            <button onClick={()=>this.submit()}>submit</button>
         </div>
        )
    }
}

export default Survey