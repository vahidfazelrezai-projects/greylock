# App

## Initial setup
`brew install homebrew/science/opencv3`

(Mac) OpenCV is at `/usr/local/Cellar/opencv3/3.1.0_3`

Clone repo, then `cd` into this folder and run `. venv/bin/activate` and `pip install -r requirements.txt`.

`ln -s /usr/local/Cellar/opencv3/3.1.0_3/lib/python2.7/site-packages/cv.so venv/lib/python2.7/site-packages/cv.so`
`ln -s /usr/local/Cellar/opencv3/3.1.0_3/lib/python2.7/site-packages/cv.py venv/lib/python2.7/site-packages/cv.py`

## Local development
Run `. venv/bin/activate`. Then run `export FLASK_APP=app.py` and then `flask run`.

## When updating dependencies
Make sure you're in venv, then use `pip install`. Afterward, run `pip freeze > requirements.txt`.