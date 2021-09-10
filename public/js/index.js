const timer = document.querySelector('#timer h1');
const button = document.querySelectorAll('button')[3];
const stop = document.querySelectorAll('button')[4];
const reset = document.querySelectorAll('button')[5];
const store = document.querySelectorAll('button')[6];
const img = document.querySelector('#timer .circle');
const form = document.querySelector('form');
const input = document.querySelector('form input');
let seconds=0;
let minutes=55;
let hours=0;
var interval;
form.addEventListener('submit',(e)=>{

  let innerText = input.value=timer.innerText;
  
  if(innerText === ''){
      e.preventDefault()
      console.log('this is not a number sir')
      window.location.href="/"
  }
})

function startTimer(){
	seconds++;
  if(seconds < 10) {
  		if(minutes < 10){ 
      	if(hours < 10){
        	console.log('0' + hours + ':' + '0'+ minutes + ':' + '0' + seconds)
          timer.innerHTML='0' + hours + ':' + '0'+ minutes + ':' + '0' + seconds;
        }else{
        	console.log(hours + ':' + '0'+ minutes + ':' + '0' + seconds)
          timer.innerHTML=hours + ':' + '0'+ minutes + ':' + '0' + seconds
        }    		
      }else{ 
         if(hours < 10){
        	console.log('0' + hours + ':' + minutes + ':' + '0' + seconds)
          timer.innerHTML='0' + hours + ':' + minutes + ':' + '0' + seconds;
        }else{
        	console.log(hours + ':' + minutes + ':' + '0' + seconds)
          timer.innerHTML=hours + ':' + minutes + ':' + '0' + seconds;
        }    		
      }	
   }
   else if (seconds === 60){
      seconds = 0;
      minutes++;

      if(minutes < 10){
      		if(hours < 10){
          	 console.log('0' + hours + ':' + '0'+ minutes + ':' + '0' + seconds)
             timer.innerHTML='0' + hours + ':' + '0'+ minutes + ':' + '0' + seconds
          }else{
          	console.log(hours + ':'+ '0'+ minutes + ':' + '0' + seconds)
            timer.innerHTML=hours + ':'+ '0'+ minutes + ':' + '0' + seconds;
          }
       
      }else if(minutes < 60){
        		if(hours < 10){
          	 	console.log('0'+ ':' + hours + ':' + '0'+ minutes + ':' + '0' + seconds)
              timer.innerHTML='0'+ ':' + hours + ':' + '0'+ minutes + ':' + '0' + seconds
         		 }else{
          		console.log(hours + ':'+ '0'+ minutes + ':' + '0' + seconds)
              timer.innerHTML=hours + ':'+ '0'+ minutes + ':' + '0' + seconds;
          	}
      }else{
      	hours++
        minutes=0;
        if(hours < 10){
          console.log('0' + hours + ':' + '0'+ minutes + ':' + '0' + seconds)
          timer.innerHTML='0' + hours + ':' + '0'+ minutes + ':' + '0' + seconds;
        }else{
          console.log(hours + ':'+ '0'+ minutes + ':' + '0' + seconds)
          timer.innerHTML=hours + ':'+ '0'+ minutes + ':' + '0' + seconds;
        }    
      }
    
   }else{ 
        if(minutes < 10){
        	 if(hours < 10){
           		console.log('0' + hours + ':'+ '0'+ minutes + ':' + seconds)
              timer.innerHTML='0' + hours + ':'+ '0'+ minutes + ':' + seconds
           }else{
           	console.log(hours + ':'+ '0'+ minutes + ':' + seconds)
            timer.innerHTML=hours + ':'+ '0'+ minutes + ':' + seconds;
           }  	
        }	else{
        		if(hours < 10){
           		console.log('0' + hours + ':'+ minutes + ':' + seconds)
              timer.innerHTML='0' + hours + ':'+ minutes + ':' + seconds;
           }else{
           	console.log(hours + ':'+ minutes + ':' + seconds)
            timer.innerHTML=hours + ':'+ minutes + ':' + seconds;
           }  	
        		
        }
 
    }
  }
 
     button.addEventListener('click',()=>{
         img.style.display="none";
        //  timer.style.display="block";
     		 interval = setInterval(startTimer,100)
         button.setAttribute('disabled',true)
         reset.removeAttribute('disabled')
         stop.removeAttribute('disabled')
     }) 
     
     stop.addEventListener('click',()=>{
     		clearInterval(interval)
 				button.removeAttribute('disabled')
   })
   
   reset.addEventListener('click',()=>{
   	  seconds=0;
      minutes=0;
      hours=0;
      reset.setAttribute('disabled',true)
      button.removeAttribute('disabled')
      clearInterval(interval);
      timer.innerHTML='00:00:00';
        
   })

   