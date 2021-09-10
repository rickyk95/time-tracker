const { giveMeDB } = require('../db/mongodb');

async function getCurrentWeek(){
    let db = giveMeDB()
    let calendar = db.collection('calendar')
    let weeks =  await calendar.find({}).toArray();
    let currentWeek = weeks[weeks.length-1]
    let currentWeekDays = currentWeek.week;
    currentWeekDays = currentWeekDays.map((day)=>{
        return {'day':day.weekday,'hours':day.hours}
    })

    return {currentWeekDays,total:currentWeek.total}
}

module.exports=getCurrentWeek

