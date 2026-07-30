from flask import Blueprint, jsonify, request
from database import get_connection

profile = Blueprint("profile", __name__)

@profile.route("/profile/<int:id>", methods=["GET"])
def get_profile(id):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT id, name, email, department FROM students WHERE id=%s",
        (id,)
    )

    student = cursor.fetchone()

    cursor.close()
    connection.close()

    return jsonify(student)


    # UPDATE Profile
@profile.route("/profile/<int:id>", methods=["PUT"])
def update_profile(id):
    data = request.get_json()

    name = data["name"]
    email = data["email"]
    department = data["department"]

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        UPDATE students
        SET name=%s, email=%s, department=%s
        WHERE id=%s
        """,
        (name, email, department, id)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Profile Updated Successfully"
    })