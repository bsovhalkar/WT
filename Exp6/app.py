from flask import Flask

app = Flask(__name__)


@app.get("/")
def home():
    return "Experiment 6 dynamic deployment demo is running."


@app.errorhandler(404)
def page_not_found(e):
    return "Page Not Found", 404


@app.errorhandler(500)
def server_error(e):
    return "An internal error occurred. Please try again later.", 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
