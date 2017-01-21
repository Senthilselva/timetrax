var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');
var moment =require('moment');

//enter a new record into the timesheet table with out the end time
router.post("/create", function(req,res){
  var newtimesheet = {};
  newtimesheet.JobId = req.body.JobId;
  newtimesheet.UserId = req.body.UserId;
  newtimesheet.clockedInDate = new Date(req.body.clockIn);
  newtimesheet.clockedIn = new Date(req.body.clockIn);

  models.Timesheet.create(newtimesheet).then(function(data){
    // create a row in the database
    res.json(data)
  });
 
})

router.post("/update", function(req,res){
  var cardId = req.body.cardId;
  var clockOut = new Date(req.body.clockOut);

    models.Timesheet.update({
      clockedOut : clockOut
    }, {
      where: {
       id : cardId
        }
    }).then(function(data,err){
    
      res.json(data)
  })

  });

router.get('/user/:userName', function(req,res) {

    models.Timesheet.findAll(

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
    
    for(var i=0; i< data.length; i++){
      var job = {};
      console.log("Time in: ", data[i].clockedInDate);
      console.log("Time out: ", data[i].clockedOutDate);
      job.id = data[i].id;
      job.clockedInDate = moment(data[i].clockedInDate).format('L');
      job.clockIn = moment(data[i].clockedIn, format("hh:mm"));
      job.clockOut = moment(data[i].clockedOut, format("hh:mm"));
      job.jobName = data[i].Job.name;

      jobList.push(job)
    }
    res.json(jobList)
  })

});


module.exports = router;