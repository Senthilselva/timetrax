var express = require('express');
var app = express();
var sequelize = require('sequelize');
var models = require('../models');
var conn = models.sequelize;

// =======================================================================
// PREPARE OUR TABLES 
// =======================================================================
conn.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
	return conn.sync({force:true});
})

// =======================================================================
// ADD Company Info 
// =======================================================================
.then(function(){
	return models.Company.create(
	{
		name: "Loefler Pools",
		address: "7 Ridge Rd",
		city:"Green Brook",
		state:"NJ",
		zip:"08812",
		contactName: "Tom Loefler",
		contactPhone: "(732) 868-8069",
		contactEmail: "tom@loefflerpools.com"
	});
})
// =======================================================================
// ADD Jobs 
// =======================================================================
.then(function(){
	return models.Job.create(
	{
		name: "Trump National Golf Resort",
		address: "900 Lamington Rd",
		city:"Bedminster",
		state:"NJ",
		zip:"07921",
		contactName: "Donald Trump",
		contactPhone: "(908) 470-4400",
		contactEmail: "djtrump@trump.com"
	});
})
.then(function(){
	return models.Job.create(
	{
		name: "Maplewood Country Club",
		address: "28 Baker St",
		city:"Maplewood",
		state:"NJ",
		zip:"07040",
		contactName: "Manager Name",
		contactPhone: "(973) 762-0215",
		contactEmail: "manager@maplewoodcc.com"
	});
})
// =======================================================================
// ADD Schedule 
// =======================================================================
// Add Schedule for User 1 -------------
.then(function(){
	return models.Schedule.create(
	{
		UserId: "1",
		JobId: "1",
		startDate: "2017-01-20",
		startTime: "14:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "1",
		JobId: "2",
		startDate: "2017-01-20",
		startTime: "10:00:00",
		endTime: "12:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "1",
		JobId: "1",
		startDate: "2017-01-23",
		startTime: "14:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "1",
		JobId: "2",
		startDate: "2017-01-23",
		startTime: "10:00:00",
		endTime: "12:00:00"
	});
})
// Add Schedule for User 2 -------------
.then(function(){
	return models.Schedule.create(
	{
		UserId: "2",
		JobId: "1",
		startDate: "2017-01-23",
		startTime: "15:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "2",
		JobId: "2",
		startDate: "2017-01-23",
		startTime: "10:00:00",
		endTime: "14:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "2",
		JobId: "1",
		startDate: "2017-01-24",
		startTime: "15:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "2",
		JobId: "2",
		startDate: "2017-01-24",
		startTime: "10:00:00",
		endTime: "14:00:00"
	});
})
// Add Schedule for User 3 -------------
.then(function(){
	return models.Schedule.create(
	{
		UserId: "3",
		JobId: "1",
		startDate: "2017-01-23",
		startTime: "15:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "3",
		JobId: "2",
		startDate: "2017-01-23",
		startTime: "10:00:00",
		endTime: "14:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "3",
		JobId: "1",
		startDate: "2017-01-24",
		startTime: "15:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return models.Schedule.create(
	{
		UserId: "3",
		JobId: "2",
		startDate: "2017-01-24",
		startTime: "10:00:00",
		endTime: "14:00:00"
	});
})
// =======================================================================
// ADD Timesheets 
// =======================================================================
.then(function(){
	return models.Timesheet.create(
	{
		JobId: "1",
		UserId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "13:50:40",
		clockedOut: "18:15:00"
	});
})


