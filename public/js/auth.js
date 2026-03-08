function checkAuth(){

const token = localStorage.getItem("token")

if(!token){

window.location.href="/login"

}

}

function logout(){

localStorage.removeItem("token")

window.location.href="/login"

}