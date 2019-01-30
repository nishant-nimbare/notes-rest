# notes-rest
### A node js REST api for note management system

## Instalation

* install dependencies:<br>
  `npm install`

* Mongo DB
  To create a local instance of mongo download it [here](https://www.mongodb.com/)<br>
  
  `mongod --dbpath 'path to the folder'` <br>

  this will start the server at localhost:27017 all the file will be stored in the folder specficed above

  Or create a server based instanced 
  you can use [mLab](https://mlab.com/home) to create a db for free

  give the url of the database in app.js <br>
  
  `const url = ' your_DB_url';`

* start server <br>

  `node app.js`


the api is live at https://frozen-ocean-17860.herokuapp.com/notes

## features

* CRUD for notes
    each note has title desription and category

* Users database
    login and signup done

* Json Web Token 
    added token based authentication 
    user get a token on successful login and sign up


## TODO
* add user id to notes model
* return user specific notes based on token 
* encrypt passwords
* use public and private keys for jwt secret 
