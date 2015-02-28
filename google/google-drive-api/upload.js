var google = require('googleapis'),
    fs     = require('fs');

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

    drive.files.insert({
        auth:jwtClient,
        resource: {
            title : '1.png',
            mimeType : 'image/png'
        },
        media : {
            mimeType : 'image/png',
            body : fs.createReadStream('1.png')
        }
    });
});
