var aws = require('aws-sdk');

aws.config.loadFromPath('../config.json');

var ses = new aws.SES( { apiVersion: '2010-12-01'  }  );

var to = ['YOUR_RECEIVE_EMAIL'];
var from = 'YOUR_SERVICE_EMAIL';

var params = {
    Message : {
        Subject : {
            Data: 'A Message To You'

        },
        Body : {
            Text: {
                Data: 'Stop your messing around',

            }

        }

    },
    Source : from,
    Destination: {
        ToAddresses: to

    }
}

ses.sendEmail(params, function(err, data) {
    if(err) throw err
    console.log('Email sent:');
    console.log(data);
});
