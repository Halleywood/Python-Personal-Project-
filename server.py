from flask_app import app
from flask_app.controllers import data_controllers

import os
print( os.environ.get("FLASK_APP_API_KEY") )

if __name__ == "__main__":
    app.run(debug=True)