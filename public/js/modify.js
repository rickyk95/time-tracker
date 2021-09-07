
async function insertData(){

    try{
        const calendar = db.collection('calendar')
        let result1 = await calendar.findOne({day:time.day,month:time.month})  
        if(!result1){
            // calendar.insertOne({day:time.day,month:time.month,hours:hours,minutes:minutes,seconds:seconds})
        }else if(result1.seconds + seconds > 60){
            if(result1.minutes + minutes >= 60){
                minutes++;
                seconds = seconds - (60 - result1.seconds);
                minutes = minutes - (60 - result1.minutes);
                hours++;
                calendar.updateOne(result1,{$inc:{hours:hours},$set:{seconds:seconds,minutes:minutes}})
            }else{  
                minutes++
                seconds = seconds - (60 - result1.seconds)
                calendar.updateOne(result1,{$inc:{hours:hours,minutes:minutes},$set:{seconds:seconds}})
            }
        }else{
            if(result1.minutes + minutes >= 60){
                minutes = minutes - (60 - result1.minutes);
                hours++;
                calendar.updateOne(result1,{$inc:{hours:hours,seconds:seconds},$set:{minutes:minutes}})
            }else{  
                calendar.updateOne(result1,{$inc:{hours:hours,minutes:minutes,seconds:seconds}})
            }
        }
        // await calendar.findOneAndUpdate({day:time.day,month:time.month},$inc{})

        }catch(e){

            console.log(e)
        }
}

module.exports=insertData