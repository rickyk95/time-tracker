const { giveMeDB } = require('../db/mongodb');

const day = {
    day:'Monday',
    month:'September',
    date:'8',
    year:'2021',
    hours:8,
    minutes:53,
    seconds:45
}

function addTimeToDay(day,seconds,minutes,hours){
    if(day.seconds + seconds >= 60){
        if(day.minutes + minutes >= 60){
            hours++;
            minutes++;
            seconds = seconds - (60 - day.seconds);
            minutes = minutes - (60 - day.minutes);
            day.hours= day.hours + hours
            day.seconds=seconds
            day.minutes=minutes
            return day
        }else{  
            minutes++
            if(day.minutes + minutes >= 60){
            hours++;
            seconds = seconds - (60 - day.seconds);
            minutes = minutes - (60 - day.minutes);
            day.hours= day.hours + hours
            day.seconds=seconds
            day.minutes=minutes
            return day
            }
            seconds = seconds - (60 - day.seconds)
            day.hours = day.hours + hours
            day.minutes = day.minutes + minutes
            day.seconds = seconds
            
            return day 
        }
}else{
        if(day.minutes + minutes >= 60){
            minutes = minutes - (60 - day.minutes);
            hours++;
            day.hours = day.hours + hours
            day.minutes = minutes
            day.seconds = day.seconds + seconds
            return day
        }else{  
            day.hours = day.hours + hours
            day.minutes = day.minutes + minutes
            day.seconds = day.seconds + seconds
            return day
        }
}

}
module.exports=addTimeToDay

