import axios from 'axios'

function sendResult(){
    axios.post('http://127.0.0.1:5000/user',
    {
        'name' : 'test',
        'age' : 10
    })
}

export {sendResult}