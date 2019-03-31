var express = require('express');
var app = express();
var config = require("./storage/config.json");
app.set('view engine', 'ejs');

var Commands = {
    'Urban': {
        finished: 'Yes',
        admin: 'No'
    },
    'Purge': {
        finished: 'Yes',
        admin: 'Yes'
    }
};

app.get('/', function (req, res) {

    res.render('home');

});

app.get('/settings', function (req, res) {
    var set = 'test';
    var token = config.token;
    var botversion = config.botVersion;
    var prefix = config.defaultPrefix;
    var devid = config.devID;

    res.render('set', {token: token, botversion: botversion, prefix: prefix, devid: devid });
});

app.get('/command', function (req, res) {
    var check = Commands[req.query.commandName];
    if (check) {
        res.render('command', {commandName: req.query.commandName, info: check });
    } else {
        res.send('Command Does not exist');
    }
});

app.listen(3001, function () {
    console.log('server started on port 3001');
});