from flask import Blueprint, jsonify

recommendation = Blueprint("recommendation", __name__)

@recommendation.route("/recommendation/<int:student_id>", methods=["GET"])
def get_recommendation(student_id):

    recommendations = [
        "Practice React Hooks",
        "Complete SQL Joins",
        "Learn Machine Learning Basics",
        "Build Flask REST API",
        "Revise Python OOP Concepts"
    ]

    return jsonify({
        "recommendations": recommendations
    })