
# Job-Application-Tracker-App

Job tracker app is a tool that helps manage all job applications in one place. It simplifies the process of keeping track of the companies and positions you've applied to, as well as the status of each application. You can also use the app to manage tasks and take notes for each job application, making it easier to follow up with employers and future appointments. 

<h2>Contributors</h2>
<blockquote>
Kelvin Chan (chan34kelvin)
and
Damon Chen (peterofighter)
</blockquote>

<h1>To Use This Application</h1>
<p>The following instructions will help you setup this application to run in the local machine</P>

<h2>Prerequisites</h2>
<p>Have these installed before approaching the next steps</p>
<pre>
- Have mongoDBCompass installed on your computer
- Have python 3.9.7 or up, check inside terminal using the command below
</pre>
<code>python --version</code>

<h2>Cloning From Repo</h2>
<p>Open "Code" button and select clone url in HTTPS or SSH, copy the url.</p>
<pre>- Open your terminal to a desired directory and type</pre>
<code>git clone "copied url"</code>
<br><br>
<p>After you finish entering your github credentials, the folder should be created inside the directory</p>
<pre>- Do this command to enter the repo folder</pre>
<code>cd apptracker</code>
<br><br>
<p>Stay inside apptracker directory, this is where we install the appropriate tools</p>

<h2>Tool Installations</h2>
<pre>- Install the virtual environment for backend</pre>
<code>pip install pipenv</code>
<br><br>
<pre>- Activate the virtual environment</pre>
<code>python -m pipenv shell</code>
<br><br>
<pre>- Install the following inside the environment</pre>
<code>pipenv sync
pip install djongo
pip install --force-reinstall -v "Pymongo==3.12.3"</code>
<br><br>
<pre>- Do the command below to check the following tool versions</pre>
<code>pip list</code>
<br><br>
<pre>
Package             Version
------------------- --------
asgiref             3.7.0
certifi             2023.5.7
distlib             0.3.6
Django              4.1.9
django-cors-headers 4.0.0
djangorestframework 3.14.0
djongo              1.3.6
dnspython           2.3.0
filelock            3.12.0
pip                 23.1.2
pipenv              2023.6.2
platformdirs        3.5.1
pymongo             3.12.3
pytz                2023.3
setuptools          67.7.2
sqlparse            0.2.4
tzdata              2023.3
virtualenv          20.23.0
virtualenv-clone    0.5.7
wheel               0.40.0
</pre>

<p>Everything doesn't have to be exact versions except,</p>
<pre>
- sqlparse = 0.2.4
- pymongo = 3.12.3
</pre>
<p>If these two aren't in the exact version, use these commands, else skip these.</p>
<code>pip install --force-reinstall -v "Pymongo==3.12.3"
pip install --force-reinstall -v "Sqlparse==0.2.4"
</code>

<h2>Database Setup And Migrations</h2>
<pre>- Go to backend directory using this command</pre>
<code>cd backend</code>
<h3>Step 1 :</h3>
<pre>- Use these commands to finish setting up/ migrating</pre>
<code>python -m manage makemigrations trackerapp
python -m manage migrate trackerapp</code>

<h3>Step 2 :</h3>
<pre>- Open mongoDBCompass app, connect and check/refresh to see if apptracker database is created</pre>

<h3>Step 3 :</h3>
<pre>Start the backend</pre>

<h3>Step : Only For Replacing Old Db With New</h3>
<p>This is to clean up an existing database. Skip this if you're newly setting up the database.</p>
<pre>- Go to mongoDBCompass app, connect to the database and find apptracker database then drop it</pre>
<pre>- Go to migration folder inside trackerapp folder and delete 0.0001 py</pre>
<pre>- Start from step 1 above</pre>

<h2>Starting Backend</h2>
<pre>- If virtual environment not activiated, do this in the main github folder.</pre>
<pre>- Skip this if your environment already activated</pre>
<code>python -m pipenv shell</code>
<br><br>
<pre>- Check pip list, make sure it matches the pip list reqs. above</pre>
<pre>- Run this command inside the backend folder</pre>
<code>cd backend
python -m manage runserver</code>
<br><br>
<p>Backend should be running if there isn't any errors showing up, now start the frontend</p>

<h2>Starting Frontend</h2>
<h3>Step 1 : Skip to step 2 if you already done this</h3>
<p>If you're new, please do the following commands</p>
<pre>- Go to frontend folder, if you're in backend folder, do cd .. to backtrack into parent directory</pre>
<pre>- From main folder apptracker, do this command</pre>
<code>cd frontend</code>
<br><br>
<pre>Install the tools for frontend with one command</pre>
<code>npm install</code>
<br><br>
<pre>- In case the tools didn't successfully install, here is the list of tools used in frontend</pre>
<pre>- Skip this if npm install was successful</pre>
<code>npm install bootstrap@5.3.0-alpha3
npm i react-router-dom
npm install moment
npm i bootstrap-icons
npm install moment-timezone --save</code>
<h3>Step 2:</h3>
<pre>- Make sure you're in frontend directory and start it using this command</pre>
<code>npm start</code>
<br><br>
<pre>- If a page pops up without errors, frontend is loaded successfully.</pre>

<p>After you did a npm install once, you can start from step 2 and skip step 1 to start the frontend.</p>

