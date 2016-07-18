var router = require('express').Router();
var path = require("path");

router.get('/',function(request,responce){
  responce.sendFile(path.join(__dirname,'../public/view/index.html'));
  
});

module.exports = router;
