from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

#!-------------------------------------------------------------------------
            #CREATE/SAVE
#!-------------------------------------------------------------------------
    @classmethod
    def create_user(cls, data):
        query = "INSERT INTO users (name, email) VALUES (%(name)s, %(email)s);"
        result_as_id = connectToMySQL('project_db').query_db(query, data)
        return result_as_id

    @staticmethod
    def validate_user(data):
        errors={}
        if len(data['name']) < 2:
            errors['error_name']= "A name is required"
        if len(data['email']) <2:
            errors['error_email']="a vald email is required"
        elif not EMAIL_REGEX.match(data['email']):
            errors['error_email']="a vald email is required"
        print(errors)
        return errors
