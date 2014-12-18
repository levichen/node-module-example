var aws = require('aws-sdk');

aws.config.loadFromPath('../config.json');

var sqs = new aws.SQS( { apiVersion: '2012-11-05' } );

var messageBody = {
    "field1" : "field1",
    "field2" : "field2",
    "field3" : "field3",
}

var params = {
    MessageBody: JSON.stringify(messageBody),
    QueueUrl : 'YOUR_QUEUE_URL',
    DelaySeconds : 0,
};

sqs.sendMessage(params, function (err, data) {
    if(err) console.log(err, err.stack);  
    else console.log(data);
});
