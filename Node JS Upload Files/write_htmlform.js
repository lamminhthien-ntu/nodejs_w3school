var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    console.log(form);
    form.parse(req, function (err, fields, files) {
      //Get Mime Type File (Windows Only)
        var getMimeType = files.filetoupload.mimetype;
      // Filter Extension File Types (Windows Only)
      var getFileExtensions = getMimeType.substring(6);
      //For Windows 
      // var oldpath = files.filetoupload.filepath + '.' + getFileExtensions;

      // For Linux
      var oldpath = files.filetoupload.filepath;
    console.log('oldpath ' + oldpath);

    //For Windows Only
      var newpath = 'D:/fileupload/' + files.filetoupload.originalFilename;

        //For Linux
        var newpath = '/home/linuxlite-lamminhthien/fileupload/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
