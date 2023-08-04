let container= document.getElementsByClassName("container ")[0]
container.style.opacity = 1

let secondsHand = document.getElementById("secondsHand")


let minuteHand = document.getElementById("minuteHand")


let hourHand = document.getElementById("hourHand")

let myInterval = setInterval( () =>{
  
let seconds = new Date().getSeconds()
let minutes = new Date().getMinutes()
let hours = new Date().getHours() % 12 || 12
//console.log(hours, minutes,seconds)


let x = (seconds/60*360) -90

let y = ( ((minutes*60 + seconds)/3600)*360) - 90

let z = ( ((hours*60 + minutes)/720)*360) - 90


// initial position
secondsHand.style.transform = "rotate(" + x + "deg)"

minuteHand.style.transform = "rotate(" + y + "deg)"

hourHand.style.transform = "rotate(" + z + "deg)"

}, 1000)

