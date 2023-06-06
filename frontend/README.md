# To use the frontend

    Go to frontend folder
    - cd /apptracker/frontend 
    
    install the tools
    - npm install
        **If doesn't work, just install these**
        - npm install bootstrap@5.3.0-alpha3
        - npm i react-router-dom
        - npm install moment
        - npm i bootstrap-icons
        - npm install jquery
        - npm install moment-timezone --save

    start it
    - npm start

# To use the backend

    Database migration
    - drop the database from mongodb
    - go to migration folder in trackerapp folder
    - delete 0.0001 py
    * commands below starting from the main folder
    - cd apptracker
    - python -m manage makemigrations trackerapp
    - python -m manage migrate trackerapp
    * refresh mongodb to see if the db is re-created
    * restart backend using this command
    - python -m manage runserver 

# For v1 (In progress)
    - made a dropdown button for changing status
    - made a collapse blur to make sure there's no infinite scrolling
    - made a resize window detection to automatically adjust the collapse
    - made a formula to calculate if theres a need of collapse - based on how many cards it can display on that width
    - task table collapse will automatically be gone if interviewing apps < 3
    - cards sort from the most update to outdated
    - tasks sort from the earliest to latest
    - make measurements for calculating when to have preview collapses in dashboard (fully finish - shouldn't be edited)
        - this is being replaced by something much more simplified and reliable, in learning.md

    Dashboard fully finished (5/2/2023 5:51am)
        (Task to do in making it better)
        - can add the quantities of apps and tasks 
        - make a toolstip or that small bubble to show that a status is updated

        Temp solutions (must implement)
        - solution : make it show sections by sections / or make a button on the top right of the section to close
    

    Starting navbar fully finished (5/3/2023 1:00am)

    Starting the app individual page finished (5/8/2023 5:00pm) to (5/10/2023 4:00am)
        - clean up the code
        - update title of the page in dashboard (finished)
        - add a modal for the creating appointment
        - add notes 
        - add shortcuts to different parts of the page and a edit button with it
        - change all task to equal priority and color too

        - reason why salary range is a string because i want the same easy feeling of typing into a spreadsheet but not the crammed ui of it

    Starting form (5/10/2023 10:00am)
        - redo all data to match json version in backend

    Individual App pages
        Interview prep
        - maybe dont need to do interview questions, just make them upload a pdf or a google link to their prep (finished)
        - or a button saying they prep already
        - add tasks for accepted apps


# For v2 (After v1 finishes)
    - history list of status updated (for individual app pages)

    Dashboard (v2)
    - make tabs in dashboard for (apps, tasks, etc) instead of the version 1 ui (top-down collapse)
    - the tasks could be on the bottom of the tabs or be one of the tabs
    - make the create app button inside the app list after we start using tabs


