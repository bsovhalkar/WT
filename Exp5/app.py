from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from tempfile import NamedTemporaryFile
from typing import Any

from flask import Flask, jsonify, render_template, request
from werkzeug.exceptions import HTTPException

app = Flask(__name__)

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DATA_FILE = DATA_DIR / "submissions.json"


def _ensure_data_file() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if not DATA_FILE.exists():
        DATA_FILE.write_text("[]", encoding="utf-8")


def _read_submissions() -> list[dict[str, Any]]:
    _ensure_data_file()
    try:
        data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
        if isinstance(data, list):
            return data
    except (json.JSONDecodeError, OSError):
        pass
    return []


def _write_submissions_atomic(items: list[dict[str, Any]]) -> None:
    _ensure_data_file()
    with NamedTemporaryFile("w", delete=False, dir=DATA_DIR, encoding="utf-8") as tmp:
        json.dump(items, tmp, indent=2, ensure_ascii=False)
        tmp_path = Path(tmp.name)
    tmp_path.replace(DATA_FILE)


def _validate_form(name: str, email: str, message: str) -> list[str]:
    errors: list[str] = []
    if len(name) < 2:
        errors.append("Name must be at least 2 characters long.")
    if "@" not in email or "." not in email.split("@")[-1]:
        errors.append("Email format is invalid.")
    if len(message) < 5:
        errors.append("Message must be at least 5 characters long.")
    return errors


@app.get("/")
def index() -> str:
    return render_template("index.html")


@app.post("/submit")
def submit():
    name = (request.form.get("name") or "").strip()
    email = (request.form.get("email") or "").strip()
    message = (request.form.get("message") or "").strip()

    errors = _validate_form(name, email, message)
    if errors:
        return render_template("error.html", errors=errors), 400

    submissions = _read_submissions()
    entry = {
        "id": len(submissions) + 1,
        "name": name,
        "email": email,
        "message": message,
        "submitted_at": datetime.now(timezone.utc).isoformat(),
    }
    submissions.append(entry)
    _write_submissions_atomic(submissions)
    return render_template("confirmation.html", submission=entry)


@app.get("/submissions")
def list_submissions():
    return jsonify(_read_submissions()), 200


@app.errorhandler(404)
def not_found(error: HTTPException):
    return render_template("404.html", path=request.path), 404


@app.errorhandler(500)
def internal_error(error: HTTPException):
    app.logger.exception("Unhandled server error: %s", error)
    return render_template("500.html"), 500


if __name__ == "__main__":
    _ensure_data_file()
    app.run(host="0.0.0.0", port=3000, debug=False)
