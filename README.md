# recipeBook
A place where users can post recipes and share them with the world!

## Table of Contents
- [Application Description](#application-description)
- [Application Organization](#application-organization)
- [Running The Application](#running-the-application)
- [Usage](#usage)
- [Technology](#technology)
- [Contributors](#contributors)
- [Screenshot](#screenshot)
- [Application Link](#application-link)

## Application Description:
This applicaiton is basically a food blog where people can post and share food recipes with their friends. Luke, Trevon, and Jacek came up with this idea for our application after discussing how they do not like forgetting recipes to dishes they really enjoyed. I joined the group after they had finalized this idea for the applicaiton. Users can use this application to interact with each other by leaving comments on recipes they tried for themsleves. In conclusion, the problem that this application solves is allowing users to have an online cookbook where they can store recpies they really liked without forgetting them later on.

## Application Organization:
Luke and I were given the task of getting the database and the routes working for the application. We split the responsibility of creating the tables for the database between us initally with me creating the User model and Luke creating the Recipes/Comments models. After we were both done with the models we both took on different assignments in creating the other parts of our database. Luke took on the responsiblity of using axios base code to upload pictures of the recipies to one of the pages we created for the blog. I took on the responsiblity to get our database seeded along with creating a mongoose based session so the application could tell when a user logged in. Throughtout the whole process we consistently communicated with each other if we ever needed to ask each other questions about errors that we needed to solve.

Jacek and Trevon took on the tasks associated with organinzing the front end part of our food blog. Trevon was the one who was in charge of using CSS elements along with the react app stylesheet to design our food blog. Trevon was also in charge of making our food blog look good on multiple devices such as ipads and tablets. Jacek had the responsibility of adding functionality to our food blog. The functionality Jacek added to our food blog was giving the user the ability to post recipes, leave comments on other recipies, and login.

The main element that helped us the most in getting our food blog organized by the deadline was all of us communicating with each other if we ever need help in getting errors with the food blog fixed.

## Running The Application:
The first thing needed to ensure that our food blog runs on another computer is that the other computer has a few apps downloaded onto it already. The apps the other computer will need to have downloaded if necessary are Google Chrome, Visual Studio Code, Node.js, and Gitbash. The download links to each of these is listed below.
- <a href="https://www.google.com/chrome/">Google Chrome Download</a>
- <a href="https://code.visualstudio.com/docs/setup/setup-overview">Visual Studio Code Download</a>
- <a href="https://nodejs.org/en/">Node.js Download</a>
- <a href="https://git-scm.com/downloads">Gitbash Download</a>

The next step is to download the source code from our group repository onto the computer. Visual Studio Code is the application used to download the code onto the other computer. An in app feature of visual studio code called the terminal is where we will type the command used to clone the actual code. On the right hand side of the terminal there will be an arrow with the word powershell next to it. Cick on the dropdown arrow above powershell to change powershell to gitbash. Gitbash is an application that shows what branch the code belongs to when you download the code in the terminal. A link on how to connect gitbash to visual studio code is listed below. The link to our github repository will be listed below the link to the youtube video.
- <a href="https://www.youtube.com/watch?v=5CnTKT2UEn4">Gitbash Tutorial Video</a>
- <a href="https://github.com/Luke-Munoz/recipeBook">Food Blog Repository</a>

The group repository has a green code button that lists different option links to donwload the code from the repository. The option that needs to be chosen is the https option because it does not require a security key. After copying the link type the command git clone in visual studio codes terminal. Right click to copy the link in the terminal after typing git clone. After copying the link to the terminal the entire command inside the terminal should be git clone https://github.com/Luke-Munoz/recipeBook.git. Hit enter to download the code. 

After downloading the code packages from the Node.js library will need to be downloaded. To download all of the packages necessary for our food blog simply type the command npm i in visual studio codes terminal. This command will install all of the packages listed in the package.json file and make the code run. To make the application load in your computers web browser simply type npm run develop in the terminal after downloading the Node.js packages. Enjoy our blog

## Usage
As mentioned in the descirpiton the usage of this app is ment to be a place where people can post any recpie of their choice and share it with the world. We alos hope that those who reply to the recipes on our applicaiton do so in a manner that is professional and polite. Ultimately we hope our website is used for good and that people can share their love of food.

## Technology
The technology we used was a mongoose database and a restful api for th backend. the specific technologies that were used were Node.js, React, Javascript, HTML, and Insomnia to test the routes once the routes were completed.

## Contributors
Luke and I were given the responsibility of getting the backend up and running which meant we had to do all of the routes that would get the data we needed. Trevon was a master at designing the front end of our application. He has amazing designing skills and is really good at making things appear very nice and orderly. Jacek was our person that connected the front end with the back end as our full stack developer. He has done amazing work on this project. Throughout we were able to come together and work through the majority of our errors.

## Screenshot
<img src="./images/2021-10-03.png" />

## Application Link
<a href="http://evening-citadel-70565.herokuapp.com/">Link to Applicaiton</a>

