const express = require('express')
const router =  express.Router()
const { giveMeDB } = require('../db/mongodb');
const {parseTime }= require('../js/parseTime')
const getToday = require('../js/getToday')
const getCurrentWeek = require('../js/getCurrentWeek')

router.use(express.urlencoded({extended:false}))
let files = '/Users/ricky/Desktop/portfolio/pet-projects/timer/';
const insertTime = require('../js/insertTime')
const addTime = require('../js/addTime')

router.use(express.static(files))


router.get('/dashboard', async (req,res)=>{
    let { currentWeekDays,total } = await getCurrentWeek()
    currentWeekDays = JSON.stringify(currentWeekDays)
    res.render('dashboard',{layout:false,currentWeekDays,total:total.hours})
})


router.post('/saveTime', async (req,res)=>{
    const {seconds,minutes,hours} = parseTime(req.body.time)
    addTime(seconds,minutes,hours)
    res.send('<h1>Your time has been saved </h1>')
})

router.post('/addGoal',async (req,res)=>{
    let db = giveMeDB();
    let calendar = db.collection('calendar')
    let weeks = await calendar.find({}).toArray()
    let thisWeek = weeks[weeks.length-1]
    let goal = parseInt(req.body.goal)
    await calendar.updateOne({weekOf:thisWeek.weekOf},{$set:{goal}} )
    res.send('<h1>Goal Added </h1>')
})

router.get('/',async (req,res)=>{
    let db = giveMeDB();
    let calendar = db.collection('calendar')
    let weeks = await calendar.find({}).toArray()
    let thisWeek = weeks[weeks.length-1]
    res.render('index',{layout:false,goal:thisWeek.goal})
})


module.exports=router



