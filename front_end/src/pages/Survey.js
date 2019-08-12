import React, {Component} from 'react'
import {sendSurveyResult} from '../api/axios'
import './Survey.css'

class Survey extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected_1 : '',
            selected_2 : '',
            selected_3 : '',
            answer : ''
        }
        this.handleOption_1 = this.handleOption_1.bind(this)
        this.handleOption_2 = this.handleOption_2.bind(this)
        this.handleOption_3 = this.handleOption_3.bind(this)
        this.handleOption_4 = this.handleOption_4.bind(this)
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

    handleOption_4(changeEvent){
        this.setState({
            answer : changeEvent.target.value
        })
    }
    

    submit(){
        const res = {
            'question_1' : this.state.selected_1,
            'question_2' : this.state.selected_2,
            'question_3' : this.state.selected_3,
            'answer' : this.state.answer
        }
        sendSurveyResult(res)
        this.props.handler('Description.')
    }

    render(){
        return(
            <div>
            <form>
                <div>Question number 1</div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_1}/>
                    Option 1
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_1}/>
                    Option 2
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Option 3
                    </label>
                </div>
            </form>
            <p/>
             <form>
             <div>Question number 2</div>
             <div className="radio">
             <label>
                 <input type="radio" value='Option1' checked={this.state.selected_2 === "Option1"} onChange={this.handleOption_2}/>
                 Option 1
             </label>
             </div>
             <div className="radio">
             <label>
                 <input type="radio" value='Option2' checked={this.state.selected_2 === "Option2"} onChange={this.handleOption_2}/>
                 Option 2
             </label>
             </div>
             <div className="radio">
             <label>
                 <input type="radio" value='Option3' checked={this.state.selected_2 === "Option3"} onChange={this.handleOption_2}/>
                 Option 3
                 </label>
             </div>
         </form>
         <p/>
         <form>
                <div>Question number 3</div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option1' checked={this.state.selected_3 === "Option1"} onChange={this.handleOption_3}/>
                    Option 1
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_3 === "Option2"} onChange={this.handleOption_3}/>
                    Option 2
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_3 === "Option3"} onChange={this.handleOption_3}/>
                    Option 3
                    </label>
                </div>
            </form>
            <p/>
            <form>
            <div>Question number 4</div>
            <input type = 'text' placeholder = {'answer'} onChange = {this.handleOption_4}></input>
            </form> 
            <p/>
            <button onClick={()=>this.submit()}>submit</button>
         </div>
        )
    }
}

export default Survey