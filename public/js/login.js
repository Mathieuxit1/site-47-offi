async function login(){

const res = await fetch("/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

username:document.getElementById("username").value,
password:document.getElementById("password").value

})

})

const data = await res.json()

if(data.token){

localStorage.setItem("token",data.token)

window.location.href="/boot"

}else{

alert(data.message)

}

}