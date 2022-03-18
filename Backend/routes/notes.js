const express= rqeuire('express');
const router=express.Router();

router.get('/', (req, res)=>{
    
    res.json([])
} )

module.exports = router