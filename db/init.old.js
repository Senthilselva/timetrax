var express = require('express');
var app = express();
var sequelize = require('sequelize');
var db = require('../models');
var moment =require('moment');

var conn = db.sequelize;
var testpassword = "$2a$10$h15NwI.bM/5.3Iy.BHfIoe9MZSaGfYsXMTxjrgfA9UOJokn5MjUHa"; //testpassword = "test"
var testsalt = "$2a$10$h15NwI.bM/5.3Iy.BHfIoe";

var today = moment();
var tomorrow = moment().add(1, 'days');
var thenextday = moment().add(2, 'days');

console.log("============================================================================================");
console.log("----- Initializing database: " );
console.log("today: " + today.format());
console.log("tomorrow: " + tomorrow.format());
console.log("thenextday: " + thenextday.format());
console.log("============================================================================================");

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
		username: "test@test.com",
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
.then(function(){
	return db.Job.create(
	{
		name: "Hickory Pools",
		address: "15 Hickory Lane",
		city:"Green Brook",
		state:"NJ",
		zip:"08812",
		contactName: "Gracie Diaz",
		contactPhone: "(732) 979-7252",
		contactEmail: "gudiaz@optonline.net"
	});
})
.then(function(){
	return db.Job.create(
	{
		name: "Jonathan Pools",
		address: "36 Jonathan Drive",
		city:"Edison",
		state:"NJ",
		zip:"08820",
		contactName: "Senthil Selvakumar",
		contactPhone: "(732) 634-2018",
		contactEmail: "senthilselvak@gmail.com"
	});
})
.then(function(){
	return db.Job.create(
	{
		name: "Hampshire Pools",
		address: "301 Hampshire Drive",
		city:"Plainsboro",
		state:"NJ",
		zip:"08536",
		contactName: "Zeynep Ozdemir",
		contactPhone: "(609) 716-0688",
		contactEmail: "odcikin@msn.com"
	});
})
// =======================================================================
// ADD Schedule 
// =======================================================================
// Add Schedule for User 1 -------------
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "1",
		startDate: "2017-01-20",
		startTime: "09:00",
		endTime: "12:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "2",
		startDate: "2017-01-20",
		startTime: "14:00",
		endTime: "18:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "1",
		startDate: "2017-01-21",
		startTime: "13:00",
		endTime: "18:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "1",
		startDate: today.format(),
		startTime: "10:00",
		endTime: "12:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "2",
		startDate: today.format(),
		startTime: "12:30",
		endTime: "17:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "3",
		startDate: today.format(),
		startTime: "18:00",
		endTime: "20:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "1",
		startDate: tomorrow.format(),
		startTime: "14:00",
		endTime: "16:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "3",
		startDate: tomorrow.format(),
		startTime: "18:00",
		endTime: "20:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "1",
		startDate: tomorrow.format(),
		startTime: "14:00",
		endTime: "16:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "3",
		startDate: tomorrow.format(),
		startTime: "18:00",
		endTime: "20:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "1",
		startDate: thenextday.format(),
		startTime: "10:00",
		endTime: "12:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "2",
		startDate: thenextday.format(),
		startTime: "12:30",
		endTime: "17:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "1",
		JobId: "3",
		startDate: thenextday.format(),
		startTime: "18:00",
		endTime: "20:00"
	});
})
// Add Schedule for User 2 -------------
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "1",
		startDate: today.format(),
		startTime: "10:00",
		endTime: "12:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "2",
		startDate: today.format(),
		startTime: "12:30",
		endTime: "17:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "3",
		startDate: today.format(),
		startTime: "18:00",
		endTime: "20:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "1",
		startDate: tomorrow.format(),
		startTime: "14:00",
		endTime: "16:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "2",
		JobId: "3",
		startDate: tomorrow.format(),
		startTime: "18:00",
		endTime: "20:00"
	});
})
// Add Schedule for User 3 -------------
.then(function(){
	return db.Schedule.create(
	{
		UserId: "3",
		JobId: "3",
		startDate: today.format(),
		startTime: "10:00",
		endTime: "14:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "3",
		JobId: "4",
		startDate: today.format(),
		startTime: "15:00",
		endTime: "18:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "3",
		JobId: "3",
		startDate: today.format(),
		startTime: "10:00",
		endTime: "14:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "3",
		JobId: "4",
		startDate: today.format(),
		startTime: "15:00",
		endTime: "18:00"
	});
})
// Add Schedule for User 4 -------------
.then(function(){
	return db.Schedule.create(
	{
		UserId: "4",
		JobId: "3",
		startDate: today.format(),
		startTime: "09:00",
		endTime: "11:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "4",
		JobId: "1",
		startDate: today.format(),
		startTime: "13:00",
		endTime: "16:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "4",
		JobId: "3",
		startDate: today.format(),
		startTime: "10:00",
		endTime: "14:00"
	});
})
.then(function(){
	return db.Schedule.create(
	{
		UserId: "4",
		JobId: "2",
		startDate: today.format(),
		startTime: "15:00",
		endTime: "18:00"
	});
})
// =======================================================================
// ADD Timesheets 
// =======================================================================
// Add Timesheets for User 2 -------------
/*.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-17",
		clockedIn: "15:05",
		clockedOut: "19:15"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-18",
		clockedIn: "09:59",
		clockedOut: "14:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-19",
		clockedIn: "09:55",
		clockedOut: "14:05"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "09:50",
		clockedOut: "14:15"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "2",
		JobId: "1",
		clockedInDate: "2017-01-20",
		clockedIn: "15:00",
		clockedOut: "19:25"
	});
})
// Add Timesheets for User 3 -------------
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "3",
		clockedInDate: "2017-01-17",
		clockedIn: "15:05",
		clockedOut: "19:15"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "3",
		clockedInDate: "2017-01-18",
		clockedIn: "09:59",
		clockedOut: "14:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "4",
		clockedInDate: "2017-01-19",
		clockedIn: "09:55",
		clockedOut: "14:05"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "4",
		clockedInDate: "2017-01-20",
		clockedIn: "09:50",
		clockedOut: "14:15"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "3",
		JobId: "3",
		clockedInDate: "2017-01-20",
		clockedIn: "15:00:00",
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
		JobId: "3",
		clockedInDate: "2017-01-18",
		clockedIn: "09:59:00",
		clockedOut: "14:00:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "4",
		JobId: "4",
		clockedInDate: "2017-01-19",
		clockedIn: "09:55:00",
		clockedOut: "14:05:00"
	});
})
.then(function(){
	return db.Timesheet.create(
	{
		UserId: "4",
		JobId: "3",
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
		clockedIn: "15:00:00",
		clockedOut: "19:25:00"
	});
})
*/
