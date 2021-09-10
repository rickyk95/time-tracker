

  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] 
  const months =[{
          month:'January',
     days:31
  },
  {
          month:'February',
     days:28
  },
  {
          month:'March',
     days:31
  },
  {
          month:'April',
     days:30
  },
  {
          month:'May',
     days:31
  },
  {
          month:'June',
     days:30
  },
  {
          month:'July',
     days:31
  },
  {
          month:'August',
     days:31
  },{
          month:'September',
     days:30
  },{
          month:'October',
     days:31
  },
  {
          month:'November',
     days:30
  },
  {
          month:'December',
     days:31
  }
  
  ]

 function getDate(){
    let date = new Date()
    let today = {
        day:9,
        month:date.getMonth(),
        year:date.getFullYear(),
        weekday:4
    }
    return today
}

function daysFromMonday(weekday){
  if(weekday !== 0){
        difference = weekday - 1;
   }else{
      difference = 6;
   }
   return difference;
}

 function findNearestMonday(){
    let today = getDate()
    let weekday = today.weekday 
    let day  = today.day
    let month = months[today.month]
    let year = today.year
    let difference = daysFromMonday(weekday)
    for(var i = difference;i >=0;i--){
        if(day === 1){
         if(month.month === 'January'){
            month = months[months.length-1]
            day = month.days
            year--
            continue
         }
         month = months[today.month-1]
         day = month.days
         weekday = days[i] 
         console.log(weekday,month.month,day)
         continue;
        }
        weekday = days[i]
        console.log(weekday,month.month,day)
        day--
    } 

    return  `${weekday},${month.month},${day+1},${year}` 

}

module.exports={findNearestMonday}

   