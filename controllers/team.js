'use strict'

//Models
var Team = require('../models/team');

/**
 * @api {get} /equipos Get all the teams that will be participating in the World Cup.
 * @apiVersion 0.0.1
 * @apiName getTeams 
 * @apiGroup Team
 * 
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:8080/api/equipos
 * 
 * @apiSuccess {String} _id The team´s ID in the database.
 * @apiSuccess {String} country Name of the team´s country.
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "_id": "5b203017ae97361d1d7dd45e"
 *      "country": "Germany"
 *  }
 * 
 * @apiError RequestError There was an error in the request.
 * @apiErrorExample {json} RequestError-Response:
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "message" : "Request error."
 *      }
 * 
 * @apiError NoTeamsFounds There were no teams in the database.
 *  * @apiErrorExample {json} NoTeamsFound-Response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message" : "No teams found."
 *      }
 */
function getTeams(req, res)
{
    Team.find({},(err, teams) => {
        if(err){
            res.status(500).send({message: 'Request error.'});
        }else{
            if(!teams){
                res.status(404).send({message: 'No teams found.'});
            }else{
                res.status(200).send(teams);
            }
        }
    });
}

module.exports = {
    getTeams
}