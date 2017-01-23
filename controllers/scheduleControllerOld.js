var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');
var dateFormat = require('dateformat');
var today = new Date();

//Returns all the Jobs for a given User
router.get('/user/:userName', function(req,res) {
    models.Schedule.findAll({ 
      include: [
        { 
          model : models.User,
          where: { username: req.params.userName} 
        },
        {
          model:  models.Job 
        }
      ],
    where: 
      { 
        startDate:
        {
          $gte: today
        }
      },
    order: 'startDate, startTime'

    }).then(function(data){
    var jobList = [];

    for(var i=0; i< data.length; i++){
      var job = {};
        job.id = data[i].id;
        job.startDate = dateFormat(data[i].startDate, "isoDateTime");
        job.startTime = data[i].startTime;
        job.endTime = data[i].endTime;
        job.jobName = data[i].Job.name;
        job.jobAdd = data[i].Job.address;
        job.jobCity = data[i].Job.city;
        job.jobState = data[i].Job.state;
        job.jobZip = data[i].Job.zip;
        

        jobList.push(job)
      }
     res.json(jobList)
  })

});

//Returns a Schedule for a given Id
router.get('/schedule/:scheduleId', function(req,res) {
  vSchId = req.params.scheduleId;

  models.Schedule.findOne({
    include: [
        { 
          model : models.User
        },
        {
          model:  models.Job 
        }
      ],
    where: {
      'id' : vSchId
    }
  }).then(function(data){
   
  var vSchedule = {};
    vSchedule.id = data.id;
    vSchedule.startDate =data.startDate;
    vSchedule.startTime = data.startTime;
    vSchedule.endTime = data.endTime;
    vSchedule.JobId = data.JobId;
    vSchedule.UserId = data.UserId;
    vSchedule.jobname =data.Job.name;
    vSchedule.jobcity =data.Job.city;
    vSchedule.firstname = data.User.firstname;
    
    res.json(vSchedule);
  })
});


//Returns a User's Schedule
router.get('/user/today/:userName', function(req,res) {

    models.Schedule.findAll(
      { include: [
        { 
          model : models.User,
          where: { username: req.params.userName} 
        },
        {
          model:  models.Job 
        }
      ] ,
      where: 
      { startDate: today }

    }).then(function(data){

    var jobList = [];

    for(var i=0; i< data.length; i++){
      var job = {};
      job.id = data[i].id;
      job.startDate = dateFormat(data[i].startDate, "isoDateTime");
      job.startTime = data[i].startTime;
      job.endTime = data[i].endTime;
      job.jobName = data[i].Job.name;
      job.jobAdd = data[i].Job.address;
      job.jobCity = data[i].Job.city;
      job.jobState = data[i].Job.state;
      job.jobZip = data[i].Job.zip;
      
      jobList.push(job)
    }
       res.json(jobList)
  })
});

//Returns a User's Schedule for a given Date
router.get('/user/:userName/:searchDate', function(req,res) {

    models.Schedule.findAll(
      { include: [
        { 
          model : models.User,
          where: { username: req.params.userName} 
        },
        {
          model:  models.Job 
        }
      ] ,
      where: 
      { startDate: req.params.searchDate }

    }).then(function(data){

    var jobList = [];

    for(var i=0; i< data.length; i++){
      var job = {};
      job.id = data[i].id;
      job.startDate = dateFormat(data[i].startDate, "isoDateTime");
      job.startTime = data[i].startTime;
      job.endTime = data[i].endTime;
      job.jobName = data[i].Job.name;
      job.jobAdd = data[i].Job.address;
      job.jobCity = data[i].Job.city;
      job.jobState = data[i].Job.state;
      job.jobZip = data[i].Job.zip;
      
      jobList.push(job)
    }
       res.json(jobList)
  })
});

module.exports = router;