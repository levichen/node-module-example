var Dropbox = require('dropbox'),
    fs      = require('fs');

var client = new Dropbox.Client({
    key : 'your app Key',
    secret : 'your app secret',
    token : 'your Oauth2 access token'
});

var remoteDirPath = 'your remote dir path',
    localDirPath  = 'your local dir path';

function downloadAllFileInSpecificDirectory() {
    client.readdir(remoteDirPath, function(error, entries) {
        for(key in entries) {
            var entry = entries[key];

            (function(remoteFilePath, localFilePath) {
                client.readFile(remoteFilePath, function(error, data) {
                    fs.writeFile(localFilePath, data, function(err) {
                        console.log('done - ' + localFilePath);        
                    })
                });
            })(remoteDirPath + entry, localDirPath + entry);
        }
    })
}

function readFile() {
    var remoteFilePath = remoteDirPath + 'your remote file name',
        localFilePath  = localFilePath + 'your local file name';

    client.readFile(remoteFilePath, function(error, data) {
        if(error) {
            
        }

        fs.writeFile(localFilePath, data, function(err) {
            console.log('done');        
        })
    });
}

function listDirectoryContents() {
    client.readdir(remoteDirPath, function(error, entries) {
        if(error) {
            showError(error);
        }
        else {
            console.log(entries.join(', '));
        }
    })
}

function getAccountInfo() {
    client.getAccountInfo(function(error, accountInfo) {
        if (error) {
            showError(error);
        }

        console.log("Hello, " + accountInfo.name + "!");
    });
}
