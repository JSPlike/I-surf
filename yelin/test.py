from pymongo import MongoClient
from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
# from flask_bcrypt import Bcrypt
# from flask_jwt_extended import JWTManager
# from flask_jwt_extended import create_access_token
from datetime import datetime

client = MongoClient('localhost', 27017)
# client = MongoClient("mongodb://localhost:27017/")

# database name
db = client["i-surf"]
# User(table) name
Users = db.users
Survey = db.survey

app = Flask(__name__)
CORS(app)
api = Api(app)
# bcrypt = Bcrypt(app)
# jwt = JWTManager(app)

class GetIdNum(Resource):
    def get(self):
        try:
            return Users.find().count()
        except Exception as e:
            print(str(e))
            return {'error': str(e)}

api.add_resource(GetIdNum, '/getIdNum')

class SurveyResult(Resource):
    def post(self):
        try:
            print(request)
            json_data = request.get_json(force=True)
            res = {
            'question_1' : json_data['question_1'],
            'question_2' : json_data['question_2'],
            'question_3' : json_data['question_3'],
            'answer' : json_data['answer']
            }
            print(res)
            Survey.insert_one(res)
        
        except Exception as e:
            print('error' , str(e))
            return { 'error' : str(e)}

api.add_resource(SurveyResult, '/survey')

# @app.route('/users/register', methods=['GET', 'POST'])
# def register():
#     code = request.get_json()['code']

#     password = bcrypt.generate_password_hash(
#         request.get_json()['password']).decode('utf-8')
#     created = datetime.utcnow()

#     user_id = Users.insert({
#         'code': code,
#         'password': password,
#         'create': created
#     })

#     new_user = Users.find_one({'_id': user_id})

#     result = {'code': new_user['code'] + 'registered'}

#     return jsonify({'result': result})


# @app.route('/users/login', methods=['GET', 'POST'])
# def login():
#     code = request.get_json()['code']
#     password = request.get_json()['password']
#     result = ""

#     response = Users.find_one({'code' : code})

#     if response:
#         if bcrypt.check_password_hash(response['password'], password):
#             access_token = create_access_token(identity = {
#                 'code': response['code']
#             })
#             result = jsonify({'token': access_token})
#         else:
#             result = jsonify({'error': "Invalid username and password"})
#     else:
#         result = jsonify({'result': "No Results found"})
#     return result


if __name__ == '__main__':
    app.run(debug=True)