const { giveMeDB } = require('../db/mongodb');
const {findNearestMonday} = require('./locateWeek')

 async function insertTime(){
    let db = giveMeDB()
    let calendar = db.collection('calendar');
    let nearestMonday = findNearestMonday();
    let week = await calendar.findOne({weekOf:nearestMonday})
    if(x){

        console.log('week was found')
        console.log(week.week)
        // console.log('hello')
        // await calendar.updateOne({weekOf:nearestMonday},{$push:{
        //     days:{
        //         day:'monday',
        //         hours:100
        //     }
        // }})
    }
}

module.exports=insertTime

