# To Start The Backend
run 'python -m pipenv shell' to start the virtual env
then 'python -m manage runserver' to run the server

This is localhost:8000

# Migration commands
python -m manage makemigrations trackerapp
python -m manage migrate

# API endpoints

## Applications
Get all applications
- GET /api/application

## Application
Get application by id
- GET /api/application/{id}
Update application by id
- PUT /api/application/{id}
Create new application
- POST /api/application

## Tasks
Get all tasks
- GET /api/task

## Task
Get task by id
- GET /api/task/{id}
Update task by id
- PUT /api/task/{id}
Create new task
- POST /api/task/{id}
Get task by application id
- GET /api/task/{application_id}

## Notes
Get all notes
- GET /api/notes

## Note
Get note by id
- GET /api/note/{id}
Get note by application id
- GET /api/note/{application_id}
Update note by id
- PUT /api/note/{id}
Create note by application_id
- POST /api/note/application_id
