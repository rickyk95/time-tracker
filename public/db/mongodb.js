
const { MongoClient } = require('mongodb') 
var db;
    function connectServer(){
        return new Promise((resolve,reject)=>{
            MongoClient.connect('mongodb://127.0.0.1:27017',{useNewUrlParser:true,useUnifiedTopology: true},  (error,client)=>{
                if(error){
                    return console.log(error)
                }
                db = client.db('calendarDB')
                console.log('Connected to Calendar DB')  
                resolve()                      
            })      
    })
    }
    function giveMeDB(){
            return db
    }  
        module.exports={connectServer,giveMeDB}

        // // hours = parseInt(hours)
        // // minutes = parseInt(minutes)
        // // seconds = parseInt(seconds)
        //    try{

        //     db = client.db('calendarDB')
        //     const calendar = db.collection('calendar')
        //         // let date = new Date()
        //         // let time = {
                //     day: date.getDate(),
                //     month:date.getMonth(),
                //     year:date.getFullYear()
                // }                
             
            
            // catch(e){            
            //     console.log(e)
            // }
            // if(currentDate === time.day){
            //     let z = await calendar.findOneAndUpdate({day:time.day},{$inc:{timeWorked:25}},null)
            // }else{
            //    calendar.insertOne({day:time.day,month:time.month,year:time.year,timeWorked:8})
            // }           
            // console.log(z)                       
            // let z = await calendar.find({day:date}).toArray()
            // console.log(z)
          

       



    // connectServer()


    // function getDb(){
       
    // }

