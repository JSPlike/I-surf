from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'user_db'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/user_db'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)


@app.route('/users/register', methods=['POST'])
def register():
    users = mongo.db.users
    name = request.get_json()['name']
    password = bcrypt.generate_password_hash(
        request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_id = users.insert({
        'name': name,
        'password': password,
        'create': created
    })

    new_user = users.find_one({'_id': user_id})

    result = {'name': new_user['name'] + 'registered'}

    return jsonify({'result': result})


@app.route('/users/login', methods=['POST'])
def login():
    users = mongo.db.users
    name = request.get_json()['name']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'name': name})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(
                identity={'name': response['name']})
            result = jsonify({'token': access_token})
        else:
            result = jsonify({"error": "Invlid username and password"})
    else:
        resut = jsonify({"result": "No results found"})
    return result


if __name__ == '__main__':
    app.run(debug=True)