from flask import render_template, request, redirect, session, flash, jsonify
from werkzeug.utils import validate_arguments
from flask_app import app
from flask_app.models import user_model
import requests, os
from datetime import datetime


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_user', methods=['POST'])
def create_user():
    print("$$$$$$$")
    errors= user_model.User.validate_user(request.form)
    if len(errors) > 0:
        msg={
            'status':400,
            'msg':"error with validating information"
        }
        return jsonify(msg)
    
    user_model.User.create_user(request.form)
    print("*************")
    message={
        'message':'user added successfully'
    }
    return jsonify(message)

@app.route('/search/<int:range>')
def accessAPI(range):
    # range=
    r = requests.get(f"http://ondemand.websol.barchart.com/getCmdtyCalendar.json?apikey={os.environ.get('FLASK_APP_API_KEY')}&startDate={range}&endDate={range+1}")
    return jsonify( r.json() )

@app.route('/searchcategory/<int:range>/<int:endrange>')
def accessAPIPERCATEGORY(range, endrange):
    r = requests.get(f"http://ondemand.websol.barchart.com/getCmdtyCalendar.json?apikey={os.environ.get('FLASK_APP_API_KEY')}&startDate={range}&endDate={endrange}")
    print (range)
    print(endrange)
    return jsonify( r.json() )

@app.route('/search/<int:range>/<int:endrange>')
def accessAPIPERCATEGORY2(range, endrange):
    r = requests.get(f"http://ondemand.websol.barchart.com/getCmdtyCalendar.json?apikey={os.environ.get('FLASK_APP_API_KEY')}&startDate={range}&endDate={endrange}&category=econ")
    return jsonify( r.json() )