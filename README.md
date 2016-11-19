# Project Succotash
This is the repository for Project Succotash.

## Retrieve code 

* `$ git clone https://github.com/EmmonsVentures/projectsuccotash.git`
* `$ cd projectsuccotash`

## Installation

* `$ npm install`
* `$ npm run build`

Activate virtual environment and install Python requirements

* `$ source myvenv/bin/activate`
* `$ pip install -r python-requirements/base.txt`

* `$ cd src`
* `$ python manage.py migrate`

##Run App

Start webpack server

* `$ npm start`

Start Django server

* `$ cd src`
* `$ python manage.py runserver`

You can now visit the app at `http://localhost:3000/`


