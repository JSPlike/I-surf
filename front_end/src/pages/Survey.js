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
            selected_4 : '',
            selected_5 : '',
            selected_6 : '',
            selected_7 : '',
            selected_8 : '',
            selected_9 : ''
        }
        this.handleOption_1 = this.handleOption_1.bind(this)
        this.handleOption_2 = this.handleOption_2.bind(this)
        this.handleOption_3 = this.handleOption_3.bind(this)
        this.handleOption_4 = this.handleOption_4.bind(this)
        this.handleOption_5 = this.handleOption_5.bind(this)
        this.handleOption_6 = this.handleOption_6.bind(this)
        this.handleOption_7 = this.handleOption_7.bind(this)
        this.handleOption_8 = this.handleOption_8.bind(this)
        this.handleOption_9 = this.handleOption_9.bind(this)
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
            selected_4 : changeEvent.target.value
        })
    }

    handleOption_5(changeEvent){
        this.setState({
            selected_5 : changeEvent.target.value
        })
    }

    handleOption_6(changeEvent){
        this.setState({
            selected_6 : changeEvent.target.value
        })
    }
    
    handleOption_7(changeEvent){
        this.setState({
            selected_7 : changeEvent.target.value
        })
    }

    handleOption_8(changeEvent){
        this.setState({
            selected_8 : changeEvent.target.value
        })
    }

    handleOption_9(changeEvent){
        this.setState({
            selected_9 : changeEvent.target.value
        })
    }

    submit(){
        const res = {
            'question_1' : this.state.selected_1,
            'question_2' : this.state.selected_2,
            'question_3' : this.state.selected_3,
            'question_4' : this.state.selected_4,
            'question_5' : this.state.selected_5,
            'question_6' : this.state.selected_6,
            'question_7' : this.state.selected_7,
            'question_8' : this.state.selected_8,
            'question_9' : this.state.selected_9
        }
        sendSurveyResult(res)
        this.props.handler('Description.')
    }

    render(){
        return(
            <article className="background_survey">
            <form>
                <div>Question 1 : How accurate do you think the predictions of such an app can be?</div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_1}/>
                    Very inaccurate
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_1}/>
                    inaccurate
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Neutral
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Accurate
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Very accurate
                </label>
                </div>
            </form>
            <p/>
             <form>
             <div>Question 2 : In general, how likely would you trust this app?</div>
             <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_2}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_2}/>
                    Unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_2}/>
                    Neutral
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_2}/>
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_2}/>
                    Very likely
                </label>
                </div>
         </form>
         <p/>
         <form>
                <div>Question 3 : If you learn that the app uses only your period dates to predict your fertile window how likely would you track temperature? </div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_3}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_3}/>
                    Unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_3}/>
                    Neutral
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_3}/>
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_3}/>
                    Very likely
                </label>
                </div>
            </form>
            <p/>
            <form>
                <div>Question 4 : If you learn that the app uses only your period dates to predict your fertile window, how likely would you track ver cervical mucus? </div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_4}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_4}/>
                    Unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_4}/>
                    Neutral
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_4}/>
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_4}/>
                    Very likely
                </label>
                </div>
            </form>
            <p />
            <form>
                <div>Question 5 : If you learn that the app uses only your period dates to predict your fertile window, how likely would you track symptoms?</div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_5}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_5}/>
                    Unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_5}/>
                    Neutral
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_5}/>
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_5}/>
                    Very likely
                </label>
                </div>
            </form>
            <p />
            <form>
                <div>Question 6 : If you learn that the app uses only your period dates to predict your fertile window, how likely would you track mood? </div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_6}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_6}/>
                    Unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_6}/>
                    Neutral
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_6}/>
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_6}/>
                    Very likely
                </label>
                </div>
            </form>
            <p />
            <form>
            <div>Question number 7 : How do you think this app calculates the predictions (i.e., period days, ovulation, fertile window)?</div>
            <input type = 'text' placeholder = {'answer'} onChange = {this.handleOption_7}></input>
            </form> 
            <p/>
            <form>
            <div>Question number 8 : What do you think [copy the main AI sentence] means?</div>
            <input type = 'text' placeholder = {'answer'} onChange = {this.handleOption_8}></input>
            </form> 
            <p/>
            <form>
            <div>Question number 9 : What indicators do you think this app uses to calculate your predictions?</div>
            <input type = 'text' placeholder = {'answer'} onChange = {this.handleOption_9}></input>
            </form> 
            <p/>
            <button onClick={()=>this.submit()}>submit</button>
         </article>
        )
    }
}

export default Survey