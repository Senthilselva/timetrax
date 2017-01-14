var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');

router.get('/user/:userName', function(req,res) {
  console.log("inside user Schedule");
  console.log(JSON.stringify(req.params));
 	//console.log(req);

  	models.Schedule.findAll(

      { include: [
        { 
          model : models.User,
          where: { username: req.params.userName} 
        },
        {
          model:  models.Job 
        }
      ]
    }).then(function(data){
    var jobList = [];
    var job = {};

    for(var i=0; i< data.length; i++){
    console.log(data[i].startDate+" "+ 
                data[i].startDate+" "+
                data[i].Job.name);

    job.startDate = data[i].startDate;
    job.startTime = data[i].startTime;
    job.jobName = data[i].Job.name;
    job.jobAdd = data[i].Job.address;

    jobList.push(job)
  }
     res.json(jobList)
  })

});

module.exports = router;