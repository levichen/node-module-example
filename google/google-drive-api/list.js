var google  = require('googleapis'),
    request = require('request');

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

    drive.files.list({auth: jwtClient}, function(err, resp) {
        if(err) {
            console.log(err);
        }

        console.log(resp);
    });
});

