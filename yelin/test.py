from pymongo import MongoClient
from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

client = MongoClient('localhost', 27017)
# client = MongoClient("mongodb://localhost:27017/")

# database name
db = client["i-surf"]

# collection(table) name
collection = db.user

app = Flask(__name__)
CORS(app)
api = Api(app)

class CreateUser(Resource):
    def post(self):
        try:
            json_data = request.get_json(force=True)
            json_name = json_data['name']
            json_age = json_data['age']
            user = {
                'name' : json_name,
                'age' : json_age
            }
            print(json_name)
            collection.insert_one(user)
            # find all
            doc = collection.find()

            # print all
            for x in doc:
                print(x)
            return 0
        except Exception as e:
            print(str(e))
            return {'error': str(e)}

api.add_resource(CreateUser, '/user')

if __name__ == '__main__':
    app.run(debug=True)