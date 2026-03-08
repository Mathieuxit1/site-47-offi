const terminal = document.getElementById("terminal")

const lines = [

"Initializing ASIA system...",
"Loading security modules...",
"Checking database connection...",
"MongoDB Atlas connected",
"Loading SCP archives...",
"Starting ASIA services...",
"Security clearance verified",
"System ready."

]

let i = 0

function printLine(){

if(i < lines.length){

const p = document.createElement("p")

p.textContent = lines[i]

terminal.appendChild(p)

i++

setTimeout(printLine,500)

}else{

setTimeout(()=>{

window.location.href="/dashboard"

},1500)

}

}

printLine()