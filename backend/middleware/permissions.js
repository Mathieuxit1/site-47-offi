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

module.exports = checkClearance