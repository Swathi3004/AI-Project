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