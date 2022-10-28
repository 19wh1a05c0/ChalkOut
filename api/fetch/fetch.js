var express = require('express');
var bodyParser = require('body-parser');


let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let fetch = express.Router().get("/",(req,res)=>{
    talentsprint.connect("mongodb://localhost:27017/users",(err,db)=>{
        if(err){
            throw err;
        }
        else{
            db.collection("userdetails").find({}).toArray((err,array)=>{
                if(err){
                    throw err;
                }
                else{
                    if(array.length > 0){
                        res.send(array);
                    } else {
                        res.send({message:"Record Not Found..."});
                    }
                }
            });
        }
    });

console.log('WELCOME TO FETCH.JS')

});
module.exports = fetch;