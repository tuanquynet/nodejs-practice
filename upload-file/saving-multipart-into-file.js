const http = require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');

var Busboy = require('busboy');

http.createServer(function(req, res) {
  if (req.method === 'POST') {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      var saveTo = path.join(os.tmpdir(), path.basename(`${filename}-${Date.now()}`));
      file.pipe(fs.createWriteStream(saveTo));
      console.log('file saved at ', saveTo);
    });
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });
    return req.pipe(busboy);
  } else if (req.method === 'GET') {
    res.writeHead(200, { Connection: 'close' });
    res.end('<html><head></head><body>\
               <form method="POST" enctype="multipart/form-data">\
                <input type="text" name="textfield"><br />\
                <input type="file" name="filefield"><br />\
                <input type="submit">\
              </form>\
            </body></html>');
	}
	
  res.writeHead(404);
  res.end();
}).listen(8000, function() {
  console.log('Listening for requests on localhost:8000');
});
