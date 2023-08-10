let container= document.getElementsByClassName("container ")[0]
container.style.opacity = 1

let secondsHand = document.getElementById("secondsHand")

let button = document.querySelector("button")

let minuteHand = document.getElementById("minuteHand")


let hourHand = document.getElementById("hourHand")

let myInterval = setInterval( () =>{
  
let seconds = new Date().getSeconds()
let minutes = new Date().getMinutes()
let hours = new Date().getHours() % 12 || 12
//console.log(hours, minutes,seconds)


let x = (seconds-14)/60*360

let y = ( ((minutes*60 + seconds)/3600)*360) - 90

let z = ( ((hours*60 + minutes)/720)*360) - 90


// initial position
secondsHand.style.transform = "rotate(" + x + "deg)"
				
//container.style.transform = "rotateY(" + m + "deg)"
minuteHand.style.transform = "rotate(" + y + "deg)"

hourHand.style.transform = "rotate(" + z + "deg)"

}, 1000)


let distance = 0

for (let i = 0; i <61; i++) {
				let div = document.createElement("div")
				let p = document.createElement("p")
				let text = document.createTextNode("-")
				p.appendChild(text)
				div.appendChild(p)
				div.style.transform = "translate( calc( cos(" + distance + "deg) * 115px), calc( sin(" + distance + "deg) * 115px )"
				p.style.transform = "rotate(" + distance +"deg)"
				
				if (distance % 30 == 0) {
								p.style.fontSize = "16px"
				}
				
				div.classList.add("dot")
				container.appendChild(div)
				distance += 6
				
}
				

let rot = 360
let themes = [ "#000000", "linear-gradient(10deg, #f00, #f0f)", "#432024", "#B8472F", "#8E872A", "#4C7455", "peru", "#2A464D", "#171B75", "#2A464D", "#CB60B8"]
let changeTheme = () => {
				let theme =themes[Math.floor(Math.random() * 10)]
				
				console.log(theme)
				
				container.style.background = theme
				button.style.background = theme
				
				container.style.transform = "rotate(" + rot + "deg)"
				rot += 360
}


