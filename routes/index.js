var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql');
var i=0;
var v=0;
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  
});


router.post('/test',function(req,res,next){
  let data = JSON.stringify(req.body);
  var ext = ".json";
  var pre = req.body.params.filename;
  var mypath = pre + ext;
  
if(fs.existsSync(mypath)){
 fs.writeFileSync('myjsonfile'+i+'.json', req.body.data);
}
i++;
 res.send(req.body.data);
});

router.get('/coco', function(req, res, next) {
  var rawdata = fs.readFileSync('myjsonfile0.json');
  let coordinates = JSON.parse(rawdata);
  res.send(coordinates);
});


router.post('/insertdb',function(req,res,next){
console.log(req.body);
//var name  = req.body.name 
 var sql = "DELETE FROM comments WHERE id = '6'";
//var sql = "INSERT INTO comments (comments, date) VALUES ( "+ req.body.name + "," + req.body.address +" )";
console.log(sql);
 con.query(sql, function (err, result, fields) {
   console.log('EKLENDI');
   console.log(result);
   res.send(req.body.name);
 });

})
router.post('/addnews',function(req,res,next){
console.log(req.body);
//var name  = req.body.name 
// var sql = "DELETE FROM comments WHERE id = '6'";
var sql = "INSERT INTO citynews (location, news) VALUES ( "+ req.body.location + "," + req.body.news +" )";
console.log(sql);
 con.query(sql, function (err, result, fields) {
   console.log('EKLENDI');
   console.log(result);
   res.send(req.body.news);
 });

})

router.get('/dbden', function(req, res, next) {
var sql = "INSERT INTO customers (name, address)  ORDER BY id DESC VALUES ('osman', 'Ismir 35')";
  con.query("SELECT location,news FROM citynews   ", function (err, result, fields) {
    if (err) throw err;
    console.log("dbden veriler ");
  v++;
     console.log(result);  
    console.log("dbden veriler "+ v);  


    res.send(result);

  
  
 });
 
    
});



module.exports = router;
