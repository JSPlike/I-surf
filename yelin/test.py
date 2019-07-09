from pymongo import MongoClient
client = MongoClient('localhost', 27017)
# client = MongoClient("mongodb://localhost:27017/")

db = client["i-surf"]
collection = db.user
doc = collection.find()

for x in doc:
    print(x)