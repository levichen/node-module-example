var express = require('express');
var session = require('express-session');
var google  = require('googleapis');
var request = require('request');

var OAuth2Client = google.auth.OAuth2;

var CLIENT_ID     = 'YOUR_CLIENT_ID';
var CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
var REDIRECT_URL  = 'http://127.0.0.1:3000/auth/google/callback';

var oauth2Client  = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

var scope = 'https://sites.google.com/feeds/';
var app = express();

app.use(session({
    secret: 'sssshhhhhhhhh',
    resave: true,
    saveUninitialized: true
}));

app.get('/', function(req, res) {
    res.send('welcome~');
});

app.get('/auth/google', function(req, res) {
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',  
        scope: scope
    });

    res.redirect(url);
});

app.get('/auth/google/callback', function(req, res) {
    code = req.query.code;

    oauth2Client.getToken(code, function(err, tokens) {
        req.session.accessToken = tokens['access_token']; 
        res.redirect('/');
    });
});

app.get('/getGoogleSiteList', function(req, res) {
    var token = req.session.accessToken;
    var path  = 'content/YOUR_SITE_DOMAIN/YOUR_SITE';
    var url   = scope + path;
    
    var header = {
        Authorization : 'Bearer ' + token,
    }
    
    var options = { 
        url : url, 
        headers: header,
        method: 'GET',
    }; 

    request(options, function(error, response, body) {
        res.send(JSON.parse(response.body));
    });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('http://127.0.0.1:3000');
});
