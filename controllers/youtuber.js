'use strict'

var YouTuber = require('../models/youtuber');

/**
 * @api {post} /user Adds a new user to the database.
 * @apiVersion 0.0.1
 * @apiName addUser 
 * @apiGroup YouTuber
 * 
 * @apiExample {curl} Example usage:
 *    curl --H "Content-Type: application/json" --d '{"name":"Daniel Santos","email":"mr_santos@gmail.com"}' http://localhost:8080/api/user
 * 
 * 
 * @apiSuccess {String} _id The YouTuber´s ID in the database.
 * @apiSuccess {String} name Name of the YouTuber.
 * @apiSuccess {String} email Email of the YouTuber.
 * @apiSuccess {Object[]} countries Array of the countries based on the YouTuber´s opinion (3).
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "_id": "5b203017ae97361d1d7dd45e",
 *      "name": "Adolf Schmidt",
 *      "email": "user@user.com",
 *      "countries":[{"team":"Germany", "place": 1},{"team":"Mexico", "place": 2},{"team":"Spain", "place": 3}]
 *  }
 * 
 * @apiError RequestError There was an error in the request.
 * @apiErrorExample {json} RequestError-Response:
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "message" : "Server error."
 *      }
 * 
 * @apiError SavingError The YouTuber couldn´t be saved.
 *  * @apiErrorExample {json} SavingError-Response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message" : "Error while saving."
 *      }
 */
function addUser(req, res){
    
    var youtuber = new YouTuber();

    var params = req.body;
    youtuber.email = params.email;
    youtuber.name = params.name;

    youtuber.save((err, storedUser) => {
        if(err){
            res.status(500).send({mesage:'Server error.'});
        }else{
            if(!storedUser){
                res.status(404).send({message:'Error while saving.'});
            }else{
                res.status(200).send(storedUser);
            }
        }
    });
}

/**
 * @api {put} /user/:id Updates the information of a YouTuber of the database.
 * @apiVersion 0.0.1
 * @apiName updateUser 
 * @apiGroup YouTuber
 * 
 * @apiExample {curl} Example usage:
 *    curl --H "Content-Type: application/json" --d '{"name":"Daniel Santos","email":"mr_santos@gmail.com"}' http://localhost:8080/api/user/5b219328bb97521e08a4ff0c
 * 
 * @apiParams {String} _id The YouTuber´s ID which you want to update.
 * 
 * @apiSuccess {String} _id The YouTuber´s ID in the database.
 * @apiSuccess {String} name Name of the YouTuber.
 * @apiSuccess {String} email Email of the YouTuber.
 * @apiSuccess {Object[]} countries Array of the countries based on the YouTuber´s opinion (3).
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "_id": "5b203017ae97361d1d7dd45e",
 *      "name": "Adolf Schmidt",
 *      "email": "user@user.com",
 *      "countries":[{"team":"Germany", "place": 1},{"team":"Mexico", "place": 2},{"team":"Spain", "place": 3}]
 *  }
 * 
 * @apiError RequestError There was an error in the request.
 * @apiErrorExample {json} RequestError-Response:
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "message" : "Server error."
 *      }
 * 
 * @apiError UpdatingError The YouTuber couldn´t be updated.
 *  * @apiErrorExample {json} UpdatingError-Response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message" : "Couldn´t update the user.."
 *      }
 */
function updateUser(req, res){
  
    var youtuberId = req.params.id;
    var update = req.body;

    YouTuber.findByIdAndUpdate(youtuberId, update, {new:true}, (err,updatedUser) =>{
        if(err){
            res.status(500).send({message: 'Server error.'});
        }else{
            if(!updatedUser){
                res.status(404).send({message: 'Couldn´t update the user.'});
            }else{
                res.status(200).send(updatedUser)
            }
        }
    });
}

/**
 * @api {get} /users Get all the YouTubers of the database.
 * @apiVersion 0.0.1
 * @apiName getUsers 
 * @apiGroup YouTuber
 * 
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:8080/api/users
 * 
 * @apiParams {String} _id The YouTuber´s ID which you want to get.
 * 
 * @apiSuccess {String} _id The YouTuber´s ID in the database.
 * @apiSuccess {String} name Name of the YouTuber.
 * @apiSuccess {String} email Email of the YouTuber.
 * @apiSuccess {Object[]} countries Array of the countries based on the YouTuber´s opinion (3).
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "_id": "5b203017ae97361d1d7dd45e",
 *      "name": "Adolf Schmidt",
 *      "email": "user@user.com",
 *      "countries":[{"team":"Germany", "place": 1},{"team":"Mexico", "place": 2},{"team":"Spain", "place": 3}]
 *  }
 * 
 * @apiError RequestError There was an error in the request.
 * @apiErrorExample {json} RequestError-Response:
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "message" : "Server error."
 *      }
 * 
 * @apiError YouTubersNotFound The Database doesn´t have YouTubers.
 *  * @apiErrorExample {json} YouTubersNotFound-Response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message" : "No YouTubers found."
 *      }
 */
function getUsers(req, res){

    YouTuber.find({},(err, youtuber) => {
        if(err){
            res.status(500).send({message: 'Server error.'});
        }else{
            if(!youtuber){
                res.status(404).send({message: 'No YouTubers found.'});
            }else{
                res.status(200).send(youtuber);
            }
        }
    });
}

/**
 * @api {get} /users/:id Get the YouTuber who has the specified ID in the database.
 * @apiVersion 0.0.1
 * @apiName getUserById 
 * @apiGroup YouTuber
 * 
 *  * @apiExample {curl} Example usage:
 *     curl -i http://localhost:8080/api/users/5b219328bb97521e08a4ff0c
 * 
 * @apiSuccess {String} _id The YouTuber´s ID in the database.
 * @apiSuccess {String} name Name of the YouTuber.
 * @apiSuccess {String} email Email of the YouTuber.
 * @apiSuccess {Object[]} countries Array of the countries based on the YouTuber´s opinion (3).
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "_id": "5b203017ae97361d1d7dd45e",
 *      "name": "Adolf Schmidt",
 *      "email": "user@user.com",
 *      "countries":[{"team":"Germany", "place": 1},{"team":"Mexico", "place": 2},{"team":"Spain", "place": 3}]
 *  }
 * 
 * @apiError RequestError There was an error in the request.
 * @apiErrorExample {json} RequestError-Response:
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "message" : "Server error."
 *      }
 * 
 * @apiError YouTubersNotFound The Database doesn´t have YouTubers.
 *  * @apiErrorExample {json} YouTubersNotFound-Response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message" : "YouTuber ID not found."
 *      }
 */
function getUserById(req,res){
    
    var youtuberId = req.params.id;
    YouTuber.findById(youtuberId,(err,user) => {
        if(err){
            res.status(500).send({message: 'Server error.'});
        }else{
            if(!user){
                res.status(404).send({message: 'YouTuber ID not found.'});
            }else{
                res.status(200).send(user);
            }
        }
    });
}

module.exports = {
    addUser,
    updateUser,
    getUsers,
    getUserById
}