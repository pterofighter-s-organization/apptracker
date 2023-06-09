
# Job-Application-Tracker-App

Job tracker app is a tool that helps manage all job applications in one place. It simplifies the process of keeping track of the companies and positions you've applied to, as well as the status of each application. You can also use the app to manage tasks and take notes for each job application, making it easier to follow up with employers and future appointments. 

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
<p>Open "Code" button and select clone using HTTPS or SSH, copy the url.</p>
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
<pre>- If these two aren't in the exact version, use these commands, else skip these</pre>
<code>
pip install --force-reinstall -v "Pymongo==3.12.3"
pip install --force-reinstall -v "Sqlparse==0.2.4"
</code>
<br><br>
