const config = require('../../config/database');
const log = require('../log');
const Manager = require('../../models/manager');

/**
 * @api {get} /data/company Get List of created Company
 * @apiName Get Vehicule Info
 * @apiGroup Data
 *
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} company An array of company
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *			"success: true,
 *			"company": [
 *			 "Total",
 *			 "Fromage"
 *			]
 *     }
 *
 * @apiError APIInternalError An error occured within the API please contact the admin
 *
 * @apiErrorExample APIInternalError:
 *     HTTP/1.1 500 Internal Error
 *     {
 * 	 "success": false,
 *       "error": "APIInternalError"
 *     }
 */

module.exports =
function (req, res) {
    Manager.find({}, function(err, manager) {
        if (err)
        {
            log("Error when get Manager", "INFO", "getCompany");
            res.status(400).json({success: false, error: 'APIInternalError'});
        }

        let company = [];
        for(let i = 0; i < manager.length; i++)
        {
            if (manager[i].company)
                company.push(manager[i].company);
        }

        log("Company returned success", "INFO", "getCompany");
        res.status(200).json({success: true, company});
    })
}
