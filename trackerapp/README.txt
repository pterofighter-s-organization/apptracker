to start the backend
run 'python -m pipenv shell' to start the virtual env
then 'python -m manage runserver' to run the server
now you can access the backend from 
localhost:8000/api/application which takes GET request to get all applications or POST an application 
localhost:8000/api/application/<integer> takes GET request to get specific application with integer as the primary key
