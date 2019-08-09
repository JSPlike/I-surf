import axios from 'axios'

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  };

function sendResult(){
    axios.post('http://127.0.0.1:5000/user',
    {
        'name' : 'test',
        'age' : 10
    })
}

function sendSurveyResult(result){
    console.log('send survey result')
    console.log(result)
    try{
    axios.post('http://127.0.0.1:5000/survey', result, config)
    }
    catch(e){
        console.log(e.name)
    }
}

async function getIdNum(){
    const res = await axios.get('http://127.0.0.1:5000/getIdNum').then(function(response){
       //console.log(response.data)
       return response
   })
   return res.data
}
// Must use async function. 
// If you do not use async, the result will be empty because this function will not wait get function's response.

export {sendResult, getIdNum, sendSurveyResult}