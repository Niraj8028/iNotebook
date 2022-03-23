var jwt = require('jsonwebtoken');
const token = "shhhhhh";
const fetchuser=(req,res,next)=>{
    const authtoken=req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data=jwt.verify(authtoken,token);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate valid token"});
    }
    
}
module.exports=fetchuser;