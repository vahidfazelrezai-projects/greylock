# App

## Initial setup
Clone repo, then `cd` into this folder and run `. venv/bin/activate` and `pip install -r requirements.txt`.

## Local development
Run `. venv/bin/activate`. Then run `export FLASK_APP=app.py` and then `flask run`.

## When updating dependencies
Make sure you're in venv, then use `pip install`. Afterward, run `pip freeze > requirements.txt`.