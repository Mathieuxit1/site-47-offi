function go(page){

window.location.href = page

}

async function initDashboard(){

checkAuth()

const token = localStorage.getItem("token")

try{

const res = await fetch("/api/stats",{

headers:{
Authorization:"Bearer "+token
}

})

const data = await res.json()

document.getElementById("documents").innerText = data.documents
document.getElementById("users").innerText = data.users

loadChart(data)

}catch(err){

console.error("Dashboard error",err)

}

}

function loadChart(data){

const ctx = document.getElementById("statsChart")

new Chart(ctx,{

type:"bar",

data:{

labels:["Documents","Users"],

datasets:[{

label:"System Data",

data:[data.documents,data.users]

}]

},

options:{
responsive:true
}

})

}