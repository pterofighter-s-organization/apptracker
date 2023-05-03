# To use the frontend

    Go to frontend folder
    - cd /apptracker/frontend 
    
    install the tools
    - npm install
        **If doesn't work, just install these**
        - npm install bootstrap@5.3.0-alpha3
        - npm i react-router-dom
        - npm install moment

    start it
    - npm start

# For v1 (In progress)
    - made a dropdown button for changing status
    - made a collapse blur to make sure there's no infinite scrolling
    - made a resize window detection to automatically adjust the collapse
    - made a formula to calculate if theres a need of collapse - based on how many cards it can display on that width
    - task table collapse will automatically be gone if interviewing apps < 3
    - cards sort from the most update to outdated
    - tasks sort from the earliest to latest

    Dashboard fully finished (5/2/2023 5:51am)
        - make a vars file to store all global vars used throughtout helper and main file
        - can add the quantities of apps and tasks 
        - make a toolstip or that small bubble to show that a status is updated

        Temp solutions (must implement)
        - making it a scroll for users dont wanna expand whole thing
        - solution : make it show sections by sections / or make a button on the top right of the section to close
    

    Starting navbar (5/2/2023 10:00am)
    make description use collapse in bootstrap
    update title of the app in dashboard

# For v2 (After v1 finishes)
    - history list of status updated

    Dashboard (v2)
    - make tabs in dashboard for (apps, tasks, etc) instead of the version 1 ui (top-down collapse)
    - the tasks could be on the bottom of the tabs or be one of the tabs
    - make the create app button inside the app list after we start using tabs


