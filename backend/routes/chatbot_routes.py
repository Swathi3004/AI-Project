from flask import Blueprint, request, jsonify

chatbot = Blueprint("chatbot", __name__)

@chatbot.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    message = data["message"].lower()

    if "python" in message:
        reply = "Python is a powerful programming language used in AI, Web Development and Data Science."

    elif "react" in message:
        reply = "React is a JavaScript library used to build modern user interfaces."

    elif "sql" in message:
        reply = "SQL is used to store and retrieve data from databases."

    elif "hello" in message:
        reply = "Hello! How can I help you today?"

    else:
        reply = "Sorry, I don't know the answer yet."

    return jsonify({
        "reply": reply
    })