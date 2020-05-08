from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)

app = Flask(_name_)

app.config['MONGO_DBNAME'] = 'mernloginreg'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/mernloginreg'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('users/register', methods=['POST'])
def registers():
    users = mongo.db.users
    username = request.get_json()['username']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_id = users.insert({
    'username' : username,
    'email' : email,
    'password' : password,
    'created' : created
    })
    new_user = users.find_one({'_id' : user_id})

    result = {'email' : new_user['email'] + 'registered'}

    return jsonify({'result' : result})

@app.route('/users/login', methods=['POST'])
def login():
    users = mongo.db.users
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'email' : email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
            'username' : response['username'],
            'email' : response['email']
            })
            result = jsonify({'token' : access_token})
        else:
            result = jsonify({"error" : "Invalif username and password"})
        else:
            result = jsonify({"result" : "No results found"})
            return results

    if _name_ == '_main_'
    app.run(debug = True)
