function go(page){

window.location.href = page

}

async function loadSCP(){

const res = await fetch("/api/scp")
const scps = await res.json()

const list = document.getElementById("scp-list")

scps.forEach(scp=>{

const div = document.createElement("div")

div.className="scp"

div.innerText="SCP-"+scp.number

div.onclick = ()=>showSCP(scp._id)

list.appendChild(div)

})

}

async function showSCP(id){

const res = await fetch("/api/scp/"+id)
const scp = await res.json()

const view = document.getElementById("scp-view")

view.innerHTML = `

<h2>SCP-${scp.number}</h2>

<p><b>Class :</b> ${scp.class}</p>

<h3>Containment</h3>
<p>${scp.containment}</p>

<h3>Description</h3>
<p>${scp.description}</p>

`

}

loadSCP()