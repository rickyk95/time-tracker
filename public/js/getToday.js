const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

function getToday(){
    let date = new Date()
    let today = {
        day:date.getDate()+1,
        month:months[date.getMonth()],              
    }
    let day = date.getDay()
    if(day === 0){
        day = 7;
    }
   today.weekday = days[day]
    return today
}


module.exports=getToday