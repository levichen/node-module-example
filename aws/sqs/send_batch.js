var aws = require('aws-sdk');

aws.config.loadFromPath('../config.json');

var sqs = new aws.SQS( { apiVersion: '2012-11-05' } );

var messageBody = {
    "field1" : "field1",
    "field2" : "field2",
    "field3" : "field3",
}

messageBody = JSON.stringify(messageBody);

var params = {
    Entries: [
        {
            Id : '1',
            MessageBody : messageBody
        },
        {
            Id : '2',
            MessageBody : messageBody
        },
        {
            Id : '3',
            MessageBody : messageBody
        },
        {
            Id : '4',
            MessageBody : messageBody
        },
        {
            Id : '5',
            MessageBody : messageBody
        },
        {
            Id : '6',
            MessageBody : messageBody
        },
        {
            Id : '7',
            MessageBody : messageBody
        },
        {
            Id : '8',
            MessageBody : messageBody
        },
        {
            Id : '9',
            MessageBody : messageBody
        },
        {
            Id : '10',
            MessageBody : messageBody
        },
    ],
    QueueUrl : 'YOUR_QUEUE_URL',
};

sqs.sendMessageBatch(params, function (err, data) {
    if(err) console.log(err, err.stack);  
    else console.log(data);
});


