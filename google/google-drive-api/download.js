var google  = require('googleapis'),
    request = require('request'),
    fs      = require('fs');

var drive     = google.drive('v2'),
    jwtClient = new google.auth.JWT(
        'your@developer.gserviceaccount.com', 
        'key.pem',
        null,
        ['https://www.googleapis.com/auth/drive']
    );

jwtClient.authorize(function(err, tokens) {
    if(err) {
        console.log(err);
    }

    var fileId = 'your_file_id'; //In this example, this file type is pdf.

    drive.files.get({fileId : fileId, auth:jwtClient}, function(err, file) {
        var myFile = fs.createWriteStream('k.pdf'),
            downloadUrl = file.downloadUrl;

        var options = {
            uri : downloadUrl,
            headers : {
                Authorization : 'Bearer ' + tokens.access_token
            }
        };

        request.get(options).pipe(myFile);
    });
});

