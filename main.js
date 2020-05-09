// Initialize Express, Express Uploader, Body Parser, File System
const app = require('express').express();
const upload = require('express-fileupload');
const bodyparser = require('body-parser');
const fs = require('fs');
// Initialize urlencoder for express, Initialize Random String Generator.
var urlencoded = bodyparser.urlencoded({extended:false});
var randomstr = require('randomstring');
// Initialize Configuration
const config = require('conf.json');
var postgres = require('postgres');
var sql = postgres({
    host: config.db_login.host,
    port: config.db_login.port,
    database: config.db_login.database,
    username: config.db_login.username,
    password: config.db_login.password,
    connection : {
        application_name: "FirefiCDS"
    }
});

app.listen()

app.get('/g/:uid/:cid', function(req,res){

});

app.post('/up', function(req,res){

});