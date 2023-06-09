# How to install and start the job-tracker application

**Get frontend to work**

    Go to frontend folder
    - cd /backend/frontend 
    
    Install the tools with one command
    - npm install
        **If that command doesn't work, just install these one by one**
        - npm install bootstrap@5.3.0-alpha3
        - npm i react-router-dom
        - npm install moment
        - npm i bootstrap-icons
        - npm install moment-timezone --save

    **To start the frontend**
    Make sure you're in frontend folder and type this command
    - npm start

    If a page pops up with no errors, then frontend runs correctly.
    make sure you have start the backend to use the app.

**To use the backend**

    **Pre-req -> have Python and Mongodb installed**

    **Installing tools for backend**
    Do the commands below inside the main github folder
    - pip install pipenv
    You should have the virtual environment installed, now open it using this command
    - python -m pipenv shell
    - pipenv sync
    Install these tools below
    - pip install djongo
    - pip install --force-reinstall -v "Pymongo==3.12.3"
    Type this command below
    - pip list
    now check if your tools matches the list below

    **After installing the tools and activated the virtual environment (ex. should have (your-virtual-environment-name) on top of your commands), check if you have the correct tools for backend to run**
    Do command -> ( pip list ) -> to check if you have the following installed
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

    Everything doesn't have to be the exact version except,
    sqlparse = 0.2.4
    pymongo = 3.12.3
    Make sure these two have the exact same version as listed, if not do these commands,
    - pip install --force-reinstall -v "Pymongo==3.12.3"
    - pip install --force-reinstall -v "Sqlparse==0.2.4"

    **Now do database migration**

    if you already have a database from before (if starting fresh skip to next part)
        - drop the database from mongodb
        - go to migration folder in trackerapp folder
        - delete 0.0001 py
    
    do this commands below to finish setting up migration
    * commands below starting from the main folder
    - cd backend
    - python -m manage makemigrations trackerapp
    - python -m manage migrate trackerapp
    * refresh mongodb to see if the db is re-created
    * restart/start backend

    **To start backend from main folder**
    start the virtual environment first (if not already)
    - python -m pipenv shell
    then go to backend folder (ignore this if you're already in backend) using -> ( cd backend )
    run this command to start the backend
    - python -m manage runserver 
    Your backend should be running by now if you see no errors inside the terminal
