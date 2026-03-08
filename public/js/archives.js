function go(page){

window.location.href = page

}

async function openFolder(category){

const res = await fetch("/api/documents")
const documents = await res.json()

const container = document.getElementById("documents")

container.innerHTML=""

documents.forEach(doc=>{

if(doc.category === category && doc.status==="published"){

const div = document.createElement("div")

div.className="document"

div.innerHTML="📄 "+doc.title

container.appendChild(div)

}

})

}