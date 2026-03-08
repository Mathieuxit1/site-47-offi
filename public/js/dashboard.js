function go(page){

window.location.href = page

}

async function loadStats(){

const res = await fetch("/api/stats")
const data = await res.json()

document.getElementById("documents").innerText = data.documents
document.getElementById("users").innerText = data.users

createChart(data)

}

function createChart(data){

const ctx = document.getElementById("statsChart")

new Chart(ctx,{

type:"bar",

data:{

labels:["Documents","Users"],

datasets:[{

label:"ASIA Database",

data:[data.documents,data.users],

backgroundColor:["#00ff9c","#0099ff"]

}]

},

options:{

plugins:{
legend:{display:false}
}

}

})

}

loadStats()