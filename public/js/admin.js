function go(page){

window.location.href = page

}

async function loadDocuments(){

const token = localStorage.getItem("token")

const res = await fetch("/api/admin/pending",{

headers:{
Authorization:"Bearer "+token
}

})

const documents = await res.json()

const container = document.getElementById("documents")

documents.forEach(doc=>{

const div = document.createElement("div")

div.innerHTML = `

<div class="card">

<h3>${doc.title}</h3>

<button onclick="approve('${doc._id}')">Approve</button>

<button onclick="reject('${doc._id}')">Reject</button>

</div>

`

container.appendChild(div)

})

}

async function approve(id){

const token = localStorage.getItem("token")

await fetch("/api/admin/approve/"+id,{

method:"POST",

headers:{
Authorization:"Bearer "+token
}

})

location.reload()

}

async function reject(id){

const token = localStorage.getItem("token")

await fetch("/api/admin/reject/"+id,{

method:"POST",

headers:{
Authorization:"Bearer "+token
}

})

location.reload()

}

loadDocuments()