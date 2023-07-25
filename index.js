const express=require('express');
const bodyParser=require('body-parser')
require('dotenv').config();
const port= 8000||process.env.port;

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const db=require('./config/mongoose');

//routes
 app.use('/',require('./routes/index'));

 app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('server is running on ...', port);
 })