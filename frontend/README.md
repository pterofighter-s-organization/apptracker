
# How to install and start the job-tracker application

**Get frontend to work**

    Go to frontend folder
    - cd /apptracker/frontend 
    
    install the tools with one command
    - npm install
        **If that command doesn't work, just install these one by one**
        - npm install bootstrap@5.3.0-alpha3
        - npm i react-router-dom
        - npm install moment
        - npm i bootstrap-icons
        - npm install jquery
        - npm install moment-timezone --save

    **To start the frontend**
    make sure you're in frontend folder and type this command
    - npm start

    if a page pops up with no errors, then frontend runs correctly.
    make sure you have start the backend to use the app.

**To use the backend**

    **Pre-req -> have Python and Mongodb installed**

    **installing tools for backend**
    do the commands below inside the github folder
    - pip install –user pipenv
    you should have the virtual environment installed, now open it using this command
    - python -m pipenv shell
    install these tools below
    - pipenv install django
    - pipenv install djangorestframework
    go to apptracker folder using this command
    - cd apptracker
    now you should be inside apptracker folder, inside the environment, install these tools
    - pip install djongo
    - pip install --force-reinstall -v "Sqlparse==0.2.4"
    - pip install django-cors-headers
    - pip install pytz

    **After installing the tools and activated the virtual environment (ex. should have (job tracker) on top of your commands), check if you have the correct tools for backend to run**
    do command -> ( pip list ) -> to check if you have the following installed in the exact same version
    asgiref             3.6.0
    certifi             2022.12.7
    distlib             0.3.6
    Django              4.1.9
    django-cors-headers 4.0.0
    djangorestframework 3.14.0
    djongo              1.3.6
    dnspython           2.3.0
    filelock            3.11.0
    pip                 23.0.1
    pipenv              2023.3.20
    platformdirs        3.2.0
    pymongo             3.12.3
    python-dateutil     2.8.2
    pytz                2023.3
    setuptools          67.4.0
    six                 1.16.0
    sqlparse            0.2.4
    tzdata              2023.3
    virtualenv          20.21.0
    virtualenv-clone    0.5.7
    wheel               0.38.4

    **Database migration**

    if you already have the apps db (if not skip to next part)
        - drop the database from mongodb
        - go to migration folder in trackerapp folder
        - delete 0.0001 py
    
    do this commands below to finish setting up migration
    * commands below starting from the main folder
    - cd apptracker
    - python -m manage makemigrations trackerapp
    - python -m manage migrate trackerapp
    * refresh mongodb to see if the db is re-created
    * restart/start backend

    **To start backend from main folder**
    start the virtual environment first
    - python -m pipenv shell
    then go to apptracker folder using -> ( cd apptracker ) and run the command below
    - python -m manage runserver 
    Your backend should be running by now if you see no errors inside the terminal



