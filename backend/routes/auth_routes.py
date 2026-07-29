from flask import Blueprint, request, jsonify
from database import get_connection

auth = Blueprint("auth", __name__)


@auth.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    connection = get_connection()
    cursor = connection.cursor()

    sql = """
    INSERT INTO students(name, email, department, password)
    VALUES(%s, %s, %s, %s)
    """

    cursor.execute(
        sql,
        (
            data["name"],
            data["email"],
            data["department"],
            data["password"]
        )
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Student Registered Successfully"
    })


@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    connection = get_connection()
    cursor = connection.cursor()

    sql = "SELECT * FROM students WHERE email=%s AND password=%s"

    cursor.execute(
        sql,
        (
            data["email"],
            data["password"]
        )
    )

    student = cursor.fetchone()

    cursor.close()
    connection.close()

    if student:
        return jsonify({
            "message": "Login Successful",
            "student": student
        })

    return jsonify({
        "message": "Invalid Email or Password"
    }), 401