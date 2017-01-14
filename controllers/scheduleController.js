var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');

router.get('/user', function(req,res) {
  console.log("inside user Schedule");
  console.log(JSON.stringify(req.body));
 	console.log(req);

  	models.Schedule.findAll({
    include: [
      { 
        model : models.User,
        where: { username: req.body.username} 
      },
      {
        model:  models.Job 
      }
    ]
  }).then(function(data){

    // var hbsObject = {
    //   userFirstName: req.session.firstName,
    //   userLastName: req.session.lastName,
    //   userzipCode:req.session.zipCode,
    //   userEmail:req.session.email,
    //   jobs: data};
    console.log(JSON.stringify(data[1]));
     res.json(data)
  })

});

module.exports = router;