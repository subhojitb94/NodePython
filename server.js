var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
//var dataAccessLayer=require("./DAL.js");
var app  = express();

function CRUD(){
    var self = this;
    self.configureExpress();
};


CRUD.prototype.configureExpress = function(connection) {
      var self = this;
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      var router = express.Router();
      app.use('/api', router);

      router.post("/cardDetect",function(req,res){
        console.log("card detected, uid: "+req.body.uid);
        res.send("Succsess!!")  
      }); 

       router.get("/",function(req,res){
        console.log("Card Detected");  
        res.send("Succsess!!")
      }); 
      //var crud_router = new dataAccessLayer(router,connection,md5);
      self.startServer();
}


CRUD.prototype.startServer = function() {
      app.listen(3000,function(){
          console.log("Server successfully started at Port 3000.");
      });
}

CRUD.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL \n" + err);
    process.exit(1);
}

new CRUD();
