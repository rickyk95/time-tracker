const { giveMeDB } = require('../db/mongodb');

function parseTime(time){
    let timeWorked = time.split(':')
    let seconds
    let minutes
    let hours 
    [hours,minutes,seconds] = timeWorked;
    hours = parseInt(hours)
    minutes = parseInt(minutes)
    seconds = parseInt(seconds)
    return {
        hours,minutes,seconds
    }
}


async function addTime(week){
    console.log(week,'this is the week that I was given')
    // console.log('this is time',time)
    // let db = giveMeDB()
    // let calendar = db.collection('calendar')
    // calendar.insertOne({"suck ma":"cock"})
}

module.exports={addTime,parseTime}