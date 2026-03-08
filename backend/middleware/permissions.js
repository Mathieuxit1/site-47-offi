function checkClearance(level){

 return function(req,res,next){

  if(!req.user){
   return res.status(401).json({
    message:"Unauthorized"
   })
  }

  if(req.user.clearance < level){
   return res.status(403).json({
    message:"Access denied - insufficient clearance"
   })
  }

  next()

 }

}

function checkRole(role){

return function(req,res,next){

if(req.user.role !== role){

return res.status(403).json({
message:"Access denied"
})

}

next()

}

}

module.exports = checkRole

module.exports = checkClearance