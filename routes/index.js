var express = require('express');
var router = express.Router();
var fs = require('fs');
var i=0;
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



module.exports = router;
