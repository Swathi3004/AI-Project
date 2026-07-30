from flask import Blueprint, jsonify, request
from database import get_connection

quiz = Blueprint("quiz", __name__)

# Get All Quiz Questions
@quiz.route("/quizzes", methods=["GET"])
def get_quizzes():
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            id,
            question,
            option1,
            option2,
            option3,
            option4
        FROM quizzes
    """)

    quizzes = cursor.fetchall()

    cursor.close()
    connection.close()

    return jsonify(quizzes)


# Submit Quiz
@quiz.route("/submit-quiz", methods=["POST"])
def submit_quiz():
    data = request.get_json()

    student_id = data["student_id"]
    answers = data["answers"]

    connection = get_connection()
    cursor = connection.cursor()

    score = 0

    for answer in answers:
        cursor.execute(
            "SELECT correct_answer FROM quizzes WHERE id=%s",
            (answer["question_id"],)
        )

        result = cursor.fetchone()

        if result and result["correct_answer"] == answer["selected_answer"]:
            score += 1

    total_questions = len(answers)

    cursor.execute(
        """
        INSERT INTO quiz_results(student_id, score, total_questions)
        VALUES(%s, %s, %s)
        """,
        (student_id, score, total_questions)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Quiz Submitted Successfully",
        "score": score,
        "total_questions": total_questions,
        "percentage": round((score / total_questions) * 100, 2)
    })

    # Get Latest Quiz Result
@quiz.route("/quiz-result/<int:student_id>", methods=["GET"])
def get_quiz_result(student_id):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT score, total_questions
        FROM quiz_results
        WHERE student_id = %s
        ORDER BY id DESC
        LIMIT 1
    """, (student_id,))

    result = cursor.fetchone()

    cursor.close()
    connection.close()

    if not result:
        return jsonify({
            "message": "No quiz result found"
        }), 404

    percentage = round(
        (result["score"] / result["total_questions"]) * 100,
        2
    )

    return jsonify({
        "score": result["score"],
        "total_questions": result["total_questions"],
        "percentage": percentage
    })

    # AI Recommendation API
@quiz.route("/recommendation/<int:student_id>", methods=["GET"])
def get_recommendation(student_id):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT score, total_questions
        FROM quiz_results
        WHERE student_id = %s
        ORDER BY id DESC
        LIMIT 1
    """, (student_id,))

    result = cursor.fetchone()

    cursor.close()
    connection.close()

    if not result:
        return jsonify({
            "message": "No quiz result found"
        }), 404

    percentage = (result["score"] / result["total_questions"]) * 100

    if percentage >= 90:
        recommendations = [
            "Learn Advanced React",
            "Practice Node.js APIs",
            "Explore Machine Learning Basics",
            "Build Full Stack Projects"
        ]
    elif percentage >= 70:
        recommendations = [
            "Practice SQL Joins",
            "Revise DBMS Concepts",
            "Complete Java Programming Exercises",
            "Take Another Quiz"
        ]
    else:
        recommendations = [
            "Revise Python Basics",
            "Practice Loops and Functions",
            "Learn Object-Oriented Programming",
            "Retake the Quiz"
        ]

    return jsonify({
        "recommendations": recommendations
    })