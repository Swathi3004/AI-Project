from flask import Flask
from flask_cors import CORS

from routes.auth_routes import auth
from routes.dashboard_routes import dashboard

app = Flask(__name__)

CORS(app)

app.register_blueprint(auth, url_prefix="/api")
app.register_blueprint(dashboard, url_prefix="/api")


@app.route("/")
def home():
    return {
        "message": "Welcome to AI Student Assistant Backend"
    }


if __name__ == "__main__":
    app.run(debug=True)