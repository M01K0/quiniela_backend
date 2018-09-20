# Quiniela World Cup - backend

[![Woonkly](https://woonkly.com/img/email-assets/powered-by.png)](https://woonkly.com)

This API was designed to built a Quiniela between YouTubers. The rules that we used are:
  - The Quiniela only accepts new entries for  a limited time, in that time the YouTuber has to fill a form to be able to participate.
  - Then, the Youtuber chooses the teams that he thinks are going to finish in the first, second and third place.

This API was designed by the Woonkly team in Guadalajara, Jalisco, México.

### Technologies you will be needing.

In order to use this API properly, you will be needing this technologies:

* [Node.js](https://nodejs.org/en/) - Cross-platform, open source runtime environment for the server layer.
* [MongoDB](https://www.mongodb.com/) - Document-oriented NoSQL database system.
* [Express](http://expressjs.com/) - Fast node.js network app framework.
* [Mongoose](http://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js.

### Node.js Installation.

The API requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd backend_quiniela
$ npm install -d
$ node index.js
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### MongoDB Instalation.
Donwload the set-up file from the [MongoDB webpage](https://www.mongodb.com/) and follow the instructions.

When you have finished all the installation add the bin path to your Environment Variables. Open the Terminal and enter the following command:
```sh
$ mongod
```
Once you entered the command, you need to keep open the Database server while you use the API.

### Mongoose Instalation.
To install Mongoose you need to open the Terminal and access to the API´s dir:
```sh
$ cd backend_quiniela
$ npm install mongoose --s
```
When you have done that, in order to user the module, you simply type in your code:
```sh
var mongoose = require('mongoose');
```
### Want to import our existing DBs?
If you want to use our existing Teams DB (contains the 32 teams participating in Russia´s World Cup) and Youtubers DB (contains 1 test user), you can import the files "teamsDB.json" and "youtubers.json" to MongoDB. Just open your computer´s terminal and enter this comand:
```sh
$ mongoimport --db your_new_db_name --collection teams --file teamsDB.json_path
$ mongoimport --db your_new_db_name --collection youtubers --file youtubers.json_path
```
After that your MongoDB server should have a new database with the 2 collections.

### Setting the database to use and the server port.
You can set the DB and the port in the API by changing creating a file _config.js_ in a _config_ directory.

**NOTE:** You need to know the port MongoDB uses to make all the changes in the database (By default, MongoDB always uses port 27017).

Example:
```sh
module.exports = {
    DATABASE_URL : 'mongodb://localhost:27017/my_DB_Name',
    PORT : 8150
}
```