from flask import Blueprint, jsonify
from database import get_connection

dashboard = Blueprint("dashboard", __name__)

@dashboard.route("/dashboard/<int:id>", methods=["GET"])
def get_dashboard(id):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT id, name, email, department, created_at FROM students WHERE id=%s",
        (id,)
    )

    student = cursor.fetchone()

    cursor.close()
    connection.close()

    return jsonify(student)