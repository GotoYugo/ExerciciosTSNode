var Http = require('http');
var Url = require('url');
var fs = require('fs');
var MyDate = require('./ModuleDate');

Http.createServer(function (Req, Res) {
  Res.writeHead(200, {'Content-Type': 'text/html'});

  var UrlData = Url.parse(Req.url, true).query;
  var Texto = fs.readFileSync('Readme.txt').toString();

  Res.write("<h1> Hello World</h1>");
  Res.write("<h3>The date and time are currently: " + MyDate.date() + "</h3>");
  Res.write("<h3>" + Req.url + "</h3>");
  Res.write("<h3>" + UrlData.year + "/" + UrlData.month + "</h3>");
  Res.write("<h3>" + Texto + "</h3>");
  Res.end();
}).listen(8080); 