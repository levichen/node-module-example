var request  = require('request');
var gaccount = require('google-oauth-serviceaccount'); 

var scope = 'https://sites.google.com/feeds/';

gaccount.auth(function(err, access_token) {
    var path = 'content/YOUR_DOMAIN/YOUR_SITE?alt=json';

    var url = scope + path;
    
    var header = {
        Authorization : 'Bearer ' + access_token,
    }
    
    var options = { 
        url : url, 
        headers: header,
        method: 'GET',
    }; 

    request(options, function(error, response, body) {
        var data = JSON.parse(body);
        console.log(data);
    });
});
