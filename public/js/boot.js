const terminal = document.getElementById("terminal")

const lines = [

"ASIA SYSTEM v4.2",
"Initializing ASIA system...",
"Loading security modules...",
"Checking database connection...",
"MongoDB Atlas connected",
"Loading SCP archives...",
"Starting ASIA services...",
"Security clearance verified",
"Access granted.",
"Opening dashboard..."

]

let lineIndex = 0
let charIndex = 0

function typeLine(){

if(lineIndex >= lines.length){

setTimeout(()=>{
window.location.href="/dashboard"
},1500)

return

}

let currentLine = lines[lineIndex]

let p = document.createElement("div")
p.className="line"

terminal.appendChild(p)

function typeChar(){

if(charIndex < currentLine.length){

p.textContent += currentLine.charAt(charIndex)

charIndex++

setTimeout(typeChar,40)

}else{

lineIndex++
charIndex=0

setTimeout(typeLine,300)

}

}

typeChar()

}

typeLine()