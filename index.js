const play =document.getElementById("playbtn");
const reset=document.getElementById("reset");
const car =document.getElementById("Car");
const Scroll=document.getElementById("scroll");
    let y=0;
    let x=0;
    let movement=2.67;
    let button=false;
function display(event)
{
event.target.style.display="none";
button=true;
}

Scroll.style.animation="scrollDown 20s linear infinite";
Scroll.style.animationPlayState=`paused`;
const anim = Scroll.getAnimations()[0];

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
     car.style.transform=`translate(${x}px,${y}px)`;
     let position=car.getBoundingClientRect(); 
     if (position.top < 250) 
      {
       multiplier = 4;
      } 
      else if (position.top < 350) 
      {
       multiplier = 3;
      } 
      else if (position.top < 450) 
      {
      multiplier = 2;
      } 
      else if (position.top <= 700) 
      {
      multiplier = 1;
      } 
      else 
      {
      pause();
      }
   Speed(multiplier);
   if(position.left<575 || position.left>900 ||position.top<-5||position.top>700)
      {
        pause(); 
      }
  }
})
function Speed(multiplier)
{ 
  Scroll.style.animationPlayState=`running `;
   if(anim)
    {
    anim.playbackRate = `${multiplier}`;
   } 
}
function pause()
{
 Scroll.style.animationPlayState=`paused`;
 reset.style.display="flex";
 movement=0;
 reset.onclick= function()
 {
 window.location.reload();
 }
}
window.addEventListener('click', (e) => console.log(`Clicked Spot -> X: ${e.clientX}, Y: ${e.clientY}`));
