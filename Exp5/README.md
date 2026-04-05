# Experiment 5 - Server-side Web Application (Flask)

## Aim
Create a basic server-side web application that:
- handles form submission
- temporarily stores submitted data in a JSON file
- returns a confirmation response
- includes 404 error handling

## Files
- `app.py` - Flask server with routes and validation
- `templates/index.html` - input form
- `templates/confirmation.html` - success page
- `templates/error.html` - validation error page
- `templates/404.html` - invalid route page
- `templates/500.html` - server error page
- `data/submissions.json` - temporary JSON storage
- `requirements.txt` - dependency list

## Run
```bash
pip install -r requirements.txt
python app.py
```

Server URL: `http://localhost:3000`
