const { giveMeDB } = require('../db/mongodb');
const getToday = require('./getToday')
const addTimeToDay = require('./addTimeToDay')
const {findNearestMonday} = require('./locateWeek')

async function addTime(seconds,minutes,hours){
    let db = giveMeDB()
    let calendar = db.collection('calendar')
    let today = getToday()
    console.log('this is today',today)
    today.hours = hours
    today.minutes = minutes
    today.seconds = seconds
    let nearestMonday = findNearestMonday()
    let week = await calendar.findOne({weekOf:nearestMonday})
    if(!week){
        await calendar.insertOne({weekOf:findNearestMonday(),week:[today],total:{hours:hours,minutes:minutes,seconds:seconds}})
    }else{
        let weekDays = week.week;
        for(day of weekDays){
            if(day.weekday === today.weekday){
                console.log(today.weekday,'this is weekday')
                day = addTimeToDay(day,seconds,minutes,hours)
                console.log(day)
                let total = week.total;
                console.log(total,'0')
                total = addTimeToDay(total,seconds,minutes,hours)
                console.log(total)
                await calendar.updateOne({weekOf:nearestMonday},{$set:{week:weekDays,total:total}})
                return
            }
        }

        let total = week.total;
        total = addTimeToDay(total,seconds,minutes,hours)
        await calendar.updateOne({weekOf:nearestMonday},{$push:{week:today},$set:{total:total}})

    }
}

module.exports=addTime