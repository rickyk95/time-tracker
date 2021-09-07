const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] 


function getToday(){
    let date = new Date().getDay();
    if(date === 0){
        date = 7;
    }
    let today = days[date-1]

    return today

}



module.exports=getToday