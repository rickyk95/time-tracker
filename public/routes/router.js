const express = require('express')
const router =  express.Router()
const { giveMeDB } = require('../db/mongodb');
const {parseTime, addTime }= require('../js/addTime')
const getToday = require('../js/getToday')
const {findNearestMonday} = require('../js/locateWeek')
router.use(express.urlencoded({extended:false}))
let files = '/Users/ricky/Desktop/portfolio/pet-projects/timer/';
const insertTime = require('../js/insertTime')
router.use(express.static(files))


router.get('/success', async (req,res)=>{
    let db = giveMeDB()
    let calendar = db.collection('calendar')
    let today = getToday()
    let nearestMonday = findNearestMonday()
    console.log(nearestMonday,'2000')
    let week = await calendar.findOne({weekOf:nearestMonday})
    if(!week){
        await calendar.insertOne({weekOf:findNearestMonday(),week:[{
            day:today,
            month:new Date().getMonth(),
            timeWorked:8
        }]})
        console.log('million')
    }else{
        let weekDays = week.week;
        for(day of weekDays){
           if(day.day === today){
             day.timeWorked=500
             await calendar.updateOne({weekOf:nearestMonday},{$set:{week:weekDays}})
           }else{
            await calendar.updateOne({weekOf:nearestMonday},{$push:{week:{day:today,hoursWorked:900}}})
           }
        }
    }

})

router.post('/saveTime', async (req,res)=>{
    // let x = parseTime(req.body.time)
    // let db = giveMeDB()
    // let calendar = db.collection('calendar')
    // let z = await calendar.find({}).toArray()
    // console.log(z)
    findNearestMonday()
    res.send('hello there') 
})


router.get('/',(req,res)=>{
    res.render('index',{layout:false})
})


module.exports=router



