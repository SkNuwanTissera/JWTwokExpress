const express = require('express'); 
const jwt = require('jsonwebtoken'); 

const app = express();

app.get('/api',(req,res)=>{
    res.json({
        message : 'Welcome to JWT'
    });
});

app.post('/api/posts',verifyToken, (req,res)=>{
    jwt.verify(req.token, 'secrectkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        }else {
            res.json({
                message : 'Posted ...',
                authData
            });
        }
    }); 
    
});

app.post('/api/login',(req,res)=>{
    //mock user
    const user = {
        id : 1,
        username : 'nuwan',
        email : 'sliit.sk95@gmail.com'
    };
    jwt.sign({user : user},'secrectkey',{ expiresIn : '30s'}, (err,token)=>{
        res.json({
            token
        });
    });
});

// verifyToken
function verifyToken(req, res, next){
    // get header value
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
         const ac_token = bearerHeader.split(' ')[1];
         req.token = ac_token;
         next();
    }
    else{
        res.sendStatus(403);
    }
}

app.listen(5000,()=> console.log('Server started on 5000'));