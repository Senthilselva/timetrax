var express = require('express');
var app = express();
var sequelize = require('sequelize');
var db = require('../models');
var conn = db.sequelize;
var testpassword = "$2a$10$h15NwI.bM/5.3Iy.BHfIoe9MZSaGfYsXMTxjrgfA9UOJokn5MjUHa"; //testpassword = "test"
var testsalt = "$2a$10$h15NwI.bM/5.3Iy.BHfIoe";

// =======================================================================
// PREPARE OUR TABLES 
// ======================================================================
conn.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
	return conn.sync({force:true});
})

// =======================================================================
// ADD Users
// =======================================================================
.then(function(){
	return db.User.create(
	{
		username: "admin@timetrax.com",
		role: "admin",
		firstName: "Admin",
		lastName: "User",
		password: testpassword,
		salt: testsalt,
		address: "123 Paradise Ln.",
		city:"Heaven",
		state:"NJ",
		zip:"08812",
		email: "admin@timetrax.com",
		phone: "(732) 979-7252",
		ssn: "000-00-0000"
	});
})
.then(function(){
	return db.User.create(
	{
		username: "gudiaz@optonline.net",
		role: "employee",
		firstName: "Graciela",
		lastName: "Diaz",
		password: testpassword,
		salt: testsalt,
		address: "123 Paradise Ln.",
		city:"Heaven",
		state:"NJ",
		zip:"08812",
		email: "gudiaz@optonline.net",
		phone: "(732) 979-7252",
		ssn: "111-22-3333"
	});
})
.then(function(){
	return db.User.create(
	{
		username: "odcikin@msn.com",
		role: "employee",
		firstName: "Zeynep",
		lastName: "Ozdemir",
		password: testpassword,
		salt: testsalt,
		address: "123 Paradise Ln.",
		city:"Heaven",
		state:"NJ",
		zip:"06512",
		email: "odcikin@msn.com",
		phone: "(609) 216-0011",
		ssn: "222-33-4444"
	});
})
.then(function(){
	return db.User.create(
	{
		username: "senthilselvak@gmail.com",
		role: "employee",
		firstName: "Senthil",
		lastName: "Selvakumar",
		password: testpassword,
		salt: testsalt,
		address: "123 Paradise Ln.",
		city:"Heaven",
		state:"NJ",
		zip:"08817",
		email: "senthilselvak@gmail.com",
		phone: "(201) 993-2892",
		ssn: "333-44-5555"
	});
})
// =======================================================================
// ADD Company Info 
// =======================================================================
.then(function(){
	return db.Company.create(
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
	return db.Job.create(
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
	return db.Job.create(
	{
		name: "Maplewood Country Club",
		address: "28 Baker St",
		city:"Maplewood",
		state:"NJ",
		zip:"07040",
		contactName: "Mark Crisafi",
		contactPhone: "(973) 762-0215",
		contactEmail: "markcrisafi@maplewoodcc.com"
	});
})
.then(function(){
	return db.Job.create(
	{
		name: "Fiddlers Elbow Country Club",
		address: "811 Rattlesnake Bridge Road",
		city:"Bedminster",
		state:"NJ",
		zip:"07921",
		contactName: "Tommie",
		contactPhone: "(908) 439-2123",
		contactEmail: "tommie@fiddlerscc.com"
	});
})
.then(function(){
	return db.Job.create(
	{
		name: "Brook Hill Swim Club",
		address: "18 Drift Rd",
		city:"Watchung",
		state:"NJ",
		zip:"07069",
		contactName: "Mark",
		contactPhone: "(908) 322-8825",
		contactEmail: "mark@brookhill.com"
	});
})
// =======================================================================
// ADD Schedule 
// =======================================================================
// Add Schedule for User 2 -------------
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "1",
		startDate: "2017-01-20",
		startTime: "09:00:00",
		endTime: "12:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "2",
		startDate: "2017-01-20",
		startTime: "14:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "1",
		startDate: "2017-01-21",
		startTime: "13:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "1",
		startDate: "2017-01-22",
		startTime: "12:30:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "1",
		startDate: "2017-01-23",
		startTime: "10:00:00",
		endTime: "12:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "2",
		startDate: "2017-01-23",
		startTime: "14:00:00",
		endTime: "16:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "3",
		startDate: "2017-01-23",
		startTime: "18:00:00",
		endTime: "20:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "2",
		startDate: "2017-01-24",
		startTime: "10:00:00",
		endTime: "12:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "2",
		startDate: "2017-01-24",
		startTime: "14:00:00",
		endTime: "16:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "3",
		startDate: "2017-01-24",
		startTime: "18:00:00",
		endTime: "20:00:00"
	});
})
// Add Schedule for User 3 -------------
.then(function(){
	return db.Schedule.create(
	{
		UserId: "3",
		JobId: "1",
		startDate: "2017-01-23",
		startTime: "10:00:00",
		endTime: "14:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "3",
		JobId: "2",
		startDate: "2017-01-23",
		startTime: "15:00:00",
		endTime: "18:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "3",
		JobId: "1",
		startDate: "2017-01-24",
		startTime: "10:00:00",
		endTime: "14:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "3",
		JobId: "2",
		startDate: "2017-01-24",
		startTime: "15:00:00",
		endTime: "18:00:00"
	});
})
// Add Schedule for User 4 -------------
.then(function(){
	return db.Schedule.create(
	{
		UserId: "4",
		JobId: "3",
		startDate: "2017-01-23",
		startTime: "09:00:00",
		endTime: "11:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "4",
		JobId: "4",
		startDate: "2017-01-23",
		startTime: "13:00:00",
		endTime: "16:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "4",
		JobId: "3",
		startDate: "2017-01-24",
		startTime: "10:00:00",
		endTime: "14:00:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "4",
		JobId: "4",
		startDate: "2017-01-24",
		startTime: "15:00:00",
		endTime: "18:00:00"
	});
})
// =======================================================================
// ADD Timesheets 
// =======================================================================
// Add Timesheets for User 2 -------------
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-17",
		clockedIn: "15:05:00",
		clockedOut: "19:15:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-18",
		clockedIn: "09:59:00",
		clockedOut: "14:00:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-19",
		clockedIn: "09:55:00",
		clockedOut: "14:05:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "09:50:00",
		clockedOut: "14:15:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "15:00:40",
		clockedOut: "19:25:00"
	});
})
// Add Timesheets for User 3 -------------
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "1",
		clockedInDate: "2017-01-17",
		clockedIn: "15:05:00",
		clockedOut: "19:15:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "1",
		clockedInDate: "2017-01-18",
		clockedIn: "09:59:00",
		clockedOut: "14:00:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "1",
		clockedInDate: "2017-01-19",
		clockedIn: "09:55:00",
		clockedOut: "14:05:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "09:50:00",
		clockedOut: "14:15:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "15:00:40",
		clockedOut: "19:25:00"
	});
})
// Add Timesheets for User 4 -------------
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "4",
		JobId: "1",
		clockedInDate: "2017-01-17",
		clockedIn: "15:05:00",
		clockedOut: "19:15:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "4",
		JobId: "1",
		clockedInDate: "2017-01-18",
		clockedIn: "09:59:00",
		clockedOut: "14:00:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "4",
		JobId: "1",
		clockedInDate: "2017-01-19",
		clockedIn: "09:55:00",
		clockedOut: "14:05:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "4",
		JobId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "09:50:00",
		clockedOut: "14:15:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "4",
		JobId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "15:00:40",
		clockedOut: "19:25:00"
	});
})