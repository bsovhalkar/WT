from flask import Flask

app = Flask(__name__)


@app.get("/")
def home():
    return {"message": "Exp6: Dynamic deployment demo is running"}


if __name__ == "__main__":
    app.run(debug=True, port=5001)
