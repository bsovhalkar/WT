from flask import Flask, request, render_template_string, redirect, url_for

app = Flask(__name__)
submissions = []


@app.route('/', methods=['GET'])
def form():
    return render_template_string('<form method="post" action="/submit">Name: <input name="name"><button>Send</button></form>')


@app.route('/submit', methods=['POST'])
def submit():
    name = (request.form.get('name') or '').strip()
    if len(name) < 2:
        return "Name too short", 400
    submissions.append({'name': name})
    return f"Thanks, {name}!"


@app.errorhandler(404)
def not_found(e):
    return "404 — not found", 404


if __name__ == "__main__":
    app.run(debug=True, port=3000)
