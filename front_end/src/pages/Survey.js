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
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_1}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_1}/>
                    Unlikely
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
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Very likely
                </label>
                </div>
         </form>
         <p/>
         <form>
                <div>Question 3 : If you learn that the app uses only your period dates to predict your fertile window how likely would you track temperature? </div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_1}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_1}/>
                    Unlikely
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
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Very likely
                </label>
                </div>
            </form>
            <p/>
            <form>
                <div>Question 4 : If you learn that the app uses only your period dates to predict your fertile window, how likely would you track ver cervical mucus? </div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_1}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_1}/>
                    Unlikely
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
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Very likely
                </label>
                </div>
            </form>
            <p />
            <form>
                <div>Question 5 : If you learn that the app uses only your period dates to predict your fertile window, how likely would you track symptoms?</div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_1}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_1}/>
                    Unlikely
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
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Very likely
                </label>
                </div>
            </form>
            <p />
            <form>
                <div>Question 6 : If you learn that the app uses only your period dates to predict your fertile window, how likely would you track mood? </div>
                <div className="radio">
                <label>
                    <input type="radio" value= 'Option1' checked={this.state.selected_1 === "Option1"} onChange={this.handleOption_1}/>
                    Very unlikely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option2' checked={this.state.selected_1 === "Option2"} onChange={this.handleOption_1}/>
                    Unlikely
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
                    Likely
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value='Option3' checked={this.state.selected_1 === "Option3"} onChange={this.handleOption_1}/>
                    Very likely
                </label>
                </div>
            </form>
            <p />
            <form>
            <div>Question number 7 : How do you think this app calculates the predictions (i.e., period days, ovulation, fertile window)?</div>
            <input type = 'text' placeholder = {'answer'} onChange = {this.handleOption_4}></input>
            </form> 
            <p/>
            <form>
            <div>Question number 8 : What do you think [copy the main AI sentence] means?</div>
            <input type = 'text' placeholder = {'answer'} onChange = {this.handleOption_4}></input>
            </form> 
            <p/>
            <form>
            <div>Question number 9 : What indicators do you think this app uses to calculate your predictions?</div>
            <input type = 'text' placeholder = {'answer'} onChange = {this.handleOption_4}></input>
            </form> 
            <p/>
            <button onClick={()=>this.submit()}>submit</button>
         </article>
        )
    }
}

export default Survey