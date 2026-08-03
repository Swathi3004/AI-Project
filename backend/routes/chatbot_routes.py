from flask import Blueprint, request, jsonify
from services.gemini_service import ask_ai
import traceback

chatbot = Blueprint("chatbot", __name__)

@chatbot.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        message = data.get("message")

        if not message:
            return jsonify({
                "reply": "Please enter a message."
            }), 400

        reply = ask_ai(message)

        return jsonify({
            "reply": reply
        })

    except Exception:
        traceback.print_exc()   # <-- This prints the full error in the terminal
        return jsonify({
            "reply": "Internal Server Error"
        }), 500