const express = require('express')
const serverConfig = require('./conf/server.config');
const dbConfig= require('./conf/db.config');
const dbService=require('./src/service/database.service')
const app = express()
const port = serverConfig.port;

const db=dbService.createDb(dbConfig.dbFolder,{nativeObjectID: true});


/**
 * Route table
 * 
 * =>/
 *  GET: main page
 * =>/users
 *  GET users list
 *  
 * =>/secretSanta
 *  GET: given the user name ,return the name affected to it
 * =>/admin/init
 *  POST: initialise BD with user table and SecretSanta-user association table
 */



app.use("/",express.static('src/html'));
app.use("/js",express.static('src/js'));
app.use("/css",express.static('src/css'));
app.use("/img",express.static('src/img'));


app.get('/users', (req, res) => {
    var collection = db.collection("user");
  collection.find({}).toArray((err,documents)=>{
       if(!err){ 
           res.json(documents);
        }else{
            res.sendStatus(500);
        }
    }); 
});

app.get('/db',(req,res)=>{
    db.dropCollection('user',(err,ok)=>{
        console.log("dropped");
        db.collection("user").insert([
            {name:'Adrian'},
            {name:'Loïc'},
            {name:"Benjamin"},
            {name:"Cannaille"}
        ]);
    res.send(dbConfig.dbFolder);
    });
});

app.get('/secretSanta', (req, res) => {
    res.send('secret santa')
});

app.post('/admin/push', (req, res) => {
    res.send('access denied');
});


 


app.listen(port, () => {
  console.log(`App started on port : ${port}`)
})