var jwt = require('jsonwebtoken');
const token = "shhhhhh";
const fetchUser=(req,res,next)=>{
    const authtoken=req.header('auth-token');
    try {
        const data=jwt.verify(authtoken,authtoken);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate valid token"});
    }
    
}
module.exports=fetchUser;