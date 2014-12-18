var aws = require('aws-sdk');

aws.config.loadFromPath('../config.json');

var sqs = new aws.SQS( { apiVersion: '2012-11-05' } );

receiver();
function receiver() {
    var params = {
        QueueUrl : 'YOUR_QUEUE_URL',
        MaxNumberOfMessages : 10,
    };

    sqs.receiveMessage(params, function (err, data) {
        if(err) console.log(err, err.stack);   
        else {
            var messages = data.Messages;
            if(messages !== undefined) {
                receiver();

                messages.forEach(function(message) {
                    var receiptHandle = message.ReceiptHandle;
                    console.log(message);
                    deleteMessage(receiptHandle);
                });
            }
        }
    });
}

function deleteMessage(receiptHandle) {
    var params = {
        QueueUrl : 'YOUR_QUEUE_URL',
        ReceiptHandle : receiptHandle
    };

    sqs.deleteMessage(params, function (err, data) {
        if(err) console.log(err, err.stack);   
        /*else {
            console.log(data);
        }*/
    })
}
