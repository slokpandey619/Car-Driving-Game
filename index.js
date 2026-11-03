const play =document.getElementById("playbtn");
const reset=document.getElementById("reset");
const car =document.getElementById("Car");
const Scroll=document.getElementById("scroll");
    let y=0;
    let x=0;
    let movement=3.5;
    let button=false;
function display(event)
{
event.target.style.display="none";
button=true;
}
play.addEventListener("click",display)

document.addEventListener("keydown",event=>{
  if(button)
  {
    switch(event.key)
    { 
      case "ArrowUp":
      y-=movement;          
      break;
      case "ArrowDown":
      y+=movement;
      break;  
      case "ArrowLeft":
      x-=movement;
      break;
      case "ArrowRight":
      x+=movement;
      break;      
     }    
      let position=car.getBoundingClientRect(); 
     if(position.top>450 || position.top>700)
      {
        time=15;  
      }
       else if(position.top<450 || position.top>350)
      {
        time=10;  
      }
      else if(position.top<350 || position.top>250)
      {
        time=5;  
      }
      else if(position.top<250 || position.top>0)
      {
        time=1;
      }
      else{
           pause();
      }     
     Speed(x,y,time);
    if(position.left<575 || position.left>900 ||position.top<-5||position.top>700)
      {
        pause(); 
      }
  }
})

function Speed(x,y,time)
{
car.style.transform=`translate(${x}px,${y}px)`; 
   Scroll.style.animation="scrollDown linear infinite";
    Scroll.style.animationDuration=`${time}s`;
}
function pause()
{
 Scroll.style.animationPlayState=`paused`;
 reset.style.display="flex";
 reset.onclick= function()
 {
 window.location.reload();
 }
}
window.addEventListener('click', (e) => console.log(`Clicked Spot -> X: ${e.clientX}, Y: ${e.clientY}`));
