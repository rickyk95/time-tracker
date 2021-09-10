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


module.exports={parseTime}