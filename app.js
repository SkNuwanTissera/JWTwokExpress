const express = require('express'); 
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const app = express();

app.set('view engine','ejs'); 

app.get('/',(req,res)=>{
    res.render('home');
});

app.use('/auth',authRoutes);

app.listen(8889,()=> console.log('Server started on 8889'));