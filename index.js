var express = require('express');
var app = express();
var fs = require("fs");

let html = ""

app.get('/', function (req, res) {
	
	let script = '\n<script src="http://code.jquery.com/jquery-latest.min.js"></script>\n'+
'<script>\n'+
'let abc = $(\'div\');\n'+
'console.log(\'div\',abc);\n'+
'\n'+
'for(let i=0;i<abc.length;i++){\n'+
'	for(let j=0;j<(abc[i].attributes).length;j++){\n'+
'	$(\'div\').removeAttr("style")\n'+
'	$(\'div\').attr("style", "color:yellow")\n'+
'	}\n'+
'}\n'+
'</script>\n'

fs.readFile("mydemo.html", function (error, pgResp) {
            if (error) {
            } else {
				fs.appendFile('mydemo.html', script , function (err) {
				  if (err) throw err;
				  res.status(200).send('Saved!');
				});
              
            }
})
})

var server = app.listen(9000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})