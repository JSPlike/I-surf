from pymongo import MongoClient
client = MongoClient('localhost', 27017)
# client = MongoClient("mongodb://localhost:27017/")

# database name
db = client["i-surf"]

# collection(table) name
collection = db.user

# find all
doc = collection.find()

# print all
for x in doc:
    print(x)