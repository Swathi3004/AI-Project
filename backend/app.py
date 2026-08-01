from flask import Flask
from flask_cors import CORS

from routes.auth_routes import auth
from routes.dashboard_routes import dashboard
from routes.profile_routes import profile
from routes.quiz_routes import quiz
from routes.recommendation_routes import recommendation
from routes.chatbot_routes import chatbot

app = Flask(__name__)

CORS(app)

app.register_blueprint(auth, url_prefix="/api")
app.register_blueprint(dashboard, url_prefix="/api")
app.register_blueprint(profile, url_prefix="/api")
app.register_blueprint(quiz, url_prefix="/api")
app.register_blueprint(recommendation, url_prefix="/api")
app.register_blueprint(chatbot, url_prefix="/api")


@app.route("/")
def home():
    return {
        "message": "Welcome to AI Student Assistant Backend"
    }


if __name__ == "__main__":
    app.run(debug=True)